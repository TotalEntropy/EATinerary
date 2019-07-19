from flask import Flask, redirect, render_template, request, jsonify
import pandas as pd
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
categories=Base.classes.categories

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/api/category", methods=['GET'])
def category():
    # db.session.query
    # results=session.query(categories_sql).all()

    # data_all=[]
    # for item in results:
    #     data={}
    #     data['category_id']=item[0]
    #     data['category']=item[1]
    # data_all.append(data)    
    # return jsonify(data_all)
    return

# @app.route("/api/restaurant", methods=['GET'])
# def restaurant():
#     return

@app.route("/api/city")
def city():
    # stmt=db.session.query(restaurant)
    # df=pd.read_sql_query(stmt, db.session.bind)
    cities=db.session.query(restaurant.City).distinct(restaurant.City).all()

    ll= []

    for row in cities:
        ll.append(row[0])

    # result={}
    # for row in cities:
    #     result[f''].append()= row[0]

    # print(type(cities))

    return jsonify(ll)

if __name__ == "__main__":
    app.run()