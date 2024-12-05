import { Bot } from 'lucide-react';

export default function CallToAction() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-3xl mx-auto bg-[#0A0A1B] rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">
          ¿Listo para llevar tu negocio al siguiente nivel?
        </h2>
        <p className="text-gray-400 mb-8">
          Experimenta cómo nunca lo has hecho negocio. Automatiza, escala, ahorra tiempo y dinero conectando todo tu negocio con IA.
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
          Agendar consultoría GRATIS
        </button>
        <div className="flex justify-center items-center gap-4 mt-6">
          <Bot className="w-6 h-6" />
          <div className="flex gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
            <div className="w-2 h-2 rounded-full bg-blue-500"></div>
            <div className="w-2 h-2 rounded-full bg-purple-500"></div>
          </div>
        </div>
      </div>
    </section>
  );
}