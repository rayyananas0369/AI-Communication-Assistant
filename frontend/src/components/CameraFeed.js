import { useRef, useState } from "react";

export default function CameraFeed({ setOutputText }) {
  const videoRef = useRef(null);
  const [stream, setStream] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const handleStartClick = () => {
    setShowPopup(true);
  };

  const handleAllow = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = mediaStream;
      setStream(mediaStream);

      // send sample frame for testing
      setInterval(() => {
        if (videoRef.current) {
          const canvas = document.createElement("canvas");
          canvas.width = videoRef.current.videoWidth;
          canvas.height = videoRef.current.videoHeight;
          canvas.getContext("2d").drawImage(videoRef.current, 0, 0);
          const frame = canvas.toDataURL("image/jpeg");
          setOutputText(frame);
        }
      }, 1000);
    } catch (err) {
      console.error("Camera access denied", err);
    }
    setShowPopup(false);
  };

  const handleDeny = () => setShowPopup(false);

  const stopCamera = () => {
    if (stream) {
      stream.getTracks().forEach((track) => track.stop());
      setStream(null);
      setOutputText("Camera stopped.");
    }
  };

  return (
    <div className="p-6 bg-white rounded-2xl shadow-md text-center">
      <h2 className="text-xl font-bold mb-4">Camera</h2>
      <video
        ref={videoRef}
        autoPlay
        playsInline
        muted
        className="w-full h-80 md:h-[500px] bg-black rounded-lg object-cover mb-4 transform -scale-x-100"
      />
      <div className="flex justify-center gap-4 mb-2">
        <button
          onClick={handleStartClick}
          className="px-5 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600"
        >
          Start
        </button>
        <button
          onClick={stopCamera}
          className="px-5 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600"
        >
          Stop
        </button>
      </div>

      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-2xl shadow-xl text-center w-96">
            <h2 className="text-xl font-bold mb-4 text-indigo-600">Security Check</h2>
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
    </div>
  );
}
