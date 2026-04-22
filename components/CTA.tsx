import React from 'react';
import { ArrowRight, Sparkles, Clock, Shield, Headset, Linkedin, Instagram, Youtube } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const WHATSAPP_NUMBER = '5511939105566';
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá! Quero agendar uma consultoria com a NexusAI. 🚀')}`;

const SOCIAL_LINKS = {
    linkedin: 'https://www.linkedin.com/company/nexusai',
    instagram: 'https://www.instagram.com/nexusai',
    youtube: 'https://www.youtube.com/@nexusai',
};

const trustPills = [
    { icon: Clock, label: 'Setup em 48h' },
    { icon: Shield, label: 'Sem contrato mínimo' },
    { icon: Headset, label: 'Suporte incluído' },
];

export default function CTA() {
    return (
        <section className="py-20 px-6 max-w-5xl mx-auto w-full">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, ease: 'easeOut' }}
                className="relative rounded-2xl overflow-hidden border border-primary/20 shadow-[0_0_80px_-20px_rgba(124,101,246,0.22),0_0_120px_-40px_rgba(201,163,74,0.10)]"
            >
                {/* Background layers */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#0c0818]/95 via-[#09090f] to-[#07070e]" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(124,101,246,0.18),transparent_55%),radial-gradient(ellipse_at_bottom_right,rgba(201,163,74,0.08),transparent_55%)]" />
                {/* Subtle grid */}
                <div
                    className="absolute inset-0 opacity-[0.04]"
                    style={{
                        backgroundImage: 'linear-gradient(rgba(255,255,255,0.6) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.6) 1px,transparent 1px)',
                        backgroundSize: '48px 48px',
                    }}
                />

                <div className="relative z-10 flex flex-col items-center gap-7 px-8 py-16 text-center">
                    {/* Badge */}
                    <div className="section-badge-gold">
                        <Sparkles className="w-3.5 h-3.5" />
                        Consultoria Gratuita
                    </div>

                    {/* Headline */}
                    <h2 className="text-3xl md:text-5xl font-extrabold text-white max-w-2xl leading-[1.1] tracking-tight font-display">
                        Automatize hoje,{' '}
                        <span className="text-gradient-hero">
                            escale amanhã
                        </span>
                    </h2>

                    <p className="text-gray-400 max-w-md text-lg leading-relaxed">
                        Fale com um especialista e descubra como a NexusAI pode reduzir custos operacionais e multiplicar seus resultados em semanas.
                    </p>

                    {/* Trust pills */}
                    <div className="flex flex-wrap justify-center gap-3">
                        {trustPills.map(({ icon: Icon, label }) => (
                            <div key={label} className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-300 text-xs font-medium">
                                <Icon className="w-3.5 h-3.5 text-indigo-400" />
                                {label}
                            </div>
                        ))}
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 w-full max-w-sm">
                        <Link
                            to="/contact"
                            className="flex-1 flex items-center justify-center gap-2 h-13 px-7 py-3.5 rounded-xl bg-primary hover:bg-primary-light text-white font-bold text-sm transition-all shadow-neon-primary hover:shadow-[0_0_32px_-4px_rgba(79,107,255,0.8)] group"
                        >
                            Falar com Especialista
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                        </Link>
                        <a
                            href={WHATSAPP_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 flex items-center justify-center gap-2 h-13 px-7 py-3.5 rounded-xl bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/30 hover:border-[#25D366]/50 text-[#25D366] font-bold text-sm transition-all"
                        >
                            <WhatsAppIcon className="w-4 h-4" />
                            WhatsApp
                        </a>
                    </div>

                    {/* Divider */}
                    <div className="w-full max-w-xs border-t border-white/5 pt-5 flex flex-col items-center gap-3">
                        <span className="text-xs text-gray-600 uppercase tracking-wider">Siga nossas redes</span>
                        <div className="flex items-center gap-3">
                            {[
                                { href: SOCIAL_LINKS.linkedin, icon: Linkedin, label: 'LinkedIn', hover: 'hover:text-[#0A66C2] hover:border-[#0A66C2]/40 hover:bg-[#0A66C2]/10' },
                                { href: SOCIAL_LINKS.instagram, icon: Instagram, label: 'Instagram', hover: 'hover:text-pink-400 hover:border-pink-400/40 hover:bg-pink-400/10' },
                                { href: SOCIAL_LINKS.youtube, icon: Youtube, label: 'YouTube', hover: 'hover:text-red-400 hover:border-red-400/40 hover:bg-red-400/10' },
                            ].map(({ href, icon: Icon, label, hover }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={label}
                                    className={`w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-500 transition-all ${hover}`}
                                >
                                    <Icon className="w-4 h-4" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
