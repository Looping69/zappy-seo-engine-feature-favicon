import { callClaudeJSON, callClaude } from "./claude.js";

/**
 * Unified AI caller that uses Claude.
 */
export interface AIUsage {
    total_tokens: number;
}

export interface AIResult<T = string> {
    data: T;
    usage: AIUsage;
}

export async function callAI(
    prompt: string,
    options: { systemPrompt?: string; maxTokens?: number; temperature?: number } = {}
): Promise<AIResult<string>> {
    const res = await callClaude(prompt, options);
    return { data: res.text, usage: res.usage };
}

export async function callAIJSON<T>(
    prompt: string,
    options: { systemPrompt?: string; maxTokens?: number; temperature?: number } = {}
): Promise<AIResult<T>> {
    const res = await callClaudeJSON<T>(prompt, options);
    return res;
}

