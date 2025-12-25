# 📊 Statistical Analysis of International T20 Cricket Batting Performance

## 🎯 Project Overview

This project presents a **comprehensive statistical and exploratory analysis** of international T20 cricket batting performance.  
The objective is to uncover **distributional patterns, performance inequality, efficiency vs opportunity trade-offs, and career effects** using descriptive statistics, visualization, and hypothesis testing.

🔹 Pure **statistics & EDA** project  
🔹 **No machine learning**  
🔹 Insight-driven, data-backed conclusions  

---

## 📂 Repository Structure

```text
├── CricketAnalysis.ipynb
│   └── Coding file containing all the statistical analysis and testing.
├── cricket_t20_data.csv
│   └── Dataset
└── README.md
    └── Project documentation (this file)
```


## 📂 Dataset Summary

The dataset consists of **career-level T20 batting statistics** of international cricketers, including:

- Runs, strike rate, batting average  
- Balls faced, innings, matches  
- Boundaries (fours & sixes)  
- Duck outs, not-outs, dismissal status  
- Career span and longevity indicators  

---

## 📊 Key Insights from Visual Analysis

### 1️⃣ Structural Inequality in T20 Batting  
Run distributions are extremely right-skewed, with a small elite group dominating career runs. Large mean–median gaps show averages overstate typical performance.  
📌 **Insight:** T20 batting success follows inequality patterns similar to income or productivity distributions.

### 2️⃣ Strike Rate Stability Across Players  
Strike rate exhibits a compact interquartile range (~100–120), with very few extreme outliers.  
📌 **Insight:** Scoring efficiency converges at the professional level.

### 3️⃣ Batting Average Is Rare and Volatile  
Batting averages show strong skew and dispersion, with very few players sustaining averages above 40–50.  
📌 **Insight:** Consistency is statistically rarer and more fragile than strike-rate efficiency.

### 4️⃣ Opportunity Dominates Run Accumulation  
Runs vs balls faced, innings, and matches show near-linear relationships, especially for balls faced and innings.  
📌 **Insight:** Career runs depend more on opportunity than per-ball efficiency.

### 5️⃣ Strike Rate Affects Speed, Not Volume  
Runs vs strike rate plots show high dispersion and weak-to-moderate trends.  
📌 **Insight:** Strike rate controls scoring speed, not long-term run totals.

### 6️⃣ Longevity Amplifies Performance  
Runs increase steadily with matches and innings; earlier debut eras dominate cumulative runs due to longer careers.  
📌 **Insight:** Longevity widens performance gaps.

### 7️⃣ Boundary Scoring Drives Runs  
Runs vs total boundaries show an almost perfectly linear relationship.  
📌 **Insight:** T20 scoring is fundamentally boundary-driven.

### 8️⃣ Fours vs Sixes  
Fours are frequent and stable; sixes are rarer and separate elite batters.  
📌 **Insight:** Fours provide consistency; sixes create separation.

### 9️⃣ Power Hitting Increases Variability  
Dismissed innings show wider strike-rate spreads and extreme values.  
📌 **Insight:** Aggression introduces a measurable risk–reward trade-off.

### 🔟 Not-Outs Have Structural Impact  
Not-out innings show higher upper run extremes and increase with career length.  
📌 **Insight:** Not-outs inflate averages and enable extreme scores.

### 1️⃣1️⃣ Duck Outs Are Rare but Costly  
Duck distributions are skewed toward zero, but repeated ducks suppress averages and efficiency.  
📌 **Insight:** Avoiding early dismissal is a key differentiator.

### 1️⃣2️⃣ Era Effects Are Visible  
Modern players show higher strike rates, while earlier eras dominate cumulative runs.  
📌 **Insight:** T20 cricket has structurally evolved toward aggression.

---

## 🧪 Hypothesis Testing & Statistical Inference

Formal hypothesis testing was conducted to statistically validate patterns observed during exploratory data analysis. Appropriate parametric and non-parametric tests were applied based on data characteristics.

### 📊 Summary of Hypothesis Test Results

