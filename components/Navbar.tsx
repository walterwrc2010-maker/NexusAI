
import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Serviços', href: '#services' },
    { name: 'Agentes de IA', href: '#about-agents' },
    { name: 'Cases', href: '#testimonials' },
  ];

  const whatsappNumber = '5511999999999'; // troque pelo seu
  const whatsappText = encodeURIComponent('Olá! Quero um Agente de IA para meu negócio.');
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappText}`;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center font-bold text-white shadow-lg shadow-indigo-500/30">
              N
            </div>
            <span className="text-xl font-extrabold tracking-tight">Nexus<span className="text-indigo-500">AI</span></span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-indigo-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="px-5 py-2 rounded-full bg-indigo-600 hover:bg-indigo-700 text-sm font-semibold text-white transition-all shadow-lg shadow-indigo-500/20"
            >
              Falar com Consultor
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 p-2 hover:text-white transition-all duration-300"
              aria-label="Menu"
            >
              <div className="relative w-6 h-6">
                <span className={`absolute block h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${isOpen ? 'rotate-45 translate-y-0' : '-translate-y-1.5'}`}></span>
                <span className={`absolute block h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`absolute block h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${isOpen ? '-rotate-45 translate-y-0' : 'translate-y-1.5'}`}></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Content with Slide and Fade */}
      <div
        className={`md:hidden grid transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] overflow-hidden ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
          }`}
      >
        <div className="min-h-0">
          <div
            className={`px-4 pt-2 pb-6 space-y-1 bg-slate-950 border-t border-white/5 transition-transform duration-500 ${isOpen ? 'translate-y-0' : '-translate-y-4'
              }`}
          >
            {navLinks.map((link, idx) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                style={{ transitionDelay: `${idx * 50}ms` }}
                className={`block px-3 py-4 text-base font-medium text-slate-300 hover:text-indigo-400 hover:bg-white/5 rounded-lg transition-all duration-300 ${isOpen ? 'translate-x-0 opacity-100' : '-translate-x-2 opacity-0'
                  }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-4 text-base font-bold text-indigo-400 transition-all duration-300 delay-150 ${isOpen ? 'translate-x-0 opacity-100' : '-translate-x-2 opacity-0'
                }`}
            >
              Falar com Consultor
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
