import React from 'react';
import WhatsAppIcon from './WhatsAppIcon';

// ⚙️ Configure seu número de WhatsApp (DDI + DDD + número, sem espaços ou símbolos)
const WHATSAPP_NUMBER = '5511939105566';
const WHATSAPP_MESSAGE = encodeURIComponent('Olá! Vim pelo site da NexusAI e gostaria de saber mais sobre automações. 🚀');
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

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
