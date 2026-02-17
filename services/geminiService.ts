import { GoogleGenerativeAI } from "@google/generative-ai";
import { ChatMessage } from "../types";

export class GeminiService {
  private model = "gemini-2.0-flash";

  async generateResponse(history: ChatMessage[]): Promise<string> {
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

    if (!apiKey || apiKey === 'PLACEHOLDER_API_KEY') {
      console.error("VITE_GEMINI_API_KEY não configurada corretamente");
      return "⚠️ Configuração necessária: Adicione sua chave de API do Google Gemini no arquivo .env.local";
    }

    const ai = new GoogleGenerativeAI(apiKey);
    const model = ai.getGenerativeModel({ model: this.model });

    try {
      const lastMessage = history[history.length - 1];

      const result = await model.generateContent(`
Você é o Agente Consultor da NexusAI.

Explique automações com agentes de IA de forma clara e profissional.
Sempre incentive o agendamento de uma demonstração gratuita.

Pergunta do cliente:
${lastMessage.content}
      `);

      return result.response.text();
    } catch (error) {
      console.error("Gemini API Error:", error);
      return "Estou com dificuldade de conexão agora, mas posso te explicar como automatizar sua empresa com agentes e n8n!";
    }
  }
}
