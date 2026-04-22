import React, { useEffect, useRef, useState } from 'react';
import { Sparkles, ArrowRight, CheckCircle2, ArrowUpRight, Kanban, Zap } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

/* ── Animated Counter ────────────────────────────────────── */
function Counter({ to, suffix = '', duration = 1800 }: { to: number; suffix?: string; duration?: number }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      observer.disconnect();
      let start = 0;
      const step = (timestamp: number) => {
        if (!start) start = timestamp;
        const progress = Math.min((timestamp - start) / duration, 1);
        setVal(Math.floor(progress * to));
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [to, duration]);
  return <span ref={ref}>{val}{suffix}</span>;
}

/* ── CRM Kanban mini preview ─────────────────────────────── */
const kbStages = [
  { label: 'Novo', color: '#6366f1', leads: ['João S.', 'Ana M.'] },
  { label: 'Qualificado', color: '#d97706', leads: ['Pedro K.'] },
  { label: 'Proposta', color: '#00c9a7', leads: ['TechCorp', 'Acme'] },
];

const tempBadge: Record<string, string> = {
  'João S.': 'bg-red-500/20 text-red-400',
  'Ana M.': 'bg-amber-500/20 text-amber-400',
  'Pedro K.': 'bg-red-500/20 text-red-400',
  'TechCorp': 'bg-red-500/20 text-red-400',
  'Acme': 'bg-amber-500/20 text-amber-400',
};
const tempLabel: Record<string, string> = {
  'João S.': 'Quente', 'Ana M.': 'Morno', 'Pedro K.': 'Quente',
  'TechCorp': 'Quente', 'Acme': 'Morno',
};

/* ── Live feed events ─────────────────────────────────────── */
const events = [
  { dot: 'bg-green-400', label: 'Lead qualificado', sub: 'João S. → Quente · R$ 3k', color: 'text-green-400', time: 'agora' },
  { dot: 'bg-indigo-400', label: 'CRM atualizado', sub: 'TechCorp movido p/ Proposta', color: 'text-indigo-400', time: '8s' },
  { dot: 'bg-amber-400', label: 'Follow-up agendado', sub: 'Acme Corp · amanhã 10h', color: 'text-amber-400', time: '1m' },
  { dot: 'bg-cyan-400', label: 'Skill disparada', sub: 'doc_generator → PDF proposta', color: 'text-cyan-400', time: '2m' },
];

