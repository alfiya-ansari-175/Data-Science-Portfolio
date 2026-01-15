# 🧠 Workplace Safety Risk Intelligence Platform

An AI-powered decision support system that predicts workplace accident severity and evaluates safety risk using historical industrial accident data.

**Author:** Alfiya Ansari  
**Tech Stack:** Python, TensorFlow (Keras), Flask, Pandas, Scikit-learn, HTML, CSS  

---

## 📌 Project Overview

The **Workplace Safety Risk Intelligence Platform** is a full-stack machine learning application designed to help organizations assess and understand workplace accident risks.

Using real industrial safety data and a deep learning model, the system predicts:
- **Expected accident severity**
- **Probability of severe workplace incidents**

In addition, the platform automatically simulates a *what-if safety improvement scenario* and quantifies how accident risk changes under improved conditions.

This project demonstrates the end-to-end lifecycle of a data science solution — from data preprocessing and model training to deployment with a user-friendly web interface.

---

## 🎯 Key Objectives

- Predict workplace accident severity using organizational and operational factors
- Estimate the probability of severe accidents
- Provide interpretable risk levels for non-technical users
- Simulate safety improvements and quantify their impact
- Deploy the model using a clean and professional web interface

---

## 🏗️ System Architecture

User Input (Web UI)  
↓  
Data Encoding (Label Encoders)  
↓  
Deep Learning Model (ANN / MLP)  
↓  
Predictions (Baseline Risk, What-If Risk, Risk Impact)  
↓  
Interpretable Results (UI)

---

## 📊 Dataset

- **Source:** Public industrial safety dataset  
- **File:** `dataset.csv`  
- **Data Type:** Categorical industrial accident records  

### Features Used

- Countries  
- Local  
- Industry Sector  
- Genre  
- Employee or Third Party  
- Critical Risk  
- Potential Accident Level  

---

## 🧠 Model Details

- **Model Type:** Artificial Neural Network (Multi-layer Perceptron)
- **Framework:** TensorFlow / Keras
- **Outputs:**  
  - Accident Risk Score  
  - Severe Accident Probability  

### Why Neural Networks?

- Handles high-dimensional categorical data
- Captures non-linear interactions
- Suitable for complex industrial risk patterns

---

## 🔄 What-If Analysis Logic

The system automatically simulates a safer scenario by increasing the *Potential Accident Level* while keeping other factors constant.

**Risk Impact = What-If Risk − Baseline Risk**

---

## 🖥️ User Interface

- Single unified input form
- Clean, intuitive design
- Three output cards:
  - Baseline Risk
  - What-If Risk
  - Risk Impact

---

## 🚀 How to Run Locally

```bash
pip install -r requirements.txt
python app.py
```

Open in browser:
```
http://127.0.0.1:5000
```

---

## 📁 Project Structure

```
project/
├── app.py
├── dataset.csv
├── multi_output_accident_model.keras
├── work.ipynb
├── templates/
│   └── index.html
└── static/
    └── style.css
```

---

## Example Input and Output

This section demonstrates how users interact with the application and interpret the model’s predictions.

### 🔹 Input: Workplace Scenario Configuration

The input screen allows users to configure workplace conditions using a single, unified form.   Users select organizational, workforce, and risk-related factors to assess accident severity.

![Input Screenshot](https://github.com/alfiya-ansari-175/Data-Science-Portfolio/blob/f692ba6f96663c90cc38e94f7ddcde60c5bad325/Workplace%20Safety%20Risk%20Intelligence%20Platform/Visuals/Sample-Input.png)

---

### 🔹 Output: Risk Assessment Results

After submitting the inputs, the system generates three interpretable outputs:

- **Baseline Risk:** Predicted accident severity under current conditions  
- **What-If Risk:** Predicted severity after simulated safety improvement  
- **Risk Impact:** Difference between baseline and what-if scenarios  

![Output Screenshot](https://github.com/alfiya-ansari-175/Data-Science-Portfolio/blob/f692ba6f96663c90cc38e94f7ddcde60c5bad325/Workplace%20Safety%20Risk%20Intelligence%20Platform/Visuals/Sample-Output.png)



## 📌 Future Improvements

- Interactive charts
- PDF report export
- SHAP explainability
- Cloud deployment

---



## 📜 License

Educational and demonstration purposes.
