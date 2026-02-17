import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import AboutAgents from './components/AboutAgents';
import Process from './components/Process';
import AgentDemo from './components/AgentDemo';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

export default function App() {
  useEffect(() => {
    // impede o navegador de “lembrar” o scroll ao dar F5
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    // força abrir no topo
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 selection:bg-indigo-500 selection:text-white overflow-x-hidden">
      <Navbar />

      <main>
        <Hero />

        {/* Social Proof - Trust Bar */}
        <section id="social-proof" className="py-12 border-y border-white/5 bg-slate-900/30">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-slate-500 mb-8">
              Empresas que já escalam com IA
            </p>

            <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-30 grayscale hover:grayscale-0 transition-all">
              <span className="text-xl md:text-2xl font-black italic tracking-tighter hover:text-indigo-400 cursor-default transition-colors">
                TECHFLOW
              </span>
              <span className="text-xl md:text-2xl font-black italic tracking-tighter hover:text-indigo-400 cursor-default transition-colors">
                SOLUTIONS+
              </span>
              <span className="text-xl md:text-2xl font-black italic tracking-tighter hover:text-indigo-400 cursor-default transition-colors">
                AGENCY.IO
              </span>
              <span className="text-xl md:text-2xl font-black italic tracking-tighter hover:text-indigo-400 cursor-default transition-colors">
                FUTURE_SYS
              </span>
            </div>
          </div>
        </section>

        <Services />

        {/* Exemplos na prática */}
        <section className="py-16 bg-slate-950 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h3 className="text-2xl md:text-3xl font-extrabold">
                Exemplos <span className="text-indigo-400">na prática</span>
              </h3>
              <p className="text-slate-400 mt-3 max-w-2xl mx-auto">
                Automação real com agentes de IA e workflows n8n.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* WhatsApp */}
              <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-all">
                <p className="text-xs font-bold uppercase tracking-widest text-green-400 mb-3">
                  Atendimento
                </p>

                <h4 className="text-lg font-bold mb-3 flex items-center gap-2">
                  <span className="text-green-400 text-xl">●</span>
                  WhatsApp 24/7 com contexto
                </h4>

                <p className="text-slate-400 leading-relaxed">
                  Responde clientes automaticamente, coleta informações e registra conversas sem perder histórico.
                </p>
              </div>

              {/* n8n */}
              <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-all">
                <p className="text-xs font-bold uppercase tracking-widest text-orange-400 mb-3">
                  n8n
                </p>

                <h4 className="text-lg font-bold mb-3 flex items-center gap-2">
                  <span className="text-orange-400 text-xl">●</span>
                  Automação com n8n
                </h4>

                <p className="text-slate-400 leading-relaxed">
                  Lead entra → CRM registra → planilha atualiza → equipe recebe alerta automaticamente.
                </p>
              </div>

              {/* Vendas */}
              <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-all">
                <p className="text-xs font-bold uppercase tracking-widest text-indigo-400 mb-3">
                  Vendas
                </p>

                <h4 className="text-lg font-bold mb-3 flex items-center gap-2">
                  <span className="text-indigo-400 text-xl">●</span>
                  Qualificação e agendamento
                </h4>

                <p className="text-slate-400 leading-relaxed">
                  O agente qualifica o lead, faz perguntas e agenda reunião automaticamente.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Seções principais */}
        <AboutAgents />
        <Process />

        {/* GARANTA QUE O AgentDemo TENHA id="agent-demo" dentro dele */}
        <AgentDemo />

        <Testimonials />
        <FAQ />

        {/* CTA FINAL */}
        <section id="cta-final" className="py-24 bg-slate-950 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs font-bold uppercase tracking-[0.2em] mb-8">
              ÚLTIMAS VAGAS PARA CONSULTORIA ESTE MÊS
            </div>

            <h2 className="text-4xl md:text-6xl font-extrabold leading-tight">
              A revolução não espera. <br />
              Sua <span className="text-indigo-400">automação</span> começa aqui.
            </h2>

            <p className="text-slate-400 mt-6 max-w-2xl mx-auto text-lg leading-relaxed">
              Agende uma consultoria estratégica gratuita e descubra como a NexusAI pode economizar centenas de horas
              na sua empresa todos os meses através de Agentes e Automações.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/5511999999999?text=Ol%C3%A1!%20Quero%20agendar%20um%20diagn%C3%B3stico%20gratuito%20com%20a%20NexusAI."
                target="_blank"
                rel="noreferrer"
                className="px-8 py-4 rounded-2xl bg-indigo-600 hover:bg-indigo-500 transition font-bold"
              >
                Agendar Diagnóstico Gratuito
              </a>

              <a
                href="#agent-demo"
                className="px-8 py-4 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-white/20 transition font-bold"
              >
                Falar com o Agente Agora
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
