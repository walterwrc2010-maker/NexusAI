import React from 'react';

const services = [
  {
    title: 'Agentes de Atendimento (WhatsApp/Instagram)',
    description:
      'Agentes treinados com o contexto da sua empresa para responder clientes 24/7, qualificar conversas e encaminhar para humano quando necessário.',
    icon: (
      <svg className="w-10 h-10 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    highlight: true,
  },
  {
    title: 'Automações com n8n',
    description:
      'Integramos CRM, planilhas, APIs e ferramentas do dia a dia usando n8n para eliminar tarefas manuais e acelerar sua operação.',
    icon: (
      <svg className="w-10 h-10 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    highlight: false,
  },
  {
    title: 'Agentes de Vendas',
    description:
      'Agentes inteligentes que qualificam leads, respondem dúvidas e agendam reuniões automaticamente para sua equipe.',
    icon: (
      <svg className="w-10 h-10 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    highlight: false,
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="scroll-mt-24 py-24 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
            Nossas <span className="text-indigo-500">Soluções</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Automação inteligente com agentes de IA e integrações reais com n8n.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className={`p-10 rounded-[2.5rem] border transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl ${service.highlight
                  ? 'bg-indigo-600/10 border-indigo-500/30 ring-1 ring-indigo-500/20 hover:shadow-indigo-500/10'
                  : 'bg-white/[0.03] border-white/10 hover:border-white/20 hover:shadow-black/50'
                }`}
            >
              <div className="mb-8 p-3 bg-white/5 inline-block rounded-2xl border border-white/10">
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-slate-400 leading-relaxed text-base">
                {service.description}
              </p>

              {service.highlight && (
                <div className="mt-8">
                  <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-[0.2em] bg-indigo-500/10 px-4 py-1.5 rounded-full border border-indigo-500/20">
                    Destaque: Atendimento 24/7
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
