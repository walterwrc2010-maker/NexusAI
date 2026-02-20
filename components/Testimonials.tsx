import React from 'react';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      text: "Nossa eficiência aumentou 300% desde que implementamos os agentes da Nexus. O atendimento agora é imediato e nossos clientes adoram.",
      author: "Carlos Mendes",
      role: "CEO, TechGrowth Solutions",
      stars: 5,
    },
    {
      text: "A automação de qualificação de leads é perfeita. Só chegam na minha agenda clientes prontos para fechar. Revolucionou nosso comercial.",
      author: "Fernanda Lima",
      role: "Diretora Comercial, VendaMais",
      stars: 5,
    },
    {
      text: "Custo reduzido e satisfação do cliente nas alturas. Melhor investimento que fizemos este ano. A implementação foi super rápida.",
      author: "Roberto Almeida",
      role: "Founder, InovaSys",
      stars: 5,
    }
  ];

  return (
    <section id="cases" className="py-24 bg-slate-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Quem usa, <span className="text-indigo-400">recomenda</span>
          </h2>
          <p className="text-gray-400">Veja o que líderes de mercado dizem sobre nossos agentes.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="relative p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors group">
              <Quote className="absolute top-8 right-8 w-8 h-8 text-indigo-500/20 group-hover:text-indigo-500/40 transition-colors" />

              <div className="flex gap-1 mb-6">
                {[...Array(t.stars)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                ))}
              </div>

              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                "{t.text}"
              </p>

              <div>
                <p className="text-white font-bold">{t.author}</p>
                <p className="text-indigo-400 text-sm">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
