
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-24 pb-20 lg:pt-48 lg:pb-32 overflow-hidden hero-bg">
      {/* Decorative Blurs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-indigo-600/15 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-600/15 rounded-full blur-[120px] animate-pulse delay-1000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold uppercase tracking-widest mb-8">
          <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></span>
          NexusAI: Colaboradores Digitais Autônomos
        </div>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-8 leading-[1.05]">
          Escale com <span className="gradient-text">Agentes de IA</span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 mb-12 leading-relaxed">
          Nós não criamos apenas "chatbots". Construímos agentes autônomos que executam workflows complexos, tomam decisões e operam sua empresa 24/7.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          <a 
            href="#demo" 
            className="w-full sm:w-auto px-10 py-5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-2xl transition-all shadow-xl shadow-indigo-500/25 flex items-center justify-center gap-3 transform hover:scale-105"
          >
            Ver Agente em Ação
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
          <a 
            href="#services" 
            className="w-full sm:w-auto px-10 py-5 bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 text-white font-bold rounded-2xl transition-all flex items-center justify-center transform hover:scale-105"
          >
            Nossas Soluções
          </a>
        </div>

        {/* Enhanced Floating UI Mockup */}
        <div className="mt-24 relative hidden lg:block">
          <div className="glass-morphism rounded-[2.5rem] p-8 max-w-4xl mx-auto shadow-2xl relative border border-white/5 animate-float">
             <div className="flex items-center justify-between border-b border-white/10 pb-6 mb-8">
                <div className="flex gap-2.5">
                  <div className="w-3.5 h-3.5 rounded-full bg-red-500/30"></div>
                  <div className="w-3.5 h-3.5 rounded-full bg-yellow-500/30"></div>
                  <div className="w-3.5 h-3.5 rounded-full bg-green-500/30"></div>
                </div>
                <div className="text-[10px] text-slate-500 font-mono flex items-center gap-3">
                   <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                   Nexus_Workflow_Engine.v2.5_Stable
                </div>
             </div>
             
             <div className="grid grid-cols-4 gap-8 px-4">
                {[
                  { label: 'Leads Capturados', value: '+450%', color: 'text-indigo-400' },
                  { label: 'Tempo de Resposta', value: '< 2s', color: 'text-purple-400' },
                  { label: 'Custo Operacional', value: '-60%', color: 'text-emerald-400' },
                  { label: 'Workflows Ativos', value: '12', color: 'text-blue-400' }
                ].map((stat, i) => (
                  <div key={i} className="text-left group cursor-default">
                    <p className="text-[10px] uppercase font-bold text-slate-500 mb-2 tracking-wider">{stat.label}</p>
                    <p className={`text-3xl font-black ${stat.color} transition-all duration-300 group-hover:scale-110 origin-left`}>{stat.value}</p>
                  </div>
                ))}
             </div>

             <div className="mt-12 grid grid-cols-3 gap-6">
                <div className="bg-indigo-600/10 p-5 rounded-2xl border border-indigo-500/20 shadow-inner">
                   <div className="w-2.5 h-2.5 rounded-full bg-indigo-500 mb-4 animate-pulse"></div>
                   <div className="h-2 w-3/4 bg-slate-800 rounded mb-2.5"></div>
                   <div className="h-2 w-1/2 bg-slate-800 rounded"></div>
                </div>
                <div className="bg-purple-600/10 p-5 rounded-2xl border border-purple-500/20 shadow-inner">
                   <div className="w-2.5 h-2.5 rounded-full bg-purple-500 mb-4 animate-pulse delay-700"></div>
                   <div className="h-2 w-full bg-slate-800 rounded mb-2.5"></div>
                   <div className="h-2 w-2/3 bg-slate-800 rounded"></div>
                </div>
                <div className="bg-pink-600/10 p-5 rounded-2xl border border-pink-500/20 shadow-inner">
                   <div className="w-2.5 h-2.5 rounded-full bg-pink-500 mb-4 animate-pulse delay-1400"></div>
                   <div className="h-2 w-5/6 bg-slate-800 rounded mb-2.5"></div>
                   <div className="h-2 w-1/3 bg-slate-800 rounded"></div>
                </div>
             </div>
          </div>
          
          {/* Small floating accents */}
          <div className="absolute top-10 -right-10 glass-morphism p-4 rounded-2xl border border-indigo-500/20 animate-float-delayed">
             <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-xs font-mono">Agente Conectado: CRM</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
