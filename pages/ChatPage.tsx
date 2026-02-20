import React, { useState, useEffect, useRef } from 'react';
import { Send, Loader2, Bot, ArrowLeft, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { generateGeminiResponse } from '../services/geminiService';

interface Message {
    id: string;
    role: 'user' | 'agent';
    content: string;
    timestamp: string;
}

export default function ChatPage() {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState<Message[]>([
        {
            id: '1',
            role: 'agent',
            content: 'Olá! Sou o Nexus Agent, seu consultor técnico em automações. Como posso te ajudar hoje? 🚀',
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        }
    ]);
    const [isTyping, setIsTyping] = useState(false);
    const chatEndRef = useRef<HTMLDivElement>(null);
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, isTyping]);

    const handleSend = async () => {
        if (!input.trim() || isTyping) return;

        const userText = input;
        const userMsg: Message = {
            id: Date.now().toString(),
            role: 'user',
            content: userText,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };

        setMessages(prev => [...prev, userMsg]);
        setInput('');
        setIsTyping(true);
        if (textareaRef.current) textareaRef.current.style.height = 'auto';

        try {
            const historyForAi = messages.map(m => ({
                role: m.role === 'agent' ? 'model' as const : 'user' as const,
                text: m.content
            }));
            const responseText = await generateGeminiResponse(userText, historyForAi);
            setMessages(prev => [...prev, {
                id: (Date.now() + 1).toString(),
                role: 'agent',
                content: responseText,
                timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            }]);
        } catch {
            setMessages(prev => [...prev, {
                id: (Date.now() + 1).toString(),
                role: 'agent',
                content: 'Desculpe, tive um problema técnico momentâneo. Poderia repetir?',
                timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            }]);
        } finally {
            setIsTyping(false);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setInput(e.target.value);
        e.target.style.height = 'auto';
        e.target.style.height = Math.min(e.target.scrollHeight, 120) + 'px';
    };

    return (
        /* Full screen, dark background */
        <div className="flex items-center justify-center min-h-screen bg-[#060910] px-4 py-6">

            {/* Phone Frame */}
            <div className="w-full max-w-sm h-[780px] bg-[#0d1117] rounded-[40px] shadow-2xl shadow-black/60 border border-white/10 flex flex-col overflow-hidden relative"
                style={{ boxShadow: '0 0 0 1px rgba(255,255,255,0.08), 0 40px 80px rgba(0,0,0,0.8), 0 0 60px rgba(99,102,241,0.08)' }}>

                {/* Status bar simulation */}
                <div className="flex items-center justify-between px-6 pt-4 pb-1 shrink-0">
                    <span className="text-[11px] text-white/50 font-medium">
                        {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                    <div className="flex items-center gap-1">
                        <div className="flex gap-0.5 items-end h-3">
                            {[2, 3, 4, 3].map((h, i) => (
                                <div key={i} className="w-1 bg-white/50 rounded-sm" style={{ height: `${h * 3}px` }} />
                            ))}
                        </div>
                        <div className="w-5 h-2.5 rounded-sm border border-white/40 ml-1 relative">
                            <div className="absolute inset-[2px] right-[3px] bg-white/50 rounded-sm" />
                            <div className="absolute -right-[3px] top-[3px] w-[3px] h-[6px] rounded-r-sm bg-white/30" />
                        </div>
                    </div>
                </div>

                {/* Chat Header */}
                <div className="flex items-center gap-3 px-5 py-3 shrink-0 border-b border-white/5">
                    {/* Back button */}
                    <Link
                        to="/"
                        className="w-8 h-8 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all mr-1"
                        aria-label="Voltar"
                    >
                        <ArrowLeft className="w-5 h-5" />
                    </Link>

                    <div className="relative">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/30">
                            <Sparkles className="w-5 h-5 text-white" />
                        </div>
                        <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 rounded-full border-2 border-[#0d1117]"></span>
                    </div>
                    <div className="flex-1">
                        <h2 className="text-sm font-bold text-white leading-tight">Nexus Agent</h2>
                        <p className="text-[11px] text-emerald-400">Online · Consultor de IA</p>
                    </div>

                    {/* AI Badge */}
                    <span className="text-[10px] px-2 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 font-semibold">
                        AI
                    </span>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto px-4 py-4 space-y-1 scrollbar-hide">
                    {messages.map((msg, index) => {
                        const isUser = msg.role === 'user';
                        const showTime = index === messages.length - 1 || messages[index + 1]?.role !== msg.role;

                        return (
                            <div key={msg.id}>
                                <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
                                    {!isUser && (
                                        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 shrink-0 flex items-center justify-center mr-2 mt-1 self-end">
                                            <Sparkles className="w-3 h-3 text-white" />
                                        </div>
                                    )}
                                    <div
                                        className={`max-w-[75%] px-3.5 py-2.5 text-[13px] leading-relaxed rounded-2xl ${isUser
                                                ? 'bg-indigo-600 text-white rounded-br-sm'
                                                : 'bg-[#1c2235] text-gray-100 rounded-bl-sm border border-white/5'
                                            }`}
                                        style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}
                                    >
                                        {msg.content}
                                    </div>
                                </div>
                                {showTime && (
                                    <div className={`flex ${isUser ? 'justify-end' : 'justify-start ml-8'} mt-1 mb-2`}>
                                        <span className="text-[10px] text-white/25">{msg.timestamp}</span>
                                    </div>
                                )}
                            </div>
                        );
                    })}

                    {isTyping && (
                        <div className="flex justify-start items-end gap-2">
                            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 shrink-0 flex items-center justify-center">
                                <Sparkles className="w-3 h-3 text-white" />
                            </div>
                            <div className="bg-[#1c2235] rounded-2xl rounded-bl-sm px-4 py-3 border border-white/5">
                                <div className="flex items-center gap-1.5">
                                    <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                                    <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                                    <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                                </div>
                            </div>
                        </div>
                    )}
                    <div ref={chatEndRef} />
                </div>

                {/* Input bar */}
                <div className="px-3 pb-5 pt-2 bg-[#0d1117] shrink-0 border-t border-white/5">
                    <div className="flex items-end gap-2">
                        <div className="flex-1 bg-[#1c2235] border border-white/8 rounded-3xl px-4 py-3 flex items-end gap-2 focus-within:border-indigo-500/50 transition-colors">
                            <textarea
                                ref={textareaRef}
                                value={input}
                                onChange={handleInput}
                                onKeyDown={handleKeyDown}
                                className="flex-1 bg-transparent text-white placeholder-white/25 text-[13px] resize-none focus:outline-none leading-relaxed"
                                placeholder="Mensagem..."
                                rows={1}
                                style={{ maxHeight: '120px' }}
                            />
                        </div>
                        <button
                            onClick={handleSend}
                            disabled={!input.trim() || isTyping}
                            className="w-11 h-11 bg-indigo-600 hover:bg-indigo-500 disabled:bg-[#1c2235] disabled:text-white/20 text-white rounded-full flex items-center justify-center transition-all shadow-lg shadow-indigo-500/20 active:scale-95 shrink-0"
                        >
                            {isTyping
                                ? <Loader2 className="w-4 h-4 animate-spin" />
                                : <Send className="w-4 h-4" />
                            }
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
