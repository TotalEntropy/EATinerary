from flask import Flask, redirect, render_template, request, jsonify
from flask_sqlalchemy import SQLAlchemy
import pymysql
pymysql.install_as_MySQLdb()
from sqlalchemy.ext.automap import automap_base
import simplejson as json
import os

# Set up flask and db
app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('CLEARDB_DATABASE_URL')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)
Base = automap_base()
Base.prepare(db.engine, reflect = True)

# Prepping both tables
restaurant = Base.classes.restaurant
category = Base.classes.category

# Home route
@app.route("/")
def home():
    return render_template("index.html")

####################################
# API route to query restaurant data
####################################
@app.route("/api/<city>/<clientTime>/<attributes>", methods = ['GET'])
def data(city='', clientTime='0', attributes=[]):

    # Convert the variables passed from JSON stringify
    clientTime = json.loads(clientTime)
    attributes = json.loads(attributes)

    # Convert the day to a string and print the value
    if clientTime['day'] == 0:
        day = 'Sunday'

    elif clientTime['day'] == 1:
        day = 'Monday'

    elif clientTime['day'] == 2:
        day = 'Tuesday'

    elif clientTime['day'] == 3:
        day = 'Wednesday'
        
    elif clientTime['day'] == 4:
        day = 'Thursday'

    elif clientTime['day'] == 5:
        day = 'Friday'
        
    elif clientTime['day'] == 6:
        day = 'Saturday'    

    # Convert clientTime to minutes
    clientTimeM = clientTime['h']*60 + clientTime['m']

    # Select statement for all the desired columns
    sel_category = [
        category.Category_id,
        category.Category
    ]

    # Construct the query
    query_category = db.session.query(*sel_category)

    # Convert the list of queries to a dictionary with the key as the
    # category and the value as the category name this will be used
    # later to convert the comma separated category ids to a list of
    # categories
    category_dict = {row[0] : row[1] for row in query_category.all()}

    # Select statement for all the desired columns
    sel_restaurant = [
        restaurant.Name,
        restaurant.Address,
        restaurant.Latitude,
        restaurant.Longitude,
        restaurant.Stars,
        restaurant.Category_ids
    ]

    # Construct the initial query
    query_restaurant = db.session.query(*sel_restaurant) \
        .filter(restaurant.City == city)

    for attribute in attributes:
        if attribute['name'] == 'OpenNow':
            # If the row represents the openNow checkbox
            if attribute['value'] == True:
                # If the user only wants restaurants that are currently open
                #
                # Check that the client time is within the closing and
                # opening time that the restaurant has listed for today
                # and add it to the query
                query_restaurant = query_restaurant \
                    .filter(getattr(restaurant, f'{day}_open') \
                        <= clientTimeM) \
                    .filter(getattr(restaurant, f'{day}_close') \
                        >= clientTimeM)
        else:
            if attribute['value'] == True:
                # If the user checked the checkbox get the column name from
                # the name key and only select restaurants that have a true
                #  value in that column
                column = attribute['name']
                
                query_restaurant = query_restaurant \
                    .filter(getattr(restaurant,column) == True)

    # Empty list to append results from the restaurant table to
    map_data = []
    latitudes = []
    longitudes = []
    latitude_avg = 0
    longitude_avg = 0

    if len(query_restaurant.all()) == 0:
        # If there are no results return 204 no content error
        return jsonify(
            map_data=map_data,
            latitude_avg=latitude_avg,
            longitude_avg=longitude_avg
            ) 
    else:

        # Return the results found
        for row in query_restaurant.all():

            # Split the category ids on comma then replace each with
            # corresponding category from the dictionary of categories
            category_ids = row[5].split(',')
            categories = [category_dict.get(int(value)) for value in category_ids]

            # Append each row in the result as a dictionary
            map_data.append({
                'Name': row[0],
                'Address': row[1],
                'Latitude': row[2],
                'Longitude': row[3],
                'Stars': row[4],
                'Categories': categories
            })

            latitudes.append(row[4])
            longitudes.append(row[5])

        # Calculating the center of the map for map.js
        latitude_avg = (max(latitudes) + min(latitudes))/2
        longitude_avg = (max(longitudes) + min(longitudes))/2

        # Return two JSON separate objects
        return jsonify(
            map_data=map_data,
            latitude_avg=latitude_avg,
            longitude_avg=longitude_avg
            ) 

#############################################
# API route to return a json of unique cities
#############################################
@app.route("/api/cityList", methods=['GET'])
def cityList():

    # Empty list to store the results in
    results = []

    # Query for all the unique cities
    query=db.session.query(restaurant.City).distinct(restaurant.City)

    # Append results to the empty list
    for row in query.all():
        results.append(row[0])

    # Return the results as JSON
    return jsonify(results)

############################################
# Route to display information about the app
############################################
@app.route("/about")
def about():
   return render_template("about.html")

###########################
# Contact information route
###########################
@app.route("/contact")
def contact():
   return render_template("contact.html")

###########################
# API key route
###########################
@app.route("/key", methods=['GET'])
def key():
    return jsonify(os.environ.get('mapboxApiKey'))

if __name__ == "__main__":
    app.run(debug=False)