#!/usr/bin/env python
# coding: utf-8

# In[151]:


from bs4 import BeautifulSoup
import requests
import pandas as pd
from pandas import DataFrame
from urllib.parse import urljoin



# In[152]:


## provides the domain for the scraper to scrape in order to retrive it's content which is done using the BeautifulSoup's text-based html parser
url = 'https://www.engineeringnz.org/courses-events/webinars/'
response = requests.get(url)
soup = BeautifulSoup(response.content,'html.parser')


# In[153]:


## creating variables in order to store the scraped data 
title = []
date_time = []
price = []
CPD_Hours= []
reg=[]


# In[154]:


course_data = soup.findAll('div',attrs={'class':'width-1/2@xsmall width-1/3@medium'})


# In[155]:


## this how the scraper retrives the data from the website.
# I have done this by creating for loop that search the html tags which contained the course_data variable 
# which collects the title of the webinar, the price of the webinar and the CPD points which is equivalent to the CPD Hours
for store in course_data:
    titles  = store.h5.text.replace('\n','').strip()  ## this looking through the h5 tag finds the text inside the h5 tags cleans
    # the data by removing all newlines and remove all the html tags 
    title.append(titles) # this stores the cleaned and appends it the original variable that used to store the scraped data 
    
    cost = store.a.p.text.replace('\n','').strip()
    price.append(cost)
    
    Hours_elems=store.a.find_all('p', class_= 'u-text-xs u-text-medium u-text-right') 
    Hours =[elem.get_text() for elem in Hours_elems]
    
    CPD_Hours.append(Hours)


# In[156]:


def prepend(str, list):
    str +='{0}'
    list = [str.format(i) for i in list]
    return (list)


# In[157]:


# # searching for the registration link
reg_link = soup.findAll('a',class_='link-complex link--no-style',href=True)


# In[158]:


url_reg = url.replace("/courses-events/webinars/","")


# In[159]:


CPD_Hours =" ".join([str(item) for item in CPD_Hours])
CPD_Hours = CPD_Hours.replace("\\n","")
CPD_Hours = CPD_Hours.replace("  ","")
CPD_Hours = CPD_Hours.replace("[","")
CPD_Hours = CPD_Hours.replace("]",",")
CPD_Hours = CPD_Hours.replace("hrs",".")
CPD_Hours = CPD_Hours.replace("hr",".")
CPD_Hours = CPD_Hours.replace("mins","")
CPD_Hours = CPD_Hours.replace("'","")
CPD_Hours = CPD_Hours.replace(" ","")
CPD_Hours = CPD_Hours.replace("CPD","")


# In[160]:


# Here i had  to clean the CPD variable becuase  i was retrieve in a different way compared the other variables
# therefore i to string variable and join all the scraped data together and go through
#  extensive clean by replacing unwanted text with an empty string

CPD_Hours =" ".join([str(item) for item in CPD_Hours])


# In[161]:


# created funtion that convert a list into string that is sperated by a comma 
def CPD_Convert(string):
    li = list(string.split(","))
    return li


# In[162]:


# created funtion that convert a list into string that is sperated by a colon
def date_timeConvert(string):
    li = list(string.split(":"))
    return li


# In[163]:


#using the convert funtion to convert the list variable into a strings
CPD_Hours = CPD_Convert(CPD_Hours)


# In[164]:


## collecting the date and time for the webinars
calender = soup.findAll('p',attrs={'class':'t-color-light-grey u-text-uppercase u-space-xs'})


# In[165]:


# ilerating through for loop to retrieve all the registration links sof each webinar that is listed on the website 
# storing  them inside in list variable
for links in reg_link:
    reg.append(links.get('href'))


# In[166]:



# ilerating through for loop to retrieve all the dates and times of each webinar that is listed on the website 
# storing  them inside in list variable
for store in calender:
    date_elems = store
    date =[elem.get_text() for elem in date_elems]
    date_time.append(date)


# In[167]:


# sperating the each of the dates and times and cleaning the data 
date_time =" ".join([str(item) for item in date_time])
date_time = date_time.replace("[","")
date_time = date_time.replace("]",":")
date_time = date_time.replace("'","")


# In[168]:


#converting the list variable into string
date_time =date_timeConvert(date_time)


# In[169]:


# sperating the each of the registration links with a comma
reg =",".join([str(item) for item in reg])


# In[170]:


#converting the list variable into string
reg = CPD_Convert(reg)


# In[171]:


reg = prepend(url_reg,reg)


# In[172]:


# creating a Pandas Dataframe 

# creating pandas dictionary with the scraped data and contents
result = list(zip(title,price,CPD_Hours,date_time,reg))
result

df= pd.set_option('display.max_colwidth', None)
# naming all the columns of the pandas dataframe 
df = pd.DataFrame(result, columns=['Webinar Title','Price','CPD Points','Date and Time','Registration Link'])

#displaying the pandas dataframe 
df


# In[173]:


# import pymongo
# from pymongo import MongoClient

# data_dict = df.to_dict("records")

# # connecting to the MongoDB 
# cluster = MongoClient("mongodb+srv://Tom-Thankachan-99:T0md2vid99@cluster0.wnexe70.mongodb.net/?retryWrites=true&w=majority")

# #connecting to the CPD cluster inside the MongoDB 
# db = cluster["CPD"]

# # giving access to the collections inside MongoDB
# collection  = db["test"]

# #inserting the scraped into the MongoDB 
# collection.insert_many(data_dict)

