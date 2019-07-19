from flask import Flask, redirect, render_template, request, jsonify
# import pandas as pd
from config import conn
from flask_sqlalchemy import SQLAlchemy
import pymysql
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = f'mysql+pymysql://{conn}/eatinerary'
db=SQLAlchemy(app)

Base=automap_base()

Base.prepare(db.engine, reflect=True)
restaurant=Base.classes.restaurant
category=Base.classes.category

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/api/restaurant")
def restaurant():
    return

@app.route("/api/city")
def city():
    cities=db.session.query(restaurant.City).distinct(restaurant.City).all()

    results= []

    for row in cities:
        results.append(row[0])

    return jsonify(results)

@app.route("/api/category")
def category():

    return

if __name__ == "__main__":
    app.run(debug=True)