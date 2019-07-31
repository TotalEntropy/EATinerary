# Project Name: EATinerary
## Members: Brian and Anna Francesca Gatus
### [EATinerary project](https://github.com/users/TotalEntropy/projects/2)
### Linked repos: [EATinerary-ETL](https://github.com/TotalEntropy/Eatinerary-ETL.git)

In this present generation, there exists a distinct hobbyist group called foodies. These are people who eat not only out of necessity but also for passion to savor a multitude of taste and flavors. Aside from these foodies, a growing number of consumers dine at restaurants or order to go. We live in a fast-paced world and majority of people don’t have time nor inclination to cook.

Research takes a lot of time. However, it is unavoidable because foodies can be extremely picky on where to eat. Some parents require a kid friendly restaurant. Dog lovers need a place to dine comfortably with their pets. Based on personal experience, eating with a group is tricky - One friend needs wheelchair access, another companion needs a gluten-free meal, while some are only available late at night. We find ourselves searching multiple websites to plan a food trip. In order to solve this problem, we gathered Yelp’s dataset and built an interactive restaurant web application called EATinerary.

The home page displays forms for the users to input their restaurant preferences. We incorporated an auto-complete function on the city search for a good user experience. The application also allows individuals to choose an accessibility requirement and a dietary requirement. Upon submission, an EATinerary map is generated. It plots suggested locations on a map, with tooltip that displays restaurant information. This makes user research quick and easy. In addition, this can also be a very useful business tool for targeting specific consumer needs and niche marketing. Afterall, no single restaurant has a universal appeal.

A little more information...

We actually kept the older version of this app which you can view [here](https://eatinerary.herokuapp.com/). It allows the user to pick a city and minimum star rating of a restaurant to generate an EATinerary map. On the map itself, the user can further filter by 15 categories that we randomly selected. Although the application is fully functional, it does not run as fast as we wanted due to the massive dataset. This is why decided to build a new and improved application. For optimization, we changed our database to mySQL (previously MongoDB). We also downsized our data by excluding cities that have less than 25 restaurants with reviews. We included more filters prior to generating a map. For aesthetics, we made a page loader and an animated background.



#### Requirements
1. Python 3.6.8
2. pip
3. SQLAlchemy==1.3.5
4. Flask_SQLAlchemy==2.4.0
5. PyMySQL==0.9.3
6. Flask==1.1.1
7. simplejson==3.16.0

#### Steps
1. Ensure you have run the [ETL process](https://github.com/TotalEntropy/Eatinerary-ETL.git)
2. Create a config.py in the [Eatinerary-ETL folder](https://github.com/TotalEntropy/Eatinerary-ETL) and include ```conn=user:pass@host```
3. Run app.py
