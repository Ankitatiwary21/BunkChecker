BunkChecker 🎓
BunkChecker is a simple web application that uses machine learning to help students decide whether they can afford to bunk (skip) a future class based on their attendance record.

🔍 Features
✅ Predicts if you can bunk a class based on your total, attended, and future bunked classes.

🔄 Real-time prediction with a trained logistic regression model.

🌐 Frontend built with HTML, CSS, and JavaScript.

🧠 Backend built using Flask and scikit-learn.

📁 Project Structure
bash
Copy
Edit
BunkChecker/
├── backend/
│   ├── app.py               # Flask server
│   ├── train_model.py       # Model training script
│   ├── model.pkl            # Trained ML model
├── frontend/
│   ├── index.html           # Web interface
│   ├── style.css            # Styling
│   └── script.js            # Handles API calls
🚀 How to Run Locally
Backend (Flask + ML Model)
Navigate to backend:

bash
Copy
Edit
cd backend
Create virtual environment and activate it (optional but recommended):

bash
Copy
Edit
python -m venv venv
source venv/bin/activate  # or venv\Scripts\activate on Windows
Install dependencies:

bash
Copy
Edit
pip install flask flask-cors numpy scikit-learn joblib
Train the model (optional, if model.pkl not present):

bash
Copy
Edit
python train_model.py
Run the Flask app:

bash
Copy
Edit
python app.py
Frontend
Open frontend/index.html in your browser.

Make sure the backend Flask server is running on http://127.0.0.1:5000.

🧠 How It Works
The logistic regression model uses:

Total number of classes

Number of attended classes

Number of future planned bunks

It returns:

A Boolean: Can you bunk?

Probability (confidence) of the prediction

✨ Example
Input:

json
Copy
Edit
{
  "total_classes": 100,
  "attended_classes": 75,
  "future_bunks": 2
}
Output:

json
Copy
Edit
{
  "can_bunk": true,
  "probability": 83.5
}
🙌 Author
Ankita Tiwary
GitHub: Ankitatiwary21
