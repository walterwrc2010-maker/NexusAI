
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

function App() {
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
        <div id="social-proof" className="py-12 border-y border-white/5 bg-slate-900/30">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-slate-500 mb-8">Empresas que já escalam com IA</p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-30 grayscale hover:grayscale-0 transition-all">
              <span className="text-xl md:text-2xl font-black italic tracking-tighter hover:text-indigo-400 cursor-default transition-colors">TECHFLOW</span>
              <span className="text-xl md:text-2xl font-black italic tracking-tighter hover:text-indigo-400 cursor-default transition-colors">SOLUTIONS+</span>
              <span className="text-xl md:text-2xl font-black italic tracking-tighter hover:text-indigo-400 cursor-default transition-colors">AGENCY.IO</span>
              <span className="text-xl md:text-2xl font-black italic tracking-tighter hover:text-indigo-400 cursor-default transition-colors">FUTURE_SYS</span>
            </div>
          </div>
        </div>

        <Services />
        <AboutAgents />
        <Process />
        <AgentDemo />
        <Testimonials />
        <FAQ />

        {/* Final CTA Section */}
        <section id="contact" className="py-32 relative overflow-hidden">
          {/* Decorative radial gradient */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-indigo-600/10 blur-[150px] rounded-full -z-10"></div>

          <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="inline-block p-1 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500 mb-8">
              <div className="bg-slate-950 px-6 py-2 rounded-xl text-xs font-bold uppercase tracking-widest text-indigo-400">
                Últimas Vagas para Consultoria este Mês
              </div>
            </div>

            <h2 className="text-4xl md:text-6xl font-extrabold mb-8 leading-tight">
              A revolução não espera. <br />
              Sua <span className="gradient-text">automação</span> começa aqui.
            </h2>
            <p className="text-slate-400 mb-12 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Agende uma consultoria estratégica gratuita e descubra como a NexusAI pode economizar centenas de horas na sua empresa todos os meses através de Agentes e Workflows.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <a
                href="https://wa.me/seu-numero"
                className="px-10 py-5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-2xl transition-all shadow-2xl shadow-indigo-500/40 transform hover:scale-105"
              >
                Agendar Diagnóstico Gratuito
              </a>
              <a
                href="#demo"
                className="px-10 py-5 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold rounded-2xl transition-all"
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

export default App;
