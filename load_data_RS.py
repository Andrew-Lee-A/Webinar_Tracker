from audioop import reverse
from pickle import TRUE
import numpy as np
import pandas as pd
from Webscrapper_2 import df
from Webscrapper_2 import title
import random
from scipy import sparse
from sklearn.metrics.pairwise import cosine_similarity
import pymongo
from pymongo import DESCENDING, MongoClient
 
id =[100,200,300,400,500,600,700,800,900]
user_ID = random.choices(id, k=len(title))

ratings = np.random.randint(1,5,size=(len(user_ID),len(title)))


course_ratings = pd.DataFrame(ratings,columns=title,index=user_ID)

def get_sim_courses(title,ratings):
    sim_score = course_sim_df[title]*(ratings-2.5)
    sim_score = sim_score.sort(reverse=True)

    return sim_score

course_sim_df = course_ratings.corr(method='pearson')

test_user = [("Stormwater Management and Design - An Introduction",5),("Gravity Retaining Walls - Online",1),("First home buyers workshop",4)]

similar_CPD_events = {}
for title,rating in test_user:
    similar_CPD_events = get_sim_courses(title,rating)

similar_CPD_events
similar_CPD_events.sum()
print(similar_CPD_events)


