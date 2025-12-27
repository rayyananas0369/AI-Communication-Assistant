import numpy as np
from ultralytics import YOLO
from tensorflow.keras.models import load_model

# Load models once (VERY IMPORTANT)
sign_model = YOLO("models/sign_model.pt")
lip_model = load_model("models/lip_model.h5")

SIGN_CLASSES = ["Hello", "Yes", "No", "Thank You"]
LIP_CLASSES = ["HELLO", "GOOD", "MORNING"]


def predict_sign(frames):
    if len(frames) == 0:
        return "No hands detected"

    results = sign_model(frames[0])
    class_id = int(results[0].boxes.cls[0])
    return SIGN_CLASSES[class_id]


def predict_lip(frames):
    if len(frames) == 0:
        return "No lips detected"

    frames = np.expand_dims(frames, axis=0)
    prediction = lip_model.predict(frames)
    class_id = np.argmax(prediction)
    return LIP_CLASSES[class_id]
