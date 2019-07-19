from flask import Flask, redirect, render_template, request, jsonify
# import pandas as pd
from config import conn
from flask_sqlalchemy import SQLAlchemy
import pymysql
from sqlalchemy.ext.automap import automap_base
import simplejson as json

# Set up flask and db
app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = f'mysql+pymysql://{conn}/eatinerary'
db=SQLAlchemy(app)

Base=automap_base()
Base.prepare(db.engine, reflect=True)

# Prepping both tables
restaurant=Base.classes.restaurant
category=Base.classes.category

# Home route
@app.route("/")
def home():
    return render_template("index.html")

# API route to query restaurant data
## todo allow d3.json to pass variables in the api route
@app.route("/api/data")
def data():

    # Empty list to append results from the restaurant table to
    results_restaurant=[]

    # Select statement for all the desired columns
    sel_restaurant=[
        restaurant.Name,
        restaurant.Address,
        restaurant.Postal_code,
        restaurant.City,
        restaurant.Latitude,
        restaurant.Longitude,
        restaurant.Stars,
        restaurant.Monday_open,
        restaurant.Monday_close,
        restaurant.Tuesday_open,
        restaurant.Tuesday_close,
        restaurant.Wednesday_open,
        restaurant.Wednesday_close,
        restaurant.Thursday_open,
        restaurant.Thursday_close,
        restaurant.Friday_open,
        restaurant.Friday_close,
        restaurant.Saturday_open,
        restaurant.Saturday_close,
        restaurant.Sunday_open,
        restaurant.Sunday_close,
        restaurant.Category_ids
    ]

    # Construct the desired query
    query_restaurant=db.session.query(*sel_restaurant)

    # Loop through the lists and append each row as a dictionary
    for row in query_restaurant.all():
        results_restaurant.append({
            'Name':row[0],
            'Address':row[1],
            'Postal_code':row[2],
            'City':row[3],
            'Latitude':row[4],
            'Longitude':row[5],
            'Stars':row[6],
            'Monday_open':row[7],
            'Monday_close':row[8],
            'Tuesday_open':row[9],
            'Tuesday_close':row[10],
            'Wednesday_open':row[11],
            'Wednesday_close':row[12],
            'Thursday_open':row[13],
            'Thursday_close':row[14],
            'Friday_open':row[15],
            'Friday_close':row[16],
            'Saturday_open':row[17],
            'Saturday_close':row[18],
            'Sunday_open':row[19],
            'Sunday_close':row[20],
            'Category_ids':row[21]
        })

    # Empty list to append results from the categories table to
    results_category=[]

    # Select statement for all the desired columns
    sel_category=[
        category.Category_id,
        category.Category
    ]

    # Construct the query
    query_category=db.session.query(*sel_category)

    # Loop through the results and append each row as a dictionary
    for row in query_category.all():
        results_category.append({
            'Category_id':row[0],
            'Category':row[1]
        })

    return jsonify(results_restaurant, results_category)

# API route to return a json of unique cities
@app.route("/api/city")
def city():

    results= []

    query=db.session.query(restaurant.City).distinct(restaurant.City)

    for row in query.all():
        results.append(row[0])

    return jsonify(results)

# API route to return a json of unique cities
@app.route("/api/categories")
def categories():

    # Empty list to append results from the categories table to
    results=[]

    # Construct the query
    query_category=db.session.query(category.Category)

    # Loop through the results and append each row as a dictionary
    for row in query_category.all():
        results.append(row[0])

    return jsonify(results)

if __name__ == "__main__":
    app.run(debug=True)