from pydantic import BaseModel

class InputData(BaseModel):
    Team_Lead: str
    Presentation_By: str
    Round_Reached: int
    Total_Hours: int
    hackathon_name: str | None = None