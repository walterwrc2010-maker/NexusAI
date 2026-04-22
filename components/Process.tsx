import React from 'react';
import { Search, PenTool, Rocket, Headphones } from 'lucide-react';
import { motion } from 'framer-motion';

const steps = [
  {
    icon: Search,
    color: 'bg-primary/15 text-primary-light border-primary/20',
    glow:  'group-hover:shadow-glow-sm',
    num:   '01',
    title: 'Diagnóstico',
    desc:  'Analisamos seus processos atuais para identificar gargalos e oportunidades de automação.',
  },
  {
    icon: PenTool,
    color: 'bg-violet-500/15 text-violet-400 border-violet-500/20',
    glow:  'group-hover:shadow-neon-violet',
    num:   '02',
    title: 'Desenho da Solução',
    desc:  'Criamos a arquitetura dos agentes e fluxos de automação personalizados para sua necessidade.',
  },
  {
    icon: Rocket,
    color: 'bg-cyan-500/15 text-cyan-400 border-cyan-500/20',
    glow:  'group-hover:shadow-neon-cyan',
    num:   '03',
    title: 'Implementação',
    desc:  'Desenvolvemos, testamos e colocamos seus agentes no ar em tempo recorde — setup em 48h.',
  },
  {
    icon: Headphones,
    color: 'bg-green-500/15 text-green-400 border-green-500/20',
    glow:  'group-hover:shadow-neon-green',
    num:   '04',
    title: 'Acompanhamento',
    desc:  'Monitoramento contínuo e otimizações para garantir o máximo de ROI ao longo do tempo.',
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function Process() {
  return (
    <section id="process" className="py-24 bg-surface-dark/25 border-y border-border-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="section-badge-indigo mb-4">Como trabalhamos</div>
          <h2 className="text-3xl md:text-5xl font-bold text-white font-display mb-4">
            Do caos à{' '}
            <span className="text-gradient-primary">eficiência</span>
          </h2>
          <p className="text-slate-400 max-w-md mx-auto">
            Um processo estruturado que garante resultado desde o primeiro dia.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative"
        >
          {/* Linha conectora desktop */}
          <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-border-dark to-transparent pointer-events-none" />

          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <motion.div key={step.num} variants={item} className="relative group">
                <div className="flex flex-col items-center text-center">
                  {/* Ícone */}
                  <div className={`relative w-24 h-24 rounded-2xl border flex items-center justify-center mb-6 transition-all duration-300 ${step.color} ${step.glow}`}>
                    <Icon className="w-7 h-7" />
                    {/* Número */}
                    <span className="absolute -top-2.5 -right-2.5 w-6 h-6 rounded-full bg-border-dark border border-border-subtle text-[10px] font-bold text-slate-400 flex items-center justify-center">
                      {step.num}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
