import React, { useState } from 'react';
import { BrainCircuit, Network, Cpu, Zap, Database, MessageCircle, Calendar, Mail, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const capabilities = [
  {
    icon: BrainCircuit,
    color: 'bg-indigo-500/15 text-indigo-400 border-indigo-500/20',
    title: 'Raciocínio Avançado',
    summary: 'Entende contexto e decide a melhor ação',
    detail:
      'O agente analisa históricamente a conversa, identifica a intenção real do cliente (mesmo que mal escrita), e escolhe a ação mais adequada — sem depender de menus ou palavras-chave fixas.',
  },
  {
    icon: Network,
    color: 'bg-fuchsia-500/15 text-fuchsia-400 border-fuchsia-500/20',
    title: 'Conectividade Total',
    summary: 'Integra-se com seus sistemas existentes',
    detail:
      'Via APIs e webhooks, o agente lê e escreve dados no seu CRM, ERP, planilhas, banco de dados e qualquer sistema com API — tudo em tempo real, sem intervenção humana.',
  },
  {
    icon: Zap,
    color: 'bg-amber-500/15 text-amber-400 border-amber-500/20',
    title: 'Execução de Tarefas',
    summary: 'Faz além de responder — age no mundo',
    detail:
      'O agente não apenas responde mensagens: ele cria tickets, agenda reuniões, envia emails, atualiza registros e aciona workflows no n8n automaticamente durante a conversa.',
  },
  {
    icon: Database,
    color: 'bg-cyan-500/15 text-cyan-400 border-cyan-500/20',
    title: 'Memória Persistente',
    summary: 'Lembra de interações anteriores',
    detail:
      'Com memória de longo prazo, o agente reconhece clientes recorrentes, sabe o histórico de atendimento e personaliza cada resposta com base no que já sabe sobre aquela pessoa.',
  },
];

const integrations = [
  { name: 'WhatsApp', icon: MessageCircle, color: 'text-green-400' },
  { name: 'Google Calendar', icon: Calendar, color: 'text-blue-400' },
  { name: 'E-mail', icon: Mail, color: 'text-orange-400' },
  { name: 'n8n', icon: Zap, color: 'text-amber-400' },
  { name: 'CRM', icon: Database, color: 'text-pink-400' },
  { name: 'API REST', icon: Network, color: 'text-cyan-400' },
];

const architectureLayers = [
  { label: 'Entrada', items: ['WhatsApp', 'Chat Web', 'E-mail', 'API'], color: 'bg-slate-800/60 border-slate-700/50' },
  { label: 'LLM Core', items: ['Gemini / GPT-4 / Claude'], color: 'bg-indigo-900/30 border-indigo-500/30', highlight: true },
  { label: 'Nexus Orchestrator', items: ['Raciocínio · Memória · Ferramentas'], color: 'bg-violet-900/30 border-violet-500/30', highlight: true },
  { label: 'Integrações', items: ['CRM', 'n8n', 'Calendar', 'ERP', 'DB'], color: 'bg-slate-800/60 border-slate-700/50' },
];

export default function AboutAgents() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section id="agents" className="py-24 bg-slate-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-xs font-bold uppercase tracking-wider mb-4">
            Tecnologia de Ponta
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
            O que são <span className="text-violet-400">Agentes de IA?</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Além de responder mensagens, Agentes de IA <strong className="text-white">tomam decisões</strong>, acessam ferramentas e
            executam tarefas de forma autônoma — 24h por dia, sem supervisão.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">

          {/* Left: Interactive Capabilities */}
          <div className="space-y-3">
            <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-4">Capacidades do Agente</p>
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
              className="mt-4 w-full flex items-center justify-center gap-2 h-12 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-bold text-sm transition-all shadow-lg shadow-violet-500/20"
            >
              <BrainCircuit className="w-4 h-4" />
              Ver o Agente em Ação
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Right: Architecture + Integrations */}
          <div className="space-y-5">
            <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Arquitetura Nexus</p>

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
              <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-4">Integrações Disponíveis</p>
              <div className="grid grid-cols-3 gap-3">
                {integrations.map(({ name, icon: Icon, color }) => (
                  <div key={name} className="flex flex-col items-center gap-1.5 p-3 rounded-xl bg-white/3 border border-white/5 hover:border-white/10 hover:bg-white/5 transition-all cursor-default group">
                    <Icon className={`w-5 h-5 ${color}`} />
                    <span className="text-[11px] text-slate-400 group-hover:text-white transition-colors font-medium">{name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-white/5 pt-10">
          {[
            { value: '24/7', label: 'Disponibilidade' },
            { value: '<2s', label: 'Tempo de resposta' },
            { value: '+400', label: 'Integrações via n8n' },
            { value: '0', label: 'Intervenções humanas' },
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
