import streamlit as st
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns

from sklearn.preprocessing import LabelEncoder
from sklearn.linear_model import LogisticRegression
from sklearn.ensemble import RandomForestClassifier

sns.set_style("whitegrid")

st.set_page_config(
    page_title="Hospital Admission Analytics & Predictive Modeling Platform",
    page_icon="🏥",
    layout="wide"
)
st.markdown("""
<style>
/* Target Streamlit tab labels (NEW selector) */
div[data-testid="stTabs"] button {
    font-size: 20px !important;
    font-weight: 700 !important;
    padding: 12px 22px !important;
}

/* Highlight active tab */
div[data-testid="stTabs"] button[aria-selected="true"] {
    border-bottom: 4px solid #ff4b4b !important;
}
</style>
""", unsafe_allow_html=True)


st.title("🏥 Hospital Admission Analytics & Predictive Modeling Platform")

st.markdown("### 📌 Project Overview")

overview_df = pd.DataFrame({
    "Section": [
        "Project Description",
        "Analytics Scope",
        "Machine Learning Models",
        "Deployment",
        "Ethical Considerations",
    ],
    "Details": [
        "End-to-end healthcare analytics and machine learning platform designed to analyze hospital admission data and generate actionable insights for operational planning.",
        "Exploratory data analysis and visualization of patient demographics, admission patterns, ICU utilization, and length of hospital stay.",
        "Logistic Regression and Random Forest models for predicting length of stay, emergency admission risk, ICU requirement, and discharge outcomes.",
        "Interactive web application built using Streamlit for real-time analytics and predictive insights.",
        "Predictions are for educational and operational planning purposes only and are not intended for clinical decision-making.",
    ]
})

st.table(overview_df)
st.markdown("""
<style>
.footer {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: transparent;
    color: gray;
    text-align: center;
    font-size: 14px;
    padding: 8px;
}
</style>
""", unsafe_allow_html=True)

st.divider()

@st.cache_data
def load_data():
    df = pd.read_csv("HDHI_Admission_data.csv")


    df = df.rename(columns={
        "D.O.A": "admission_date",
        "AGE": "age",
        "GENDER": "gender",
        "RURAL": "is_rural",
        "TYPE OF ADMISSION-EMERGENCY/OPD": "admission_type",
        "DURATION OF STAY": "length_of_stay",
        "duration of intensive unit stay": "icu_stay_days",
        "OUTCOME": "patient_outcome",
        "SMOKING ": "is_smoker",
        "ALCOHOL": "uses_alcohol",
        "DM": "has_diabetes",
        "HTN": "has_hypertension",
        "CKD": "has_ckd",
        "HEART FAILURE": "has_heart_failure",
        "ACS": "has_acs",
        "SHOCK": "has_shock",
        "CHEST INFECTION": "has_chest_infection"
    })

    df['admission_date'] = pd.to_datetime(
        df['admission_date'], errors='coerce', dayfirst=True
    )
    df['month'] = df['admission_date'].dt.month
    df['year'] = df['admission_date'].dt.year


    df['has_chest_infection'] = df['has_chest_infection'].replace('\\', '0', regex=False)

    bin_map = {
        'Y': 1, 'N': 0,
        'M': 1, 'F': 0,
        'R': 1, 'U': 0,
        'E': 1, 'O': 0
    }

    binary_cols = [
        'gender', 'is_rural', 'admission_type', 'is_smoker', 'uses_alcohol',
        'has_diabetes', 'has_hypertension', 'has_ckd', 'has_heart_failure',
        'has_acs', 'has_shock', 'has_chest_infection'
    ]

    for col in binary_cols:
        df[col] = df[col].map(bin_map).fillna(0).astype(int)


    df['patient_outcome'] = df['patient_outcome'].map({
        'EXPIRY': 0,
        'DISCHARGE': 1,
        'DAMA': 2
    })
    df['outcome_enc'] = (df['patient_outcome'] == 1).astype(int)


    df['los_category'] = pd.cut(
        df['length_of_stay'],
        bins=[-1, 2, 10, 1000],
        labels=['Short', 'Medium', 'Long']
    )


    df['icu_required'] = (df['icu_stay_days'] > 0).astype(int)
    df['is_emergency'] = df['admission_type']


    df['month'] = df['month'].fillna(df['month'].mode()[0])
    df['year'] = df['year'].fillna(df['year'].mode()[0])
    df['length_of_stay'] = df['length_of_stay'].fillna(df['length_of_stay'].median())
    df['icu_stay_days'] = df['icu_stay_days'].fillna(0)

    df['los_category'] = (
        df['los_category']
        .cat.add_categories(['Unknown'])
        .fillna('Unknown')
    )

    return df
