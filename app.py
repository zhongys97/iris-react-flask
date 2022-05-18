from flask import Flask, jsonify, render_template,request
import time
from inference import get_species
import json



app = Flask(__name__)

# 5.1 3.5 1.3 0.2 setosa

species_name = "afafase"


@app.route("/api", methods=["GET", "POST"])
def hello():
    global species_name
    if request.method == "GET":
        return jsonify({
            "prediction": species_name
        })
    if request.method == "POST":
        request_data = request.data
        request_data = json.loads(request_data.decode('utf-8'))
        # print("\n")
        # print(request_data)
        species_name = get_species(request_data)
        # print(species_name)
        return {"201": "success todo"}
    
    

    
if __name__ == "__main__":
    app.run(port=5003, host="0.0.0.0", debug=True)