import React, { useState } from "react";

function VideoPredictor() {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState("");
  const [mode, setMode] = useState("lipreading"); // "lipreading" or "sign"

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async () => {
    if (!file) {
      alert("Please select a video file first.");
      return;
    }

    const formData = new FormData();
    formData.append("video", file);

    const endpoint =
      mode === "lipreading"
        ? "http://localhost:8000/predict/lipreading"
        : "http://localhost:8000/predict/sign";

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      setResult(data.prediction);
    } catch (error) {
      console.error("Error fetching prediction:", error);
      setResult("Error occurred. Check backend.");
    }
  };

  return (
    <div>
      <h2>Video Prediction ({mode})</h2>

      <select value={mode} onChange={(e) => setMode(e.target.value)}>
        <option value="lipreading">Lip Reading</option>
        <option value="sign">Sign Language</option>
      </select>

      <input type="file" onChange={handleFileChange} />
      <button onClick={handleSubmit}>Predict</button>

      {result && <p>Prediction: {result}</p>}
    </div>
  );
}

export default VideoPredictor;
