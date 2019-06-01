# Import dependencies
from flask import Flask, render_template, jsonify
from flask_pymongo import PyMongo
import json
import os

# Initialise
app = Flask(__name__)
app.config["MONGO_URI"] = "mongodb://localhost:27017/restaurants"
mongo = PyMongo(app)

# json data
json_path = os.path.join('data', 'yelp_dataset', 'clean', 'restaurants.json')

# Setting up mongodb
restaurants = mongo.db.restaurants

# Loading the json data into mongodb
with open(json_path) as json_file:
    restaurants.update({}, json.load(json_file), upsert=True)

# Home route
@app.route("/")
def home():
    return render_template("EATinerary.html", restaurants=restaurants)

if __name__ == "__main__": 
    app.run(debug= True)