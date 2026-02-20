import React from 'react';
import { Linkedin, Instagram, Youtube, Sparkles } from 'lucide-react';

// ⚙️ Configure seus links de redes sociais aqui
const SOCIAL_LINKS = {
    linkedin: 'https://www.linkedin.com/company/nexusai',
    instagram: 'https://www.instagram.com/nexusai',
    youtube: 'https://www.youtube.com/@nexusai',
};

const socials = [
    {
        name: 'LinkedIn',
        url: SOCIAL_LINKS.linkedin,
        icon: Linkedin,
        label: 'Seguir no LinkedIn',
        color: 'hover:border-[#0A66C2]/60 hover:bg-[#0A66C2]/10 hover:text-[#0A66C2]',
        iconColor: 'text-[#0A66C2]',
    },
    {
        name: 'Instagram',
        url: SOCIAL_LINKS.instagram,
        icon: Instagram,
        label: 'Seguir no Instagram',
        color: 'hover:border-pink-500/60 hover:bg-pink-500/10 hover:text-pink-400',
        iconColor: 'text-pink-400',
    },
    {
        name: 'YouTube',
        url: SOCIAL_LINKS.youtube,
        icon: Youtube,
        label: 'Inscreva-se no YouTube',
        color: 'hover:border-red-500/60 hover:bg-red-500/10 hover:text-red-400',
        iconColor: 'text-red-400',
    },
];

export default function CTA() {
    return (
        <section className="py-20 px-6 max-w-5xl mx-auto text-center w-full">
            <div className="relative bg-surface-dark border border-border-dark rounded-2xl p-12 overflow-hidden">
                {/* Background glow */}
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
                <div className="absolute -top-24 -left-24 w-64 h-64 bg-primary/20 rounded-full blur-[80px]" />
                <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-cyan-500/20 rounded-full blur-[80px]" />

                <div className="relative z-10 flex flex-col items-center gap-5">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary-light text-xs font-bold uppercase tracking-wider">
                        <Sparkles className="w-3.5 h-3.5" />
                        Conecte-se à NexusAI
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold text-white max-w-lg">
                        Fique por dentro das últimas automações e novidades de IA
                    </h2>
                    <p className="text-gray-400 max-w-md">
                        Siga-nos nas redes sociais e receba conteúdo exclusivo sobre automação, n8n, WhatsApp e inteligência artificial.
                    </p>

                    {/* Social Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full max-w-2xl justify-center">
                        {socials.map(({ name, url, icon: Icon, label, color, iconColor }) => (
                            <a
                                key={name}
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`flex-1 flex items-center justify-center gap-3 h-12 px-6 rounded-xl border border-white/10 bg-white/5 text-gray-300 font-semibold text-sm transition-all duration-200 group ${color}`}
                            >
                                <Icon className={`w-5 h-5 shrink-0 ${iconColor}`} />
                                <span>{label}</span>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
