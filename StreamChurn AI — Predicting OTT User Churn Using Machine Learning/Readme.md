---

# 🎬 Customer Churn Prediction Dashboard

### 📊 Predicting customer churn in a streaming platform using Machine Learning and Streamlit

---

## 🧩 Project Overview

This project aims to **analyze customer behavior** and **predict churn** (whether a customer will stop using the service) for a fictional OTT streaming platform.

It combines **data generation, machine learning, and interactive visualization** into a single, end-to-end system that:

* Generates synthetic yet realistic customer data
* Trains multiple ML models to identify churn patterns
* Deploys a **Streamlit-based interactive dashboard** for real-time prediction and business insights

---

## 🗂️ Project Structure

```
📁 Customer_Churn_Prediction/
│
├── 1.DataGeneration.ipynb      # Generates synthetic customer dataset
├── 2.WorkSpace.ipynb           # Performs data exploration, modeling, and evaluation
├── 3.app.py                    # Streamlit dashboard for real-time predictions
├── churn_model.pkl             # Trained machine learning model
├── synthetic_ott_churn.csv     # Generated dataset
└── requirements.txt            # Required python packages to install
└── README.md                   # Project documentation
```

---

## 🧠 Workflow Summary

### 1️⃣ Data Generation (`1.DataGeneration.ipynb`)

This notebook creates a **synthetic dataset of 10,900 OTT customers** using libraries like `numpy`, `pandas`, and `faker`.

**Generated Features include:**

* `customer_id`
* `age`
* `gender`
* `subscription_plan`
* `monthly_watch_hours`
* `preferred_genre`
* `days_since_last_login`
* `num_devices`
* `avg_session_duration`
* `customer_tenure_months`
* `payment_method`
* `auto_renewal_enabled`

The dataset is saved as:

```
synthetic_ott_churn.csv
```

---

### 2️⃣ Data Exploration & Modeling (`2.WorkSpace.ipynb`)

This is the **main machine learning workflow**, where data is cleaned, analyzed, and modeled.

#### 🔍 Data Analysis

* Visualized plan distributions, preferred genres, and engagement levels
* Correlation and feature impact on churn
* Identified that **low watch hours, long inactivity, and short tenure** strongly predict churn

#### 🧰 Feature Engineering

* Label encoding of categorical variables (e.g., gender, plan, payment method)
* Standard scaling of numeric columns

#### 🤖 Model Building

Models compared:

* Logistic Regression
* Random Forest
* Gradient Boosting
* XGBoost
* Support Vector Machine (SVM)

#### 🏁 Evaluation Metrics

| Metric    | Description                    |
| --------- | ------------------------------ |
| Accuracy  | 68%                            |
| Precision | 71%                            |      
| Recall    | 82%                            |
| F1-Score  | 76%                            |
| ROC-AUC   | 71%                            |

#### 💾 Model Export

The best-performing model is saved using:

```python
joblib.dump(best_model, 'churn_model.pkl')
```

---

### 3️⃣ Interactive Dashboard (`3.app.py`)

A **Streamlit app** that brings your model to life.

#### ✨ Features

* Clean, responsive, and user-friendly interface
* Sidebar input panel for customer details
* Real-time prediction with probability scores
* Interactive **Plotly** charts
* Smart business recommendations based on prediction results

#### ⚙️ How It Works

1. Loads the trained `churn_model.pkl`
2. Takes user input (age, watch hours, last login, etc.)
3. Predicts churn likelihood using the ML model
4. Displays:

   * Donut chart for churn vs retention probability
   * Bar chart comparison
   * Personalized recommendations

#### 💡 Example Insights

* Customers with **low engagement or high inactivity** → high churn risk
* Long-tenure and auto-renewal users → low churn likelihood
* Certain genres show higher retention (Drama, Action)

---

## 🧾 Key Insights

| Insight                              | Business Interpretation                        |
| ------------------------------------ | ---------------------------------------------- |
| ⏳ High inactivity increases churn    | Re-engagement emails or notifications can help |
| 💳 Auto-renewal reduces churn        | Encourage users to enable auto-renew           |
| 🎬 Preferred genres drive engagement | Recommend similar content to loyal users       |
| 🧓 Older users churn less            | Target younger segments with special offers    |
| 💻 Multi-device users stay longer    | Cross-device sync can improve retention        |

---

## 🖼️ Dashboard & Insights Preview

Below are a few example visualizations from the project:

| Insight Visuals                                                                                                                                                                                                                              | Description                 |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------- |
| ![Insight 3](https://github.com/alfiya-ansari-175/Data-Science/blob/6f88fda345ebedd45fe66633f0118f1359086af3/StreamChurn%20AI%20%E2%80%94%20Predicting%20OTT%20User%20Churn%20Using%20Machine%20Learning/Screenshots/Insight-3.png?raw=true) | Churn vs Retention analysis |
| ![Insight 4](https://github.com/alfiya-ansari-175/Data-Science/blob/6f88fda345ebedd45fe66633f0118f1359086af3/StreamChurn%20AI%20%E2%80%94%20Predicting%20OTT%20User%20Churn%20Using%20Machine%20Learning/Screenshots/Insight-4.png?raw=true) | Watch time vs Churn trends  |
| ![Insight 5](https://github.com/alfiya-ansari-175/Data-Science/blob/6f88fda345ebedd45fe66633f0118f1359086af3/StreamChurn%20AI%20%E2%80%94%20Predicting%20OTT%20User%20Churn%20Using%20Machine%20Learning/Screenshots/Insight-5.png?raw=true) | Feature correlation heatmap |
| ![Insight 6](https://github.com/alfiya-ansari-175/Data-Science/blob/6f88fda345ebedd45fe66633f0118f1359086af3/StreamChurn%20AI%20%E2%80%94%20Predicting%20OTT%20User%20Churn%20Using%20Machine%20Learning/Screenshots/Insight-6.png?raw=true) | Model performance summary   |

---

## 🚀 How to Run the Project

### 1️⃣ Clone the Repository


```bash
git clone https://github.com/alfiya-ansari-175/Data-Science.git
cd "Data-Science/StreamChurn AI — Predicting OTT User Churn Using Machine Learning"
```

### 2️⃣ Install Dependencies

Make sure you have Python 3.8+ installed, then run:

```bash
pip install -r requirements.txt
```

If you don’t have a `requirements.txt`, here’s what you need:

```bash
pip install pandas numpy matplotlib seaborn scikit-learn xgboost streamlit plotly faker joblib
```

### 3️⃣ Run the Streamlit App

```bash
streamlit run /code/app.py
```

Then open your browser at:

```
http://localhost:8501
```

---

## 🧩 Tech Stack

| Category          | Tools Used                   |
| ----------------- | ---------------------------- |
| Data Generation   | Python, Faker, NumPy, Pandas |
| Data Analysis     | Seaborn, Matplotlib          |
| Machine Learning  | Scikit-learn, XGBoost        |
| Model Deployment  | Streamlit                    |
| Visualization     | Plotly                       |
| Model Persistence | Joblib                       |

---

## 💡 Future Enhancements

* Integrate **real customer datasets**
* Implement **automated retraining pipeline**
* Add **customer segmentation (K-Means)** for deeper insights
* Deploy app to **Streamlit Cloud / AWS EC2 / Azure App Service**

---

## 👩‍💻 Author

**Alfiya Ansari**

---


