import React from 'react';
import { BrainCircuit, Cpu, Network } from 'lucide-react';

export default function AboutAgents() {
  return (
    <section id="about-agents" className="py-24 bg-slate-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-xs font-bold uppercase tracking-wider mb-6">
              Tecnologia de Ponta
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              O que são <span className="text-violet-400">Agentes de IA?</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              Diferente de chatbots simples que seguem um script fixo, Agentes de IA possuem "cérebro" para tomar decisões. Eles entendem contexto, acessam ferramentas (CRM, Calendar, Email) e executam tarefas complexas de forma autônoma.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center shrink-0 border border-indigo-500/20 group-hover:bg-indigo-500/20 transition-colors">
                  <BrainCircuit className="w-6 h-6 text-indigo-400" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Raciocínio Avançado</h4>
                  <p className="text-slate-400">Analisa a intenção do cliente e decide qual a melhor abordagem para resolver o problema.</p>
                </div>
              </div>

              <div className="flex gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-fuchsia-500/10 flex items-center justify-center shrink-0 border border-fuchsia-500/20 group-hover:bg-fuchsia-500/20 transition-colors">
                  <Network className="w-6 h-6 text-fuchsia-400" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Conectividade Total</h4>
                  <p className="text-slate-400">Integra-se nativamente com seu banco de dados, planilhas e sistemas de gestão.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            {/* Abstract Graphic */}
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600/20 to-violet-600/20 rounded-3xl blur-2xl transform rotate-3" />
            <div className="relative bg-slate-900 border border-white/10 rounded-3xl p-8 shadow-2xl overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl" />

              <h3 className="text-2xl font-bold text-white mb-6 relative z-10">Arquitetura Nexus</h3>

              <div className="space-y-4 relative z-10">
                {/* Layer 1 */}
                <div className="p-4 rounded-xl bg-slate-800/50 border border-white/5 flex items-center gap-4">
                  <div className="p-2 bg-indigo-500/20 rounded-lg"><Cpu className="w-5 h-5 text-indigo-400" /></div>
                  <div className="text-sm font-mono text-slate-300">LLM Core (GPT-4 / Claude / Gemini)</div>
                </div>
                {/* Connection */}
                <div className="h-6 w-px bg-white/10 mx-auto" />
                {/* Layer 2 */}
                <div className="p-4 rounded-xl bg-slate-800/50 border border-white/5 flex items-center gap-4">
                  <div className="p-2 bg-violet-500/20 rounded-lg"><BrainCircuit className="w-5 h-5 text-violet-400" /></div>
                  <div className="text-sm font-mono text-slate-300">Nexus Orchestrator</div>
                </div>
                {/* Connection */}
                <div className="h-6 w-px bg-white/10 mx-auto" />
                {/* Layer 3 */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3 rounded-xl bg-slate-800/50 border border-white/5 text-center text-xs font-mono text-slate-400 hover:bg-slate-800 hover:text-white transition-colors cursor-default">
                    API CRM
                  </div>
                  <div className="p-3 rounded-xl bg-slate-800/50 border border-white/5 text-center text-xs font-mono text-slate-400 hover:bg-slate-800 hover:text-white transition-colors cursor-default">
                    WhatsApp
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
