import { useState, useRef } from 'react';
import { sendNexusMessage } from '../services/nexusAgentService';
import { ChatMessage } from '../types';

/** Gera um ID de sessão único por montagem do componente */
function makeSessionId() {
  return `demo-${Math.random().toString(36).slice(2, 10)}-${Date.now()}`;
}

export function useNexusChat() {
  const [messages, setMessages]   = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const sessionId = useRef(makeSessionId());

  const sendMessage = async (content: string) => {
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      content,
    };

    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    try {
      const data = await sendNexusMessage(content, sessionId.current);

      const botMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        content: data.reply,
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (err) {
      console.error('[useNexusChat]', err);
      setMessages(prev => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: 'model',
          content: 'Desculpe, houve um problema ao processar sua mensagem. Tente novamente.',
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return { messages, isLoading, sendMessage };
}
