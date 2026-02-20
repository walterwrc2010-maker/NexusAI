import React, { useEffect, useRef, useState } from 'react';
import { Sparkles, PlayCircle, ArrowRight, Activity, TrendingUp, Zap, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

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

/* ── Live Notification pill ──────────────────────────────── */
const events = [
  { dot: 'bg-green-400', label: 'Lead qualificado', sub: 'TechCorp via WhatsApp', time: 'agora', color: 'text-green-400' },
  { dot: 'bg-indigo-400', label: 'Workflow disparado', sub: 'n8n → CRM atualizado', time: '12s', color: 'text-indigo-400' },
  { dot: 'bg-cyan-400', label: 'E-mail enviado', sub: 'Proposta para Acme Corp', time: '1m', color: 'text-cyan-400' },
  { dot: 'bg-amber-400', label: 'Reunião agendada', sub: 'Google Calendar sync', time: '3m', color: 'text-amber-400' },
];

export default function Hero() {
  const [activeEvent, setActiveEvent] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setActiveEvent(i => (i + 1) % events.length), 2800);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative pt-24 pb-16 min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Ambient blobs */}
      <div className="absolute top-0 right-0 -z-10 w-[700px] h-[700px] bg-primary/10 rounded-full blur-[140px] opacity-50 pointer-events-none" />
      <div className="absolute bottom-0 left-0 -z-10 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[120px] opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── LEFT: Hero copy ───────────────────────────── */}
          <div className="flex flex-col gap-6 text-center lg:text-left z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-border-dark/50 border border-primary/30 w-fit mx-auto lg:mx-0">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs font-semibold text-primary-light uppercase tracking-wider">AI Agents Live</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight text-white font-display">
              Escale com <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400">Agentes de IA</span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl font-medium leading-relaxed max-w-xl mx-auto lg:mx-0">
              Automação inteligente e workflows autônomos para empresas modernas. Reduza custos e aumente eficiência com tecnologia proprietária.
            </p>

            <div className="flex flex-wrap gap-3 justify-center lg:justify-start pt-4">
              <Link
                to="/chat"
                className="h-12 px-7 rounded-lg bg-primary hover:bg-primary-light text-white font-bold text-base transition-all shadow-lg shadow-primary/25 hover:shadow-primary/50 flex items-center gap-2 group"
              >
                <Sparkles className="w-5 h-5" />
                Agente Demo
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <button
                onClick={() => document.getElementById('cases')?.scrollIntoView({ behavior: 'smooth' })}
                className="h-12 px-7 rounded-lg bg-surface-dark border border-border-dark hover:border-gray-500 text-white font-bold text-base transition-all flex items-center gap-2"
              >
                <PlayCircle className="w-5 h-5" />
                Ver Cases
              </button>
            </div>

            <div className="flex items-center gap-4 justify-center lg:justify-start mt-2 opacity-60">
              <span className="text-xs text-gray-400 font-medium">Trusted by innovative teams at</span>
              <div className="flex gap-4 grayscale opacity-60 text-white">
                <svg className="h-5 w-auto" fill="currentColor" viewBox="0 0 100 30"><path d="M10,15 L20,5 L30,15 L20,25 Z M40,5 H50 V25 H40 Z M60,5 H80 V10 H65 V12 H75 V17 H65 V25 H60 Z" /></svg>
                <svg className="h-5 w-auto" fill="currentColor" viewBox="0 0 100 30"><circle cx="15" cy="15" r="10" /><rect height="20" width="10" x="35" y="5" /><rect height="5" width="30" x="55" y="5" /><rect height="5" width="30" x="55" y="20" /></svg>
              </div>
            </div>
          </div>

          {/* ── RIGHT: Dashboard panel ────────────────────── */}
          <div className="relative w-full max-w-lg mx-auto lg:max-w-none">

            {/* Glow ring behind the card */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-600/20 via-primary/10 to-cyan-600/20 blur-2xl scale-105 pointer-events-none" />

            {/* Main card */}
            <div className="relative bg-[#0d1117] border border-white/10 rounded-2xl p-6 shadow-2xl overflow-hidden group">

              {/* Subtle inner grid texture */}
              <div className="absolute inset-0 opacity-[0.03]"
                style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.5) 1px,transparent 1px)', backgroundSize: '40px 40px' }} />

              {/* Header row */}
              <div className="relative flex items-center justify-between mb-5 pb-4 border-b border-white/5">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center">
                    <Activity className="w-4 h-4 text-indigo-400" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white leading-tight">Nexus Performance</div>
                    <div className="text-[11px] text-gray-500">Live Dashboard</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-[11px] text-green-400 font-bold">Ao vivo</span>
                </div>
              </div>

              {/* Chart */}
              <div className="relative h-28 w-full mb-5">
                <svg className="w-full h-full" viewBox="0 0 300 80" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#6366f1" stopOpacity="0.35" />
                      <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
                    </linearGradient>
                    <filter id="glow">
                      <feGaussianBlur stdDeviation="2" result="blur" />
                      <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                    </filter>
                  </defs>
                  {/* Area fill */}
                  <path d="M0,70 C30,65 50,55 80,45 S130,20 160,18 S230,10 300,5 V80 H0Z" fill="url(#chartGrad)" />
                  {/* Line */}
                  <path d="M0,70 C30,65 50,55 80,45 S130,20 160,18 S230,10 300,5"
                    fill="none" stroke="#6366f1" strokeWidth="2.5"
                    strokeLinecap="round" filter="url(#glow)" />
                  {/* Data points */}
                  {[[80, 45], [160, 18], [300, 5]].map(([x, y], i) => (
                    <circle key={i} cx={x} cy={y} r="4" fill="#0d1117" stroke="#6366f1" strokeWidth="2" />
                  ))}
                </svg>
                {/* Floating badge */}
                <div className="absolute top-1 right-12 bg-green-500/15 border border-green-500/30 px-2.5 py-1 rounded-lg text-xs text-green-400 font-bold shadow-lg shadow-green-500/10 flex items-center gap-1">
                  <ArrowUpRight className="w-3 h-3" />+124% este mês
                </div>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-3 mb-5">
                {[
                  { icon: TrendingUp, label: 'Leads', value: 450, suffix: '%', color: 'indigo', sign: '+' },
                  { icon: Zap, label: 'Eficiência', value: 3, suffix: 'x', color: 'cyan', sign: '' },
                  { icon: CheckCircle2, label: 'Custo', value: 60, suffix: '%', color: 'green', sign: '-' },
                ].map(({ icon: Icon, label, value, suffix, color, sign }) => (
                  <div key={label} className="bg-white/3 border border-white/5 rounded-xl p-3 hover:border-white/10 transition-colors">
                    <div className="flex items-center gap-1.5 mb-2">
                      <Icon className={`w-3.5 h-3.5 text-${color}-400`} />
                      <span className="text-[10px] text-gray-500 font-medium">{label}</span>
                    </div>
                    <div className={`text-lg font-extrabold text-${color}-400 leading-none`}>
                      {sign}<Counter to={value} suffix={suffix} />
                    </div>
                  </div>
                ))}
              </div>

              {/* Live event feed */}
              <div className="bg-white/3 border border-white/5 rounded-xl p-3.5">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Eventos em tempo real</span>
                  <span className="text-[10px] text-indigo-400 font-bold">{events.length} agentes ativos</span>
                </div>
                <div className="space-y-2.5">
                  {events.map((ev, i) => (
                    <div
                      key={i}
                      className={`flex items-center gap-3 rounded-lg px-2.5 py-2 transition-all duration-500 ${i === activeEvent ? 'bg-white/5 border border-white/8' : 'opacity-40'
                        }`}
                    >
                      <span className={`w-2 h-2 rounded-full shrink-0 ${ev.dot} ${i === activeEvent ? 'animate-pulse' : ''}`} />
                      <div className="flex-1 min-w-0">
                        <div className="text-[11px] text-white font-semibold truncate">{ev.label}</div>
                        <div className="text-[10px] text-gray-500 truncate">{ev.sub}</div>
                      </div>
                      <span className={`text-[10px] font-bold shrink-0 ${i === activeEvent ? ev.color : 'text-gray-600'}`}>{ev.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating pill — top right */}
            <div className="absolute -top-4 -right-4 bg-[#0d1117] border border-green-500/30 px-3 py-2 rounded-xl shadow-xl shadow-green-500/10 flex items-center gap-2 z-20 group-hover:scale-105 transition-transform">
              <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-3 h-3 text-green-400" />
              </div>
              <div>
                <div className="text-[10px] font-bold text-white">Deal fechado</div>
                <div className="text-[9px] text-gray-500">Acme Corp · R$ 28k</div>
              </div>
            </div>

            {/* Floating pill — bottom left */}
            <div className="absolute -bottom-4 -left-4 bg-[#0d1117] border border-indigo-500/30 px-3 py-2 rounded-xl shadow-xl shadow-indigo-500/10 flex items-center gap-2 z-20">
              <div className="w-5 h-5 rounded-full bg-indigo-500/20 flex items-center justify-center shrink-0">
                <Zap className="w-3 h-3 text-indigo-400" />
              </div>
              <div>
                <div className="text-[10px] font-bold text-white">n8n workflow</div>
                <div className="text-[9px] text-gray-500">Otimizado · 300ms saved</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
