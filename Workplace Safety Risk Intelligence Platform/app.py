from flask import Flask, render_template, request
import pandas as pd
import numpy as np
import tensorflow as tf
from sklearn.preprocessing import LabelEncoder

app = Flask(__name__)

# ===================== LOAD DATA =====================
df = pd.read_csv("dataset.csv")

features = [
    "Countries",
    "Local",
    "Industry Sector",
    "Genre",
    "Employee or Third Party",
    "Critical Risk",
    "Potential Accident Level"
]

for col in features:
    df[col] = df[col].astype(str).str.strip().str.lower()

# ===================== ENCODERS =====================
encoders = {}
for col in features:
    le = LabelEncoder()
    le.fit(df[col])
    encoders[col] = le

# ===================== LOAD MODEL =====================
model = tf.keras.models.load_model("multi_output_accident_model.keras")

# ===================== HELPERS =====================
def encode_input(data):
    return [
        np.array([encoders[col].transform([data[col]])[0]])
        for col in features
    ]

def interpret_risk(score):
    if score < 1.5:
        return "Low Risk", "Low expected accident severity under these conditions."
    elif score < 3.0:
        return "Medium Risk", "Moderate accident risk detected. Preventive actions recommended."
    else:
        return "High Risk", "High accident severity risk detected. Immediate safety action advised."

def predict(data):
    encoded = encode_input(data)
    risk, severe = model.predict(encoded, verbose=0)

    risk_score = round(float(risk[0][0]), 2)
    severe_prob = round(float(severe[0][0]), 2)
    label, explanation = interpret_risk(risk_score)

    return {
        "score": risk_score,
        "prob": severe_prob,
        "label": label,
        "explanation": explanation
    }

def simulate_improvement(level):
    order = ["i", "ii", "iii", "iv", "v"]
    if level in order and order.index(level) < len(order) - 1:
        return order[order.index(level) + 1]
    return level

# ===================== ROUTE =====================
@app.route("/", methods=["GET", "POST"])
def index():
    baseline = None
    whatif = None
    impact = None

    if request.method == "POST":
        user_input = {col: request.form[col].lower() for col in features}

        baseline = predict(user_input)

        improved_input = user_input.copy()
        improved_input["Potential Accident Level"] = simulate_improvement(
            user_input["Potential Accident Level"]
        )

        whatif = predict(improved_input)
        impact = round(whatif["score"] - baseline["score"], 2)

    return render_template(
        "index.html",
        features=features,
        encoders=encoders,
        baseline=baseline,
        whatif=whatif,
        impact=impact
    )

if __name__ == "__main__":
    app.run(debug=True)
