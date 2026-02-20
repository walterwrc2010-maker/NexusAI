import React from 'react';

// ⚙️ Configure seu número de WhatsApp (DDI + DDD + número, sem espaços ou símbolos)
const WHATSAPP_NUMBER = '5511999999999';
const WHATSAPP_MESSAGE = encodeURIComponent('Olá! Vim pelo site da NexusAI e gostaria de saber mais sobre automações. 🚀');
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

// SVG oficial do WhatsApp
function WhatsAppIcon({ className }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.003 2.667C8.637 2.667 2.667 8.637 2.667 16c0 2.347.629 4.548 1.72 6.453L2.667 29.333l7.08-1.693A13.27 13.27 0 0016.003 29.333c7.366 0 13.33-5.97 13.33-13.333 0-7.363-5.964-13.333-13.33-13.333zm0 24.267a11.146 11.146 0 01-5.693-1.56l-.408-.243-4.203 1.005.943-4.093-.267-.42a11.13 11.13 0 01-1.707-5.957c0-6.147 5.003-11.147 11.135-11.147 6.133 0 11.135 5 11.135 11.147 0 6.146-5.002 11.268-11.135 11.268zm6.12-8.374c-.336-.168-1.987-.981-2.295-1.093-.308-.111-.533-.167-.757.168-.224.335-.868 1.092-1.063 1.316-.196.224-.392.252-.728.084-.336-.168-1.418-.523-2.7-1.665-1-.897-1.675-2.004-1.871-2.34-.196-.336-.021-.517.147-.685.152-.152.336-.392.504-.588.168-.196.224-.336.336-.56.112-.224.056-.42-.028-.588-.084-.168-.757-1.82-1.037-2.492-.273-.652-.551-.564-.757-.574-.196-.01-.42-.012-.644-.012-.224 0-.588.084-.896.42-.308.336-1.176 1.148-1.176 2.8 0 1.653 1.204 3.25 1.372 3.473.168.224 2.37 3.617 5.74 5.073.803.347 1.43.554 1.919.709.806.257 1.54.22 2.12.134.647-.097 1.987-.813 2.267-1.596.28-.784.28-1.455.196-1.596-.084-.14-.308-.224-.644-.392z" />
        </svg>
    );
}

export default function ChatWidget() {
    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2 group">
            {/* Tooltip */}
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-[#1e2439] text-white text-xs font-semibold px-3 py-2 rounded-xl shadow-lg border border-white/10 whitespace-nowrap mr-1">
                💬 Fale pelo WhatsApp
            </div>

            {/* WhatsApp Button */}
            <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-[#25D366] hover:bg-[#1ebe5c] rounded-full shadow-2xl shadow-green-500/40 flex items-center justify-center text-white transition-all duration-300 hover:scale-110 active:scale-95"
                aria-label="Falar no WhatsApp"
            >
                <WhatsAppIcon className="w-7 h-7" />
            </a>
        </div>
    );
}
