# 📊 Bayut Property Sales Intelligence

### **Real-Estate Analytics Dashboard (Tableau) + SQL/Python Data Cleaning**

This project analyzes residential property listings from **Bayut** to uncover price patterns, market behavior, and city-level differences across the UAE.
A complete **data-cleaning workflow** was performed using SQL & Python, followed by in-depth **visual analytics in Tableau**.

---

## 🖼️ Dashboard Preview

![Dashboard Preview](https://github.com/alfiya-ansari-175/Data-Science-Portfolio/blob/f839675d1b991b6845a095f1ff6c5857ee400a1a/Tableau%20-%20Bayut%20Property%20Sales%20Intelligence/Images/Dashboard.png)

---

## 🧹 Data Cleaning (Python + SQL)

### **Summary of the Python Code**

1. **Load Dataset**
   Reads the file `bayut_selling_properties.csv` into a pandas DataFrame.

2. **Remove Rows with Missing Data**
   Drops all rows that contain `NaN` values.

3. **Drop High-Null Columns**
   Removes columns that contained **~60% missing values**, including:
   `purpose`, `country`, `address`, `year_of_completion`, `total_parking_spaces`,
   `total_floors`, `total_building_area_sqft`, `elevators`, `average_rent`, `building_name`.

4. **Format Price Values**
   Converts numeric prices into comma-formatted strings—for example:
   `1500000 → "1,500,000"`.

5. **Reorder & Keep Relevant Columns**
   Final cleaned dataset retains only:
   `['type','beds','baths','furnishing','price_category','post_date','city','area_name','Latitude','Longitude','completion_status','price']`

---

# 📊 Tableau Dashboard Overview

The dashboard provides a full breakdown of:

* Total Listings
* Average Price
* Price per Bedroom & Bathroom
* Price Distribution by Property Type
* Annual Price Trends
* City-level Pricing Comparison
* Bedroom & Bathroom Pricing Patterns
* Furnished vs Unfurnished Price Differences

---

# 🔍 Key Insights from the Dashboard

Below is a narrative-style summary derived from the visual analysis.

---

## **1. Market Overview**

* **Total Listings:** ~41,000
* **Average Property Price:** AED 3.79M
* **Avg. Price per Bedroom:** AED 1.59M
* **Avg. Price per Bathroom:** AED 1.16M
* **Total Sales Value:** ~AED 156.7B

📌 *Insight:*
The UAE real-estate market (especially Dubai) shows strong luxury dominance driven by villas, penthouses, and premium communities.

---

## **2. Bedroom Price Categories**

* **Total bedrooms analyzed:** 90,581
* **High price:** 50.33%
* **Medium price:** 33.08%
* **Average price:** 16.59%

📌 *Insight:*
Over **half** of all listings fall into the **high-price** category, reinforcing the premium-heavy nature of the market.

---

## **3. Bathrooms & Property Readiness**

Bubble-chart findings:

* Ready properties cluster in the **mid-to-high price** range.
* Off-plan villas & penthouses dominate **highest-value clusters**.

📌 *Insight:*
Premium off-plan projects drive market spikes—buyers expect higher future value.

---

## **4. Pricing by Property Type**

| Property Type        | Avg Price (AED) |
| -------------------- | --------------- |
| Penthouse            | **23.46M**      |
| Residential Floor    | 22.68M          |
| Residential Building | 14.22M          |
| Villa Compound       | 10.47M          |
| Villa                | 7.93M           |
| Residential Plot     | 5.31M           |
| Townhouse            | 2.96M           |
| Apartment            | 2.53M           |
| Hotel Apartment      | 1.76M           |

📌 *Insight:*
Penthouses and full floors attract ultra-high-net-worth buyers, making them the most profitable segments.

---

## **5. Annual Price Trend**

| Year | Avg Price (AED)   |
| ---- | ----------------- |
| 2021 | 5.60M             |
| 2022 | **13.60M (Peak)** |
| 2023 | 3.75M             |
| 2024 | 3.77M             |

📌 *Insight:*
**2022 saw an extreme price spike**, influenced by:

* Post-COVID investment surge
* Increase in foreign ownership
* Launch of major luxury developments

A return to normal pricing follows in 2023–2024.

---

## **6. Furnished vs Unfurnished Prices**

| Property Status | Unfurnished | Furnished |
| --------------- | ----------- | --------- |
| Off-plan        | **4.04M**   | 3.65M     |
| Ready           | 3.51M       | **4.09M** |

📌 *Insight:*

* Off-plan units cost more when unfurnished (construction premiums).
* Ready units sell at higher prices when **furnished**.

---

## **7. City-Level Comparison**

* **Dubai** leads with the highest prices and largest spread across low/mid/high categories.
* **Abu Dhabi** shows steadier pricing.
* **Sharjah & Ajman** offer affordable markets, with Sharjah showing an emerging luxury spike.
* **Al Ain** remains mostly low-to-mid range.

📌 *Insight:*
Dubai is the UAE’s most premium and volatile real-estate market, while Sharjah and Ajman provide more stable affordability.

---

# 📁 Files Included

* `Bayut_Property_Sales_Intelligence.twb` – Tableau workbook
* `Datasets` – bayut_selling_properties.csv and final_dataset.csv
* `images/` – Dashboard screenshots
* `README.md` – (this file)

---
bayut_selling_properties.csv
# 🚀 How to Use This Project

1. Download the `.twb` Tableau workbook.
2. Open it in **Tableau Desktop** or **Tableau Public**.
3. Explore dashboards, filters, and visuals to understand the market.

---

# 👤 Created by

### **Alfiya Ansari**


