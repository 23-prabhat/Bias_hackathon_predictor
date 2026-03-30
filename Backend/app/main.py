from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import pickle
import numpy as np

from app.schemas.input_schema import InputData
from app.utils.preprocess import preprocess

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

model = pickle.load(open("app/model/model.pkl", "rb"))

FEATURES = ['Team_Lead', 'Presentation_By', 'Round_Reached', 'Total_Hours']


@app.get("/")
def home():
    return {"message": "API is running 🚀"}


@app.post("/predict")
def predict(data: InputData):
    try:
        data_dict = data.dict()

        processed = preprocess(data_dict)

        values = [processed[feature] for feature in FEATURES]

        values = np.array(values).reshape(1, -1)

        prediction = model.predict(values)

        return {
            "prediction": int(prediction[0])
        }

    except Exception as e:
        return {
            "error": str(e)
        }