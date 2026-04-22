import React from 'react';
import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    text: "Nossa eficiência aumentou 300% desde que implementamos os agentes da Nexus. O atendimento agora é imediato e nossos clientes adoram.",
    author: "Carlos Mendes",
    role: "CEO",
    company: "TechGrowth Solutions",
    stars: 5,
    initials: "CM",
    gradient: "from-indigo-500 to-violet-600",
  },
  {
    text: "A automação de qualificação de leads é perfeita. Só chegam na minha agenda clientes prontos para fechar. Revolucionou nosso comercial.",
    author: "Fernanda Lima",
    role: "Diretora Comercial",
    company: "VendaMais",
    stars: 5,
    initials: "FL",
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    text: "Custo reduzido e satisfação do cliente nas alturas. Melhor investimento que fizemos este ano. A implementação foi super rápida.",
    author: "Roberto Almeida",
    role: "Founder",
    company: "InovaSys",
    stars: 5,
    initials: "RA",
    gradient: "from-emerald-500 to-teal-600",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function Testimonials() {
  return (
    <section id="cases" className="py-24 bg-slate-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="section-badge-amber mb-4">
            Casos de Sucesso
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 font-display">
            Quem usa, <span className="text-gradient-hero">recomenda</span>
          </h2>
          <p className="text-gray-400 max-w-md mx-auto">
            Veja o que líderes de mercado dizem sobre nossos agentes de IA.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.author}
              variants={item}
              className="relative flex flex-col p-8 rounded-2xl bg-white/[0.025] border border-border-subtle hover:bg-white/[0.05] hover:border-white/[0.12] hover:shadow-card-hover transition-all duration-300 group"
            >
              {/* Quote icon */}
              <Quote className="absolute top-6 right-6 w-7 h-7 text-indigo-500/15 group-hover:text-indigo-500/30 transition-colors" />

              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {[...Array(t.stars)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                ))}
              </div>

              {/* Text */}
              <p className="text-slate-300 text-[15px] leading-relaxed flex-1 mb-6">
                "{t.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-5 border-t border-white/5">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.gradient} flex items-center justify-center shrink-0 shadow-lg`}>
                  <span className="text-xs font-bold text-white">{t.initials}</span>
                </div>
                <div>
                  <p className="text-white font-semibold text-sm leading-tight">{t.author}</p>
                  <p className="text-gray-500 text-xs mt-0.5">
                    {t.role} · <span className="text-indigo-400">{t.company}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-14 flex flex-wrap items-center justify-center gap-8 text-center"
        >
          {[
            { value: '98%', label: 'Satisfação média' },
            { value: '+50', label: 'Empresas atendidas' },
            { value: '300%', label: 'Ganho médio de eficiência' },
            { value: '48h', label: 'Tempo médio de setup' },
          ].map((s) => (
            <div key={s.label} className="flex flex-col items-center gap-1">
              <span className="text-2xl font-extrabold text-white">{s.value}</span>
              <span className="text-xs text-gray-500">{s.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
