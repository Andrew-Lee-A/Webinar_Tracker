#!/usr/bin/env python
# coding: utf-8

# In[1]:


from bs4 import BeautifulSoup
import requests
import pandas as pd
from pandas import DataFrame
from urllib.parse import urljoin
from pymongo_test_insert import get_database


# In[2]:


## provides the domain for the scraper to scrape in order to retrive it's content which is done using the BeautifulSoup's text-based html parser
base_url = 'https://www.engineeringnz.org/courses-events' 
response = requests.get(base_url)
soup = BeautifulSoup(response.content,'html.parser')


# In[3]:


## creating variables in order to store the scraped data 
title = []
date_time = []
price = []
CPD_Hours= []
reg=[]


# In[4]:


course_data = soup.findAll('div',attrs={'class':'width-1/2@xsmall width-1/3@medium'})


# In[5]:


#  ## this how the scraper retrives the data from the website.
# # # I have done this by creating for loop that search the html tags which contained the course_data variable 
# # # which collects the title of the webinar, the price of the webinar and the CPD points which is equivalent to the CPD Hours

for store in course_data:
    titles  = store.h5.text.replace('\n','').strip()  ## this looking through the h5 tag finds the text inside the h5 tags cleans
# #    the data by removing all newlines and remove all the html tags 
    title.append(titles) # this stores the cleaned and appends it the original variable that used to store the scraped data 
    
    cost = store.a.p.text.replace('\n','').strip()
    price.append(cost)
    
    Hours_elems=store.a.find_all('p', class_= 'u-text-xs u-text-medium u-text-right') 
    Hours =[elem.get_text() for elem in Hours_elems]
    CPD_Hours.append(Hours)

# #     # ilerating through for loop to retrieve all the dates and times of each webinar that is listed on the website    # storing  them inside in list variable
    calender_elems = store.findAll('p',attrs={'class':'t-color-light-grey u-text-uppercase u-space-xs'})
    calender =[elem.get_text() for elem in calender_elems]
    date_time.append(calender)

    reg_link = soup.findAll('a',class_='link-complex link--no-style',href=True)
    reg.append(reg_link)


# In[6]:


# # Here i had  to clean the CPD variable becuase  i was retrieve in a different way compared the other variables
# # therefore i to string variable and join all the scraped data together and go through
# #  extensive clean by replacing unwanted text with an empty string

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


# In[7]:


# # created funtion that convert a list into string that is sperated by a comma 
def CPD_Convert(string):
    li = list(string.split(","))
    return li


# In[8]:


# # created funtion that convert a list into string that is sperated by a colon
def date_timeConvert(string):
    li = list(string.split(":"))
    return li


# In[9]:



# #using the convert funtion to convert the list variable into a strings
CPD = CPD_Convert(CPD_Hours)


# In[10]:


# ilerating through for loop to retrieve all the dates and times of each webinar that is listed on the website 
# storing  them inside in list variable
## collecting the date and time for the webinars
calender = soup.findAll('p',attrs={'class':'t-color-light-grey u-text-uppercase u-space-xs'})


# In[11]:


# ilerating through for loop to retrieve all the dates and times of each webinar that is listed on the website 
# storing  them inside in list variable
for store in calender:
    date_elems = store
    date =[elem.get_text() for elem in date_elems]
    date_time.append(date)


# In[12]:


# # sperating the each of the dates and times and cleaning the data 
date_time =" ".join([str(item) for item in date_time])
date_time = date_time.replace("[","")
date_time = date_time.replace("]",":")
date_time = date_time.replace("'","")


# In[13]:


# #converting the list variable into string
date_time =date_timeConvert(date_time)


# In[14]:


# # searching for the registration link
reg_link = soup.findAll('a',class_='link-complex link--no-style',href=True)


# In[15]:


def prepend(list, str):
    str +='{0}'
    #list = [str.format(i) for i in list]
    return (list)


# In[16]:


# # sperating the each of the registration links with a comma
reg =",".join([str(item) for item in reg])


# In[17]:


# #converting the list variable into string
reg = CPD_Convert(reg)


# In[18]:


reg = prepend(reg,base_url)


# In[19]:


# # creating a Pandas Dataframe 
# # creating pandas dictionary with the scraped data and contents

result = list(zip(title,price,CPD,date_time,reg))
result

dbname = get_database()
collection_name = dbname["webinars"]

for i in result:
    py_collection = {
    "Webinar Title" : result[i].title,
    "price" : result[i].price,
    "CPD" : result[i].CPD,
    "date_time" : result[i].date_time,
    "link" : result[i].reg
    }
    collection_name.insert_one[py_collection]


df = pd.set_option('display.max_rows',5000)
df = pd.set_option('display.max_columns',5000)
df = pd.set_option('display.width',100000)

# # naming all the columns of the pandas dataframe 
df = pd.DataFrame(result, columns=['Webinar Title','Price','CPD Points','Date and Time','Registration Link'])

# #displaying the pandas dataframe 
print(df.head())


# In[20]:


# # # creating a Pandas Dataframe 
# # # creating pandas dictionary with the scraped data and contents

# result = list(zip(title,price,CPD,date_time,reg))
# result

# df = pd.set_option('display.max_rows',5000)
# df = pd.set_option('display.max_columns',5000)
# df = pd.set_option('display.width',100000)

# # # naming all the columns of the pandas dataframe 
# df = pd.DataFrame(result, columns=['Webinar Title','Price','CPD Points','Date and Time','Registration Link'])

# # #displaying the pandas dataframe 
# df


# In[21]:


# import pymongo
# from pymongo import MongoClient

# data_dict = df.to_dict("records")

# # connecting to the MongoDB 

# client = pymongo.MongoClient("mongodb+srv://T-Man-99:T0md2vid99@cluster0.q88thfg.mongodb.net/?retryWrites=true&w=majority")
# db = client.test

# #connecting to the CPD cluster inside the MongoDB 
# db = client["CPD"]

# # giving access to the collections inside MongoDB
# collection  = db["test"]

# #inserting the scraped into the MongoDB 
# collection.insert_many(data_dict)


# In[22]:


# keyWord = input("Enter keyword")
# df = df[df['Webinar Title'].str.contains(keyWord)]
# df

