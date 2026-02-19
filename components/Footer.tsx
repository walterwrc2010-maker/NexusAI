import React from 'react';
import { Bot, Instagram, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

          <div className="col-span-1 md:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-4 group">
              <div className="p-2 rounded-lg bg-indigo-600/20">
                <Bot className="w-6 h-6 text-indigo-400" />
              </div>
              <span className="text-xl font-bold text-white">NexusAI</span>
            </a>
            <p className="text-slate-400 text-sm leading-relaxed">
              Transformando empresas com inteligência artificial e automação de ponta a ponta.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Soluções</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Agentes de Atendimento</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Automação de Vendas</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Integração CRM</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Consultoria</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Empresa</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Sobre Nós</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Cases de Sucesso</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Contato</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Social</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-indigo-600 hover:text-white transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-indigo-600 hover:text-white transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-indigo-600 hover:text-white transition-all">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} NexusAI. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 text-sm text-slate-500">
            <a href="#" className="hover:text-slate-300 transition-colors">Privacidade</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Termos</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
