# 🚨 Fraud Transaction Analysis using MongoDB (NoSQL) & Python ETL

This project performs **fraud detection analysis** on a large-scale financial transactions dataset using **MongoDB (NoSQL)** and **Python-based ETL pipelines**.  
The analysis is driven by **MongoDB aggregation queries** implemented in `MongoDB_Query.js`.

---

## 📌 Project Overview

- **Database**: MongoDB (NoSQL)
- **ETL**: Python
- **Query Language**: MongoDB Aggregation Framework
- **Dataset**: `dataset.csv`
- **Scale**: 6+ million transactions
- **Goal**: Identify fraud patterns, risk indicators, and transaction anomalies

---

## 📂 Repository Structure

* `MongoDB_Query.js`– Coding file contains all the mongodb queries
* `ETL.ipynb` – Python code file for dataset Extraction, Transformation, and Loading pipeline
* `dataset.csv` – Dataset
* `README.md` – (this file)

---

## 🧾 Dataset Description (`dataset.csv`)

Each row represents a single financial transaction.

### 📊 Dataset Columns

| Column Name         | Description |
|---------------------|-------------|
| `step`              | Time step of the transaction |
| `type`              | Transaction type (CASH_IN, CASH_OUT, TRANSFER, PAYMENT, DEBIT) |
| `amount`            | Transaction amount |
| `nameOrig`          | Origin account ID |
| `oldbalanceOrg`     | Origin account balance before transaction |
| `newbalanceOrig`    | Origin account balance after transaction |
| `nameDest`          | Destination account ID |
| `oldbalanceDest`    | Destination account balance before transaction |
| `newbalanceDest`    | Destination account balance after transaction |
| `isFraud`           | Indicates actual fraud (1 = fraud, 0 = non-fraud) |
| `isFlaggedFraud`    | Indicates system-flagged fraud (1 = flagged, 0 = not flagged) |

---

## 🔄 ETL Pipeline (Python)

1. Load `dataset.csv`
2. Clean and validate data
3. Transform data into MongoDB-compatible documents
4. Insert data into MongoDB collections
5. Index key fields for faster aggregation

---

## 🔍 Fraud Transaction Analysis Report

### **Dataset Overview**

- **Total Transactions**: 6,362,620
- **Fraudulent Transactions**: 8,213 (≈0.129% of total transactions)
- **Non-Fraudulent Transactions**: 6,354,407

> **Insight**: The dataset is highly imbalanced, with fraud being very rare. Any predictive model will need to account for this class imbalance.

---

## **1. Transaction Amount Analysis**

| Metric              | Overall       | Fraud        | Non-Fraud     |
|---------------------|--------------|--------------|---------------|
| Maximum Transaction | 92,445,516.64 | 10,000,000   | 92,445,516.64 |
| Minimum Transaction | 0             | 0            | 0.01          |
| Average Transaction | 179,861.90    | 1,467,967.30 | 178,197.04    |

> **Insight**:
- Fraud transactions have a **much higher average amount** than non-fraud transactions (≈8× higher).
- The **largest fraud transaction** was a TRANSFER of 10,000,000.
- Legitimate transactions show a wide variance in amounts.

---

## **2. Fraud by Amount**

| Amount Range | Fraud Rate |
|--------------|------------|
| 0–100        | 0.1276%    |
| 100–500      | 0.0597%    |
| 500–1,000    | 0.0084%    |
| 1,000–5,000  | 0.0186%    |
| 5,000–10,000 | 0.0199%    |
| >10,000      | 0.1563%    |

> **Insight**: Fraud is disproportionately **higher in very high-value transactions**, while mid-range transactions show lower fraud rates.

---

## **3. Fraud Distribution by Transaction Type**

| Transaction Type | Fraud Count |
|------------------|-------------|
| CASH_OUT         | 4,116       |
| TRANSFER         | 4,097       |
| PAYMENT          | 0           |
| DEBIT            | 0           |
| CASH_IN          | 0           |

> **Insight**:
- **CASH_OUT** and **TRANSFER** dominate fraud occurrences.
- Other transaction types appear safe in this dataset.

---

## **4. Fraud by Step (Time-Based Analysis)**

- **Total steps with fraud**: 741
- **Highest fraud steps**:
  - Step 398 → 26 frauds
  - Step 22 → 23 frauds
  - Step 362 → 20 frauds

> **Insight**: Fraud is **clustered in specific time steps**, indicating temporal fraud hotspots.

---

## **5. Flagged vs Actual Fraud**

- Transactions flagged as fraud: **16**
- Actual fraud transactions: **8,213**
- False positives: **0**

> **Insight**: The current fraud flagging mechanism is **almost completely ineffective**, missing the majority of fraud cases.

---

## **6. Origin and Destination Account Analysis**

### Top Origin Accounts (Most Transactions)

| Account ID | Transaction Count |
|------------|------------------|
| C1832548028 | 3 |
| C1677795071 | 3 |
| C1976208114 | 3 |

> **Insight**: Fraud is **distributed across many accounts**, not concentrated in a few.

### Top Destination Accounts Receiving Fraud

| Account ID | Fraud Count |
|------------|-------------|
| C475338087 | 2 |
| C1780714769 | 2 |
| C1827219533 | 2 |
| C410033330 | 2 |
| C643624257 | 2 |

> **Insight**: Fraudulent funds are spread across multiple destination accounts, suggesting **money laundering or smurfing behavior**.

---

## **7. Balance Analysis**

- Transactions with negative origin balance difference: **1,399,253**
- Average balance difference for fraud: **1,457,274.97**
- Fraud transactions with zero destination balance before transfer: **5,351**

> **Insight**:
- Fraud often involves **large balance withdrawals**
- Destination accounts frequently start with **zero balance**, indicating clean or mule accounts

---

## **8. Key Observations**

1. Fraud is **rare but high-value**
2. **CASH_OUT and TRANSFER** are high-risk
3. Fraud flagging is highly ineffective
4. Fraud occurs in **specific steps and patterns**
5. Zero-balance destination accounts are common in fraud

---

## **9. Recommendations**

1. Implement **step-based fraud monitoring**
2. Prioritize **CASH_OUT and TRANSFER** verification
3. Use **anomaly detection models** on amounts and balances
4. Improve fraud flagging for **high-value transactions**
5. Track **zero-balance destination accounts** for laundering risks

---

## 🚀 Technologies Used

- Python (ETL)
- MongoDB
- MongoDB Aggregation Framework
- JavaScript (MongoDB queries)

---

## 📌 Future Enhancements

- Machine learning fraud prediction models
- Real-time fraud detection pipelines
- Visualization dashboards (Power BI / Tableau)

---


# 👤 Created by

### **Alfiya Ansari**

---

⭐ If you find this project useful, consider starring the repository!
