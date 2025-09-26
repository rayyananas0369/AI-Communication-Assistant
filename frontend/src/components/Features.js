import { Hand, Eye, Accessibility, Repeat } from "lucide-react";

export default function Features() {
  const features = [
    {
      title: "Sign Language Recognition",
      desc: "Real-time translation of sign language gestures into text using advanced AI models.",
      icon: <Hand className="w-8 h-8 text-yellow-500 mx-auto" />,
    },
    {
      title: "Lip Reading Technology",
      desc: "Cutting-edge lip reading algorithms convert visual speech into written text.",
      icon: <Eye className="w-8 h-8 text-red-500 mx-auto" />,
    },
    {
      title: "Accessibility Focused",
      desc: "Designed specifically for hearing and speech impaired users with intuitive controls.",
      icon: <Accessibility className="w-8 h-8 text-blue-500 mx-auto" />,
    },
    {
      title: "Multi-mode Operation",
      desc: "Toggle between different input modes based on your needs and preferences.",
      icon: <Repeat className="w-8 h-8 text-green-500 mx-auto" />,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
      {features.map((f, idx) => (
        <div
          key={idx}
          className="p-4 bg-white rounded-2xl shadow-md text-center flex flex-col items-center"
        >
          {f.icon}
          <h3 className="font-bold text-lg mt-2">{f.title}</h3>
          <p className="text-gray-600 text-sm">{f.desc}</p>
        </div>
      ))}
    </div>
  );
}
