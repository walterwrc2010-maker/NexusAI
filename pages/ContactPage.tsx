import React, { useState } from 'react';
import { Mail, Phone, User, ArrowRight, CheckCircle, Loader2, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const N8N_WEBHOOK_URL = import.meta.env.VITE_N8N_WEBHOOK_URL || '';

export default function ContactPage() {
    const [form, setForm] = useState({ name: '', email: '', phone: '' });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errorMsg, setErrorMsg] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!N8N_WEBHOOK_URL) {
            setStatus('error');
            setErrorMsg('Webhook não configurado. Adicione VITE_N8N_WEBHOOK_URL no .env.local');
            return;
        }

        setStatus('loading');
        try {
            await fetch(N8N_WEBHOOK_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: form.name,
                    email: form.email,
                    phone: form.phone,
                    source: 'nexusai-site',
                    timestamp: new Date().toISOString(),
                }),
            });
            setStatus('success');
        } catch {
            setStatus('error');
            setErrorMsg('Erro ao enviar. Verifique se o n8n está rodando e o webhook está ativo.');
        }
    };

    return (
        <div className="min-h-screen bg-slate-950 pt-24 px-6 flex flex-col items-center relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-purple-900/10 rounded-full blur-[100px] pointer-events-none"></div>

            {/* Back to Home */}
            <div className="w-full max-w-4xl z-10 mb-6">
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors group"
                >
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    Voltar para Home
                </Link>
            </div>

            <div className="w-full max-w-4xl z-10 grid lg:grid-cols-2 gap-12 items-center">

                {/* Left Column */}
                <div className="text-center lg:text-left space-y-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-border-dark/50 border border-primary/30 text-primary-light text-xs font-bold uppercase tracking-wider">
                        Fale Conosco
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-white font-display leading-tight">
                        Pronto para escalar sua{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400">
                            operação?
                        </span>
                    </h1>
                    <p className="text-gray-400 text-lg leading-relaxed">
                        Nossos especialistas em automação e IA estão prontos para desenhar a solução ideal para o seu negócio.
                        Preencha o formulário e entraremos em contato em instantes.
                    </p>

                    <div className="hidden lg:flex flex-col gap-4 mt-8">
                        <div className="flex items-center gap-4 text-gray-300">
                            <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center border border-white/10">
                                <Mail className="w-5 h-5 text-primary" />
                            </div>
                            <div className="text-sm">
                                <p className="font-semibold text-white">Email</p>
                                <p>contato@nexusai.com.br</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column: Form */}
                <div className="w-full">
                    <div className="glass-panel border border-white/10 p-8 rounded-2xl shadow-2xl relative">

                        {status === 'success' ? (
                            <div className="h-96 flex flex-col items-center justify-center text-center space-y-4 animate-in fade-in zoom-in duration-500">
                                <div className="w-16 h-16 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mb-4">
                                    <CheckCircle className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-bold text-white">Mensagem Enviada! 🎉</h3>
                                <p className="text-gray-400 max-w-xs">
                                    Obrigado, <strong className="text-white">{form.name}</strong>! Você receberá uma confirmação
                                    no WhatsApp e e-mail em instantes.
                                </p>
                                <button
                                    onClick={() => { setStatus('idle'); setForm({ name: '', email: '', phone: '' }); }}
                                    className="mt-6 px-6 py-2 bg-surface-dark border border-border-dark hover:border-primary/50 text-white rounded-lg text-sm transition-all"
                                >
                                    Novo contato
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-1">Solicitar Contato</h3>
                                    <p className="text-gray-400 text-sm mb-6">
                                        Preencha seus dados para receber uma consultoria gratuita.
                                    </p>
                                </div>

                                <div className="space-y-4">
                                    {/* Nome */}
                                    <div className="space-y-2">
                                        <label className="text-xs font-semibold text-gray-300 ml-1">NOME COMPLETO</label>
                                        <div className="relative group">
                                            <User className="absolute left-4 top-3.5 w-5 h-5 text-gray-500 group-focus-within:text-primary transition-colors" />
                                            <input
                                                required
                                                name="name"
                                                type="text"
                                                value={form.name}
                                                onChange={handleChange}
                                                placeholder="Seu nome"
                                                className="w-full bg-black/40 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                                            />
                                        </div>
                                    </div>

                                    {/* Email */}
                                    <div className="space-y-2">
                                        <label className="text-xs font-semibold text-gray-300 ml-1">EMAIL CORPORATIVO</label>
                                        <div className="relative group">
                                            <Mail className="absolute left-4 top-3.5 w-5 h-5 text-gray-500 group-focus-within:text-primary transition-colors" />
                                            <input
                                                required
                                                name="email"
                                                type="email"
                                                value={form.email}
                                                onChange={handleChange}
                                                placeholder="voce@empresa.com"
                                                className="w-full bg-black/40 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                                            />
                                        </div>
                                    </div>

                                    {/* WhatsApp */}
                                    <div className="space-y-2">
                                        <label className="text-xs font-semibold text-gray-300 ml-1">WHATSAPP / TELEFONE</label>
                                        <div className="relative group">
                                            <Phone className="absolute left-4 top-3.5 w-5 h-5 text-gray-500 group-focus-within:text-primary transition-colors" />
                                            <input
                                                required
                                                name="phone"
                                                type="tel"
                                                value={form.phone}
                                                onChange={handleChange}
                                                placeholder="(11) 99999-9999"
                                                className="w-full bg-black/40 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {status === 'error' && (
                                    <p className="text-red-400 text-xs bg-red-500/10 border border-red-500/20 rounded-lg px-3 py-2">
                                        ⚠️ {errorMsg}
                                    </p>
                                )}

                                <button
                                    type="submit"
                                    disabled={status === 'loading'}
                                    className="w-full h-12 bg-gradient-to-r from-primary to-blue-600 hover:from-primary-light hover:to-blue-500 disabled:opacity-60 text-white font-bold rounded-xl shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all flex items-center justify-center gap-2 group"
                                >
                                    {status === 'loading' ? (
                                        <>
                                            <Loader2 className="w-5 h-5 animate-spin" />
                                            Enviando...
                                        </>
                                    ) : (
                                        <>
                                            Receber Contato
                                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                        </>
                                    )}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
