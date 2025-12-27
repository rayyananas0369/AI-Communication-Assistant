import os

def allowed_video(filename):
    return filename.endswith((".mp4", ".avi", ".mov"))

def ensure_dir(path):
    if not os.path.exists(path):
        os.makedirs(path)
