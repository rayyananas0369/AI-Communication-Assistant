# 📌 Project Plan & Task Division

## Project: Multimodal AI Communication Assistant

---

## Phase 1: Setup
- [x] Create GitHub repository
- [x] Add README.md
- [x] Define folder structure
- [ ] Add documentation files (SRS, TEAM, PLAN)

---

## Phase 2: Individual Work
### Ardra (UI/UX)
- Design frontend wireframes and layouts
- Build responsive website (mobile + desktop)
- Implement mode toggle (Lip Reading / Sign Language)
- Handle camera permissions (front/back camera)

### Rayyan (Backend)
- Setup FastAPI backend
- Develop API endpoints for lip reading and sign recognition
- Integrate models with backend

### Angel (Backend)
- Work on authentication and session handling (if required)
- Assist Rayyan with API integration

### Nithya (AI Models)
- Preprocess datasets (Lip Reading: Bengali + English, Sign Language: English)
- Train lip reading model (3D-CNN + BiLSTM)
- Train sign recognition model (YOLOv8)
- Export trained models for backend integration

---

## Phase 3: Integration
- Connect frontend with backend APIs
- Test real-time lip reading → text output
- Test real-time sign recognition → text output
- Display results clearly in UI

---

## Phase 4: Documentation & Testing
- Prepare `docs/SRS.md` (requirements, design, architecture)
- Write user manual for end-users
- Conduct testing with multiple devices (laptop, mobile)
- Fix bugs and performance issues

---

## Future Work
- Add support for multiple languages
- Build mobile app version
- Add offline functionality
- Extend dataset for more sign languages
