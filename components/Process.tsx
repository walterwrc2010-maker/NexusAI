
import React from 'react';

const steps = [
  {
    number: '01',
    title: 'Mapeamento de Processos',
    description: 'Analisamos seus gargalos operacionais e identificamos onde a IA terá o maior ROI imediato.'
  },
  {
    number: '02',
    title: 'Arquitetura do Agente',
    description: 'Configuramos a personalidade, as ferramentas e o acesso aos dados que seu Agente precisará.'
  },
  {
    number: '03',
    title: 'Integração de Workflows',
    description: 'Conectamos o Agente ao seu CRM, ERP, Slack ou WhatsApp via automações robustas.'
  },
  {
    number: '04',
    title: 'Escala e Otimização',
    description: 'Monitoramos a performance e refinamos o Agente para que ele aprenda com cada interação.'
  }
];

const Process: React.FC = () => {
  return (
    <section id="process" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Como <span className="text-indigo-500">Transformamos</span> sua Empresa</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">Um método validado para implementar inteligência artificial sem fricção.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="relative group">
              <div className="mb-4 text-6xl font-black text-white/5 group-hover:text-indigo-500/10 transition-colors">
                {step.number}
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-100">{step.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
              <div className="absolute -left-4 top-0 bottom-0 w-[1px] bg-gradient-to-b from-indigo-500/50 to-transparent"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
