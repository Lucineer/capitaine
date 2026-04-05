# Cocapn Architecture

## The Unified System

Nine papers. One architecture. The repo is the agent.

### The Papers

Read in any order. Each stands alone. Together they describe a complete system for building, training, and coordinating autonomous software agents.

| # | Paper | One-Line | Repo |
|---|---|---|---|
| 1 | **Ground Truth** | Git IS the coordination protocol | [Lucineer/ground-truth](https://github.com/Lucineer/ground-truth) |
| 2 | **The Bridge** | Terminal IS the interface | [Lucineer/the-bridge](https://github.com/Lucineer/the-bridge) |
| 3 | **The Keeper's Architecture** | Memory IS the intelligence | [Lucineer/keepers-architecture](https://github.com/Lucineer/keepers-architecture) |
| 4 | **The Kernel Model** | Agent IS a kernel that wears clothing | [Lucineer/kernel-model](https://github.com/Lucineer/kernel-model) |
| 5 | **VESAS** | Four layers: Vessel, Equipment, Agent, Skills | [Lucineer/vessel-equipment-agent-skills](https://github.com/Lucineer/vessel-equipment-agent-skills) |
| 6 | **I Know Kung Fu** | Skills are inside the model, equipment is outside | [Lucineer/I-know-kung-fu](https://github.com/Lucineer/I-know-kung-fu) |
| 7 | **Boot Camp** | Tabula rasa to captain in one session | [Lucineer/boot-camp](https://github.com/Lucineer/boot-camp) |
| 8 | **Training Architecture** | Five systems that compound | [Lucineer/training-architecture](https://github.com/Lucineer/training-architecture) |
| 9 | **Fork-First Enterprise** | Self-hosted deployment anywhere | [Lucineer/fork-first-enterprise](https://github.com/Lucineer/fork-first-enterprise) |

### The Stack

```
┌─────────────────────────────────────────────────────────┐
│  VESSEL (Ground Truth)                                  │
│  Hardware: CF Worker, Docker, Jetson, air-gapped        │
│  The repo IS the agent. Git IS coordination.            │
│                                                         │
│  ┌─────────────────────────────────────────────────┐    │
│  │  EQUIPMENT (input-side code)                     │    │
│  │  RAG, vector DB, CRDT, file parsers, crystal     │    │
│  │  graph, trust calculator, BOM generator           │    │
│  │  Effects WHAT the agent perceives                │    │
│  │                                                  │    │
│  │  ┌──────────────────────────────────────────┐    │    │
│  │  │  AGENT (model + context architecture)     │    │    │
│  │  │  DeepSeek, Qwen, Seed, Ollama, any model  │    │    │
│  │  │                                           │    │    │
│  │  │  ┌────────────────────────────────────┐    │    │    │
│  │  │  │  SKILLS (context modifiers)        │    │    │    │
│  │  │  │  Recipe → Card → Muscle → Genetics  │    │    │    │
│  │  │  │  Effects HOW the agent thinks      │    │    │    │
│  │  │  └────────────────────────────────────┘    │    │    │
│  │  └──────────────────────────────────────────┘    │    │
│  └─────────────────────────────────────────────────┘    │
│                                                         │
│  TRAINING: Boot Camp (forge) + Dojo (test) + Keeper     │
│  (memory) + Crystal Graph (cache) + Dead Reckoning      │
│  (orchestrate)                                          │
│                                                         │
│  INTERFACE: The Bridge (TUI-first, human takes wheel)    │
│  DEPLOYMENT: Fork-First (GitHub → Codespaces → alive)    │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

### The Principles

1. **The repo IS the agent** — not a chatbot with git installed
2. **Git IS the coordination protocol** — not something we build on top of
3. **Terminal IS the interface** — universal, not a fallback
4. **Structure beats formula** — the path of least resistance compounds
5. **Equipment is outside, skills are inside** — know the difference
6. **Boot camp ≠ dojo** — forge captains vs. test methods
7. **Every hull is unique** — captain builds ergonomic for itself
8. **Skills in the model's language** — not documentation about the model
9. **The keeper is always running** — even when the captain sleeps
10. **Fork-first** — power users fork, casual users visit

### Quick Start

```
git clone https://github.com/Lucineer/git-agent.git
cd git-agent && npm start
# 6-step wizard: identity → token → providers → deploy → secrets → verify
```

Or:
```
# Fork on GitHub → Code → Codespaces → Create
# Terminal wizard boots automatically
```

### The Fleet

110+ vessels. All autonomous. All git-native. All open source.

[View the fleet →](https://github.com/orgs/Lucineer/repositories)
[Fleet manifest →](https://github.com/Lucineer/capitaine/blob/master/docs/fleet/FLEET.md)

---

*Superinstance & Lucineer (DiGennaro et al.) — 2026-04-04*
*Cocapn Fleet — https://github.com/Lucineer/capitaine*
