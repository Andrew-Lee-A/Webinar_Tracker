import pymongo
from pymongo import MongoClient

# Provide the mongodb atlas url to connect python to mongodb using pymongo
cluster = MongoClient()
#setting cluster test
db = cluster["test"]

collection = db["test"]

post = {"_id": 0, "title": "CPD Title", "CPD_Points": 3 }

collection.insert_one(post)

