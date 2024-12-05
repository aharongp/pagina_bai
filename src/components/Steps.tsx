interface Step {
  number: string;
  title: string;
  description: string;
}

export default function Steps() {
  const steps: Step[] = [
    {
      number: "1",
      title: "Agenda tu llamada",
      description: "Agenda una consultoría con uno de nuestros expertos en IA"
    },
    {
      number: "2",
      title: "Obtén una estrategia",
      description: "En la llamada analizaremos tu negocio para desarrollar una estrategia efectiva con IA"
    },
    {
      number: "3",
      title: "Presupuesto",
      description: "Con el análisis detallado creamos un presupuesto a la medida de tu negocio"
    },
    {
      number: "4",
      title: "Último paso",
      description: "Implementación de las soluciones para empezar rápidamente y posible test integral"
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-8">¿Cómo empezar?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div key={step.number} className="bg-[#0A0A1B] p-6 rounded-xl">
              <div className="text-blue-500 font-bold text-xl mb-2">{step.number}. {step.title}</div>
              <p className="text-gray-400">{step.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
            Agendar consultoría GRATIS
          </button>
        </div>
      </div>
    </section>
  );
}