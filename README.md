# Hackathon Predictor

Hackathon Predictor is a fun full-stack demo that estimates hackathon outcomes from a small set of inputs. It combines a FastAPI backend with a React + Vite frontend, letting you submit project details in the browser and receive a model prediction in return.

## Overview

This project is intentionally lightweight and experimental. It was built as a hackathon-style prototype to demonstrate a simple end-to-end machine learning workflow, from form input to API prediction to browser output.

The training data came from my personal data, and if you want to provide more, I am open to updating the model. Until then, enjoy this small demotivator: if you are lucky, only then will the prediction say you will win.

## Tech Stack

- Backend: FastAPI, Uvicorn, NumPy, scikit-learn, Pydantic
- Frontend: React, Vite, JavaScript, ESLint
- Model: Pickle-based scikit-learn model

## Project Structure

```text
model_train/
├── Backend/
│   ├── requirements.txt         # Python dependencies for the backend
│   └── app/
│       ├── main.py              # FastAPI app entry point and prediction API routes
│       ├── model/               # Saved trained model files used by the API
│       ├── schemas/
│       │   └── input_schema.py  # Request body validation schema for prediction input
│       └── utils/
│           └── preprocess.py    # Preprocessing logic used before model inference
└── frontend/
    └── Hackathon_predictor/
      ├── package.json         # Frontend package metadata and scripts
      ├── vite.config.js       # Vite build and dev server configuration
        └── src/
         ├── App.jsx          # Main UI container that coordinates the form and result views
            ├── api/
         │   └── predict.js   # Fetch helper that sends form data to the backend API
            └── components/
            ├── Form.jsx     # Input form used to collect hackathon details
            ├── Result.jsx    # Prediction result display modal or panel
            └── RulesCard.jsx # Reference card showing project rules or guidance
```

## What It Does

- Accepts inputs such as team leader, presenter, round reached, and total hours.
- Sends the form data from the React UI to a FastAPI prediction endpoint.
- Returns a simple prediction result in the browser.

## Important Note

**Do not take the output too seriously.** The training data is very limited, and the available data may contain bias. As a result, the model can produce biased predictions and should be treated as a demo rather than a reliable decision-making tool.

In other words, the model is more of a playful guess machine than a serious judge. It is here to entertain, not to decide your destiny.

## Recommended Setup

Before running either part of the project, create and activate a virtual environment for the backend. This keeps the Python dependencies isolated and makes the setup easier to reproduce.

### Backend Setup

1. Open a terminal in the project root and move into the backend folder:

   ```bash
   cd Backend
   ```

2. Create a virtual environment:

   ```bash
   python -m venv .venv
   ```

3. Activate the virtual environment:

    - Windows CMD:

       ```cmd
       .venv\Scripts\activate
       ```

    - Windows PowerShell:

       ```powershell
       .\.venv\Scripts\Activate.ps1
       ```

    - Linux:

       ```bash
       source .venv/bin/activate
       ```

    - macOS:

       ```bash
       source .venv/bin/activate
       ```

4. Install dependencies:

   ```bash
   pip install -r requirements.txt
   ```

5. Start the API server:

   ```bash
   uvicorn app.main:app --reload
   ```

The API will run at `http://127.0.0.1:8000`.

### Frontend Setup

1. Open a terminal in the project root and move into the frontend folder:

   ```bash
   cd frontend/Hackathon_predictor
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

The app will open in the browser and connect to the backend at `http://127.0.0.1:8000/predict`.

## How To Use

1. Fill in the form in the frontend.
2. Select the team leader and presenter.
3. Choose the round reached and total hours.
4. Enter a hackathon name.
5. Click Get Prediction.

## Disclaimer

This is a learning and hackathon-style project. It is designed to be a fun prototype, not a dependable production system. Because the model was trained on very little and potentially biased data, its output may also be biased.

Suggestions are welcome, especially if you want to improve the data, refine the model, or make the predictions less dependent on pure luck.
