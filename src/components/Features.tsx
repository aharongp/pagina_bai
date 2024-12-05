export default function Features() {
  return (
    <section className="py-16 px-4 bg-[#050505]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <div className="inline-block bg-black px-6 py-2 rounded-full mb-4">
            <span className="text-white font-semibold">Ahorra tiempo</span>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">
              Ahorra tiempo{' '}
              <br />
              automatizando{' '}
              <span className="text-blue-500">flujos de</span>
              <br />
              <span className="text-blue-500">trabajo con IA</span>
            </h2>
            <p className="text-gray-400 mb-6">
              Reducir los errores y tener más eficiencia aumentará la productividad de tu empresa y podrás invertir el tiempo en lo que realmente importa
            </p>
            <ul className="space-y-4">
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Personalizable
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Automatizable
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Reduce los costos
              </li>
            </ul>
            <button className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
              Agendar consultoría GRATIS
            </button>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
              alt="Analytics Dashboard"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}