from flask import Flask, request
from flask_cors import CORS, cross_origin
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
from dotenv import load_dotenv
import os

app = Flask(__name__)
cors = CORS(app, resources={r"/api/v1/login": {"origins": "*"}})
app.config['CORS_HEADERS'] = 'Content-Type'
load_dotenv()


@app.route('/api/v1/login', methods=['POST'])
@cross_origin(origin='*', headers=['Content-Type', 'Authorization'])
def authentication():
    uri = os.environ['MONGODB_URI']

    client = MongoClient(uri, server_api=ServerApi('1'))
    db = client.get_database(os.environ['DATABASE_NAME'])
    account_collection = db.get_collection("Account")
    try:
        data = request.json
        username = data.get("username")
        password = data.get("password")

        account = account_collection.find_one({"username": username, "password": password})

        if account:
            role = account.get("role", None)
            return {"role": role}
        else:
            return {"message": "Invalid username or password"}
    except Exception as e:
        return {"error": str(e)}


if __name__ == '__main__':
    app.run(debug=True)
