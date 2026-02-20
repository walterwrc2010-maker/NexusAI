import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Comparison from '../components/Comparison';

export default function Home() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="animate-in fade-in duration-500">
            <Hero />
            <Services />
            <Comparison />

            {/* CTA Final */}
            <section className="py-20 px-6 max-w-5xl mx-auto text-center w-full">
                <div className="relative bg-surface-dark border border-border-dark rounded-2xl p-12 overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
                    <div className="absolute -top-24 -left-24 w-64 h-64 bg-primary/20 rounded-full blur-[80px]"></div>
                    <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-cyan-500/20 rounded-full blur-[80px]"></div>

                    <div className="relative z-10 flex flex-col items-center gap-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-white">Pronto para o futuro da automação?</h2>
                        <p className="text-gray-400 max-w-lg text-lg">
                            Junte-se a centenas de empresas que já estão economizando tempo e dinheiro com NexusAI.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center mt-4">
                            <input
                                type="email"
                                placeholder="seu@email.com"
                                className="bg-background-dark border border-border-dark text-white rounded px-4 py-3 min-w-[280px] focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                            />
                            <button className="bg-primary hover:bg-primary-light text-white font-bold py-3 px-8 rounded shadow-lg shadow-primary/25 transition-all">
                                Começar Agora
                            </button>
                        </div>
                        <p className="text-xs text-gray-500 mt-2">No credit card required for demo. Free 14-day trial.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
