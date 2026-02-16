import React, { useState, useRef, useEffect } from 'react';
import { GeminiService } from '../services/geminiService';
import { ChatMessage } from '../types';

const AgentDemo: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'model',
      content:
        'Olá! Sou o Agente Consultor da NexusAI. Gostaria de saber como nossos agentes de IA podem revolucionar sua operação hoje?',
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const chatEndRef = useRef<HTMLDivElement>(null);

  // IMPORTANTE: enquanto você não definiu o número, deixa assim (leva pra seção de contato)
  // Quando definir, troque por: const whatsappLink = 'https://wa.me/5511999999999';
  const whatsappLink = '#contact';

  // Dica: criar o service fora do handler evita criar instância a cada envio
  const geminiRef = useRef<GeminiService | null>(null);
  if (!geminiRef.current) geminiRef.current = new GeminiService();

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const mountedRef = useRef(false);

  useEffect(() => {
    if (!mountedRef.current) {
      mountedRef.current = true;
      return;
    }
    scrollToBottom();
  }, [messages]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: ChatMessage = { role: 'user', content: input.trim() };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    // history precisa incluir a conversa atual + a msg do usuário
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
            'No momento o agente está indisponível. Você pode tentar novamente em instantes ou agendar uma conversa na seção de contato.',
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="demo" className="py-24 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Converse com nosso <span className="text-indigo-400">Agente de Consultoria</span>
          </h2>
          <p className="text-slate-400">
            Experimente o poder da inteligência artificial generativa aplicada a negócios agora mesmo.
          </p>
        </div>

        {/* Quick prompts */}
        <div className="flex flex-wrap gap-3 justify-center mb-8">
          {[
            'Quero automatizar meu atendimento no WhatsApp',
            'Quais integrações vocês fazem com CRM?',
            'Quanto custa um agente de IA para minha empresa?',
          ].map((q) => (
            <button
              key={q}
              onClick={() => setInput(q)}
              className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-slate-200 hover:bg-white/10 transition"
              type="button"
            >
              {q}
            </button>
          ))}
        </div>

        <div className="glass-morphism rounded-3xl overflow-hidden shadow-2xl flex flex-col h-[600px]">
          {/* Chat Header */}
          <div className="bg-white/5 px-6 py-4 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center relative">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                  />
                </svg>

                {/* Status */}
                <span
                  className={`absolute bottom-0 right-0 w-3 h-3 border-2 border-slate-900 rounded-full ${hasError ? 'bg-yellow-500' : 'bg-green-500'
                    }`}
                  title={hasError ? 'Instável' : 'Online'}
                ></span>
              </div>

              <div>
                <h4 className="font-bold text-sm">Nexus Consultant Agent</h4>
                <p className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">Powered by Gemini 3</p>
              </div>
            </div>

            <div className="flex gap-2">
              <div className="w-2 h-2 rounded-full bg-white/20"></div>
              <div className="w-2 h-2 rounded-full bg-white/20"></div>
              <div className="w-2 h-2 rounded-full bg-white/20"></div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-hide">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-[80%] px-5 py-3 rounded-2xl text-sm leading-relaxed ${msg.role === 'user'
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
                <div className="bg-white/10 px-5 py-3 rounded-2xl rounded-tl-none border border-white/5 flex gap-1">
                  <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce delay-100"></div>
                  <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce delay-200"></div>
                </div>
              </div>
            )}

            <div ref={chatEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSend} className="p-4 bg-white/5 border-t border-white/10">
            <div className="relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Pergunte sobre automações..."
                className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-3 pr-12 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-sm"
              />
              <button
                type="submit"
                disabled={isLoading}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-indigo-400 hover:text-indigo-300 transition-colors disabled:opacity-50"
                aria-label="Enviar"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                </svg>
              </button>
            </div>
          </form>
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
  );
};

export default AgentDemo;

