def preprocess(data: dict):
    mapping = {
        "Prabhat": 0,
        "Krutarth": 1
    }

    data["Team_Lead"] = mapping.get(data["Team_Lead"], 2)
    data["Presentation_By"] = mapping.get(data["Presentation_By"], 2)

    return data