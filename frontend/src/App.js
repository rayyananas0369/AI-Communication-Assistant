import { useState } from "react";
import ModeToggle from "./components/ModeToggle";
import CameraFeed from "./components/CameraFeed";
import OutputBox from "./components/OutputBox";
import Features from "./components/Features";
import VideoPredictor from "./components/VideoPredictor"; // add this

function App() {
  const [mode, setMode] = useState("lip"); // default mode for camera
  const [output, setOutput] = useState("");

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <header className="flex flex-col md:flex-row justify-between items-center px-8 py-6 bg-indigo-600 text-white shadow-lg">
        <div className="flex-1 flex flex-col items-center text-center">
          <h1 className="text-3xl font-bold mb-1">Talkify AI</h1>
          <p className="text-md md:text-lg text-indigo-100">
            Multimodal AI for hearing and speech impaired users
          </p>
        </div>
        <nav className="mt-4 md:mt-0">
          <a
            href="#about"
            className="bg-white text-indigo-600 font-semibold px-4 py-2 rounded shadow hover:bg-indigo-50 hover:scale-105 transition-transform duration-200"
          >
            About
          </a>
        </nav>
      </header>

      {/* Mode Toggle for Camera Feed */}
      <ModeToggle onModeChange={setMode} />

      {/* Main Section: Camera Feed + Output + Video Predictor */}
      <main className="max-w-6xl mx-auto p-6 grid md:grid-cols-2 gap-6 flex-grow">
        {/* Existing Camera Feed */}
        <CameraFeed mode={mode} setOutputText={setOutput} />
        <OutputBox text={output} />

        {/* Video Upload Prediction */}
        <div className="col-span-full mt-6">
          <VideoPredictor />
        </div>
      </main>

      {/* Features Section */}
      <section id="about" className="max-w-6xl mx-auto p-6">
        <Features />
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 text-center py-4 mt-8">
        <p>Talkify AI © 2025 | For Hearing and Speech Impaired Users</p>
      </footer>
    </div>
  );
}

export default App;
