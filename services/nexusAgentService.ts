/**
 * nexusAgentService.ts — Integração com o agent_framework (NexusAI demo client)
 *
 * Autentica com a API key do cliente NexusAI (demo/AssistTec) e mantém
 * o access_token em memória com auto-refresh quando expirar.
 */

const API_BASE = import.meta.env.VITE_NEXUS_API_URL as string || 'https://api.workflowrc.cloud';
const API_KEY  = import.meta.env.VITE_NEXUS_API_KEY  as string || '';

interface AuthState {
  token: string;
  expiresAt: number; // epoch ms
}

let _auth: AuthState | null = null;

async function getToken(): Promise<string> {
  const now = Date.now();
  if (_auth && _auth.expiresAt - now > 60_000) {
    return _auth.token;
  }

  const res = await fetch(`${API_BASE}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ api_key: API_KEY }),
  });

  if (!res.ok) {
    throw new Error(`Auth failed: ${res.status}`);
  }

  const data = await res.json();
  _auth = {
    token: data.access_token,
    expiresAt: now + (data.expires_in ?? 3600) * 1000,
  };

  return _auth.token;
}

export interface ChatResponse {
  reply: string;
}

export async function sendNexusMessage(
  message: string,
  externalId: string,
): Promise<ChatResponse> {
  const token = await getToken();

  const res = await fetch(`${API_BASE}/chat`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify({
      message,
      channel: 'demo',
      external_id: externalId,
    }),
  });

  if (!res.ok) {
    // Token expirado — limpa cache e tenta de novo uma vez
    if (res.status === 401) {
      _auth = null;
      const token2 = await getToken();
      const res2 = await fetch(`${API_BASE}/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token2}`,
        },
        body: JSON.stringify({ message, channel: 'demo', external_id: externalId }),
      });
      if (!res2.ok) throw new Error(`Chat failed: ${res2.status}`);
      return res2.json();
    }
    throw new Error(`Chat failed: ${res.status}`);
  }

  return res.json();
}
