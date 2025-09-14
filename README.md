🧑‍🤝‍🧑 Multimodal AI Communication Assistant for Hearing and speech Impaired Users(Web App)

The AI Communication Assistant is a Multimodal AI Communication Assistant for Hearing and speech Impaired Users website designed to help people with hearing and speech impairments communicate more effectively. The system combines Sign Language Recognition and Lip Reading with real-time video processing. It can convert sign language gestures into English text and can also interpret spoken English and Bengali lip movements into English text. The website allows users to toggle between different modes and displays real-time output from video input.


✨ Features

This website provides several important features that make communication easier for hearing and speech-impaired users:

The system can convert sign language gestures into English text in real time, making it easier for non-signers to understand the conversation.

The system includes a lip reading module that recognizes lip movements in both English and Bengali and translates them into English text.

The user can toggle between lip reading mode and sign recognition mode, depending on the communication context.

The system uses a camera for real-time video capturing and displays the translated output immediately, which ensures smooth and natural communication.

📂 Project Structure

The repository is organized into the following main directories and files:

frontend/ → This folder contains the website user interface, which has been developed using React . It is responsible for the layout, design, and user interaction of the web application.

backend/ → This folder contains the server-side code that has been developed using  FastAPI. It manages the APIs, connects with AI models, and handles requests from the frontend.

models/ → This directory contains the trained AI models, including the Lip Reading model and the Sign Language Recognition model. These models process video input and produce text output.

docs/ → This folder stores project documentation, such as the Software Requirement Specification (SRS), design documents, and other reports.

README.md → This file contains the project introduction, features, structure, setup instructions, and other useful information for users and developers.