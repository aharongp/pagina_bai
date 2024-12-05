import { MessageSquare, Zap, BarChart3, Code } from 'lucide-react';
import ServiceCard from './ServiceCard';

export default function Services() {
  const services = [
    {
      icon: MessageSquare,
      title: 'Chatbots',
      description: 'Descripción del servicio'
    },
    {
      icon: Zap,
      title: 'Automatizaciones',
      description: 'Descripción del servicio'
    },
    {
      icon: BarChart3,
      title: 'Marketing Ads y SEO',
      description: 'Descripción del servicio'
    },
    {
      icon: Code,
      title: 'Sitios web y APIs',
      description: 'Descripción del servicio'
    }
  ];

  return (
    <section className="py-16 px-4">
      <h2 className="text-center mb-4">
        Automatiza y potencia tu <span className="text-blue-500">negocio</span>
        <br /> con IA
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {services.map((service) => (
          <ServiceCard
            key={service.title}
            Icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </section>
  );
}