df = load_data()

st.sidebar.header("🔧 Patient Inputs")

age = st.sidebar.slider("Age", 1, 100, 45)
gender = st.sidebar.selectbox("Gender", ["Male","Female"])
admission_type = st.sidebar.selectbox("Admission Type", ["Emergency","Out Patient"])
residence = st.sidebar.selectbox("Residence", ["Urban","Rural"])

st.sidebar.subheader("🧾 Clinical Conditions")
is_smoker = st.sidebar.checkbox("Smoking")
uses_alcohol = st.sidebar.checkbox("Alcohol Use")
has_diabetes = st.sidebar.checkbox("Diabetes")
has_hypertension = st.sidebar.checkbox("Hypertension")
has_ckd = st.sidebar.checkbox("CKD")
has_heart_failure = st.sidebar.checkbox("Heart Failure")
has_acs = st.sidebar.checkbox("ACS")
has_shock = st.sidebar.checkbox("Shock")
has_chest_infection = st.sidebar.checkbox("Chest Infection")

gender_enc = 1 if gender == "Male" else 0
admission_enc = 1 if admission_type == "Emergency" else 0
rural = 1 if residence == "Rural" else 0
month = pd.Timestamp.today().month
year = pd.Timestamp.today().year
b = lambda x: 1 if x else 0

tab1, tab2, tab3 = st.tabs(["📊 Analytics", "🛏️ Patient Predictions", "⚖️ Ethics"])

with tab1:
    st.subheader("📊 Hospital Admission Analytics")

    col1, col2 = st.columns(2)

    with col1:
        fig, ax = plt.subplots(figsize=(4,4))
        monthly = df.groupby("admission_date").size().reset_index(name='admissions')
        sns.lineplot(data=monthly, x='admission_date', y='admissions', ax=ax)
        ax.set_title("Monthly Admissions")
        plt.xticks(rotation=45)
        st.pyplot(fig)

    with col2:
        fig, ax = plt.subplots(figsize=(4,4))
        gender_count = df['gender'].value_counts()
        ax.pie(gender_count, labels=['Male','Female'], autopct='%1.1f%%')
        ax.set_title("Gender Distribution")
        st.pyplot(fig)

    col3, col4 = st.columns(2)

    with col3:
        fig, ax = plt.subplots(figsize=(5,4))
        ax.hist(df['age'], bins=30,color='darkgreen', edgecolor='black')
        ax.set_title("Age Distribution")
        ax.set_xlabel("Age")
        ax.set_ylabel("Frequency")  
        st.pyplot(fig)

    with col4:
        fig, ax = plt.subplots(figsize=(6,4)) 
        sns.countplot(data=df, x='year', color='saddlebrown', ax=ax)  
        ax.set_title("Admissions Per Year", fontsize=16, fontweight='bold')
        ax.set_xlabel("Year", fontsize=12)
        ax.set_ylabel("Number of Admissions", fontsize=12)
        ax.set_xticklabels(ax.get_xticklabels(), rotation=45, ha='right')
        for p in ax.patches:
            ax.annotate(f'{p.get_height()}', 
                    (p.get_x() + p.get_width() / 2., p.get_height()), 
                    ha='center', va='bottom', fontsize=10)
    
        sns.despine()
        st.pyplot(fig)
