import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import SocialProof from '../components/SocialProof';
import Services from '../components/Services';
import AboutAgents from '../components/AboutAgents';
import Process from '../components/Process';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import { MessageCircle } from 'lucide-react';

export default function Home() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="animate-in fade-in duration-500">
            <Hero />
            <SocialProof />
            <Services />
            <AboutAgents />
            <Process />
            <Testimonials />
            <FAQ />

            {/* CTA Final (Moved from App.tsx) */}
            <section id="cta-final" className="py-24 bg-slate-950 border-t border-white/5 relative overflow-hidden">
                {/* Background Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-600/10 rounded-full blur-[120px] -z-10" />

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <h2 className="text-4xl md:text-6xl font-extrabold leading-tight text-white mb-8">
                        A revolução não espera. <br />
                        Sua <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-violet-400">automação</span> começa aqui.
                    </h2>

                    <p className="text-slate-400 mt-6 text-lg leading-relaxed mb-10">
                        Agende uma consultoria estratégica gratuita e descubra como a NexusAI pode economizar centenas de horas
                        na sua empresa todos os meses através de Agentes e Automações.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="https://wa.me/5511999999999?text=Ol%C3%A1!%20Quero%20agendar%20um%20diagn%C3%B3stico%20gratuito%20com%20a%20NexusAI."
                            target="_blank"
                            rel="noreferrer"
                            className="px-8 py-4 rounded-xl bg-green-600 hover:bg-green-500 text-white font-bold text-lg transition-all shadow-lg shadow-green-500/25 flex items-center gap-2"
                        >
                            <MessageCircle className="w-5 h-5 fill-white" />
                            Agendar Diagnóstico Gratuito
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
