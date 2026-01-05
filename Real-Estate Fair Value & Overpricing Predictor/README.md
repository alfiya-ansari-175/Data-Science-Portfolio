# 🏘️ Real-Estate Fair Value & Overpricing Predictor

**Uncertainty-Aware Property Valuation | End-to-End ML System**

> ML system that estimates **fair market value**, **confidence intervals**, and **overpricing risk** for residential properties using **tree-based models, quantile regression, and production deployment**.

---

## 🔍 Problem

Real-estate prices are noisy, seller-biased, and highly location-dependent.
Point predictions hide uncertainty and provide little decision support.

**Goal:**
Predict fair value **and** quantify uncertainty to support buying, investing, and negotiation decisions.

---

## 🎯 Solution

* Predict **fair market value** (median estimate)
* Estimate **uncertainty bands** (P10–P90)
* Detect **overpriced / underpriced** listings
* Deploy as an **interactive web application**

---

## 🧠 Approach

### Models

* **XGBoost Regressor** → strong point-estimate baseline
* **LightGBM Quantile Regression** → uncertainty modeling (P10, P50, P90)

### Why Quantiles?

* Real estate valuation is a **risk problem**, not just regression
* Quantiles expose downside and upside risk directly

---

## 📊 Key Insights from EDA

* **Living area is the strongest price anchor**, but the relationship is **non-linear**
  → Marginal value per square meter decreases for large properties, especially in luxury segments.

* **Property condition primarily affects price *uncertainty*, not just the mean**
  → Renovated and new properties show tight price distributions, while poor-condition properties exhibit wide variance.

* **Location dominates all other features**
  → The same property characteristics can result in significantly different prices depending on municipality and state.
  National averages are misleading.

* **Renovation premiums are location-dependent**
  → Renovation increases value in strong markets but cannot compensate for weak geographic fundamentals.

* **Room count is a weak standalone predictor**
  → Layout efficiency matters more than the number of rooms; rooms act as a secondary signal after living area.

* **New construction carries a premium, but overlaps heavily with renovated stock**
  → Construction status alone does not justify large price differences.

* **Energy and heating systems act as value modifiers, not primary drivers**
  → Modern systems slightly shift prices but rarely dominate valuation.

* **Market trend indicators show limited linear impact**
  → Short-term sentiment is less predictive than structural property and location features.

* **Poor-condition properties introduce the highest valuation risk**
  → These listings require wider confidence intervals and are more prone to overpricing.

* **Price dispersion within regions is often larger than between regions**
  → Reinforces the need for non-linear models and uncertainty-aware predictions.


---

## ⚙️ ML Pipeline

* Robust preprocessing with shared train/serve pipelines
* Median & mode imputation
* One-hot encoding with unseen-category handling
* Tree-based models for non-linear interactions

---

## ⏱️ Validation Strategy

* **Time-aware cross-validation**
* Prevents future data leakage
* Reflects real deployment conditions

---

## 📈 Evaluation

Metrics:

* MAE / RMSE (accuracy)
* Pinball loss (quantile quality)
* Interval coverage (uncertainty reliability)

**Result:**
Predicted P10–P90 intervals capture the true price ~99% of the time.

---

## 🌐 Deployment

* **Flask web application**
* Model artifacts persisted with `joblib`
* Stateless, real-time inference
* Safe input mapping & preprocessing

### Output

* Lower confidence bound
* Fair market value
* Upper confidence bound
* Overpricing percentage
* Human-readable recommendation

![Dataset Preview](https://github.com/alfiya-ansari-175/Data-Science-Portfolio/blob/c9c3f2306d19f2379b131b4201e61fbf0198cff6/Real-Estate%20Fair%20Value%20%26%20Overpricing%20Predictor/visuals/Output.png)
---

## 🧾 Overpricing Logic

```
Overpricing (%) = (Listing Price − Fair Value) / Fair Value × 100
```

| Deviation   | Interpretation           |
| ----------- | ------------------------ |
| ≤ −5%       | Underpriced              |
| −5% to +5%  | Fair                     |
| +5% to +15% | Slightly Overpriced      |
| > +15%      | Significantly Overpriced |

---

## 🛠️ Tech Stack

* Python
* Pandas / NumPy
* Scikit-learn Pipelines
* XGBoost
* LightGBM
* Flask

---

## 🧠 What This Demonstrates

* Advanced feature reasoning & EDA
* Non-linear ML modeling
* Quantile-based uncertainty estimation
* Time-aware validation
* Production-ready ML deployment

------------------------------------------------------------------------

## 📁 Project Structure

    ├── Dataset/                # Source dataset (not included here)
    ├── visuals/                # Exploratory data analysis screenshots
    ├── Notebooks/              # Jupyter notebooks for analysis
    ├── README.md               # Project documentation


------------------------------------------------------------------------
## 📷 Visualizations 

### 🖼 Screenshot 1 -- Distribution of Property Listings Across German Federal States

![Dataset Preview](https://github.com/alfiya-ansari-175/Data-Science-Portfolio/blob/c9c3f2306d19f2379b131b4201e61fbf0198cff6/Real-Estate%20Fair%20Value%20%26%20Overpricing%20Predictor/visuals/Image-1.png)

### 🖼 Screenshot 2 --Top 10 Districts in Germany by Number of Property Listings

![Dataset Preview](https://github.com/alfiya-ansari-175/Data-Science-Portfolio/blob/c9c3f2306d19f2379b131b4201e61fbf0198cff6/Real-Estate%20Fair%20Value%20%26%20Overpricing%20Predictor/visuals/Image-2.png)

### 🖼 Screenshot 3 -- Distribution of Property Construction Year and Tredns
![Dataset Preview](https://github.com/alfiya-ansari-175/Data-Science-Portfolio/blob/c9c3f2306d19f2379b131b4201e61fbf0198cff6/Real-Estate%20Fair%20Value%20%26%20Overpricing%20Predictor/visuals/Image-3.png)

### 🖼 Screenshot 4 -- Log-Transformed Purchase Prices by Property Condition (New vs. Existing Construction)

![Dataset Preview](https://github.com/alfiya-ansari-175/Data-Science-Portfolio/blob/c9c3f2306d19f2379b131b4201e61fbf0198cff6/Real-Estate%20Fair%20Value%20%26%20Overpricing%20Predictor/visuals/Image-4.png)

### 🖼 Screenshot 5 -- Number of Properties by Condition and Construction Type (New vs. Existing)

![Dataset Preview](https://github.com/alfiya-ansari-175/Data-Science-Portfolio/blob/c9c3f2306d19f2379b131b4201e61fbf0198cff6/Real-Estate%20Fair%20Value%20%26%20Overpricing%20Predictor/visuals/Image-5.png)

------------------------------------------------------------------------
## 🔮 Next Steps

* SHAP-based explainability
* Cloud deployment (AWS/GCP)
* REST API service

------------------------------------------------------------------------

## 📄 License

This project is for educational and analytical purposes only.

------------------------------------------------------------------------

**Created by: *Alfiya Ansari***
