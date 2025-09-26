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
    </div>
  );
}
