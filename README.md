# BunkChecker 🎓

**BunkChecker** is a smart attendance predictor that helps students decide whether they can afford to bunk a class or not — based on their past attendance.

## 🚀 Project Structure

- `backend/`: Flask app with a trained Logistic Regression model (`model.pkl`)
- `frontend/`: Simple HTML, CSS, and JavaScript UI that interacts with the backend

---

## 📦 Features

- Predicts if you can bunk the next class
- Gives the probability of maintaining attendance
- Simple, interactive frontend interface
- Built using Flask and scikit-learn

---

## 🧠 Model Details

- **Input features**:
  - Total number of classes
  - Number of classes attended
  - Number of future bunks you plan to take

- **Output**:
  - Yes/No prediction on whether you can bunk
  - Confidence percentage from the model

- **Algorithm**: Logistic Regression  
- **Library**: `scikit-learn`, `joblib`

---

## ⚙️ How to Run

### 1. Clone the repository
```bash
git clone https://github.com/Ankitatiwary21/BunkChecker.git
cd BunkChecker

2. Backend Setup (Flask + Model)
cd backend
pip install -r requirements.txt
python train_model.py      # To train and save model.pkl
python app.py              # To start the Flask server

3. Frontend Setup
Open frontend/index.html in your browser

Make sure the backend is running on http://localhost:5000

👩‍💻 Author
Made with 💡 by Ankita Tiwary
