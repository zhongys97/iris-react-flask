from flask import Flask, jsonify, render_template,request
import time
from inference import get_species
import json



app = Flask(__name__)

# 5.1 3.5 1.3 0.2 setosa

species_name = " "
entry_dict = {"sepalLength": 0, "sepalWidth": 0, "petalLength":0, "petalWidth":0}


@app.route("/api/result", methods=["GET"])
def hello():
    global species_name
    if request.method == "GET":
        response = jsonify({
            "prediction": species_name
        })
        species_name = " "
        return response
    
@app.route("/api/entry-sepal", methods=["POST"])
def sepal():
    global entry_dict 
    if request.method == "POST":
        request_data = request.data
        request_data = json.loads(request_data.decode('utf-8'))
        # print("\n")
        print(request_data)
        entry_dict["sepalLength"] = request_data["sepalLength"]
        entry_dict["sepalWidth"] = request_data["sepalWidth"]
        
        # print(species_name)
        return {"201": "success"}
    
@app.route("/api/entry-petal", methods=["POST"])
def petal():
    global species_name 
    global entry_dict 
    if request.method == "POST":
        request_data = request.data
        request_data = json.loads(request_data.decode('utf-8'))
        # print("\n")
        print(request_data)
        entry_dict["petalLength"] = request_data["petalLength"]
        entry_dict["petalWidth"] = request_data["petalWidth"]
        species_name = get_species(entry_dict)
        # print(species_name)
        return {"201": "success"}

    
if __name__ == "__main__":
    app.run(port=5003, host="0.0.0.0", debug=True)