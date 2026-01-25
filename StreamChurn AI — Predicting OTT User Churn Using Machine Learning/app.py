import streamlit as st
import pandas as pd
import joblib
import numpy as np
import plotly.graph_objects as go
from plotly.subplots import make_subplots

st.set_page_config(page_title='Customer Churn Prediction Dashboard', layout='wide', page_icon='🎬')

st.markdown("""
<style>
    .main {
        background-color: #f8f9fa;
        color: #000000;
    }
    .title {
        text-align: center;
        color: #4ECDC4;
        font-size: 42px;
        font-weight: 700;
        margin-top: 20px;
    }
    .subtitle {
        text-align: center;
        color: #B0BEC5;
        font-size: 20px;
        margin-bottom: 30px;
    }
    .footer {
        text-align: center;
        font-size: 12px;
        color: #808080;
        margin-top: 40px;
    }
    [data-testid="stSidebar"] {
        background-color: #1c1f26;
    }
    div.stButton > button {
        background-color: #FF6B6B;
        color: white;
        border-radius: 10px;
        font-weight: bold;
        width: 100%;
        height: 3em;
    }
    div.stButton > button:hover {
        background-color: #FF8C8C;
    }
    div.stAlert {
        border-radius: 10px;
        padding: 15px;
        font-size: 16px;
        font-weight: 500;
    }
    div[data-baseweb="notification"][class*="stAlert warning"] {
        background-color: #FFF4E5 !important;
        color: #8B4513 !important;
        border-left: 6px solid #FFA500 !important;
    }
    div[data-baseweb="notification"][class*="stAlert info"] {
        background-color: #E6F4F1 !important;
        color: #004D40 !important;
        border-left: 6px solid #4ECDC4 !important;
    }
</style>
""", unsafe_allow_html=True)

st.markdown("<h1 class='title'>Customer Churn Prediction Dashboard</h1>", unsafe_allow_html=True)
st.markdown("<p class='subtitle'>Predict whether a customer is likely to churn based on their activity and preferences.</p>", unsafe_allow_html=True)

model = joblib.load('churn_model.pkl')

st.sidebar.header('Input Customer Details')

genre_mapping = {'Action': 0, 'Comedy': 1, 'Documentary': 2, 'Drama': 3, 'Horror': 4, 'Romance': 5}

age = st.sidebar.slider('Age', 10, 100, 30)
monthly_watch_hours = st.sidebar.number_input('Monthly Watch Hours', min_value=0, max_value=300, value=50)
preferred_genre = st.sidebar.selectbox('Preferred Genre', options=list(genre_mapping.keys()))
days_since_last_login = st.sidebar.number_input('Days Since Last Login', 0, 365, 5)
num_devices = st.sidebar.number_input('Number of Devices Registered', 1, 10, 2)
avg_session_duration = st.sidebar.number_input('Average Session Duration (minutes)', 0, 300, 45)
customer_tenure_months = st.sidebar.number_input('Customer Tenure (months)', 0, 120, 12)

input_df = pd.DataFrame({
    'age': [age],
    'monthly_watch_hours': [monthly_watch_hours],
    'preferred_genre': [genre_mapping[preferred_genre]],
    'days_since_last_login': [days_since_last_login],
    'num_devices': [num_devices],
    'avg_session_duration': [avg_session_duration],
    'customer_tenure_months': [customer_tenure_months]
})

if st.sidebar.button('Predict Churn'):
    prediction = model.predict(input_df)[0]
    probability = model.predict_proba(input_df)[0][1]

    st.markdown("---")
    st.subheader("📊 Prediction Result")

    col1, col2 = st.columns(2)

    # Donut Chart
    with col1:
        fig1 = go.Figure(data=[go.Pie(
            labels=['Churn', 'Retain'],
            values=[probability, 1 - probability],
            hole=0.6,
            marker_colors=['red', 'green']
        )])
        fig1.update_layout(
            title="Churn vs Retain Probability",
            showlegend=True,
            plot_bgcolor='#111111',
            paper_bgcolor='#111111',
            font=dict(color='white')
        )
        st.plotly_chart(fig1, use_container_width=True)

    # Comparative Bar Chart
    with col2:
        fig2 = go.Figure(data=[
            go.Bar(name='Churn', x=['Customer'], y=[probability * 100], marker_color='red'),
            go.Bar(name='Retain', x=['Customer'], y=[(1 - probability) * 100], marker_color='green')
        ])
        fig2.update_layout(
            barmode='group',
            title="Churn vs Retention Probability (%)",
            yaxis=dict(range=[0, 100]),
            plot_bgcolor='#111111',
            paper_bgcolor='#111111',
            font=dict(color='white'),
            showlegend=True
        )
        st.plotly_chart(fig2, use_container_width=True)

    if prediction == 1:
        st.error(f"🚨 The customer is **likely to churn** with a probability of {probability:.2%}")
    else:
        st.success(f"✅ The customer is **not likely to churn** with a probability of {1 - probability:.2%}")

    st.markdown("### 👤 Customer Summary")
    summary_col1, summary_col2 = st.columns(2)
    with summary_col1:
        st.write(f"**Age:** {age}")
        st.write(f"**Preferred Genre:** {preferred_genre}")
        st.write(f"**Devices Registered:** {num_devices}")
    with summary_col2:
        st.write(f"**Monthly Watch Hours:** {monthly_watch_hours}")
        st.write(f"**Days Since Last Login:** {days_since_last_login}")
        st.write(f"**Tenure (months):** {customer_tenure_months}")

    st.markdown("### 💡 Recommendations")
    if prediction == 1:
        st.warning("""
        **Retention Suggestions:**
        - Offer a personalized discount or loyalty reward.
        - Recommend trending content in their preferred genre.
        - Send re-engagement notifications or emails.
        - Highlight new features or content they've missed.
        """)
    else:
        st.info("""
        **Engagement Tips:**
        - Continue suggesting content from similar genres.
        - Encourage social sharing or reviews.
        - Reward long-term engagement with badges or perks.
        """)

st.markdown("<div class='footer'>© 2025 StreamChurn AI | Designed by Alfiya Ansari</div>", unsafe_allow_html=True)
