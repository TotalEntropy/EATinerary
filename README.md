# Project Name: EATinerary
## Members: Brian Haley and Anna Francesca Gatus
### [EATinerary project](https://github.com/users/TotalEntropy/projects/2)
### Linked repos: [EATinerary-ETL](https://github.com/TotalEntropy/Eatinerary-ETL.git)

In this present generation, there exists a distinct hobbyist group called foodies. These are people who eat not only out of necessity but also for passion to savor a multitude of taste and flavors. They have a strong social media presence that shows off mouth-watering photos and videos of food and where they grab it. Aside from these foodies, a growing number of consumers dine at restaurants or order to go. We live in a fast-paced world and majority of people don’t have time nor inclination to cook. They barely have time to spare on researching eateries and menus. 

Although the food service industry looks promising due to increased demand, the unfortunate reality is that many restaurants fail in their first few years. A note-worthy reason for this could be lack of planning and research. 

In order to help both consumers and businesses alike, we gathered Yelp’s dataset to build an interactive restaurant web application. The home page displays a form which allows the user to input city and attributes (wheelchair friendly, outdoor seating, kid friendly, dog friendly, music, parking, bike parking). Once the form is submitted, it generates a customizable map to meet the specific needs of foodies, non-foodies and businesses alike. User-input will make consumer and business research quick and easy. Filtering by category, cuisine, vegan, gluten-free and other options will prove very useful for targeting specific consumer needs and niche marketing. Afterall, no single restaurant has a universal appeal. 

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
