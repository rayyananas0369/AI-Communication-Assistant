import { useState } from "react";

export default function ModeToggle({ onModeChange }) {
  const [mode, setMode] = useState("lip");

  const handleToggle = (selectedMode) => {
    setMode(selectedMode);
    onModeChange(selectedMode);
  };

  return (
    <div className="flex justify-center space-x-4 my-4">
      <button
        onClick={() => handleToggle("lip")}
        className={`px-6 py-2 rounded-lg font-semibold shadow 
          ${mode === "lip" ? "bg-blue-600 text-white" : "bg-gray-200"}`}
      >
        Lip Reading
      </button>
      <button
        onClick={() => handleToggle("sign")}
        className={`px-6 py-2 rounded-lg font-semibold shadow 
          ${mode === "sign" ? "bg-blue-600 text-white" : "bg-gray-200"}`}
      >
        Sign Language
      </button>
    </div>
  );
}
