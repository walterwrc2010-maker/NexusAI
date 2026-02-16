
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center font-bold text-white shadow-lg">
              N
            </div>
            <span className="text-xl font-extrabold">Nexus<span className="text-indigo-500">AI</span></span>
          </div>
          <div className="text-slate-500 text-sm">
            © {new Date().getFullYear()} NexusAI Automations. Todos os direitos reservados.
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors">LinkedIn</a>
            <a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors">Instagram</a>
            <a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors">YouTube</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
