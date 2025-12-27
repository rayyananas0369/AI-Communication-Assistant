from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware

from utils.preprocess import preprocess_sign, preprocess_lip
from utils.inference import predict_sign, predict_lip

app = FastAPI(title="Talkify AI Backend")

# Allow frontend (React) access
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def root():
    return {"status": "Talkify AI Backend Running"}

# ---------------- SIGN LANGUAGE ----------------
@app.post("/predict/sign")
async def predict_sign_language(video: UploadFile = File(...)):
    video_bytes = await video.read()

    frames = preprocess_sign(video_bytes)
    prediction = predict_sign(frames)

    return {
        "mode": "sign",
        "prediction": prediction
    }

# ---------------- LIP READING ----------------
@app.post("/predict/lip")
async def predict_lip_reading(video: UploadFile = File(...)):
    video_bytes = await video.read()

    frames = preprocess_lip(video_bytes)
    prediction = predict_lip(frames)

    return {
        "mode": "lip",
        "prediction": prediction
    }
