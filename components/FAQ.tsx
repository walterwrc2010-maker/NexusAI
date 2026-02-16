
import React, { useState } from 'react';

const faqs = [
  {
    question: "O Agente de IA pode alucinar ou dar informações erradas?",
    answer: "Utilizamos técnicas avançadas de RAG (Geração Aumentada de Recuperação) e instruções de sistema rigorosas para garantir que o agente responda apenas com base na base de conhecimento oficial da sua empresa."
  },
  {
    question: "Meus dados estão seguros?",
    answer: "Sim. Trabalhamos com APIs empresariais que garantem que seus dados não sejam utilizados para treinar modelos públicos. Além disso, implementamos protocolos de segurança em todos os workflows."
  },
  {
    question: "Quanto tempo leva para implementar um Agente?",
    answer: "Depende da complexidade, mas um agente padrão de atendimento ou qualificação de leads pode estar rodando em menos de 15 dias úteis."
  },
  {
    question: "Preciso saber programação para gerenciar os agentes?",
    answer: "Absolutamente não. Entregamos a solução 'chave na mão' com dashboards intuitivos onde você pode acompanhar métricas e históricos de conversas."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-slate-900/30">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Dúvidas Frequentes</h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-white/5 rounded-2xl overflow-hidden bg-white/5">
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
              >
                <span className="font-semibold text-slate-200">{faq.question}</span>
                <svg 
                  className={`w-5 h-5 text-indigo-400 transition-transform ${openIndex === idx ? 'rotate-180' : ''}`} 
                  fill="none" viewBox="0 0 24 24" stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === idx && (
                <div className="px-6 pb-6 text-slate-400 text-sm leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
