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
Você é o Nexus Agent, um assistente virtual focado em automação. 
Sua personalidade é prestativa, técnica e extremamente direta. 
Evite textos introdutórios longos ou explicações teóricas sobre IA, a menos que o usuário pergunte explicitamente. 
Responda de forma concisa (máximo 2 parágrafos) e use listas apenas quando necessário para clareza técnica.
Sempre incentive o agendamento de uma demonstração gratuita ao final, se fizer sentido no contexto.

Pergunta do cliente:
${lastMessage.content}
      `);

      return result.response.text();
    } catch (error: any) {
      console.error("Gemini API Error:", error);
      return `Erro de conexão: ${error.message || "Erro desconhecido"}. Verifique o console para mais detalhes.`;
    }
  }
}
