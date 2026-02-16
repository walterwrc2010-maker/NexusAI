
import React from 'react';

const testimonials = [
  {
    name: "Ricardo Oliveira",
    role: "CEO na TechScale",
    content: "Implementamos um agente de qualificação de leads e nosso custo por lead qualificado caiu 40% no primeiro mês. Inacreditável.",
    avatar: "RO"
  },
  {
    name: "Mariana Costa",
    role: "Diretora de Operações",
    content: "Os workflows automatizados da NexusAI economizam mais de 60 horas por mês para meu time de suporte. Atendimento 24h sem erros.",
    avatar: "MC"
  },
  {
    name: "Carlos Mendes",
    role: "Fundador da GrowAgency",
    content: "A Nexus não entrega apenas tecnologia, eles entregam estratégia. Nossos agentes agora tomam decisões que antes exigiam um gestor.",
    avatar: "CM"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">O que dizem nossos <span className="text-indigo-400">Clientes</span></h2>
          <p className="text-slate-400">Resultados reais com inteligência aplicada.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="glass-morphism p-8 rounded-3xl border border-white/5 hover:border-indigo-500/30 transition-all duration-500">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center font-bold text-white shadow-lg">
                  {t.avatar}
                </div>
                <div>
                  <h4 className="font-bold text-slate-100">{t.name}</h4>
                  <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">{t.role}</p>
                </div>
              </div>
              <p className="text-slate-300 leading-relaxed italic">"{t.content}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
