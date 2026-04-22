import React, { useState } from 'react';
import { Kanban, Zap, LayoutDashboard, ChevronDown, ChevronUp, ArrowRight, BrainCircuit } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const capabilities = [
  {
    icon: WhatsAppIcon,
    color: 'bg-green-500/15 text-green-400 border-green-500/20',
    title: 'WhatsApp Nativo (Evolution API)',
    summary: 'Seu número, sua instância — o agente atende',
    detail:
      'Conectamos diretamente à Evolution API com o número da sua empresa. O agente responde mensagens em tempo real, entende contexto, lembra do histórico e executa ações — tudo sem sair do WhatsApp.',
  },
  {
    icon: Kanban,
    color: 'bg-indigo-500/15 text-indigo-400 border-indigo-500/20',
    title: 'CRM Kanban Automático',
    summary: 'Cada conversa vira um lead qualificado',
    detail:
      'O agente extrai nome, contato, orçamento e urgência da conversa e cria o lead no CRM automaticamente. Classifica como quente, morno ou frio com base no interesse detectado. Você arrasta o card entre colunas ou o próprio agente avança o funil.',
  },
  {
    icon: Zap,
    color: 'bg-amber-500/15 text-amber-400 border-amber-500/20',
    title: '+20 Skills Integradas',
    summary: 'O agente não só fala — ele age',
    detail:
      'Durante a conversa o agente pode: gerar PDF de proposta, processar pagamento PIX/cartão, agendar no Google Calendar, atualizar HubSpot ou Pipedrive, buscar na web, enviar email, postar no Instagram e muito mais.',
  },
  {
    icon: LayoutDashboard,
    color: 'bg-cyan-500/15 text-cyan-400 border-cyan-500/20',
    title: 'Portal do Cliente',
    summary: 'Dashboard completo para cada cliente',
    detail:
      'Cada cliente tem acesso ao seu portal com: CRM Kanban, histórico de todas as conversas, métricas de leads (total, semana, conversão), alertas de follow-up vencidos e exportação CSV — tudo filtrado por empresa.',
  },
];

const integrations = [
  { name: 'WhatsApp', color: 'text-green-400' },
  { name: 'Evolution API', color: 'text-green-300' },
  { name: 'n8n', color: 'text-amber-400' },
  { name: 'HubSpot', color: 'text-orange-400' },
  { name: 'Pipedrive', color: 'text-indigo-400' },
  { name: 'Google Suite', color: 'text-blue-400' },
  { name: 'Meta Social', color: 'text-pink-400' },
  { name: 'Google Ads', color: 'text-cyan-400' },
  { name: 'PIX / Cartão', color: 'text-emerald-400' },
  { name: 'Contratos PDF', color: 'text-violet-400' },
  { name: 'Supabase', color: 'text-teal-400' },
  { name: 'Slack', color: 'text-purple-400' },
];

const architectureLayers = [
  { label: 'Canal de entrada', items: ['WhatsApp', 'Chat Web', 'API REST', 'Email'], color: 'bg-slate-800/60 border-slate-700/50', highlight: false },
  { label: 'LLM Core', items: ['Claude Sonnet 4.6', 'Gemini Flash 2.0'], color: 'bg-indigo-900/30 border-indigo-500/30', highlight: true },
  { label: 'Nexus Orchestrator', items: ['Memória · CRM · Skills · Webhook'], color: 'bg-violet-900/30 border-violet-500/30', highlight: true },
  { label: 'Integrações', items: ['Evolution API', 'n8n', 'HubSpot', 'Google', '+16'], color: 'bg-slate-800/60 border-slate-700/50', highlight: false },
];

export default function AboutAgents() {
  const [expanded, setExpanded] = useState<number | null>(0);

  return (
    <section id="agents" className="py-24 bg-slate-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <div className="section-badge-violet mb-4">
            Como funciona
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight font-display">
            Uma plataforma completa,{' '}
            <span className="text-violet-400">não só um chatbot</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            O agente conversa no WhatsApp, <strong className="text-white">qualifica o lead automaticamente</strong>, atualiza o CRM e ainda pode gerar proposta, cobrar e agendar — tudo na mesma conversa.
          </p>
        </motion.div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">

          {/* Left: Capabilities accordion */}
          <div className="space-y-3">
            <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-4">O que o agente entrega</p>
            {capabilities.map((cap, i) => {
              const Icon = cap.icon;
              const isOpen = expanded === i;
              return (
                <button
                  key={cap.title}
                  onClick={() => setExpanded(isOpen ? null : i)}
                  className="w-full text-left bg-slate-900/60 border border-white/5 rounded-xl p-4 hover:border-white/10 transition-all group"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-xl border flex items-center justify-center shrink-0 ${cap.color}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <div className="text-white font-bold text-sm">{cap.title}</div>
                      <div className="text-slate-500 text-xs mt-0.5">{cap.summary}</div>
                    </div>
                    {isOpen
                      ? <ChevronUp className="w-4 h-4 text-gray-500 shrink-0" />
                      : <ChevronDown className="w-4 h-4 text-gray-600 shrink-0 group-hover:text-gray-400 transition-colors" />
                    }
                  </div>
                  {isOpen && (
                    <p className="mt-3 ml-14 text-sm text-slate-400 leading-relaxed border-t border-white/5 pt-3">
                      {cap.detail}
                    </p>
                  )}
                </button>
              );
            })}

            <Link
              to="/chat"
              className="mt-4 w-full flex items-center justify-center gap-2 h-12 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-bold text-sm transition-all shadow-neon-violet"
            >
              <BrainCircuit className="w-4 h-4" />
              Testar o Agente ao Vivo
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Right: Architecture + Integrations */}
          <div className="space-y-5">
            <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Arquitetura da plataforma</p>

            {/* Architecture flow */}
            <div className="bg-slate-900 border border-white/8 rounded-2xl p-6 space-y-2 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />
              {architectureLayers.map((layer, i) => (
                <div key={layer.label}>
                  <div className={`rounded-xl border p-3.5 ${layer.color}`}>
                    <div className="text-[10px] text-gray-500 uppercase tracking-wider font-bold mb-1">{layer.label}</div>
                    <div className="flex flex-wrap gap-2">
                      {layer.items.map(item => (
                        <span key={item} className={`text-xs px-2 py-0.5 rounded-md font-mono ${layer.highlight ? 'text-white bg-white/10' : 'text-slate-400 bg-white/5'}`}>
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                  {i < architectureLayers.length - 1 && (
                    <div className="h-5 w-px bg-white/10 mx-auto" />
                  )}
                </div>
              ))}
            </div>

            {/* Integrations grid */}
            <div className="bg-slate-900 border border-white/8 rounded-2xl p-5 shadow-xl">
              <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-4">+20 integrações disponíveis</p>
              <div className="grid grid-cols-4 gap-2">
                {integrations.map(({ name, color }) => (
                  <div key={name}
                    className="flex flex-col items-center gap-1 p-2 rounded-xl bg-white/3 border border-white/5 hover:border-white/10 hover:bg-white/5 transition-all cursor-default">
                    <span className={`text-[10px] font-semibold text-center leading-tight ${color}`}>{name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stats strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-white/5 pt-10">
          {[
            { value: '24/7', label: 'Disponibilidade' },
            { value: '+20', label: 'Skills integradas' },
            { value: 'Auto', label: 'Qualificação de leads' },
            { value: '48h', label: 'Tempo de setup' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-slate-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
