import React, { useState } from 'react';
import { MessageSquare, Sparkles, CheckCircle, ArrowRight, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';

const profiles = [
    {
        id: 'simple',
        label: '🛒 Automação Simples',
        title: 'Para fluxos simples e repetitivos',
        subtitle: 'Um Chatbot tradicional pode ser a escolha ideal.',
        description:
            'Se o seu negócio precisa de respostas rápidas para perguntas frequentes, menu de opções ou redirecionamentos simples — um chatbot estruturado entrega resultado com baixo custo e fácil configuração.',
        recommendation: 'chatbot',
        fits: [
            'FAQ e horários de funcionamento',
            'Coleta básica de dados (nome, CPF, contato)',
            'Menus de opções pré-definidos',
            'Confirmação de agendamentos simples',
        ],
        notFits: [
            'Conversas abertas e não estruturadas',
            'Resolução de problemas complexos',
            'Integração com múltiplos sistemas',
        ],
        cta: { label: 'Solicitar Consultoria', to: '/contact' },
        accent: 'sky',
    },
    {
        id: 'complex',
        label: '🤖 Automação Avançada',
        title: 'Para experiências inteligentes e escaláveis',
        subtitle: 'Um Agente de IA é a solução mais adequada.',
        description:
            'Quando o cliente tem demandas variadas, contexto muda a cada mensagem e você precisa que a automação tome decisões — o Agente de IA raciocina, aprende e executa ações além da conversa.',
        recommendation: 'agent',
        fits: [
            'Atendimento contextual sem scripts fixos',
            'Integração com CRM, ERP e APIs',
            'Qualificação e follow-up de leads',
            'Execução de tarefas em outros sistemas',
        ],
        notFits: [
            'FAQs muito simples que não precisam de IA',
            'Orçamento muito reduzido para infraestrutura',
        ],
        cta: { label: 'Testar Agente ao Vivo', to: '/chat' },
        accent: 'violet',
    },
    {
        id: 'hybrid',
        label: '⚡ Solução Híbrida',
        title: 'Chatbot + Agente de IA: o melhor dos dois mundos',
        subtitle: 'Combinados, amplificam o resultado.',
        description:
            'Na maioria dos projetos reais, a combinação é a resposta certa: um chatbot lida com o volume de perguntas simples enquanto o Agente de IA resolve os casos complexos e alimenta o CRM automaticamente.',
        recommendation: 'hybrid',
        fits: [
            'Primeiro nível: chatbot filtra e classifica',
            'Segundo nível: agente resolve e integra',
            'Redução de custo com escalabilidade total',
            'Transição suave entre bot e agente sem fricção',
        ],
        notFits: [],
        cta: { label: 'Montar Minha Solução', to: '/contact' },
        accent: 'indigo',
    },
];

const accentMap: Record<string, { border: string; bg: string; tab: string; badge: string; check: string }> = {
    sky: {
        border: 'border-sky-500/30',
        bg: 'bg-sky-500/5',
        tab: 'bg-sky-600 text-white',
        badge: 'bg-sky-500/10 border-sky-500/30 text-sky-300',
        check: 'text-sky-400',
    },
    violet: {
        border: 'border-violet-500/30',
        bg: 'bg-violet-500/5',
        tab: 'bg-violet-600 text-white',
        badge: 'bg-violet-500/10 border-violet-500/30 text-violet-300',
        check: 'text-violet-400',
    },
    indigo: {
        border: 'border-indigo-500/30',
        bg: 'bg-indigo-500/5',
        tab: 'bg-indigo-600 text-white',
        badge: 'bg-indigo-500/10 border-indigo-500/30 text-indigo-300',
        check: 'text-indigo-400',
    },
};

export default function Comparison() {
    const [active, setActive] = useState(0);
    const p = profiles[active];
    const colors = accentMap[p.accent];

    return (
        <section className="py-20 bg-surface-dark/30 border-y border-border-dark" id="como-funciona">
            <div className="max-w-4xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-wider mb-4">
                        <Lightbulb className="w-3.5 h-3.5" />
                        Qual solução é a certa para mim?
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-3">Chatbot ou Agente de IA?</h2>
                    <p className="text-gray-400 max-w-xl mx-auto">
                        Não existe "melhor" absoluto — existe o <strong className="text-white">mais adequado</strong> para o seu cenário.
                        Chatbots e Agentes de IA são ferramentas complementares. Descubra qual combina com a sua necessidade.
                    </p>
                </div>

                {/* Tab Selector */}
                <div className="flex gap-2 justify-center mb-8 flex-wrap">
                    {profiles.map((prof, i) => (
                        <button
                            key={prof.id}
                            onClick={() => setActive(i)}
                            className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${active === i ? colors.tab : 'text-gray-400 hover:text-white hover:bg-white/5'
                                }`}
                        >
                            {prof.label}
                        </button>
                    ))}
                </div>

                {/* Content Panel */}
                <div key={p.id} className={`rounded-2xl border ${colors.border} ${colors.bg} p-8 md:p-10`}>
                    <div className="grid md:grid-cols-2 gap-8 items-start">
                        {/* Left */}
                        <div className="space-y-5">
                            <div>
                                <p className="text-sm text-gray-500 font-medium mb-1">{p.subtitle}</p>
                                <h3 className="text-2xl font-bold text-white">{p.title}</h3>
                            </div>
                            <p className="text-gray-400 leading-relaxed text-sm">{p.description}</p>

                            {/* Recommendation Badge */}
                            <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-bold ${colors.badge}`}>
                                {p.recommendation === 'chatbot' && <><MessageSquare className="w-3.5 h-3.5" /> Recomendamos: Chatbot Estruturado</>}
                                {p.recommendation === 'agent' && <><Sparkles className="w-3.5 h-3.5" /> Recomendamos: Agente de IA</>}
                                {p.recommendation === 'hybrid' && <><Sparkles className="w-3.5 h-3.5" /> Recomendamos: Solução Híbrida</>}
                            </div>

                            <Link
                                to={p.cta.to}
                                className={`inline-flex items-center gap-2 h-11 px-6 rounded-xl bg-${p.accent}-600 hover:bg-${p.accent}-500 text-white font-bold text-sm transition-all`}
                            >
                                {p.cta.label} <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>

                        {/* Right */}
                        <div className="space-y-4">
                            <div>
                                <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-3">✅ Funciona bem para</p>
                                <ul className="space-y-2">
                                    {p.fits.map((item) => (
                                        <li key={item} className="flex items-start gap-2.5 text-sm text-gray-300">
                                            <CheckCircle className={`w-4 h-4 mt-0.5 shrink-0 ${colors.check}`} />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            {p.notFits.length > 0 && (
                                <div>
                                    <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mt-4 mb-3">⚠️ Pode não ser ideal se</p>
                                    <ul className="space-y-2">
                                        {p.notFits.map((item) => (
                                            <li key={item} className="flex items-start gap-2.5 text-sm text-gray-500">
                                                <span className="mt-1 w-4 h-4 shrink-0 text-center text-gray-600">–</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Bottom note */}
                <p className="text-center text-xs text-gray-600 mt-6">
                    Não tem certeza? <Link to="/chat" className="text-primary hover:text-primary-light underline">Converse com o Nexus Agent</Link> — ele te indica a melhor solução para o seu caso.
                </p>
            </div>
        </section>
    );
}
