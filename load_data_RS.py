import numpy as np
import warnings
warnings.simplefilter(action='ignore', category=FutureWarning)
import pandas as pd
from Webscrapper_2 import title
import random
from scipy import sparse
from sklearn.metrics.pairwise import cosine_similarity
import pymongo
from pymongo import DESCENDING, MongoClient
 
id =[100,200,300,400,500,600]
user_ID = random.choices(id, k=len(title))

ratings = np.random.randint(1,5,size=(len(user_ID),len(title)))


course_ratings = pd.DataFrame(ratings,columns=title,index=user_ID)

def standardize(row):
    new_row = (row - row.mean()) /(row.max()-row.min())
    return new_row

def get_sim_course(title,ratings):
    sim_score = pd.DataFrame(course_sim_df[title]*(ratings-2.5))
    
    return sim_score

course_ratings_std = course_ratings.apply(standardize)
course_sim = cosine_similarity(course_ratings_std)

course_sim_df =pd.DataFrame(course_sim,index=title,columns=title)
#print(get_sim_course("A day in the life of a Water Engineer",5))

test_user = [("A day in the life of a Water Engineer",5),("Waterproofing performance of deep basements",1),("An Introduction to Health and Safety by Design",4)]

similar_CPD_events = pd. DataFrame()
for course,ratings in test_user:
     similar_CPD_events = similar_CPD_events.append(get_sim_course(course,ratings))

# similar_CPD_events.sum()
print(similar_CPD_events)


