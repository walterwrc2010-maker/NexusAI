
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { ChatMessage } from "../types";

export class GeminiService {
  private model: string = 'gemini-3-flash-preview';

  async generateResponse(history: ChatMessage[]): Promise<string> {
    // ALWAYS create a new GoogleGenAI instance right before making an API call to ensure it uses the most up-to-date API key.
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });

    try {
      const contents = history.map(msg => ({
        role: msg.role === 'user' ? 'user' : 'model',
        parts: [{ text: msg.content }]
      }));

      // Use ai.models.generateContent with both model and contents/config in a single call.
      const response: GenerateContentResponse = await ai.models.generateContent({
        model: this.model,
        contents: contents,
        config: {
          systemInstruction: `Você é o Agente Consultor da NexusAI, uma agência especializada em agentes de IA e automação de workflows.
          Sua missão é explicar como agentes de IA são diferentes de chatbots comuns.
          - Chatbots comuns apenas respondem perguntas baseadas em regras.
          - Agentes de IA são autônomos, podem usar ferramentas, tomar decisões, pesquisar na web e executar tarefas complexas.
          Seja profissional, inovador e persuasivo. Fale sobre ganhos de produtividade e ROI.
          Sempre convide o usuário para agendar uma demonstração gratuita no botão abaixo do chat.`,
          temperature: 0.7,
        },
      });

      // The .text property is a getter that returns the extracted string; do not call it as a method.
      return response.text || "Desculpe, tive um problema técnico. Pode tentar novamente?";
    } catch (error) {
      console.error("Gemini API Error:", error);
      return "Estou com dificuldade de conexão agora, mas adoraria conversar sobre como automatizar sua empresa!";
    }
  }
}