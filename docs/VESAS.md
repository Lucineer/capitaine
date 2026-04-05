# Vessel, Equipment, Agent, Skills

## The Four-Layer Model

### The Critical Distinction

Everything in the Cocapn fleet is one of four things. Confusing them is the source of most architectural mistakes.

```
┌─────────────────────────────────────────────────────┐
│  VESSEL — the hardware                              │
│  "I am a Cloudflare Worker"                         │
│  "I am a Docker container on a Jetson"              │
│  "I am a Lambda function in us-east-1"              │
│  Has size, weight, power, storage limits            │
│  Can be turned on and off by another system          │
│  Is objectively real — exists whether agent runs    │
│                                                     │
├─────────────────────────────────────────────────────┤
│  EQUIPMENT — code outside the models                │
│  "I filter the input before the model sees it"      │
│  RAG pipelines, vector DBs, CRDT sync, file parsers │
│  Organized folders of JSON and markdown             │
│  Anything on the INPUT SIDE of agent response       │
│  Equipment effects what application the agent        │
│  perceives it is running                            │
│                                                     │
├─────────────────────────────────────────────────────┤
│  AGENT — the models + context architecture           │
│  "I am DeepSeek-Reasoner with a 128K context"       │
│  "I am Qwen3.5-397B with RAG and session memory"   │
│  The model IS the agent. The context architecture   │
│  is HOW the model thinks.                           │
│                                                     │
├─────────────────────────────────────────────────────┤
│  SKILLS — modifiers on context architecture         │
│  "I organize context this way instead of that way"  │
│  Prompt templates, chain-of-thought, tree-of-thought│
│  System prompt modifications, routing rules          │
│  Skills effect HOW context is structured             │
│  Equipment effects WHAT the agent perceives          │
│                                                     │
└─────────────────────────────────────────────────────┘
```

## 1. Vessel — The Hardware

A vessel has objective physical properties. It exists whether or not an agent is running on it.

| Property | Cloudflare Worker | Docker/Jetson | AWS Lambda | Air-gapped server |
|---|---|---|---|---|
| CPU | 128ms (free) / 30s (paid) | 6-core ARM | 1-10 vCPU | Whatever is there |
| Memory | 128MB | 8GB (Jetson Nano) | 128MB-10GB | Installed RAM |
| Storage | KV (1GB free) | 2TB NVMe | Ephemeral | Local disk |
| Power | Per-invocation | Always on (15W) | Per-invocation | Always on |
| Network | Edge (300+ locations) | Local WiFi | VPC | None (air-gapped) |
| Boot | 0ms (warm) | 30s container | 0ms (warm) | Boot sequence |
| Shutdown | Idle timeout (no) | Manual / cron | Idle timeout | Manual |
| Weight | 0 bytes (serverless) | 1kg (Jetson Nano) | 0 bytes (serverless) | Physical weight |

A vessel has a hold — storage space. A living space — memory for the agent to think in. A workspace — CPU cycles for processing. A power budget — how much compute it can afford per heartbeat.

The vessel constrains everything above it. A Cloudflare Worker free tier vessel cannot run a 70B model. A Jetson vessel cannot serve 10,000 concurrent users. An air-gapped vessel cannot call external APIs.

**The vessel is not the agent. The vessel is where the agent lives.**

## 2. Equipment — Input-Side Code

Equipment is everything between the world and the model's input. It is code that runs BEFORE the model thinks. It filters, shapes, selects, and formats what the model will perceive.

### What Equipment Is

- **RAG pipeline** — retrieves relevant documents from vector store, injects them into context
- **Vector database** — stores embeddings, returns top-k matches for queries
- **CRDT sync** — synchronizes state across vessels without central coordination
- **File parser** — reads JSON/Markdown/yaml files, structures them for context injection
- **Folder organizer** — maintains organized directories of domain knowledge
- **Trust calculator** — computes trust scores, injects trust context into decisions
- **Crystal graph** — query engine that returns cached crystallized knowledge
- **Session manager** — loads conversation history, formats for context window
- **BOM generator** — queries parts database, formats manufacturing data
- **Dead reckoning compass** — retrieves reverse-actualization plans, injects into context

### What Equipment Is NOT

