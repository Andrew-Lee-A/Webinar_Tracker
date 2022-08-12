def get_database():
    from pymongo import MongoClient
    import pymongo

    # Provide the mongodb atlas url to connect python to mongodb using pymongo
    CONNECTION_STRING = "mongodb+srv://User:Password@cluster0.gltqf.mongodb.net/?retryWrites=true&w=majority"

    # Create a connection using MongoClient. You can import MongoClient or use pymongo.MongoClient
    client = MongoClient(CONNECTION_STRING)

    # Create the database for our example (we will use the same database throughout the tutorial
    return client['CPD']
    
def push_to_db(Dictionary):
    dbname = get_database()

    collection_name = dbname["Event"]

    collection_name.insert_one(Dictionary)    
    
# This is added so that many files can reuse the function get_database()
if __name__ == "__main__":    
    
    # Get the database
    dbname = get_database()

    
