from flask import Flask, request, jsonify
import joblib
import numpy as np
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Allow frontend to talk to backend

# Load model
model = joblib.load('model.pkl')

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()

    total = int(data['total_classes'])
    attended = int(data['attended_classes'])
    bunk = int(data['future_bunks'])

    input_data = np.array([[total, attended, bunk]])
    prediction = model.predict(input_data)[0]
    probability = model.predict_proba(input_data)[0][1]

    result = {
        'can_bunk': bool(prediction),
        'probability': round(probability * 100, 2)
    }
    return jsonify(result)

if __name__ == '__main__':
    app.run(debug=True)
