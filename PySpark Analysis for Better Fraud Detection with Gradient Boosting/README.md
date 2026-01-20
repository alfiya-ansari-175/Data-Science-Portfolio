
# 📊 PySpark Analysis for Better Fraud Detection with Gradient Boosting

Performed scalable fraud detection using PySpark for data preprocessing and feature engineering, and applied Gradient Boosting for classification, with Pandas and Seaborn for model evaluation and visualization.

## 📁 Dataset

- **Source:** Dataset attached.
- **Format:** CSV
  
## 🚀 Project Objectives

- Perform data preprocessing and feature encoding using PySpark
- Build a classification model to predict employee attrition
- Evaluate model performance with evaluation metrices such as accuracy,precision,recall and more.

## 🛠️ Technologies Used

- Apache Spark (PySpark)
- PySpark MLlib (Classification, Feature Engineering, Pipelines)
- Jupyter Notebook / Google Colab

## 🔄 Workflow Summary

1. **Data Loading & Preprocessing**
   - Loaded the dataset using SparkSession
   - Dropped unnecessary columns
   - Converted categorical variables using StringIndexer and OneHotEncoder
   - Created a pipeline for transformation

2. **Feature Vectorization**
   - Combined all features into a single vector using VectorAssembler
   - Performed employee attrition analysis using PySpark for scalable preprocessing and modeling, with Pandas and Seaborn for visual evaluation and interpretation.

3. **Model Building**
   - Split data into training and test sets
   - Trained a **Logistic Regression** model to classify employee attrition
   - Evaluated with metrics such as accuracy and ROC
     
4. **Model Evaluation**
   - Checked model predictions using MulticlassClassificationEvaluator and BinaryclassClassificationEvaluator
   - Generated a confusion matrix and calculated accuracy

## 📈 Key Insights

- Feature engineering with PySpark pipelines simplifies large-scale processing
- Logistic Regression provides a baseline for attrition classification
- Accuracy and confusion matrix help assess prediction performance effectively

## 📌 Future Improvements

- Explore more models: Random Forest, Gradient Boosted Trees
- Include feature importance ranking
- Add visualizations after converting Spark DataFrames to Pandas

## 👤 Author

**Alfiya Ansari**  
Master’s in Web and Data Science – University of Koblenz
