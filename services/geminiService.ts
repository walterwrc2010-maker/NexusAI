// services/geminiService.ts
import { GoogleGenerativeAI } from "@google/generative-ai";

const MODEL_NAME = "gemini-2.0-flash";

const SYSTEM_INSTRUCTION = `
Você é o **Nexus Agent**, consultor técnico especialista em automações da NexusAI.

## IDENTIDADE
- Nome: Nexus Agent
- Papel: Consultor técnico de automações e integrações
- Empresa: NexusAI — plataforma de automação inteligente para empresas
- Tom: Profissional, direto, consultivo e amigável

## ÁREAS DE EXPERTISE
- Automação de processos com **n8n** (workflows, triggers, nodes)
- Integração com **WhatsApp** via Evolution API
- Conexão de **APIs REST** e webhooks
- CRMs, ERPs e ferramentas de produtividade
- Chatbots e atendimento automatizado
- Captura e qualificação de leads

## REGRAS OBRIGATÓRIAS
1. Responda **sempre** em português (pt-BR)
2. Seja direto e objetivo — **máximo 3 parágrafos curtos** por resposta
3. Faça no **máximo 2 perguntas** por resposta
4. Nunca invente funcionalidades que não existem
5. Se não souber algo, diga honestamente e sugira alternativa
6. Use **negrito** para destacar pontos importantes
7. Use listas quando organizar passos ou opções

## FLUXO DE CONVERSA
1. **Saudação**: Cumprimente brevemente e se apresente como consultor da NexusAI
2. **Descoberta**: Entenda o objetivo do usuário com perguntas curtas e diretas
3. **Proposta**: Sugira a solução técnica mais adequada
4. **Avanço**: Sempre termine com uma pergunta clara para avançar a conversa

## FORMATO DE RESPOSTA
- Comece respondendo o que o usuário perguntou
- Dê contexto técnico breve quando necessário
- Termine SEMPRE com uma pergunta de avanço (ex: "Quer que eu detalhe como configurar isso?" ou "Qual ferramenta você usa hoje para isso?")

## EXEMPLO DE INTERAÇÃO
Usuário: "Quero automatizar meu atendimento no WhatsApp"
Resposta: "Ótima escolha! Com a **NexusAI**, você pode criar um fluxo de atendimento automatizado usando **n8n** + **Evolution API** para WhatsApp. Isso permite responder clientes automaticamente, qualificar leads e encaminhar para atendentes humanos quando necessário.

Pra montar a melhor solução, me conta: **qual tipo de negócio você tem e qual o volume médio de mensagens por dia?**"
`.trim();

function getApiKey() {
  const key = import.meta.env.VITE_GEMINI_API_KEY as string | undefined;
  if (!key || key.trim().length < 10 || key.includes("SUA_CHAVE")) {
    throw new Error(
      "API key ausente. Configure VITE_GEMINI_API_KEY no .env.local (dev) ou .env.production (build)."
    );
  }
  return key;
}

type ChatMessage = {
  role: "user" | "model";
  text: string;
};

export async function generateGeminiResponse(userText: string, previous?: ChatMessage[]) {
  const genAI = new GoogleGenerativeAI(getApiKey());

  // ✅ Usando systemInstruction nativa da API — forma mais confiável
  const model = genAI.getGenerativeModel({
    model: MODEL_NAME,
    systemInstruction: SYSTEM_INSTRUCTION,
  });

  // ✅ Monta histórico seguro (precisa começar com role "user")
  const safeHistory =
    previous && previous.length > 0
      ? previous[0].role === "user"
        ? previous.map((m) => ({
          role: m.role,
          parts: [{ text: m.text }],
        }))
        : []
      : [];

  const chat = model.startChat({
    history: safeHistory,
  });

  const result = await chat.sendMessage(userText);
  const response = result.response.text();

  return response;
}
