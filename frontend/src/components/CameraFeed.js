import { useRef, useState } from "react";

export default function CameraFeed() {
  const videoRef = useRef(null);
  const [stream, setStream] = useState(null);
<<<<<<< HEAD
  const [facingMode, setFacingMode] = useState("user"); // "user" = front, "environment" = rear

  const startCamera = async () => {
    const mediaStream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode },
    });
    videoRef.current.srcObject = mediaStream;
    setStream(mediaStream);
  };

=======
  const [showPopup, setShowPopup] = useState(false);

  // Start button pressed → show popup
  const handleStartClick = () => {
    setShowPopup(true);
  };

  // Allow → start camera
  const handleAllow = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = mediaStream;
      setStream(mediaStream);
    } catch (err) {
      console.error("Camera access denied", err);
    }
    setShowPopup(false);
  };

  // Deny → just close popup
  const handleDeny = () => {
    setShowPopup(false);
  };

  // Stop camera
>>>>>>> 62c66d1 (Initial commit)
  const stopCamera = () => {
    if (stream) {
      stream.getTracks().forEach((track) => track.stop());
      setStream(null);
    }
  };

<<<<<<< HEAD
  const toggleCamera = () => {
    stopCamera();
    setFacingMode((prev) => (prev === "user" ? "environment" : "user"));
    setTimeout(startCamera, 300); // small delay to restart
  };

  return (
    <div className="p-4 bg-white rounded-2xl shadow-md">
      <h2 className="text-lg font-bold mb-2">Camera Feed</h2>
=======
  return (
    <div className="p-4 bg-white rounded-2xl shadow-md text-center">
      <h2 className="text-lg font-bold mb-2">Camera</h2>

      {/* Mirrored & bigger video */}
>>>>>>> 62c66d1 (Initial commit)
      <video
        ref={videoRef}
        autoPlay
        playsInline
<<<<<<< HEAD
        className="w-full h-64 bg-gray-200 rounded-lg transform scale-x-[-1]" 
      ></video>
      <div className="flex justify-center gap-4 mt-3">
        <button
          onClick={startCamera}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow"
=======
        muted
        className="w-full h-80 md:h-[500px] bg-black rounded-lg object-cover mb-3 transform -scale-x-100"
      />

      <div className="flex justify-center gap-4">
        <button
          onClick={handleStartClick}
          className="px-4 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600"
>>>>>>> 62c66d1 (Initial commit)
        >
          Start
        </button>
        <button
          onClick={stopCamera}
<<<<<<< HEAD
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
=======
          className="px-4 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600"
        >
          Stop
        </button>
      </div>

      {/* Security Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-2xl shadow-xl text-center w-96">
            <h2 className="text-xl font-bold mb-4 text-indigo-600">
              Security Check
            </h2>
            <p className="mb-6 text-gray-700">
              Do you want to allow camera access for this application?
            </p>
            <div className="flex gap-4 justify-center">
              <button
                onClick={handleAllow}
                className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
              >
                Allow
              </button>
              <button
                onClick={handleDeny}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
              >
                Deny
              </button>
            </div>
          </div>
        </div>
      )}
>>>>>>> 62c66d1 (Initial commit)
    </div>
  );
}
