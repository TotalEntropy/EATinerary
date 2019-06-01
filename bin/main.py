#!/usr/bin/env python
# coding: utf-8

# In[1]:


# Importing dependencies
import os
import pandas as pd


# In[2]:


# Path to raw dataset not uploaded to github due to size requirement
yelp_business_raw_path = os.path.join('..', 'data', 'yelp_dataset', 'raw', 'business.json')


# In[3]:


# Creating pd dataframe
yelp_business_raw = pd.read_json(yelp_business_raw_path, lines=True)


# In[ ]:


# yelp_business_raw.count()


# In[ ]:


# yelp_business_raw.head()


# In[ ]:


# Select only the businesses in Ontario
yelp_business_ontario = yelp_business_raw.loc[yelp_business_raw['state'] == 'ON']


# In[ ]:


#yelp_business_ontario.head()


# In[ ]:


# yelp_business_ontario.count()


# In[ ]:


# Dropping any rows with blank values in these categories
yelp_business_ontario_clean = yelp_business_ontario.dropna(subset=['name', 'address', 'postal_code', 'city', 'state', 'latitude', 'longitude', 'attributes',
                                                          'categories'])
yelp_business_ontario_clean = yelp_business_ontario_clean.reset_index()


# In[ ]:


#yelp_business_ontario_clean.count()


# In[ ]:


# Select only the categories containing restaurant
# yelp_business_ontario_clean['categories'].str.contains('Restaurants')


# In[ ]:


# Selecting all of the restaurants
yelp_restaurants_ontario = yelp_business_ontario_clean[yelp_business_ontario_clean['categories'].str.contains('Restaurants')]


# In[ ]:


#yelp_restaurants_ontario.count()


# In[ ]:


#yelp_restaurants_ontario.head()


# In[ ]:


# Only taking these columns
yelp_restaurants_ontario_clean = yelp_restaurants_ontario.loc[:, ['name', 'address', 'postal_code', 'city', 'state', 'latitude', 'longitude',
                                                                  'attributes', 'categories', 'stars', 'hours']]


# In[ ]:


#yelp_restaurants_ontario_clean.head()


# In[ ]:


# Renaming the columns
yelp_restaurants_ontario_clean.columns
yelp_restaurants_ontario_clean.columns = ['Name', 'Address', 'Postal code', 'City', 'Province', 'Latitude', 'Longitude',
       'Attributes', 'Categories', 'Stars', 'Hours']


# In[ ]:


# yelp_restaurants_ontario_clean.head()


# In[ ]:


#yelp_restaurants_ontario_clean.dtypes


# In[ ]:


# Write csv or ontario restaurants only
yelp_restaurants_ontario_clean_csv_path = os.path.join('..', 'data', 'yelp_dataset', 'clean', 'restaurants.csv')
yelp_restaurants_ontario_clean.to_csv(yelp_restaurants_ontario_clean_csv_path)


# In[ ]:


# Create json file
yelp_restaurants_ontario_clean_json_path = os.path.join('..', 'data', 'yelp_dataset', 'clean', 'restaurants.json')
yelp_restaurants_ontario_clean.to_json(yelp_restaurants_ontario_clean_json_path)


# In[ ]:




