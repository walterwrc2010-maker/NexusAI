import React from 'react';

export default function SocialProof() {
    const companies = [
        "TECHFLOW", "SOLUTIONS+", "AGENCY.IO", "FUTURE_SYS"
    ];

    return (
        <section id="social-proof" className="py-12 border-y border-white/5 bg-slate-950/50 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-slate-500 mb-8">
                    Empresas que já escalam com IA
                </p>

                <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-30">
                    {companies.map((company, index) => (
                        <span
                            key={index}
                            className="text-xl md:text-2xl font-black italic tracking-tighter hover:text-indigo-400 hover:opacity-100 cursor-default transition-all duration-300"
                        >
                            {company}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}
