import React from 'react';
import { Search, PenTool, Rocket, Headphones } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      icon: <Search className="w-6 h-6 text-indigo-400" />,
      title: "Diagnóstico",
      desc: "Analisamos seus processos atuais para identificar gargalos e oportunidades de automação."
    },
    {
      icon: <PenTool className="w-6 h-6 text-violet-400" />,
      title: "Desenho da Solução",
      desc: "Criamos a arquitetura dos agentes e fluxos de automação personalizados para sua necessidade."
    },
    {
      icon: <Rocket className="w-6 h-6 text-fuchsia-400" />,
      title: "Implementação",
      desc: "Desenvolvemos, testamos e colocamos seus agentes no ar em tempo recorde."
    },
    {
      icon: <Headphones className="w-6 h-6 text-pink-400" />,
      title: "Acompanhamento",
      desc: "Monitoramento constante e otimizações para garantir o máximo de ROI."
    }
  ];

  return (
    <section id="process" className="py-24 bg-slate-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-indigo-400 font-semibold tracking-wide uppercase text-sm mb-3">Como trabalhamos</p>
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Do caos à <span className="text-indigo-400">eficiência</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />

          {steps.map((step, index) => (
            <div key={index} className="relative group">
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-2xl bg-slate-900 border border-white/10 flex items-center justify-center mb-6 group-hover:border-indigo-500/50 group-hover:shadow-[0_0_30px_-5px_rgba(99,102,241,0.3)] transition-all duration-300">
                  {step.icon}
                </div>

                <h3 className="text-xl font-bold text-white mb-3">
                  {index + 1}. {step.title}
                </h3>

                <p className="text-slate-400 leading-relaxed text-sm">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