with tab2:
    st.subheader("🛏️ Patient-Level Predictions")

    X_los = df[['age','month','year','gender','is_rural','admission_type',
                'has_hypertension','has_acs','has_diabetes']]
    le = LabelEncoder()
    y_los = le.fit_transform(df['los_category'])

    los_model = RandomForestClassifier(
        n_estimators=300, max_depth=8, random_state=42
    )
    los_model.fit(X_los, y_los)

    los_input = pd.DataFrame([[age,month,year,gender_enc,rural,
                               admission_enc,b(has_hypertension),
                               b(has_acs),b(has_diabetes)]],
                             columns=X_los.columns)
    los_pred = le.inverse_transform(los_model.predict(los_input))[0]

    X_common = [
        'age','gender','is_rural','admission_type','is_smoker','uses_alcohol',
        'has_diabetes','has_hypertension','has_ckd','has_heart_failure',
        'has_acs','has_shock','has_chest_infection','month','year'
    ]

    input_common = pd.DataFrame([[age,gender_enc,rural,admission_enc,
                                  b(is_smoker),b(uses_alcohol),
                                  b(has_diabetes),b(has_hypertension),
                                  b(has_ckd),b(has_heart_failure),
                                  b(has_acs),b(has_shock),
                                  b(has_chest_infection),month,year]],
                                columns=X_common)

    em_model = LogisticRegression(max_iter=1000, solver="liblinear")
    em_model.fit(df[X_common], df['is_emergency'])
    em_pred = em_model.predict(input_common)[0]

    icu_model = LogisticRegression(max_iter=1000, solver="liblinear")
    icu_model.fit(df[X_common], df['icu_required'])
    icu_pred = icu_model.predict(input_common)[0]

    out_model = LogisticRegression(max_iter=1000, solver="liblinear")
    out_model.fit(df[X_common], df['outcome_enc'])
    out_pred = out_model.predict(input_common)[0]

    c1, c2, c3, c4 = st.columns(4)
    c1.metric("🛏️ LOS", los_pred)
    c2.metric("🚨 Emergency Risk", "High" if em_pred else "Low")
    c3.metric("🚑 ICU Required", "Yes" if icu_pred else "No")
    c4.metric("🏥 Outcome", "Discharged" if out_pred else "Expired")

    report_df = pd.DataFrame([{
        "Age": age, "Gender": gender, "Residence": residence,
        "Admission Type": admission_type,
        "Smoking": is_smoker, "Alcohol Use": uses_alcohol,
        "Diabetes": has_diabetes, "Hypertension": has_hypertension,
        "CKD": has_ckd, "Heart Failure": has_heart_failure,
        "ACS": has_acs, "Shock": has_shock,
        "Chest Infection": has_chest_infection,
        "Predicted LOS": los_pred,
        "Emergency Risk": em_pred,
        "ICU Required": icu_pred,
        "Outcome": out_pred
    }])
    if em_pred == 1 and icu_pred == 1:
        st.warning("⚠️ High clinical risk detected. Emergency admission and ICU care likely.")
    elif em_pred == 1:
        st.warning("⚠️ Elevated emergency admission risk detected.")
    elif icu_pred == 1:
        st.warning("⚠️ ICU admission may be required based on patient condition.")
    else:
        st.success("✅ Patient condition appears stable based on model predictions.")

    st.download_button(
        "⬇️ Download Prediction Report",
        report_df.to_csv(index=False),
        "patient_prediction_report.csv"
    )

with tab3:
    st.subheader("⚖️ Responsible ML & Limitations")
    st.markdown("""
    - Models learn from historical data patterns only  
    - Predictions are **not** for clinical decision-making  
    - Emphasis on interpretability and ethical AI  
    """)
    st.info("✔ Responsible and transparent machine learning approach")
st.markdown(
    """
    <div class="footer">
        © 2026 Alfiya Ansari
    </div>
    """,
    unsafe_allow_html=True
)
