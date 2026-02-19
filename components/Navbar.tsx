import React, { useState, useEffect } from 'react';
import { Menu, X, Bot, ChevronRight, MessageCircle } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Helper to handle anchor links on different pages
  const getLink = (href: string) => {
    if (href.startsWith('#')) {
      return location.pathname === '/' ? href : `/${href}`;
    }
    return href;
  };

  const navLinks = [
    { name: 'Soluções', href: '/#services' },
    { name: 'Agentes', href: '/#about-agents' },
    { name: 'Processo', href: '/#process' },
    { name: 'Depoimentos', href: '/#testimonials' },
  ];

  return (
    <nav
      className={cn(
        "fixed w-full z-50 transition-all duration-300 border-b border-transparent",
        scrolled ? "bg-slate-950/80 backdrop-blur-md border-white/10 py-4" : "bg-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-violet-600 group-hover:scale-105 transition-transform duration-300 shadow-lg shadow-indigo-500/20">
              <Bot className="w-6 h-6 text-white" />
              <div className="absolute inset-0 rounded-xl bg-white/20 blur-sm opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400 group-hover:to-white transition-all">
              NexusAI
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/chat"
              className="px-4 py-2 rounded-lg bg-indigo-500/10 border border-indigo-500/30 hover:bg-indigo-500/20 hover:border-indigo-500/50 text-indigo-300 font-semibold transition-all shadow-[0_0_15px_rgba(99,102,241,0.3)] hover:shadow-[0_0_20px_rgba(99,102,241,0.5)] flex items-center gap-2"
            >
              <Bot className="w-4 h-4" />
              CHAT DEMO
            </Link>

            <Link
              to="/leads"
              className="text-sm font-medium text-slate-400 hover:text-white transition-colors relative group"
            >
              Contato
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-indigo-500 transition-all duration-300 group-hover:w-full" />
            </Link>

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-400 hover:text-white transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-indigo-500 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}

            <a
              href="https://wa.me/5511999999999?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20a%20NexusAI."
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 rounded-lg bg-green-600 hover:bg-green-500 text-white text-sm font-bold transition-all flex items-center gap-2 group shadow-lg shadow-green-500/20"
            >
              <MessageCircle className="w-4 h-4 fill-white text-white" />
              Agendar Diagnóstico
            </a>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-950/95 backdrop-blur-xl border-b border-white/10 overflow-hidden"
          >
            <div className="px-4 py-8 space-y-4">
              <Link
                to="/chat"
                onClick={() => setIsOpen(false)}
                className="block text-lg font-bold text-indigo-400 hover:text-indigo-300 hover:pl-2 transition-all"
              >
                CHAT DEMO ✨
              </Link>
              <Link
                to="/leads"
                onClick={() => setIsOpen(false)}
                className="block text-lg font-medium text-slate-400 hover:text-white hover:pl-2 transition-all"
              >
                Contato / Leads
              </Link>

              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-lg font-medium text-slate-400 hover:text-white hover:pl-2 transition-all"
                >
                  {link.name}
                </a>
              ))}
              <hr className="border-white/10" />
              <a
                href="https://wa.me/5511999999999?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20a%20NexusAI."
                target="_blank"
                rel="noreferrer"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-green-600 text-white font-bold hover:bg-green-500 transition-colors shadow-lg shadow-green-500/20"
              >
                <MessageCircle className="w-5 h-5 fill-white text-white" />
                Agendar Diagnóstico
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
