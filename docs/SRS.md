# 📑 Software Requirement Specification (SRS)
## Project: Multimodal AI Communication Assistant for Hearing and speech Impaired Users(Web App)

---

## 1. Introduction

### 1.1 Purpose
The purpose of this project is to build an **Multimodal AI Communication Assistant for Hearing and speech Impaired Users(Web App)** for hearing and speech impaired users.  
It will support two modes: **Lip Reading** (Bengali + English) and **Sign Language Recognition** (English).  
The system will convert video input into text output in real-time.

### 1.2 Scope
- Web-based system (works on mobile and desktop browsers).
- Mode toggle for Lip Reading or Sign Language.
- Camera access (front for lip reading, back for sign language).
- Backend powered by AI models.
- Real-time text display on the frontend.

### 1.3 Definitions
- **Lip Reading**: Recognizing speech by analyzing lip movements.
- **Sign Recognition**: Interpreting hand gestures using computer vision.
- **FastAPI/Flask**: Python backend frameworks.
- **YOLOv8**: Object detection model for sign recognition.
- **3D-CNN + BiLSTM**: Deep learning architecture for lip reading.

---

## 2. Overall Description

### 2.1 Product Perspective
- Frontend: Responsive website (React/HTML5/JS).
- Backend: FastAPI/Flask for handling API requests.
- AI Models: Lip reading (Bengali/English) and sign recognition (English).
- Database: Only for model storage and logs (no user signup).

### 2.2 Product Functions
- User selects mode (Lip Reading / Sign Language).
- System asks for camera permission.
- Video is captured and sent to backend.
- AI model processes frames and returns text output.
- Text is displayed in real-time on the screen.

### 2.3 User Characteristics
- Primary Users: Hearing and speech impaired individuals.
- Secondary Users: Teachers, friends, or general public.

### 2.4 Constraints
- Requires camera access.
- Internet connection needed for backend API.
- Works only with supported browsers (Chrome, Firefox, Edge).

---

## 3. System Requirements

### 3.1 Functional Requirements
1. The system shall capture video using the user’s camera.
2. The system shall allow switching between front and back camera.
3. The system shall process lip reading (Bengali + English).
4. The system shall process sign language recognition (English).
5. The system shall return text output to frontend in real-time.

### 3.2 Non-Functional Requirements
- **Performance**: Response time < 1 second.
- **Usability**: Simple, accessible interface.
- **Reliability**: System should not crash during long use.
- **Scalability**: Should support multiple users.
- **Security**: Ask user permission before camera access.

---

## 4. System Design (High-Level)


- Frontend handles UI and video capture.
- Backend handles preprocessing, model inference.
- Models convert video → text.
- Output text displayed in real-time.

---

## 5. Future Enhancements
- Add support for more Indian and international languages.
- Offline model execution for low connectivity areas.
- Add voice output for generated text.
- Mobile app (Android/iOS).

---

## 6. References
- Papers on Lip Reading (3D-CNN + BiLSTM).
- YOLOv8 documentation for gesture recognition.
- OpenCV documentation for video preprocessing.
- TensorFlow & PyTorch libraries.
