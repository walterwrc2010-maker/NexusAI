import { useState } from 'react';
import { GeminiService } from '../services/geminiService';
import { ChatMessage } from '../types';

const geminiService = new GeminiService();

export function useGeminiChat() {
    const [messages, setMessages] = useState<ChatMessage[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    const sendMessage = async (content: string) => {
        const userMessage: ChatMessage = {
            id: Date.now().toString(),
            role: 'user',
            content
        };

        setMessages(prev => [...prev, userMessage]);
        setIsLoading(true);

        try {
            // Create a temporary history for the service call
            const history = [...messages, userMessage];
            const response = await geminiService.generateResponse(history);

            const botMessage: ChatMessage = {
                id: (Date.now() + 1).toString(),
                role: 'model',
                content: response
            };

            setMessages(prev => [...prev, botMessage]);
        } catch (error) {
            console.error("Error sending message:", error);
            const errorMessage: ChatMessage = {
                id: (Date.now() + 1).toString(),
                role: 'model',
                content: "Desculpe, ocorreu um erro ao processar sua mensagem. Tente novamente mais tarde."
            };
            setMessages(prev => [...prev, errorMessage]);
        } finally {
            setIsLoading(false);
        }
    };

    return {
        messages,
        isLoading,
        sendMessage
    };
}
