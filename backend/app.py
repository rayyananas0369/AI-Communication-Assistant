from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse

app = FastAPI()

# Frontend access allow cheyyuka
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Lip Reading Endpoint
@app.post("/predict/lipreading")
async def predict_lip(file: UploadFile = File(...)):
    text = "Predicted lip reading text"
    return JSONResponse(content={"text": text})

# Sign Language Endpoint
@app.post("/predict/sign")
async def predict_sign(file: UploadFile = File(...)):
    text = "Predicted sign language text"
    return JSONResponse(content={"text": text})
