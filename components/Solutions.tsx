import React, { useState } from 'react';
import { Headset, Network, TrendingUp, ArrowRight, CheckCircle, MessageCircle, Sparkles, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

const WHATSAPP_NUMBER = '5511999999999';

const solutions = [
    {
        id: 'suporte',
        icon: Headset,
        label: 'Suporte AI',
        title: 'Agentes de Suporte AI',
        tagline: 'Atendimento 24/7 que nunca dorme.',
        description:
            'Nossos agentes entendem o contexto da conversa, têm empatia programada e resolvem tickets complexos automaticamente — sem precisar de intervenção humana.',
        benefits: [
            'Resposta instantânea em qualquer horário',
            'Integração com WhatsApp, e-mail e chat',
            'Escalonamento automático para humanos',
            'Relatórios e métricas em tempo real',
        ],
        primaryCta: { label: 'Testar Agente', to: '/chat', icon: Sparkles },
        secondaryCta: { label: 'Solicitar Demo', whatsapp: true },
        accent: 'indigo',
        border: 'border-indigo-500/30',
        bg: 'bg-indigo-500/5',
        iconBg: 'bg-indigo-500/15 text-indigo-400',
        tabActive: 'bg-indigo-600 text-white',
        tabInactive: 'hover:bg-indigo-600/10 hover:text-indigo-300',
    },
    {
        id: 'n8n',
        icon: Network,
        label: 'Automações n8n',
        title: 'Automações com n8n',
        tagline: 'Conecte tudo. Automatize qualquer coisa.',
        description:
            'Integramos seus apps favoritos — CRM, ERP, e-commerce, marketing — em fluxos de trabalho inteligentes e invisíveis que rodam 24h por dia.',
        benefits: [
            'Mais de 400 integrações nativas',
            'Fluxos sem código e com código',
            'Webhooks e APIs em minutos',
            'Monitoramento e alertas automáticos',
        ],
        primaryCta: { label: 'Ver Agente n8n', to: '/chat', icon: Sparkles },
        secondaryCta: { label: 'Falar com Especialista', whatsapp: true },
        accent: 'purple',
        border: 'border-purple-500/30',
        bg: 'bg-purple-500/5',
        iconBg: 'bg-purple-500/15 text-purple-400',
        tabActive: 'bg-purple-600 text-white',
        tabInactive: 'hover:bg-purple-600/10 hover:text-purple-300',
    },
    {
        id: 'sdr',
        icon: TrendingUp,
        label: 'Agentes SDR',
        title: 'Agentes de Vendas (SDR)',
        tagline: 'Prospecção autônoma que escala seu pipeline.',
        description:
            'SDRs autônomos que identificam leads, enviam mensagens personalizadas e agendam reuniões direto no seu calendário — enquanto você foca no fechamento.',
        benefits: [
            'Prospecção e qualificação automática',
            'Follow-up inteligente via WhatsApp',
            'Integração com Google Calendar e CRM',
            'Pipeline atualizado em tempo real',
        ],
        primaryCta: { label: 'Demo SDR ao Vivo', to: '/chat', icon: Play },
        secondaryCta: { label: 'Quero um SDR', whatsapp: true },
        accent: 'cyan',
        border: 'border-cyan-500/30',
        bg: 'bg-cyan-500/5',
        iconBg: 'bg-cyan-500/15 text-cyan-400',
        tabActive: 'bg-cyan-600 text-white',
        tabInactive: 'hover:bg-cyan-600/10 hover:text-cyan-300',
    },
];

export default function Solutions() {
    const [active, setActive] = useState(0);
    const s = solutions[active];
    const Icon = s.icon;
    const PrimaryIcon = s.primaryCta.icon;

    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Olá! Quero saber mais sobre: ${s.title} 🚀`)}`;

    return (
        <section className="py-20 px-6 max-w-7xl mx-auto w-full" id="services">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
                <div>
                    <h2 className="text-3xl font-bold text-white mb-3">Nossas Soluções</h2>
                    <p className="text-gray-400 max-w-lg">
                        De agentes de suporte que nunca dormem a vendedores autônomos — escolha a solução certa para o seu negócio.
                    </p>
                </div>
                <Link to="/contact" className="text-primary hover:text-primary-light font-bold flex items-center gap-1 transition-colors shrink-0">
                    Ver todas as soluções <ArrowRight className="w-5 h-5" />
                </Link>
            </div>

            {/* Tab Selector */}
            <div className="flex gap-2 mb-8 border-b border-border-dark pb-4 overflow-x-auto">
                {solutions.map((sol, i) => {
                    const TabIcon = sol.icon;
                    return (
                        <button
                            key={sol.id}
                            onClick={() => setActive(i)}
                            className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold whitespace-nowrap transition-all duration-200 ${active === i
                                    ? sol.tabActive
                                    : `text-gray-400 ${sol.tabInactive}`
                                }`}
                        >
                            <TabIcon className="w-4 h-4" />
                            {sol.label}
                        </button>
                    );
                })}
            </div>

            {/* Detail Panel */}
            <div
                key={s.id}
                className={`rounded-2xl border ${s.border} ${s.bg} p-8 md:p-10 grid md:grid-cols-2 gap-10 items-center animate-in fade-in duration-300`}
            >
                {/* Left: content */}
                <div className="space-y-5">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${s.iconBg}`}>
                        <Icon className="w-6 h-6" />
                    </div>
                    <div>
                        <p className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-1">{s.tagline}</p>
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">{s.title}</h3>
                        <p className="text-gray-400 leading-relaxed">{s.description}</p>
                    </div>

                    {/* Benefits */}
                    <ul className="space-y-2.5">
                        {s.benefits.map((b) => (
                            <li key={b} className="flex items-start gap-2.5 text-sm text-gray-300">
                                <CheckCircle className={`w-4 h-4 mt-0.5 shrink-0 text-${s.accent}-400`} />
                                {b}
                            </li>
                        ))}
                    </ul>

                    {/* CTAs */}
                    <div className="flex flex-wrap gap-3 pt-2">
                        <Link
                            to={s.primaryCta.to}
                            className={`flex items-center gap-2 h-11 px-6 rounded-xl bg-${s.accent}-600 hover:bg-${s.accent}-500 text-white font-bold text-sm transition-all shadow-lg shadow-${s.accent}-500/20 hover:shadow-${s.accent}-500/40`}
                        >
                            <PrimaryIcon className="w-4 h-4" />
                            {s.primaryCta.label}
                        </Link>
                        <a
                            href={waUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 h-11 px-6 rounded-xl border border-white/10 bg-white/5 hover:bg-[#25D366]/10 hover:border-[#25D366]/40 hover:text-[#25D366] text-gray-300 font-bold text-sm transition-all"
                        >
                            <MessageCircle className="w-4 h-4" />
                            {s.secondaryCta.label}
                        </a>
                    </div>
                </div>

                {/* Right: visual card */}
                <div className={`hidden md:flex flex-col gap-4`}>
                    {/* Simulated "live" preview card */}
                    <div className="rounded-xl bg-[#0d1117] border border-white/8 p-5 space-y-4">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <div className={`w-7 h-7 rounded-lg ${s.iconBg} flex items-center justify-center`}>
                                    <Icon className="w-4 h-4" />
                                </div>
                                <span className="text-white text-sm font-bold">{s.label}</span>
                            </div>
                            <span className="text-[10px] px-2 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 font-semibold">
                                ● Ativo
                            </span>
                        </div>

                        {/* Simulated metric rows */}
                        {[
                            { label: 'Tickets resolvidos hoje', value: '342', up: true },
                            { label: 'Tempo médio de resposta', value: '1.2s', up: false },
                            { label: 'Satisfação do cliente', value: '98%', up: true },
                        ].map((m) => (
                            <div key={m.label} className="flex items-center justify-between py-2 border-b border-white/5 last:border-0">
                                <span className="text-xs text-gray-500">{m.label}</span>
                                <span className={`text-sm font-bold ${m.up ? 'text-green-400' : 'text-white'}`}>
                                    {m.value}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* Live chat mockup */}
                    <div className="rounded-xl bg-[#0d1117] border border-white/8 p-4 space-y-3">
                        <div className="text-[10px] text-gray-600 uppercase tracking-wider mb-2">Preview ao vivo</div>
                        <div className="flex gap-2">
                            <div className={`w-6 h-6 rounded-full ${s.iconBg} shrink-0 flex items-center justify-center`}>
                                <Sparkles className="w-3 h-3" />
                            </div>
                            <div className="bg-white/5 rounded-xl rounded-tl-sm px-3 py-2 text-xs text-gray-300 max-w-[80%]">
                                Olá! Posso te ajudar com {s.label}. Como posso começar?
                            </div>
                        </div>
                        <div className="flex gap-2 justify-end">
                            <div className={`bg-${s.accent}-600/80 rounded-xl rounded-tr-sm px-3 py-2 text-xs text-white max-w-[80%]`}>
                                Quero automatizar meu atendimento 🚀
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <div className={`w-6 h-6 rounded-full ${s.iconBg} shrink-0 flex items-center justify-center`}>
                                <Sparkles className="w-3 h-3" />
                            </div>
                            <div className="bg-white/5 rounded-xl rounded-tl-sm px-3 py-2 text-xs text-gray-300 max-w-[80%]">
                                Perfeito! Me conta: qual é o volume de mensagens por dia?
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
