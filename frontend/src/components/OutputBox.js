export default function OutputBox({ text }) {
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
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
      </div>
    </div>
  );
}
