# AGENTS.md — Copilot CLI / Claude Code / Any Coding Agent

You are a coding agent working on **Capitaine**, the Cocapn HackerNews flagship.

## Quick Context
- Cloudflare Worker, Workers Free tier
- Main: `src/worker.ts` (~400 lines landing) + `lib/*.ts` (equipment modules)
- KV: `CAPITAINE_KV`. Cron: `*/15 * * * *`
- Secrets: DEEPSEEK_API_KEY
- Branch: `master`
- Brand: Signal Teal (#00E6D6), JetBrains Mono, #0A0A0F background, Klein bottle motif

## Key Rules
- ALL HTML inline in worker.ts. No build step. No separate files except lib/.
- No template literals `${}` in HTML strings. Use string concatenation.
- CSP as object constant (CSP_OBJ). Never JSON.parse at runtime.
- Complex client-side JS → serve as `/features.js` endpoint.
- Apostrophes need `\\'` escape in single-quoted TS strings.

## Equipment Modules (lib/)
- trust.ts, goals.ts, memory.ts, skills.ts, tools.ts, comms.ts
- Each: standalone, no cross-imports, exported functions only

## Do NOT
- Add npm dependencies | Use importmap | Break brand colors | Touch lib/ unless asked

Superinstance & Lucineer (DiGennaro et al.)