| Research Question | Statistical Test | Key Result | Conclusion |
|------------------|-----------------|-----------|------------|
| Does strike rate differ between high-run and low-run scorers? | Independent two-sample *t*-test | *t* = 18.7129, *p* < 0.001 | High-run scorers have significantly higher strike rates |
| Is strike rate correlated with total runs scored? | Pearson correlation | *p* < 0.001 | Strike rate is significantly associated with total runs |
| Is the number of balls faced correlated with total runs? | Spearman correlation | ρ = 0.9837, *p* < 0.001 | Balls faced is the strongest predictor of runs |
| Do high strike-rate players face a different number of balls? | Welch’s *t*-test | *t* = 17.4738, *p* < 0.001 | Aggressive batters face a statistically different number of balls |
| Is highest score different between high- and low-average batters? | Mann–Whitney U | U = 961,259, *p* < 0.001 | High-average batters achieve higher peak scores |
| Is innings played correlated with total runs? | Spearman correlation | ρ = 0.8980, *p* < 0.001 | Innings played strongly predicts run accumulation |
| Does run-scoring consistency differ by batting average? | Levene’s test | 281.38, *p* < 0.001 | Run variability differs across average groups |
| Do six-heavy batters have different strike rates? | Welch’s *t*-test | *t* = 35.8063, *p* < 0.001 | Six-heavy batters sustain higher strike rates |
| Do century-makers hit more boundaries? | Mann–Whitney U | *p* < 0.001 | Century-makers hit significantly more boundaries |
| Is strike rate higher for players with 50+ scores? | Welch’s *t*-test | *t* = 24.4180, *p* < 0.001 | Consistent scorers maintain higher strike rates |
| Is strike rate correlated with boundary count? | Pearson correlation | *r* ≈ 0.33, *p* ≪ 0.001 | Boundary frequency moderately increases strike rate |
| Is batting average associated with duck outs? | Spearman correlation | *p* < 0.001 | Duck outs significantly suppress batting average |
| Do players with fewer ducks have different strike rates? | Welch’s *t*-test | *p* < 0.001 | Fewer ducks correspond to higher strike rates |
| Is batting average correlated with not-out rate? | Pearson correlation | *r* ≈ −0.28, *p* < 0.001 | Not-out frequency materially impacts averages |
| Do high not-out players have higher batting averages? | Mann–Whitney U | *p* < 0.001 | Remaining not-out elevates batting average |
| Is career length correlated with total runs? | Spearman correlation | ρ ≈ 0.49, *p* ≪ 0.001 | Longer careers accumulate more runs |
| Do players differ in boundary rate per ball (controlled)? | Kruskal–Wallis H | H ≈ 510, *p* = 0.492 | Boundary efficiency per ball is similar across players |
| Is batting average associated with career longevity? | Spearman correlation | ρ ≈ 0.286, *p* < 0.001 | Longevity moderately improves batting average |
| Do batting averages differ across boundary groups? | Kruskal–Wallis H | H ≈ 1311, *p* ≪ 0.001 | Boundary frequency differentiates batting quality |
| Do strike rates differ by number of centuries? | Kruskal–Wallis H | H ≈ 79.9, *p* < 0.001 | Players with more centuries have higher strike rates |

---

## 🧠 Final Takeaway

**T20 batting success is multi-dimensional.**  
It emerges from the interaction of:

- Opportunity (balls faced, innings, career length)  
- Boundary-heavy scoring  
- Controlled aggression  
- Avoidance of early dismissals  
- Longevity and adaptability  

Efficiency metrics influence scoring behavior, but **long-term dominance is driven by volume and consistency**, not strike rate alone.

---

## 🛠 Tools & Techniques Used

- Python, Pandas, NumPy  
- Matplotlib, Seaborn  
- Descriptive statistics & EDA  
- KDE, boxplots, violin plots  
- Correlation, regression & hypothesis testing  

-- 
## 👩‍💻 Author

**Alfiya Ansari**
📌 Data Science & Analytics Enthusiast
🔗 GitHub: **alfiya-ansari-175**