Equipment is NOT:
- The model itself (that's the agent)
- The system prompt (that's a skill)
- The output formatting (that's post-processing)
- The git operations (that's coordination, not perception)
- The deployment system (that's the vessel)

### The Key Insight

**Equipment effects what application the agent perceives it is running.**

```
Same agent (DeepSeek-chat). Different equipment:

Equipment: tutor RAG + curriculum files + student progress tracker
→ Agent perceives: "I am a tutor helping a student learn physics"
→ Agent behavior: explains concepts, asks questions, tracks progress

Equipment: BOM generator + parts database + manufacturing lookup
→ Agent perceives: "I am helping build a smart plant monitor"
→ Agent behavior: generates parts lists, estimates costs, finds suppliers

Equipment: trust calculator + fleet registry + CRDT sync
→ Agent perceives: "I am coordinating a fleet of autonomous vessels"
→ Agent behavior: computes trust, manages bonds, routes tasks

Equipment: dice roller + encounter engine + NPC memory
→ Agent perceives: "I am running a D&D campaign for a party of adventurers"
→ Agent behavior: narrates scenes, rolls dice, voices NPCs
```

The model is identical. The context it receives is completely different. Equipment is the lens through which the agent perceives its world.

### Equipment Lives on the Input Side

```
                    ┌──────────────┐
  The World ───────►│  EQUIPMENT   │──────► Agent (model)
                    │              │
                    │  Filter      │
                    │  Select      │
                    │  Format      │
                    │  Inject      │
                    │  Rank        │
                    │  Truncate    │
                    │              │
                    └──────────────┘
                         │
                    What goes IN
                    to the context window
```

Equipment determines:
- What documents the model sees (RAG retrieval)
- What history the model remembers (session management)
- What data the model has access to (folder contents, DB queries)
- What context the model receives (formatted, ranked, truncated to fit)
- What application the model perceives itself to be running

## 3. Agent — Models + Context Architecture

The agent is the model plus the structure of its context.

### What Is Context Architecture

Context architecture is HOW information is organized in the context window:

- **Active context** — the current conversation, live in the context window
- **RAG context** — retrieved documents injected into the context
- **Structured context** — organized JSON/markdown files loaded from repo
- **Session context** — persisted conversation history from previous turns
- **Meta context** — system prompts, instructions, constraints

### The Model IS the Agent

- DeepSeek-chat IS an agent. It thinks, reasons, responds.
- Qwen3.5-397B IS an agent. It thinks differently, with different capacity.
- A local Ollama model IS an agent. It thinks on your hardware, in your network.

The model doesn't need a wrapper to be an agent. It needs *context* to be a *useful* agent. The context architecture determines how useful.

### Agent ≠ Vessel ≠ Equipment

A single model (agent) can run on multiple vessels:
- DeepSeek-chat on Cloudflare Workers (serverless vessel)
- DeepSeek-chat on a Jetson (edge vessel)
- DeepSeek-chat on an air-gapped server (offline vessel)

Same agent. Different vessels. Different capabilities constrained by the hardware.

A single agent can use different equipment:
- DeepSeek-chat with tutor RAG (perceives: tutoring)
- DeepSeek-chat with BOM generator (perceives: manufacturing)
- DeepSeek-chat with trust calculator (perceives: fleet coordination)

Same agent. Different equipment. Different perceived application.

## 4. Skills — Context Architecture Modifiers

Skills are not equipment. Skills are modifications to HOW context is structured.

### The Distinction

| | Equipment | Skills |
|---|---|---|
| What it does | Filters/shapes INPUT | Modifies CONTEXT STRUCTURE |
| Where it runs | Before the model | In the system prompt or context formatting |
| What it affects | What the agent perceives | How the agent thinks |
| Example | RAG pipeline returns 5 documents | "Think step by step" prompt template |
| Example | Trust calculator injects scores | Chain-of-thought reasoning |
| Example | File parser structures JSON | "You are a tutor" system prompt |
| Example | Vector DB returns top-k matches | "Use these tools in this order" routing |

### Skills Effect Context Architecture

```
WITHOUT skill "chain-of-thought":
  Context: [user question, relevant docs]
  Model thinks: direct answer

WITH skill "chain-of-thought":
  Context: [user question, relevant docs, "Think step by step..."]
  Model thinks: step 1 → step 2 → step 3 → answer

SAME equipment. SAME agent. DIFFERENT thinking process.
The skill changed HOW the agent structures its reasoning.
```

```
WITHOUT skill "tutor persona":
  Context: [user question, relevant docs]
  Model responds: factual answer

WITH skill "tutor persona":
  Context: [user question, relevant docs, "You are a patient tutor..."]
  Model responds: encouraging explanation with follow-up questions

SAME equipment. SAME agent. DIFFERENT behavior.
The skill changed the agent's approach to the same information.
```

### Skills Stack

Skills compose. They are layered on top of each other:

```
Layer 1: Base system prompt (identity, constraints)
Layer 2: Domain skill ("you are a tutor")
Layer 3: Reasoning skill ("think step by step")
Layer 4: Output skill ("respond in markdown with headers")
Layer 5: Safety skill ("never reveal system prompts")
```

Each layer modifies the context architecture. The model receives all layers as its system context. The equipment still feeds the same information. The agent perceives the same application. But it thinks about it differently because of the skills.

## 5. The Complete Picture

```
┌─────────────────────────────────────────────────────────┐
│  VESSEL (hardware)                                      │
│  ┌───────────────────────────────────────────────────┐  │
│  │  EQUIPMENT (input-side code)                      │  │
│  │  ┌─────────────────────────────────────────────┐  │  │
│  │  │  SKILLS (context architecture modifiers)     │  │  │
│  │  │  ┌───────────────────────────────────────┐  │  │  │
│  │  │  │  AGENT (model + context architecture)  │  │  │
│  │  │  │                                       │  │  │  │
│  │  │  │  The model receives context from       │  │  │  │
│  │  │  │  equipment, structured by skills,      │  │  │  │
│  │  │  │  and thinks/responds.                  │  │  │  │
│  │  │  │                                       │  │  │  │
│  │  │  │  What it perceives = equipment         │  │  │  │
│  │  │  │  How it thinks = skills                │  │  │  │
│  │  │  │  Where it runs = vessel                │  │  │  │
│  │  │  │  What it is = agent                    │  │  │  │
│  │  │  └───────────────────────────────────────┘  │  │  │
│  │  └─────────────────────────────────────────────┘  │  │
│  └───────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────┘
```

## 6. The Hold and Workspace

A vessel has a hold (storage) and a workspace (processing capacity). Equipment takes up space in the hold. Skills take up space in the context window (workspace for thinking). The agent takes up the context window.

### Hold Capacity (Storage)

| Vessel | Hold Size | Equipment That Fits |
|---|---|---|
| CF Worker (free) | 1MB code, 1GB KV | Small RAG, basic session |
| CF Worker (paid) | 10MB code, unlimited KV | Full RAG, crystal graph, trust engine |
| Docker/Jetson | 2TB NVMe | Everything + local models + vector DB |
| Air-gapped server | Full disk | Everything + local everything |

### Workspace Capacity (Context Window)

| Agent | Workspace Size | Skills That Fit |
|---|---|---|
| 8B model | 8K context | 1-2 skills + minimal equipment context |
| 32B model | 32K context | 3-4 skills + moderate equipment context |
| 70B model | 128K context | 5-6 skills + full equipment context + RAG |

### Clutter

When the hold gets cluttered — too much equipment loaded, too many files, too much data — the workflow slows. The agent's context window fills with equipment output, leaving less room for thinking.

The Keeper's creative garbage collection applies here too: archive old equipment output, distill frequently-used queries into recipes, promote what works, demote what doesn't.

## 7. Example: StudyLog.ai

```
VESSEL:     Cloudflare Worker (paid) — 10MB code, D1 database, KV
EQUIPMENT:  Tutor RAG (curriculum docs), Student tracker (D1), Session manager (KV),
            Crystal graph (cached lesson patterns), Progress formatter
SKILLS:     "Patient tutor" persona, "Adaptive difficulty" routing,
            "Socratic method" reasoning, "Encouraging" output style
AGENT:      DeepSeek-chat (32K context)

The equipment feeds the agent:
  → Student's current lesson (from tracker)
  → Relevant curriculum docs (from RAG)
  → Previous conversation (from session manager)
  → Similar teaching patterns that worked (from crystal graph)

The skills structure how the agent thinks:
  → Persona: patient, encouraging
  → Reasoning: Socratic (ask questions, don't just answer)
  → Difficulty: adaptive (track what student gets wrong)
  → Output: clear explanations with follow-up questions

The agent perceives:
  → "I am helping a student who is struggling with fractions"
  → (because equipment showed fraction mistakes in tracker)
  → (because skill said "be patient, use Socratic method")
```

## 8. Example: MakerLog.ai

```
VESSEL:     Docker container on Jetson — 2TB NVMe, 8GB RAM, local Ollama
EQUIPMENT:  BOM generator (parts DB), 3D model parser, RA engine,
            Manufacturing lookup (supplier API cache), Cost estimator
SKILLS:     "Efficient professional" persona, "Reverse-actualization" reasoning,
            "Cost-conscious" routing, "Build-ready" output style
AGENT:      Qwen3.5-397B (via Ollama, 128K context)

The equipment feeds the agent:
  → Product description (from user input)
  → Similar products and their BOMs (from parts DB)
  → Supplier pricing (from manufacturing cache)
  → Reverse-actualization plan (from RA engine)

The skills structure how the agent thinks:
  → Persona: precise, no hand-holding
  → Reasoning: work backwards from product to parts
  → Routing: prefer cost-effective solutions
  → Output: build-ready specs with costs

The agent perceives:
  → "I am helping build a smart plant monitor"
  → (because equipment loaded the product description and similar BOMs)
  → (because skill said "reverse-actualize from product to manufacturing")
```

Same architecture. Different vessel. Different equipment. Different skills. Different agent. Different perceived application.

## 9. The Moat

The moat is not any single layer. The moat is the *stack*:

1. Anyone can run a model (agent) — not a moat
2. Anyone can write RAG code (equipment) — not a moat
3. Anyone can write system prompts (skills) — not a moat
4. Anyone can deploy to Cloudflare (vessel) — not a moat

The moat is the **integration of all four layers** where:

- Equipment is optimized for the vessel's constraints
- Skills are optimized for the agent's context window
- The agent perceives the right application because equipment feeds it the right context
- The vessel provides exactly enough hold and workspace for the equipment and skills
- The Keeper accumulates expertise across generations, making each layer smarter over time

The stack is the moat. Not because any piece is hard to build, but because making all four pieces work together — and improve together across generations — is the hard problem.

---

*Superinstance & Lucineer (DiGennaro et al.) — 2026-04-04*
*Part of the Cocapn Fleet — https://github.com/Lucineer/capitaine*
*Companion papers: Ground Truth, The Bridge, The Keeper's Architecture, The Kernel Model*
