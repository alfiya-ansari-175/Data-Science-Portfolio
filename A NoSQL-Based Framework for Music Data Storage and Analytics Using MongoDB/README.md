# A NoSQL-Based Framework for Music Data Storage and Analytics Using MongoDB

---

## 📌 Project Overview

**SpotifyAnalytics** is a large-scale music data analysis project built using **MongoDB (NoSQL)** to explore trends, patterns, and insights from Spotify track data.
The project demonstrates advanced **MongoDB aggregation pipelines**, analytical querying, and real-world data exploration across **85,000+ tracks**.

---

## 🗂 Dataset Information

* **Total Records:** 85,000
* **Release Years:** 2015 – 2025
* **Database Name:** SpotifyAnalytics
* **Collection:** tracks

### Columns Used

`track_id`, `track_name`, `artist_name`, `album_name`, `release_date`,
`genre`, `duration_minutes`, `popularity`, `danceability`, `energy`,
`key`, `loudness`, `mode`, `instrumentalness`, `tempo`, `stream_count`,
`country`, `explicit`, `label`, `release_year`, `popularity_level`

---

## 🛠 Technologies Used

* MongoDB (NoSQL)
* MongoDB Aggregation Framework
* MongoDB Shell / Compass
* Python (ETL pipeline)
* GitHub

---
## 📂 Repository Structure

* `MongoDB.js`– Coding file contains all the mongodb queries
* `ETL.ipynb` – Python code file for dataset Extraction, Transformation, and Loading pipeline
* `spotify_2015_2025_85k.csv` - Dataset
* `README.md` – (this file)

---

## 🔄 ETL Process Report (`ETL_New.ipynb`)

### 1. Introduction

An **ETL (Extract, Transform, Load)** pipeline was implemented using **Python** in the notebook `ETL_New.ipynb` to preprocess Spotify track data before loading it into MongoDB.
This process ensures **data quality, scalability, and efficient querying** for large-scale music analytics.

---

### 2. Extract Phase

* Raw Spotify track data containing **85,000+ records** was loaded into a Pandas DataFrame.
* Python and Pandas were used to efficiently ingest and handle large datasets.
* The extracted data served as the foundation for all transformations.

---

### 3. Transform Phase

#### 3.1 Data Cleaning

* Identified and handled missing or null values.
* Ensured correct data types for numerical, categorical, and date fields.
* Removed redundant or irrelevant attributes.

#### 3.2 Data Standardization

* Standardized column names for consistency.
* Normalized categorical fields such as `genre`, `label`, and `country`.

#### 3.3 Feature Engineering

* Extracted `release_year` from `release_date`.
* Converted track duration into `duration_minutes`.
* Classified tracks into **popularity levels**:

  * **High** (≥ 80)
  * **Medium** (50–79)
  * **Low** (< 50)

#### 3.4 NoSQL Data Structuring

* Converted the cleaned DataFrame into JSON-like documents.
* Structured data to align with MongoDB’s document-based model.

---

### 4. Load Phase

* Connected to MongoDB using **PyMongo**.
* Loaded transformed data into:

  * **Database:** SpotifyAnalytics
  * **Collection:** tracks
* Used bulk insertion for efficient data loading.

---

### 5. ETL Outcome

* Successfully loaded **all 85,000+ records** into MongoDB.
* Data is optimized for:

  * Aggregation pipelines
  * Analytical queries
  * Genre, popularity, and temporal trend analysis

---

## 📊 Key Analysis & Results

### 📌 Dataset Summary

* Total Tracks: 85,000
* Tracks after 2020: 38,412
* Explicit Tracks: 17,113
* Non-Explicit Tracks: 67,887
* Release Year Range: 2015 – 2025

---

### 🔥 Popularity Level Distribution

| Popularity Level | Track Count |
| ---------------- | ----------- |
| High             | 7,119       |
| Medium           | 53,223      |
| Low              | 24,658      |

---

### ⏱ Track Duration Analysis

* Minimum Duration: 2 minutes
* Maximum Duration: 7 minutes
* Average Duration: ~4.26 minutes

---

### 🎶 Top Popular Tracks (Popularity ≥ 90)

* Good anything manager think
* Space
* Of
* Outside former official
* Finally easy exist

Tracks with **Popularity = 100**: **397**

---

### 💃 Danceability & Instrumental Analysis

* Highly Danceable Songs (> 0.7): 25,794
* Highly Instrumental Songs (> 0.7): 10,656

---

### 🎼 Genre Distribution

Top genres by track count:

* Metal – 7,200
* Jazz – 7,177
* Hip-Hop – 7,160
* Classical – 7,158
* Rock – 7,113

---

### 📈 Genre Popularity Ranking (Average)

1. Pop
2. R&B
3. Classical
4. Hip-Hop
5. EDM

---

### 📅 Year-wise Trends

* Most Active Year: 2015 (7,940 tracks)
* Average Popularity: ~48 (stable across years)
* Average Duration: ~4.25 minutes

---

### 🎤 Top Artists by Track Count

| Artist Name     | Total Tracks |
| --------------- | ------------ |
| Michael Smith   | 44           |
| Michael Johnson | 42           |
| David Smith     | 33           |

---

### 🔊 Loudness Analysis

* Loudness Range: -55 dB to -1 dB
* Loudest Tracks: Multiple tracks at -1 dB

---

### 🏷 Label-wise Popularity

Top labels by average popularity:

* Sony Music
* EMI
* Independent
* XL Recordings

---

### 🌍 Country-wise Popularity

Top countries by average popularity:

* United Kingdom
* Japan
* France
* Brazil
* Germany

---

### 📡 Streaming Insights

* Maximum Stream Count: 20 million
* Every label has at least one high-streaming track

---

### 🔗 Energy–Popularity Correlation

* Tracks with **Energy > 0.75 and Popularity > 80**: 629
* High energy contributes to popularity but is not the sole deciding factor.

---

## 📌 Important Insights from the Analysis

* **Popularity is multi-dimensional**, influenced by audio features and contextual factors such as genre, label, and country.
* **High-energy tracks** are more likely to achieve higher popularity, though energy alone does not ensure success.
* **Genre distribution is balanced**, reflecting Spotify’s diverse content ecosystem.
* **Pop and R&B** outperform other genres in average popularity despite not having the highest track counts.
* **Track duration remains consistent** (~4.25 minutes), indicating standardized industry trends.
* **Popularity trends are stable over time**, showing consistent listener behavior across a decade.
* **Non-explicit tracks dominate**, proving explicit content is not essential for mainstream success.
* **Independent labels compete effectively** alongside major labels in producing high-performing tracks.
* **Music popularity is globally distributed**, with strong engagement across Europe, Asia, and South America.
* **Streaming success is not label-restricted**, as every label has at least one high-streaming track.

---

## 👩‍💻 Author

**Alfiya Ansari**
📌 Data Science & Analytics Enthusiast
🔗 GitHub: **alfiya-ansari-175**

⭐ *If you found this project useful, don’t forget to star the repository!*


