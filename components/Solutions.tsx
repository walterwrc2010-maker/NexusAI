import React, { useState } from 'react';
import { MessageCircle, Kanban, LayoutDashboard, ArrowRight, CheckCircle, Sparkles, Play, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const WHATSAPP_NUMBER = '5511939105566';

const solutions = [
  {
    id: 'sdr',
    icon: MessageCircle,
    label: 'Agente SDR',
    title: 'Agente de Vendas no WhatsApp',
    tagline: 'Prospecção e qualificação 24/7, sem esforço.',
    description:
      'O agente aborda leads pelo WhatsApp, faz perguntas naturais para entender a necessidade, classifica como quente/morno/frio e abre o card no CRM automaticamente — com nome, contato, orçamento e urgência preenchidos.',
    benefits: [
      'Qualificação automática: quente, morno ou frio',
      'CRM Kanban preenchido sem nenhum cadastro manual',
      'Follow-up agendado automaticamente no calendário',
      'Histórico completo de cada conversa no portal',
    ],
    primaryCta: { label: 'Testar Agente SDR', to: '/chat', icon: Sparkles },
    secondaryCta: { label: 'Quero um SDR', whatsapp: true },
    accent: 'indigo',
    border: 'border-indigo-500/30',
    bg: 'bg-indigo-500/5',
    iconBg: 'bg-indigo-500/15 text-indigo-400',
    tabActive: 'bg-indigo-600 text-white',
    tabInactive: 'hover:bg-indigo-600/10 hover:text-indigo-300',
    btnClass: 'bg-indigo-600 hover:bg-indigo-500 shadow-indigo-500/20 hover:shadow-indigo-500/40',
    chatBubble: 'bg-indigo-600/80',
    checkColor: 'text-indigo-400',
    preview: [
      { label: 'Leads gerados hoje', value: '14', up: true },
      { label: 'Taxa de qualificação', value: '78%', up: true },
      { label: 'Follow-ups agendados', value: '9', up: false },
    ],
    chatMessages: [
      { agent: true, text: 'Olá! Vi que você se interessou pelos nossos planos. Qual é o tamanho da sua equipe?' },
      { agent: false, text: 'Somos 12 pessoas, precisamos de automação para atendimento.' },
      { agent: true, text: 'Ótimo! Orçamento previsto para esse projeto? Isso me ajuda a recomendar o plano ideal.' },
    ],
  },
  {
    id: 'suporte',
    icon: Users,
    label: 'Suporte AI 24/7',
    title: 'Atendimento Inteligente Multicanal',
    tagline: 'Resolve tickets, escalona pro humano certo.',
    description:
      'O agente entende o contexto da conversa, resolve tickets automaticamente e só escalona para humanos quando realmente necessário. Integra com WhatsApp, chat web e email — com histórico unificado no portal.',
    benefits: [
      'Atendimento em WhatsApp, chat web e email',
      'Escalamento automático com contexto completo',
      'Histórico de conversas acessível no portal',
      'Relatórios e métricas em tempo real',
    ],
    primaryCta: { label: 'Ver Suporte ao Vivo', to: '/chat', icon: Play },
    secondaryCta: { label: 'Montar meu Suporte', whatsapp: true },
    accent: 'cyan',
    border: 'border-cyan-500/30',
    bg: 'bg-cyan-500/5',
    iconBg: 'bg-cyan-500/15 text-cyan-400',
    tabActive: 'bg-cyan-600 text-white',
    tabInactive: 'hover:bg-cyan-600/10 hover:text-cyan-300',
    btnClass: 'bg-cyan-600 hover:bg-cyan-500 shadow-cyan-500/20 hover:shadow-cyan-500/40',
    chatBubble: 'bg-cyan-600/80',
    checkColor: 'text-cyan-400',
    preview: [
      { label: 'Tickets resolvidos hoje', value: '342', up: true },
      { label: 'Tempo médio de resposta', value: '1.4s', up: false },
      { label: 'Satisfação do cliente', value: '97%', up: true },
    ],
    chatMessages: [
      { agent: true, text: 'Olá! Sou o suporte da NexusAI. Como posso te ajudar hoje?' },
      { agent: false, text: 'Meu agente parou de responder no WhatsApp.' },
      { agent: true, text: 'Entendido! Vou verificar o status da sua instância agora. Um momento...' },
    ],
  },
  {
    id: 'portal',
    icon: LayoutDashboard,
    label: 'Portal + CRM',
    title: 'Portal do Cliente com CRM Kanban',
    tagline: 'Visibilidade total sobre leads e conversas.',
    description:
      'Cada empresa recebe acesso ao seu portal personalizado: CRM Kanban com os leads capturados pelo agente, histórico completo de conversas, métricas de performance, alertas de follow-up vencidos e exportação CSV.',
    benefits: [
      'CRM Kanban: Novo → Contato → Qualificado → Proposta → Fechado',
      'Temperatura do lead (quente/morno/frio) com badge visual',
      'Alertas automáticos de follow-ups vencidos',
      'Exportação CSV de todos os leads para uso externo',
    ],
    primaryCta: { label: 'Ver Demo do Portal', to: '/chat', icon: Sparkles },
    secondaryCta: { label: 'Quero o Portal', whatsapp: true },
    accent: 'purple',
    border: 'border-purple-500/30',
    bg: 'bg-purple-500/5',
    iconBg: 'bg-purple-500/15 text-purple-400',
    tabActive: 'bg-purple-600 text-white',
    tabInactive: 'hover:bg-purple-600/10 hover:text-purple-300',
    btnClass: 'bg-purple-600 hover:bg-purple-500 shadow-purple-500/20 hover:shadow-purple-500/40',
    chatBubble: 'bg-purple-600/80',
    checkColor: 'text-purple-400',
    preview: [
      { label: 'Leads no funil', value: '47', up: true },
      { label: 'Follow-ups vencidos', value: '2', up: false },
      { label: 'Taxa de fechamento', value: '34%', up: true },
    ],
    chatMessages: [
      { agent: true, text: 'O portal identificou 3 leads "quentes" com follow-up vencido.' },
      { agent: false, text: 'Quem são eles? Preciso entrar em contato hoje.' },
      { agent: true, text: 'TechCorp (R$8k), Acme Ltd (R$3k) e Studio X (R$1.5k). Quer que eu envie uma mensagem para eles agora?' },
    ],
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
          <h2 className="text-3xl font-bold text-white mb-3">O que entregamos</h2>
          <p className="text-gray-400 max-w-lg">
            Três produtos construídos sobre o mesmo framework — escolha o que faz mais sentido para o seu negócio agora.
          </p>
        </div>
        <Link to="/contact" className="text-primary hover:text-primary-light font-bold flex items-center gap-1 transition-colors shrink-0">
          Ver planos completos <ArrowRight className="w-5 h-5" />
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
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold whitespace-nowrap transition-all duration-200 ${
                active === i ? sol.tabActive : `text-gray-400 ${sol.tabInactive}`
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

          <ul className="space-y-2.5">
            {s.benefits.map((b) => (
              <li key={b} className="flex items-start gap-2.5 text-sm text-gray-300">
                <CheckCircle className={`w-4 h-4 mt-0.5 shrink-0 ${s.checkColor}`} />
                {b}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              to={s.primaryCta.to}
              className={`flex items-center gap-2 h-11 px-6 rounded-xl text-white font-bold text-sm transition-all shadow-lg ${s.btnClass}`}
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

        {/* Right: visual preview */}
        <div className="hidden md:flex flex-col gap-4">
          {/* Metrics card */}
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
            {s.preview.map((m) => (
              <div key={m.label} className="flex items-center justify-between py-2 border-b border-white/5 last:border-0">
                <span className="text-xs text-gray-500">{m.label}</span>
                <span className={`text-sm font-bold ${m.up ? 'text-green-400' : 'text-white'}`}>{m.value}</span>
              </div>
            ))}
          </div>

          {/* Chat preview */}
          <div className="rounded-xl bg-[#0d1117] border border-white/8 p-4 space-y-3">
            <div className="text-[10px] text-gray-600 uppercase tracking-wider mb-2">Conversa real</div>
            {s.chatMessages.map((msg, i) => (
              <div key={i} className={`flex gap-2 ${!msg.agent ? 'justify-end' : ''}`}>
                {msg.agent && (
                  <div className={`w-6 h-6 rounded-full ${s.iconBg} shrink-0 flex items-center justify-center`}>
                    <Sparkles className="w-3 h-3" />
                  </div>
                )}
                <div className={`rounded-xl px-3 py-2 text-xs max-w-[80%] ${
                  msg.agent
                    ? 'bg-white/5 rounded-tl-sm text-gray-300'
                    : `${s.chatBubble} rounded-tr-sm text-white`
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
