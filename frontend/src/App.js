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
      {/* Header */}
      <header className="text-center py-6 bg-indigo-600 text-white shadow-lg">
        <h1 className="text-2xl font-bold">AI Communication Assistant</h1>
        <p className="text-sm">
          Multimodal AI for hearing and speech impaired users
        </p>
      </header>

      {/* Mode Toggle */}
      <ModeToggle onModeChange={handleModeChange} />

      {/* Main Section */}
      <main className="max-w-5xl mx-auto p-6 grid md:grid-cols-2 gap-6 flex-grow">
        <CameraFeed />
        <OutputBox />
      </main>

      {/* Features Section */}
      <section className="max-w-5xl mx-auto p-6">
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
