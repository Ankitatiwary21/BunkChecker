import pandas as pd
from sklearn.linear_model import LogisticRegression
import joblib

# Create fake data (for learning)
# Columns: total_classes, attended_classes, future_bunks
data = {
    'total_classes': [100, 100, 80, 90, 60, 100, 50, 75, 100, 100],
    'attended_classes': [80, 60, 65, 70, 50, 76, 40, 55, 77, 72],
    'future_bunks': [2, 5, 3, 2, 1, 4, 5, 2, 6, 3],
    'can_bunk': [1, 0, 1, 1, 1, 1, 0, 1, 0, 1]  # 1 = yes, 0 = no
}

df = pd.DataFrame(data)

# Input (X) and Output (y)
X = df[['total_classes', 'attended_classes', 'future_bunks']]
y = df['can_bunk']

# Train the model
model = LogisticRegression()
model.fit(X, y)

# Save the model
joblib.dump(model, 'model.pkl')

print("✅ Model trained and saved as model.pkl")
