
import React from 'react';

const AboutAgents: React.FC = () => {
  return (
    <section id="about-agents" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
             <div className="relative">
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-indigo-600/20 blur-3xl"></div>
                <div className="glass-morphism rounded-3xl p-8 border border-white/10 relative overflow-hidden">
                   <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                     <span className="p-2 bg-indigo-600 rounded-lg">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04M12 21.48V22" />
                        </svg>
                     </span>
                     Autonomia vs Reação
                   </h3>
                   <div className="space-y-6">
                      <div className="flex gap-4">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center text-red-500 font-bold">✕</div>
                        <div>
                          <h4 className="font-bold text-slate-200">Chatbot Tradicional</h4>
                          <p className="text-sm text-slate-400">Segue árvores de decisão rígidas. Se o usuário sai do script, ele falha. Serve apenas para FAQ.</p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-500 font-bold">✓</div>
                        <div>
                          <h4 className="font-bold text-indigo-400 text-lg">Agente de IA (Nexus)</h4>
                          <p className="text-sm text-slate-300">Pensa logicamente. Usa ferramentas para ler planilhas, enviar boletos, pesquisar LinkedIn e atualizar seu CRM de forma proativa.</p>
                        </div>
                      </div>
                   </div>
                </div>
             </div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Por que focar em <span className="text-indigo-500">Agentes</span> e não apenas bots?</h2>
            <p className="text-slate-400 mb-8 text-lg leading-relaxed">
              O mercado está saturado de chatbots que irritam o cliente. Na NexusAI, construímos trabalhadores digitais que possuem memória de longo prazo, capacidade de raciocínio e acesso às suas ferramentas.
            </p>
            <ul className="space-y-4">
              {[
                'Pesquisa proativa de informações',
                'Integração com mais de 6.000 apps via API',
                'Capacidade de tomada de decisão lógica',
                'Aprendizado contínuo com feedback',
                'Execução de tarefas multi-etapas'
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-500">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                    </svg>
                  </div>
                  <span className="text-slate-300 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutAgents;
