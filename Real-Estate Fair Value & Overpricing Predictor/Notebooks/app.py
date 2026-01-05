from flask import Flask, render_template, request
import pandas as pd
import joblib

app = Flask(__name__)
models = joblib.load("lgbm_quantile_models.pkl")

def predict_property(models, input_df):
    p10 = models[0.1].predict(input_df)[0]
    p50 = models[0.5].predict(input_df)[0]
    p90 = models[0.9].predict(input_df)[0]

    return {
        "lower_ci": round(float(p10), 0),
        "fair_value": round(float(p50), 0),
        "upper_ci": round(float(p90), 0),
    }

def pricing_message(overpricing):
    if overpricing <= -5:
        return {
            "status": "good",
            "message": "✅ This property appears to be UNDERPRICED. It represents a strong buying opportunity based on current market data."
        }
    elif -5 < overpricing <= 5:
        return {
            "status": "fair",
            "message": "🟡 This property is FAIRLY PRICED and closely aligns with the estimated market value."
        }
    elif 5 < overpricing <= 15:
        return {
            "status": "warning",
            "message": "🟠 This property is SLIGHTLY OVERPRICED. There may be room for negotiation."
        }
    else:
        return {
            "status": "overpriced",
            "message": "🔴 This property is SIGNIFICANTLY OVERPRICED compared to similar properties in the market."
        }

@app.route("/", methods=["GET", "POST"])
def index():
    result = None
    overpricing = None
    pricing_insight = None

    if request.method == "POST":
        form = request.form

        # Model-safe input mapping
        data = {
            # Location
            "federal_state": form.get("federal_state", ""),
            "district": form.get("district", ""),
            "municipality": form.get("municipality", ""),
            "zip_code": int(form.get("zip_code", 0)),

            # Property
            "property_condition": form.get("property_condition", ""),
            "year_built": int(form.get("year_built", 0)),
            "is_new_construction": form.get("is_new_construction", "No"),

            "living_area_sqm": float(form.get("living_area_sqm", 0)),
            "num_rooms": float(form.get("num_rooms", 0)),

            "has_cellar": form.get("has_cellar", "No"),
            "is_barrier_free": form.get("is_barrier_free", "No"),

            # Heating
            "heating_type": form.get("heating_type", "no_information"),
            "firing_type": form.get("firing_type", "no_information"),

            # Market & Infra
            "price_trend_buy": float(form.get("price_trend_buy", 0)),
            "internet_download_mbps": float(form.get("internet_download_mbps", 0)),

            "has_tv_offer": form.get("has_tv_offer", "No"),
            "has_internet": form.get("has_internet", "No"),
            "exclusive_listing": form.get("exclusive_listing", "No"),
        }

        input_df = pd.DataFrame([data])
        result = predict_property(models, input_df)

        listing_price = form.get("listing_price")
        if listing_price:
            overpricing = round(((float(listing_price) - result["fair_value"]) / result["fair_value"]) * 100,2)
            pricing_insight = pricing_message(overpricing)

    return render_template(
        "index.html",
        result=result,
        overpricing=overpricing,
        pricing_insight=pricing_insight
    )

if __name__ == "__main__":
    app.run(debug=True)
