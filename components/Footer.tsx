import React from 'react';
import { Bot, Linkedin, Instagram, Youtube, MessageCircle, Mail, ArrowUpRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const WHATSAPP_NUMBER = '5511999999999';
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá! Vim pelo site da NexusAI e gostaria de saber mais. 🚀')}`;

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="border-t border-border-dark bg-background-dark pt-14 pb-8 px-6 mt-auto">
      <div className="max-w-7xl mx-auto">

        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">

          {/* Brand column */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 via-primary to-cyan-500 flex items-center justify-center shadow-lg shadow-primary/30">
                <Bot className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-indigo-200 to-cyan-300">
                NexusAI
              </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              Automação inteligente com agentes de IA para empresas que querem escalar sem aumentar a equipe.
            </p>

            {/* Social icons */}
            <div className="flex gap-3">
              <a href="https://www.linkedin.com/company/nexusai" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#0A66C2] hover:border-[#0A66C2]/40 hover:bg-[#0A66C2]/10 transition-all">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://www.instagram.com/nexusai" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-pink-400 hover:border-pink-400/40 hover:bg-pink-400/10 transition-all">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://www.youtube.com/@nexusai" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-red-400 hover:border-red-400/40 hover:bg-red-400/10 transition-all">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">Navegação</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors flex items-center gap-1.5 group">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/chat" className="text-gray-400 hover:text-white transition-colors flex items-center gap-1.5 group">
                  <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                  Agente Demo
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors flex items-center gap-1.5">
                  Solicitar Contato
                </Link>
              </li>
              <li>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
                  className="text-gray-400 hover:text-green-400 transition-colors flex items-center gap-1.5">
                  <MessageCircle className="w-3.5 h-3.5 text-green-400" />
                  WhatsApp Direto
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">Contato Rápido</h4>
            <div className="space-y-3">
              <a href="mailto:contato@nexusai.com.br"
                className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors group">
                <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                contato@nexusai.com.br
              </a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-gray-400 hover:text-green-400 transition-colors group">
                <div className="w-8 h-8 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center justify-center shrink-0 group-hover:bg-green-500/20 transition-colors">
                  <MessageCircle className="w-4 h-4 text-green-400" />
                </div>
                Chamar no WhatsApp
              </a>
              <Link to="/contact"
                className="flex items-center gap-3 text-sm text-gray-400 hover:text-indigo-400 transition-colors group">
                <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shrink-0 group-hover:bg-indigo-500/20 transition-colors">
                  <ArrowUpRight className="w-4 h-4 text-indigo-400" />
                </div>
                Solicitar consultoria grátis
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border-dark flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-600">
          <p>© {currentYear} NexusAI. Todos os direitos reservados.</p>
          <div className="flex items-center gap-1 text-gray-600">
            <span>Feito com</span>
            <Sparkles className="w-3 h-3 text-indigo-400" />
            <span>e automação</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
