<<<<<<< HEAD
export default function OutputBox() {
  return (
    <div className="p-4 bg-white rounded-2xl shadow-md">
      <h2 className="text-lg font-bold mb-2">Output</h2>
      <textarea
        readOnly
        placeholder="Waiting for recognition..."
        className="w-full h-40 p-3 border rounded-lg bg-gray-50"
      />
      <button className="mt-3 px-4 py-2 bg-green-500 text-white rounded-lg shadow">
        Copy Text
      </button>
=======
import { useState } from "react";

export default function OutputBox() {
  const [text, setText] = useState("");

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
  };

  const handleClear = () => {
    setText("");
  };

  return (
    <div className="p-4 bg-white rounded-2xl shadow-md flex flex-col h-full">
      <h2 className="text-lg font-bold mb-2">Output</h2>
      <textarea
        readOnly
        value={text}
        placeholder="Waiting for recognition..."
        className="w-full flex-grow h-64 md:h-[300px] p-3 border rounded-lg bg-gray-50 resize-none"
      />
      <div className="flex gap-3 mt-3">
        <button
          onClick={handleCopy}
          className="px-4 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600"
        >
          Copy Text
        </button>
        <button
          onClick={handleClear}
          className="px-4 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600"
        >
          Clear Text
        </button>
      </div>
>>>>>>> 62c66d1 (Initial commit)
    </div>
  );
}
