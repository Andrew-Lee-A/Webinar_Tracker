import pymongo
from pymongo import MongoClient

client = MongoClient('mongodb+srv://Test:Test@Cluster0.q88thfg.mongodb.net/?retryWrites=true&w=majority')

db = client["Test"]
collection = db["Test"]

testdict = {"test": "tested", "points": 3, "working": "True"}

collection.insert_one(testdict)