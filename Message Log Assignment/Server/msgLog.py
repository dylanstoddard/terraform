from flask import Flask, request
from dummydb import DummyDB

app = Flask(__name__)

db = DummyDB("messages")

@app.route('/messages', methods=['POST'])
def add_message():
    print("the message: ", request.form)
    dictRecord = {'message': request.form["message"]}
    db.saveRecord(dictRecord)
    return "Created", 201, { "Access-Control-Allow-Origin": "*" }

@app.route('/messages', methods=['GET'])
def get_messages():
    messages = db.readAllRecords()
    return messages, { "Access-Control-Allow-Origin": "*" }

if __name__ == '__main__':
    app.run(port=8080)