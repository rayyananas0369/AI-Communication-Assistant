import cv2
import numpy as np
import mediapipe as mp
import tempfile
import os

mp_face_mesh = mp.solutions.face_mesh.FaceMesh(
    static_image_mode=False,
    max_num_faces=1,
    refine_landmarks=True
)

def extract_frames(video_bytes, size=(224, 224)):
    with tempfile.NamedTemporaryFile(delete=False, suffix=".mp4") as tmp:
        tmp.write(video_bytes)
        video_path = tmp.name

    cap = cv2.VideoCapture(video_path)
    frames = []

    while cap.isOpened():
        ret, frame = cap.read()
        if not ret:
            break
        frame = cv2.resize(frame, size)
        frames.append(frame)

    cap.release()
    os.remove(video_path)

    return frames


def preprocess_sign(video_bytes):
    frames = extract_frames(video_bytes)
    return np.array(frames) / 255.0


def preprocess_lip(video_bytes):
    frames = extract_frames(video_bytes, size=(112, 112))
    lip_frames = []

    for frame in frames:
        rgb = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
        result = mp_face_mesh.process(rgb)

        if result.multi_face_landmarks:
            lip_frames.append(frame)

    return np.array(lip_frames) / 255.0
