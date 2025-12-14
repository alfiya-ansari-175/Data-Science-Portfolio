# Netflix Content Analysis using MySQL

## 📌 Project Overview
This project performs an **end-to-end exploratory and analytical study of Netflix Movies & TV Shows data** using **MySQL, SQL queries, and Python (Pandas)**. The goal is to uncover **content trends, regional patterns, genre dominance, rating distributions, and time-based insights** from Netflix’s catalog.

This project is designed as a **resume-ready data analytics project**, demonstrating:
- SQL proficiency (aggregation, filtering, joins, subqueries, window functions)
- Data cleaning and preprocessing
- Business-oriented analytical thinking
- Integration of Python with MySQL

---
## 📂 Dataset
- **Source:** Kaggle – *Netflix Movies and TV Shows Dataset*  
  https://www.kaggle.com/datasets/shivamb/netflix-shows  
- **File Name:** `netflix_titles.csv`  
- **Total Records:** ~8,800 Netflix titles  
- **Key Columns:**  
  - `show_id` – Unique identifier  
  - `type` – Movie or TV Show  
  - `title` – Name of the content  
  - `director`, `cast` – Creative contributors  
  - `country` – Production country  
  - `date_added` – Date added to Netflix  
  - `release_year` – Original release year  
  - `rating` – Content maturity rating  
  - `duration` – Movie runtime / TV show seasons  
  - `listed_in` – Genres  
  - `description` – Content summary  

---

## 🛠️ Tech Stack
- **Database:** MySQL  
- **Languages:** SQL, Python  
- **Libraries:** Pandas, SQLAlchemy, ipython-sql  
- **Environment:** Jupyter Notebook  

---

## 🔄 Project Workflow
1. Load Netflix dataset using Pandas  
2. Perform data understanding and cleaning  
3. Create MySQL connection  
4. Load cleaned data into MySQL  
5. Perform 40+ SQL analytical queries  
6. Generate business-driven insights  

---

## 🧹 Data Cleaning & Preparation (Cell-wise Insights)

### 1️⃣ Library Imports
- Imported **pandas** for data handling and analysis  
- Imported **sqlalchemy** for database connectivity  

### 2️⃣ MySQL Connection Setup
- Established a connection between Jupyter Notebook and MySQL using **ipython-sql**  
- Enabled direct execution of SQL queries inside notebook cells  

### 3️⃣ Dataset Loading
- Loaded **`netflix_titles.csv`** into a Pandas DataFrame  
- Displayed the first few rows to understand dataset structure  

### 4️⃣ Dataset Shape
- Checked the number of rows and columns to assess dataset size  

### 5️⃣ Dataset Information
- Reviewed column data types  
- Identified null values and memory usage  

### 6️⃣ Missing Value Analysis
- Counted missing values in each column  
- Observed high null counts in **director, cast, and country** columns  

### 7️⃣ Handling Missing Values
- Replaced missing values with **'Unknown'**  
- Ensured data consistency before loading into MySQL  

### 8️⃣ Date Formatting
- Converted **date_added** into proper datetime format  
- Extracted **year and month** for time-based analysis  

---

## 📈 Key Business Insights
1. Netflix’s catalog is **movie-dominant**, but TV Shows show steady year-over-year growth.  
2. Rapid catalog expansion began after **2015**, aligning with global market growth.  
3. **2018–2020** represents Netflix’s most aggressive content expansion phase.  
4. The **United States** is the largest contributor to Netflix content.  
5. **India** ranks among the top contributors, driven mainly by movie production.  
6. Rising **international content** confirms Netflix’s global expansion strategy.  
7. **Dramas** are the most dominant genre across Movies and TV Shows.  
8. **International Movies** highlight Netflix’s focus on localized storytelling.  
9. **Comedies** ensure consistent mass appeal across regions.  
10. **TV-MA** is the most common rating, indicating a strong mature-audience focus.  
11. **TV-14** content reflects Netflix’s emphasis on teen and young-adult viewers.  
12. Family-friendly content (TV-Y, TV-Y7) forms a **separate strategic segment**.  
13. Most movies fall within the **90–120 minute** duration range.  
14. Average movie duration remains stable across release years.  
15. Most TV Shows have **1–2 seasons**, showing a trial-based content strategy.  
16. Only a few shows grow into long-running multi-season series.  
17. Some countries focus more on **Movies**, while others prefer **episodic TV Shows**.  
18. Genre diversity is highest in the **US, India, and UK**.  
19. Missing metadata highlights **real-world data quality challenges**.  
20. Overall trends show Netflix follows a **data-driven experimentation approach**.

--

## 📁 Repository Structure

* `Netflix Content Analysis using MySQL.ipynb` – Coding File
* `netflix_titles.csv` – Dataset
* `README.md` – (this file)

---

## 🚀 How to Run the Project
1. Clone the repository  
2. Import the dataset into your system  
3. Create a MySQL database named `netflix`  
4. Update MySQL credentials in the notebook  
5. Run notebook cells sequentially  

---


# 👤 Created by

### **Alfiya Ansari**

---

⭐ If you find this project useful, feel free to star the repository!
