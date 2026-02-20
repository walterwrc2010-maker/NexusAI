import React from 'react';
import { Headset, Network, TrendingUp, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
  const solutions = [
    {
      icon: <Headset className="w-6 h-6" />,
      title: "Agentes de Suporte AI",
      description: "Atendimento 24/7 com raciocínio contextual, empatia programada e resolução automática de tickets complexos sem intervenção humana.",
      cta: "Saiba mais",
      color: "group-hover:bg-primary",
      textColor: "text-primary",
      blobColor: "bg-primary/5"
    },
    {
      icon: <Network className="w-6 h-6" />,
      title: "Automações n8n",
      description: "Integrações robustas entre seus apps favoritos. Conecte CRM, ERP e ferramentas de marketing em fluxos de trabalho invisíveis e eficientes.",
      cta: "Explorar Workflows",
      color: "group-hover:bg-purple-600",
      textColor: "text-purple-400",
      blobColor: "bg-purple-500/5"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Agentes de Vendas (SDR)",
      description: "SDRs autônomos que prospectam, qualificam leads e agendam reuniões automaticamente no seu calendário, aumentando seu pipeline.",
      cta: "Ver Demo",
      color: "group-hover:bg-cyan-600",
      textColor: "text-cyan-400",
      blobColor: "bg-cyan-500/5"
    }
  ];

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto w-full" id="services">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div>
          <h2 className="text-3xl font-bold text-white mb-4">Nossas Soluções</h2>
          <p className="text-gray-400 max-w-lg">
            Potencialize sua empresa com tecnologia de ponta. De agentes de suporte que nunca dormem a vendedores autônomos.
          </p>
        </div>
        <a href="#" className="text-primary hover:text-primary-light font-bold flex items-center gap-1 transition-colors">
          Ver todas as soluções
          <ArrowRight className="w-5 h-5" />
        </a>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {solutions.map((item, index) => (
          <div key={index} className="group relative bg-surface-dark border border-border-dark rounded-xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 overflow-hidden">
            <div className={`absolute top-0 right-0 w-32 h-32 ${item.blobColor} rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110`}></div>

            <div className={`w-12 h-12 rounded-lg bg-border-dark flex items-center justify-center mb-6 ${item.color} group-hover:text-white transition-colors text-gray-300`}>
              {item.icon}
            </div>

            <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              {item.description}
            </p>

            <div className={`flex items-center gap-2 text-xs font-bold ${item.textColor} uppercase tracking-wider group-hover:translate-x-1 transition-transform`}>
              {item.cta} <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
