import { useRef, useState } from "react";

export default function CameraFeed() {
  const videoRef = useRef(null);
  const [stream, setStream] = useState(null);
  const [facingMode, setFacingMode] = useState("user"); // "user" = front, "environment" = rear

  const startCamera = async () => {
    const mediaStream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode },
    });
    videoRef.current.srcObject = mediaStream;
    setStream(mediaStream);
  };

  const stopCamera = () => {
    if (stream) {
      stream.getTracks().forEach((track) => track.stop());
      setStream(null);
    }
  };

  const toggleCamera = () => {
    stopCamera();
    setFacingMode((prev) => (prev === "user" ? "environment" : "user"));
    setTimeout(startCamera, 300); // small delay to restart
  };

  return (
    <div className="p-4 bg-white rounded-2xl shadow-md">
      <h2 className="text-lg font-bold mb-2">Camera Feed</h2>
      <video
        ref={videoRef}
        autoPlay
        playsInline
        className="w-full h-64 bg-gray-200 rounded-lg transform scale-x-[-1]" 
      ></video>
      <div className="flex justify-center gap-4 mt-3">
        <button
          onClick={startCamera}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow"
        >
          Start
        </button>
        <button
          onClick={stopCamera}
          className="px-4 py-2 bg-red-500 text-white rounded-lg shadow"
        >
          Stop
        </button>
        <button
          onClick={toggleCamera}
          className="px-4 py-2 bg-purple-500 text-white rounded-lg shadow"
        >
          Switch
        </button>
      </div>
    </div>
  );
}
