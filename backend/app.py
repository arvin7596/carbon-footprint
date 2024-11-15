from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS

@app.route('/api/data', methods=['GET'])
def get_data():
        return jsonify({"electricity" : 121212 , "gas" : 9999 , "fuel" : 112666666})


@app.route('/api/process', methods=['POST'])
def process_data():
    data = request.json
    result = f"electricity: {data['electricity']}====gas:{data['gas']}====fuel:{data['fuel']} "
    return jsonify({"message": result})

if __name__ == '__main__':
    app.run(debug=True)
