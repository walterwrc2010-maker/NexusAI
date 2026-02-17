import React, { useEffect, useRef, useState } from 'react';
import { GeminiService } from '../services/geminiService';
import { ChatMessage } from '../types';

declare global {
  interface Window {
    NexusAIChatOpen?: (prefill?: string) => void;
    NexusAIChatClose?: () => void;
  }
}

const AgentDemo: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'model',
      content:
        'Olá! Sou o Agente Consultor da NexusAI. Como posso te ajudar hoje? (Atendimento, vendas, automações com n8n ou produto SaaS)',
    },
  ]);

  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Floating widget state
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  const chatEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Se você quiser que o botão "Agendar" leve pro WhatsApp real depois, troque aqui:
  const whatsappLink = '#contact';

  // Instância única do service
  const geminiRef = useRef<GeminiService | null>(null);
  if (!geminiRef.current) geminiRef.current = new GeminiService();

  const scrollToBottom = () => chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });

  useEffect(() => {
    if (!isOpen || isMinimized) return;
    scrollToBottom();
  }, [messages, isOpen, isMinimized]);

  // Expor função global pros botões do site chamarem sem quebrar nada:
  // window.NexusAIChatOpen("texto opcional")
  useEffect(() => {
    window.NexusAIChatOpen = (prefill?: string) => {
      setIsOpen(true);
      setIsMinimized(false);
      if (prefill) setInput(prefill);
      setTimeout(() => inputRef.current?.focus(), 50);
    };
    window.NexusAIChatClose = () => setIsOpen(false);

    // também aceita evento:
    // window.dispatchEvent(new CustomEvent('nexusai:chat:open', { detail: { prefill: '...' } }))
    const onOpen = (ev: Event) => {
      const custom = ev as CustomEvent;
      const prefill = custom?.detail?.prefill as string | undefined;
      window.NexusAIChatOpen?.(prefill);
    };

    window.addEventListener('nexusai:chat:open', onOpen);

    return () => {
      delete window.NexusAIChatOpen;
      delete window.NexusAIChatClose;
      window.removeEventListener('nexusai:chat:open', onOpen);
    };
  }, []);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: ChatMessage = { role: 'user', content: input.trim() };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    const history = [...messages, userMessage];

    try {
      setHasError(false);
      const response = await geminiRef.current!.generateResponse(history);
      setMessages((prev) => [...prev, { role: 'model', content: response }]);
    } catch (err) {
      setHasError(true);
      setMessages((prev) => [
        ...prev,
        {
          role: 'model',
          content:
            'No momento o agente está indisponível. Tente novamente em instantes ou agende uma conversa.',
        },
      ]);
    } finally {
      setIsLoading(false);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  };

  const quickPrompts = [
    'Quero automatizar meu atendimento no WhatsApp',
    'Quais integrações vocês fazem com CRM?',
    'Quanto custa um agente de IA para minha empresa?',
  ];

  // ====== UI: Floating Widget ======
  return (
    <>
      {/* Mantém a seção no site (para navegação/SEO), mas o chat real fica flutuante */}
      <section id="agent-demo" className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Converse com nosso <span className="text-indigo-400">Agente de Consultoria</span>
          </h2>
          <p className="text-slate-400">
            Clique no ícone de chat no canto inferior direito para abrir o agente.
          </p>

          <div className="flex flex-wrap gap-3 justify-center mt-8">
            {quickPrompts.map((q) => (
              <button
                key={q}
                onClick={() => window.NexusAIChatOpen?.(q)}
                className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-slate-200 hover:bg-white/10 transition"
                type="button"
              >
                {q}
              </button>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <a
              href={whatsappLink}
              className="px-6 py-3 bg-green-600/10 border border-green-500/30 text-green-400 rounded-full font-bold text-sm hover:bg-green-600/20 transition-all"
            >
              Agendar Demo Gratuita
            </a>
          </div>
        </div>
      </section>

      {/* BOTÃO FLUTUANTE (pequeno e elegante) */}
      <button
        type="button"
        onClick={() => {
          setIsOpen((v) => !v);
          setIsMinimized(false);
          setTimeout(() => inputRef.current?.focus(), 50);
        }}
        className="fixed bottom-5 right-5 z-[9999] w-12 h-12 rounded-full bg-indigo-600 hover:bg-indigo-500 shadow-xl flex items-center justify-center border border-white/10"
        aria-label="Abrir chat NexusAI"
        title="Falar com o agente"
      >
        {/* ícone */}
        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>

        {/* status */}
        <span
          className={`absolute -bottom-0.5 -right-0.5 w-3 h-3 border-2 border-slate-950 rounded-full ${hasError ? 'bg-yellow-500' : 'bg-green-500'
            }`}
          title={hasError ? 'Instável' : 'Online'}
        />
      </button>

      {/* PAINEL FLUTUANTE */}
      {isOpen && (
        <div className="fixed bottom-20 right-5 z-[9999] w-[360px] max-w-[calc(100vw-2rem)] rounded-3xl overflow-hidden border border-white/10 bg-slate-950/90 backdrop-blur shadow-2xl">
          {/* header */}
          <div className="px-4 py-3 bg-white/5 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-indigo-600 flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                  />
                </svg>
              </div>
              <div className="leading-tight">
                <div className="font-bold text-sm text-white">NexusAI • Agente Consultor</div>
                <div className="text-[10px] uppercase tracking-widest font-bold text-slate-400">
                  {hasError ? 'Instável' : 'Online'} • IA + n8n
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setIsMinimized((v) => !v)}
                className="px-2 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs text-slate-200 border border-white/10"
                title={isMinimized ? 'Expandir' : 'Minimizar'}
              >
                {isMinimized ? 'Expandir' : 'Minimizar'}
              </button>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center"
                aria-label="Fechar"
                title="Fechar"
              >
                <svg className="w-4 h-4 text-slate-200" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {!isMinimized && (
            <>
              {/* quick prompts */}
              <div className="px-4 py-3 border-b border-white/10 flex flex-wrap gap-2 bg-white/[0.03]">
                {quickPrompts.map((q) => (
                  <button
                    key={q}
                    type="button"
                    onClick={() => {
                      setInput(q);
                      setTimeout(() => inputRef.current?.focus(), 50);
                    }}
                    className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-slate-200 hover:bg-white/10 transition"
                  >
                    {q}
                  </button>
                ))}
              </div>

              {/* messages */}
              <div className="h-[420px] overflow-y-auto px-4 py-4 space-y-4">
                {messages.map((msg, idx) => (
                  <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div
                      className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${msg.role === 'user'
                          ? 'bg-indigo-600 text-white rounded-tr-none'
                          : 'bg-white/10 text-slate-100 rounded-tl-none border border-white/5'
                        }`}
                    >
                      {msg.content}
                    </div>
                  </div>
                ))}

                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-white/10 px-4 py-2.5 rounded-2xl rounded-tl-none border border-white/5 flex gap-1">
                      <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce"></div>
                      <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce delay-100"></div>
                      <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce delay-200"></div>
                    </div>
                  </div>
                )}

                <div ref={chatEndRef} />
              </div>

              {/* input */}
              <form onSubmit={handleSend} className="p-3 bg-white/5 border-t border-white/10">
                <div className="relative">
                  <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Pergunte sobre automações..."
                    className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-3 pr-12 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-sm text-slate-100"
                  />
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-indigo-300 hover:text-indigo-200 transition-colors disabled:opacity-50"
                    aria-label="Enviar"
                    title="Enviar"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                    </svg>
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default AgentDemo;