export default function Hero() {
  const [activeEvent, setActiveEvent] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setActiveEvent(i => (i + 1) % events.length), 2800);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative pt-24 pb-16 min-h-screen flex flex-col justify-center overflow-hidden">
      <div className="absolute top-0 right-0 -z-10 w-[700px] h-[700px] rounded-full blur-[140px] opacity-40 pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(124,101,246,0.18) 0%, transparent 70%)' }} />
      <div className="absolute bottom-0 left-0 -z-10 w-[500px] h-[500px] rounded-full blur-[120px] opacity-30 pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(201,163,74,0.12) 0%, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── LEFT ────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
            className="flex flex-col gap-6 text-center lg:text-left z-10"
          >
            <div className="section-badge-primary w-fit mx-auto lg:mx-0">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Plataforma de Agentes AI
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight text-white font-display">
              WhatsApp com IA{' '}
              <span className="text-gradient-hero">
                + CRM automático
              </span>
            </h1>

            <p className="text-gray-400 text-lg md:text-xl font-medium leading-relaxed max-w-xl mx-auto lg:mx-0">
              Agentes que vendem, atendem e qualificam leads 24/7. Cada conversa vira um lead no CRM — classificado como quente, morno ou frio, automaticamente.
            </p>

            {/* Checkmarks */}
            <ul className="flex flex-col gap-2 text-sm text-gray-300 items-center lg:items-start">
              {[
                'CRM Kanban gerado a partir das conversas do WhatsApp',
                'Portal do cliente com métricas, conversas e exportação CSV',
                '+20 skills: pagamentos, docs, calendário, Google Suite e mais',
              ].map(item => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-3 justify-center lg:justify-start pt-2">
              <Link
                to="/chat"
                className="h-12 px-7 rounded-lg bg-primary hover:bg-primary-light text-white font-bold text-base transition-all shadow-neon-primary flex items-center gap-2 group"
              >
                <Sparkles className="w-5 h-5" />
                Testar o Agente
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="h-12 px-7 rounded-lg bg-surface-dark border border-border-dark hover:border-gray-500 text-white font-bold text-base transition-all flex items-center gap-2"
              >
                Falar com Especialista
              </Link>
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-3 justify-center lg:justify-start mt-1">
              <div className="flex -space-x-2">
                {['C','F','R','A','M'].map((l, i) => (
                  <div key={i} className="w-7 h-7 rounded-full border-2 border-slate-950 flex items-center justify-center text-[10px] font-bold text-white"
                    style={{ background: ['#6366f1','#8b5cf6','#06b6d4','#10b981','#f59e0b'][i] }}>
                    {l}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex gap-0.5 mb-0.5">
                  {[...Array(5)].map((_, i) => <span key={i} className="text-amber-400 text-xs">★</span>)}
                </div>
                <span className="text-xs text-gray-500">+50 empresas automatizadas</span>
              </div>
            </div>
          </motion.div>

          {/* ── RIGHT: Portal preview ────────────────────── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
            className="relative w-full max-w-lg mx-auto lg:max-w-none"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-600/20 via-primary/10 to-cyan-600/20 blur-2xl scale-105 pointer-events-none" />

            {/* Main card */}
            <div className="relative bg-surface-card border border-border-subtle rounded-2xl p-5 shadow-card overflow-hidden">
              <div className="absolute inset-0 opacity-[0.03]"
                style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.5) 1px,transparent 1px)', backgroundSize: '40px 40px' }} />

              {/* Header */}
              <div className="relative flex items-center justify-between mb-4 pb-3 border-b border-white/5">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center">
                    <Kanban className="w-4 h-4 text-indigo-400" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">Portal do Cliente · CRM</div>
                    <div className="text-[10px] text-gray-500">Kanban automático via WhatsApp</div>
                  </div>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-[10px] text-green-400 font-bold">Ao vivo</span>
                </div>
              </div>

              {/* Stats strip */}
              <div className="grid grid-cols-3 gap-2 mb-4">
                {[
                  { label: 'Leads', value: 47, suffix: '', color: 'text-indigo-400' },
                  { label: 'Esta semana', value: 12, suffix: '', color: 'text-cyan-400' },
                  { label: 'Conversão', value: 34, suffix: '%', color: 'text-green-400' },
                ].map(({ label, value, suffix, color }) => (
                  <div key={label} className="bg-white/3 border border-white/5 rounded-xl p-2.5 text-center">
                    <div className={`text-base font-extrabold ${color}`}><Counter to={value} suffix={suffix} /></div>
                    <div className="text-[9px] text-gray-500 mt-0.5">{label}</div>
                  </div>
                ))}
              </div>

              {/* CRM Kanban */}
              <div className="flex gap-2 mb-4 overflow-x-auto pb-1">
                {kbStages.map((col) => (
                  <div key={col.label} className="min-w-[110px] flex-1">
                    <div className="flex items-center gap-1.5 mb-2">
                      <span className="w-2 h-2 rounded-full shrink-0" style={{ background: col.color }} />
                      <span className="text-[9px] font-bold text-gray-500 uppercase tracking-wider">{col.label}</span>
                      <span className="text-[9px] text-gray-600 ml-auto">{col.leads.length}</span>
                    </div>
                    <div className="space-y-1.5">
                      {col.leads.map(lead => (
                        <div key={lead} className="bg-white/4 border border-white/6 rounded-lg px-2.5 py-2"
                          style={{ borderLeft: `2.5px solid ${col.color}` }}>
                          <div className="text-[10px] font-semibold text-white mb-1">{lead}</div>
                          <span className={`text-[8px] font-bold px-1.5 py-0.5 rounded-full ${tempBadge[lead]}`}>
                            {tempLabel[lead]}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Live event feed */}
              <div className="bg-white/3 border border-white/5 rounded-xl p-3">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[9px] font-bold text-gray-500 uppercase tracking-wider">Eventos em tempo real</span>
                  <span className="text-[9px] text-indigo-400 font-bold">Agente ativo</span>
                </div>
                <div className="space-y-2">
                  {events.map((ev, i) => (
                    <div key={i}
                      className={`flex items-center gap-2.5 rounded-lg px-2 py-1.5 transition-all duration-500 ${i === activeEvent ? 'bg-white/5 border border-white/8' : 'opacity-35'}`}>
                      <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${ev.dot} ${i === activeEvent ? 'animate-pulse' : ''}`} />
                      <div className="flex-1 min-w-0">
                        <div className="text-[10px] text-white font-semibold truncate">{ev.label}</div>
                        <div className="text-[9px] text-gray-500 truncate">{ev.sub}</div>
                      </div>
                      <span className={`text-[9px] font-bold shrink-0 ${i === activeEvent ? ev.color : 'text-gray-600'}`}>{ev.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Pill top-right */}
            <div className="absolute -top-4 -right-4 bg-[#0d1117] border border-green-500/30 px-3 py-1.5 rounded-xl shadow-xl shadow-green-500/10 flex items-center gap-2 z-20">
              <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
                <WhatsAppIcon className="w-3 h-3 text-green-400" />
              </div>
              <div>
                <div className="text-[10px] font-bold text-white">WhatsApp → CRM</div>
                <div className="text-[9px] text-gray-500">Auto qualificado</div>
              </div>
            </div>

            {/* Pill bottom-left */}
            <div className="absolute -bottom-4 -left-4 bg-[#0d1117] border border-indigo-500/30 px-3 py-1.5 rounded-xl shadow-xl shadow-indigo-500/10 flex items-center gap-2 z-20">
              <div className="w-5 h-5 rounded-full bg-indigo-500/20 flex items-center justify-center shrink-0">
                <Zap className="w-3 h-3 text-indigo-400" />
              </div>
              <div>
                <div className="text-[10px] font-bold text-white">+20 skills ativas</div>
                <div className="text-[9px] text-gray-500">Pagamentos · Docs · Calendar</div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
