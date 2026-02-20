import React, { useState, useEffect } from 'react';
import { Menu, X, Bot, ArrowRight } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Serviços', href: '/#services' },
    { name: 'Agentes', href: '/#agents' },
    { name: 'Cases', href: '/#cases' },
    { name: 'Contato', href: '/contact' },
  ];

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    if (href.startsWith('/#')) {
      const sectionId = href.replace('/#', '');
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' }), 300);
      } else {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(href);
    }
  };

  const handleLogoClick = () => {
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
      scrolled ? "glass-panel border-border-dark" : "bg-transparent border-transparent py-4"
    )}>
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo — volta ao topo */}
        <button
          onClick={handleLogoClick}
          className="flex items-center gap-3 text-white cursor-pointer hover:opacity-90 transition-opacity"
        >
          <div className="relative w-9 h-9 rounded-lg bg-gradient-to-br from-indigo-500 via-primary to-cyan-500 flex items-center justify-center shadow-lg shadow-primary/40">
            <Bot className="w-5 h-5 text-white" />
            <span className="absolute inset-0 rounded-lg bg-gradient-to-br from-indigo-500 via-primary to-cyan-500 blur-md opacity-50 -z-10"></span>
          </div>
          <span className="text-xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-indigo-200 to-cyan-300 drop-shadow-sm">
            NexusAI
          </span>
        </button>


        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link.href)}
              className="text-gray-300 hover:text-white text-sm font-medium transition-colors"
            >
              {link.name}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-4">
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 hover:text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Get Started → Contact page */}
          <Link
            to="/contact"
            className="hidden md:flex bg-primary hover:bg-primary-light text-white text-sm font-bold h-9 px-5 rounded transition-all shadow-lg shadow-primary/20 hover:shadow-primary/40 items-center gap-2"
          >
            <span>Começar Agora</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-panel border-b border-border-dark overflow-hidden"
          >
            <div className="px-6 py-6 space-y-4 flex flex-col items-start">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className="block text-lg font-medium text-gray-300 hover:text-white transition-colors w-full text-left"
                >
                  {link.name}
                </button>
              ))}
              <div className="pt-4 w-full">
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="w-full bg-primary hover:bg-primary-light text-white text-sm font-bold h-10 px-5 rounded transition-all shadow-lg shadow-primary/20 hover:shadow-primary/40 flex items-center justify-center gap-2"
                >
                  <span>Começar Agora</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
