import React from 'react';
import { Bot, Zap, TrendingUp, ArrowUpRight } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Bot className="w-8 h-8 text-indigo-400" />,
      title: "Agentes de Atendimento",
      description: "IA que responde WhatsApp e Instagram 24/7, tira dúvidas e qualifica leads instantaneamente.",
      gradient: "from-indigo-500/10 to-blue-500/10",
      border: "hover:border-indigo-500/30"
    },
    {
      icon: <Zap className="w-8 h-8 text-amber-400" />,
      title: "Automação de Processos",
      description: "Conecte CRM, planilhas e Slack. Elimine trabalho manual repetitivo da sua equipe.",
      gradient: "from-amber-500/10 to-orange-500/10",
      border: "hover:border-amber-500/30"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-emerald-400" />,
      title: "Growth & Vendas",
      description: "Recuperação de carrinho, follow-up automático e agendamento de reuniões sem intervenção humana.",
      gradient: "from-emerald-500/10 to-green-500/10",
      border: "hover:border-emerald-500/30"
    }
  ];

  return (
    <section id="services" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-900/10 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400 mb-6">
            Poder computacional <br /> para seu negócio
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Nossos agentes digitais trabalham incansavelmente para escalar sua operação com precisão e velocidade humana.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative p-8 rounded-3xl bg-white/[0.02] border border-white/5 ${service.border} transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:bg-white/[0.04]`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500`} />

              <div className="relative z-10">
                <div className="p-3 bg-white/5 rounded-xl w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>

                <h3 className="text-xl font-bold text-white mb-3 flex items-center justify-between">
                  {service.title}
                  <ArrowUpRight className="w-5 h-5 text-slate-500 group-hover:text-white transition-colors opacity-0 group-hover:opacity-100" />
                </h3>

                <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
