import { Bot } from 'lucide-react';

export default function Header() {
  return (
    <header className="text-center py-12 px-4">
      <div className="flex justify-center mb-4">
        <Bot className="w-12 h-12" />
      </div>
      <h1 className="text-4xl font-bold mb-4">
        Te ahorramos <span className="text-blue-500">horas</span> de trabajo con IA
      </h1>
      <p className="text-gray-600 mb-8">
        Te ayudamos a automatizar tareas repetitivas de tu negocio, ahorrar
        <br />
        horas de trabajo y costos
      </p>
      <div className="aspect-video max-w-3xl mx-auto bg-black rounded-lg mb-8"></div>
      <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
        Agendar consultoría GRATIS
      </button>
    </header>
  );
}