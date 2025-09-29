<<<<<<< HEAD
=======
import { useRef, useState } from "react";
>>>>>>> 62c66d1 (Initial commit)
import ModeToggle from "./components/ModeToggle";
import CameraFeed from "./components/CameraFeed";
import OutputBox from "./components/OutputBox";
import Features from "./components/Features";

function App() {
  const handleModeChange = (mode) => {
    console.log("Selected mode:", mode);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
<<<<<<< HEAD
      {/* Header */}
      <header className="text-center py-6 bg-indigo-600 text-white shadow-lg">
        <h1 className="text-2xl font-bold">AI Communication Assistant</h1>
        <p className="text-sm">
          Multimodal AI for hearing and speech impaired users
        </p>
=======
      {/* Header with centered heading and right-side About button */}
      <header className="flex flex-col md:flex-row justify-between items-center px-8 py-6 bg-indigo-600 text-white shadow-lg">
        {/* Heading center */}
        <div className="flex-1 flex flex-col items-center md:items-center text-center">
          <h1 className="text-3xl font-bold mb-1">AI Communication Assistant</h1>
          <p className="text-md md:text-lg text-indigo-100">
            Multimodal AI for hearing and speech impaired users
          </p>
        </div>

        {/* About button on right side */}
        <nav className="mt-4 md:mt-0">
          <a
            href="#about"
            className="bg-white text-indigo-600 font-semibold px-4 py-2 rounded shadow hover:bg-indigo-50 hover:scale-105 transition-transform duration-200"
          >
            About
          </a>
        </nav>
>>>>>>> 62c66d1 (Initial commit)
      </header>

      {/* Mode Toggle */}
      <ModeToggle onModeChange={handleModeChange} />

      {/* Main Section */}
<<<<<<< HEAD
      <main className="max-w-5xl mx-auto p-6 grid md:grid-cols-2 gap-6 flex-grow">
=======
      <main className="max-w-6xl mx-auto p-6 grid md:grid-cols-2 gap-6 flex-grow">
>>>>>>> 62c66d1 (Initial commit)
        <CameraFeed />
        <OutputBox />
      </main>

      {/* Features Section */}
<<<<<<< HEAD
      <section className="max-w-5xl mx-auto p-6">
=======
      <section id="about" className="max-w-6xl mx-auto p-6">
>>>>>>> 62c66d1 (Initial commit)
        <Features />
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 text-center py-4 mt-8">
        <p>
          Multimodal AI Communication Assistant © 2023 | For Hearing and Speech
          Impaired Users
        </p>
      </footer>
    </div>
  );
}

export default App;
