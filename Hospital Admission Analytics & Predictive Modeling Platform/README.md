# 🏥 Hospital Admission Analytics & Predictive Modeling Platform

A **production-ready healthcare analytics and machine learning platform** that transforms raw hospital admission data into **operational insights and predictive intelligence**.

This project demonstrates **end-to-end data engineering, exploratory analysis, feature engineering, machine learning modeling, and interactive deployment** using **Streamlit**.

> ⚠️ *All predictions are for educational and operational planning purposes only and are **not** intended for clinical decision-making.*

---

## 🔍 Problem Statement

Hospitals manage complex patient inflow with limited resources such as beds, ICU capacity, and medical staff.
Poor visibility into **admission trends, length of stay, and risk factors** can lead to inefficiencies and operational strain.

**Goal:**
Build a scalable analytics and ML system that:

* Identifies admission patterns
* Highlights high-risk patients
* Predicts operational outcomes such as LOS, ICU need, and emergency risk

---

## 🧠 Solution Overview

This platform delivers:

* **Advanced Exploratory Data Analysis (EDA)** for hospital operations
* **Predictive ML models** for patient-level risk assessment
* **Interactive dashboards** for real-time analytics
* **Ethically responsible modeling** with clear limitations

---

## 🧱 Tech Stack

| Layer            | Tools                   |
| ---------------- | ----------------------- |
| Data Processing  | Python, Pandas, NumPy   |
| Visualization    | Matplotlib, Seaborn     |
| Machine Learning | Scikit-learn            |
| Web App          | Streamlit               |
| Deployment Ready | Streamlit Cloud / Local |

---

## 📊 Dataset Overview

Hospital admission dataset containing **demographic, clinical, and operational features**.

### Key Features

| Category             | Columns                                                  |
| -------------------- | -------------------------------------------------------- |
| Demographics         | `age`, `gender`, `is_rural`                              |
| Admission Details    | `admission_date`, `admission_type`                       |
| Clinical Conditions  | Diabetes, Hypertension, CKD, ACS, Shock, Chest Infection |
| Hospital Utilization | `length_of_stay`, `icu_stay_days`                        |
| Outcomes             | `patient_outcome`                                        |
| Engineered Features  | `month`, `year`, `los_category`, `icu_required`          |

---

## 📈 Key Analytical Insights

### 1️⃣ Admission Trends

* Emergency admissions dominate total hospital inflow
* Peak admissions observed in **2018**
* Seasonal monthly patterns detected

**Business Impact:**
Supports staffing, bed allocation, and emergency preparedness planning.

---

### 2️⃣ Patient Demographics

* ~63% of admissions are **male**
* Majority of patients fall in the **50–70 age range**
* Older patients show higher ICU usage and adverse outcomes

**Insight:**
Age is a strong risk amplifier for hospital resource utilization.

---

### 3️⃣ Length of Stay (LOS)

* Highly **right-skewed distribution**
* Most stays are under **5 days**
* Long-stay patients (>20 days) are rare but resource-intensive
* Emergency admissions have higher median LOS

**Operational Insight:**
Small percentage of patients consume disproportionate resources.

---

### 4️⃣ ICU Utilization

* Most ICU stays are **short (0–3 days)**
* Very few prolonged ICU cases (>10 days)

**Planning Insight:**
ICU demand is episodic and closely tied to emergency admissions.

---

### 5️⃣ Patient Outcomes

* **Discharge** is the most common outcome
* Emergency admissions account for most **mortality (EXPIRY)**
* Expiry cases skew toward **older age groups**

**Clinical Insight:**
Emergency + age significantly increases outcome risk.

---

### 6️⃣ Clinical Conditions Impact

Conditions with strongest association to poor outcomes:

* Shock
* Chest infection
* ACS
* Heart failure
* CKD

Though some are low frequency, they carry **high severity risk**.

---

### 7️⃣ Correlation Analysis

* Strong correlation between **LOS and ICU stay**
* Emergency admission correlates with ICU requirement
* Shock shows strong negative correlation with survival

**ML Justification:**
Validates feature relevance for predictive modeling.

---

## 🤖 Machine Learning Models

### Implemented Models

| Task                     | Model                    |
| ------------------------ | ------------------------ |
| Length of Stay Category  | Random Forest Classifier |
| Emergency Admission Risk | Logistic Regression      |
| ICU Requirement          | Logistic Regression      |
| Discharge Outcome        | Logistic Regression      |

### Target Predictions

* **LOS Category:** Short / Medium / Long
* **Emergency Risk:** High / Low
* **ICU Requirement:** Yes / No
* **Outcome:** Discharge / Expiry

### Why These Models?

* Logistic Regression → interpretable risk modeling
* Random Forest → captures non-linear interactions and feature importance
* Balanced trade-off between accuracy and explainability

---

## 🖥️ Application Capabilities

* 📊 Interactive hospital analytics dashboards
* 🛏️ Patient-level prediction interface
* 📈 Real-time visual insights
* ⬇️ Downloadable prediction reports
* ⚠️ Risk-aware alerts for high-severity cases

---

## ⚖️ Responsible AI & Ethics

* Trained only on historical data
* No real-time clinical inference
* Transparent feature usage
* Designed for **education and operations**, not diagnosis

------------------------------------------------------------------------

## 📁 Project Structure

    ├──`HDHI_Admission_data.csv`      # Source dataset
    ├── work.ipynb                    # Jupyter notebook page where analysis and experiments are performed
    ├── app.py                        # Main application script for running the project using streamlit
    ├── README.md                     # Project documentation


------------------------------------------------------------------------

## 🚀 Getting Started

```bash
pip install streamlit pandas numpy matplotlib seaborn scikit-learn
streamlit run app.py
```

Ensure the dataset file `HDHI_Admission_data.csv` exists in the project root.

---

## 👩‍💻 Author

**Alfiya Ansari**
© 2026

---
