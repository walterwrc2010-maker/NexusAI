import React from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const faqs = [
    {
      question: "O que exatamente é um Agente de IA?",
      answer: "Um Agente de IA é um software capaz de compreender linguagem natural, acessar ferramentas e executar tarefas de forma autônoma, diferente de um chatbot comum que apenas segue regras fixas."
    },
    {
      question: "Preciso de conhecimentos de programação?",
      answer: "Não. Nós entregamos a solução completa, configurada e pronta para usar. Você só precisa acompanhar os resultados."
    },
    {
      question: "Funciona no WhatsApp?",
      answer: "Sim! Nossos agentes podem ser integrados ao WhatsApp, Instagram, E-mail e diversos CRMs do mercado."
    },
    {
      question: "Quanto tempo leva para implementar?",
      answer: "A maioria dos projetos é entregue e testada entre 7 a 15 dias úteis, dependendo da complexidade das integrações."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-slate-950 border-t border-white/5">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-slate-400">Tire suas dúvidas sobre nossa tecnologia</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group bg-white/[0.02] border border-white/5 rounded-2xl overflow-hidden [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-white font-medium hover:bg-white/[0.02] transition-colors">
                <span className="text-lg">{faq.question}</span>
                <ChevronDown className="bg-white/5 rounded-full p-1 w-8 h-8 text-slate-400 group-open:rotate-180 transition-transform duration-300" />
              </summary>
              <div className="px-6 pb-6 pt-0 text-slate-400 leading-relaxed border-t border-white/5 mt-2">
                <div className="pt-4">
                  {faq.answer}
                </div>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
