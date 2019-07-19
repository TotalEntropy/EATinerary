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

    sel=[
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

    results=[]

    query=db.session.query(*sel)

    for result in query.all():
        results.append({
            'Name':result[0],
            'Address':result[1],
            'Postal_code':result[2],
            'City':result[3],
            'Latitude':result[4],
            'Longitude':result[5],
            'Stars':result[6],
            'Monday_open':result[7],
            'Monday_close':result[8],
            'Tuesday_open':result[9],
            'Tuesday_close':result[10],
            'Wednesday_open':result[11],
            'Wednesday_close':result[12],
            'Thursday_open':result[13],
            'Thursday_close':result[14],
            'Friday_open':result[15],
            'Friday_close':result[16],
            'Saturday_open':result[17],
            'Saturday_close':result[18],
            'Sunday_open':result[19],
            'Sunday_close':result[20],
            'Category_ids':result[21]
        })

    # query=db.session.query(*category)

    # categories=[]

    return jsonify(results)

# API route to return a json of unique cities
@app.route("/api/city")
def city():

    results= []

    query=db.session.query(restaurant.City).distinct(restaurant.City)

    for row in query.all():
        results.append(row[0])

    return jsonify(results)

if __name__ == "__main__":
    app.run(debug=True)