# Import dependencies
from flask import Flask, Markup, render_template, jsonify
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

if __name__ == "__main__": 
    app.run(debug= True)