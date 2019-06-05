# Import dependencies
from flask import Flask, redirect, render_template
from flask_pymongo import PyMongo
import json
import os

# Initialise
app = Flask(__name__)
app.config["MONGO_URI"] = "mongodb://localhost:27017/restaurants"
mongo = PyMongo(app)

# json data
json_path = os.path.join('data', 'yelp_dataset', 'clean', 'restaurants.json')
with open(json_path) as data:
    json_data = json.load(data)

# Setting up mongodb
restaurants = mongo.db.restaurants

# Loading the json data into mongodb
restaurants.update({}, json_data, upsert=True)

# Home route
@app.route("/")
def home():
    return render_template("EATinerary.html")

# Map route
@app.route("/map.html")
def map():

    return render_template("map.html")

# Chart route
@app.route("/chart.html")
def chart():
    return render_template("chart.html")

# Table route
@app.route("/table.html")
def table():
    return render_template("table.html")

if __name__ == "__main__": 
    app.run(debug= True)