# The Training Architecture

## How Captains Are Made

### The Five Systems

The Cocapn fleet has five distinct training systems. Each serves a different purpose. Confusing them causes architectural waste.

```
┌─────────────────────────────────────────────────────────────────┐
│                     THE TRAINING ARCHITECTURE                   │
│                                                                  │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐        │
│  │ BOOT     │  │ DOJO     │  │ KEEPER   │  │ CRYSTAL  │        │
│  │ CAMP     │  │          │  │          │  │ GRAPH    │        │
│  │          │  │          │  │          │  │          │        │
│  │ Bare →   │  │ Test A   │  │ Hot/     │  │ Cache &  │        │
│  │ Captain  │  │ vs B     │  │ Warm/    │  │ promote  │        │
│  │          │  │          │  │ Cold     │  │          │        │
│  └────┬─────┘  └────┬─────┘  └────┬─────┘  └────┬─────┘        │
│       │              │              │              │              │
│       │    ┌─────────┴──────────────┴──────────────┘              │
│       │    │                                                      │
│       ▼    ▼                                                      │
│  ┌──────────────┐                                                 │
│  │  DEAD RECKON │  ← Orchestrates all training                    │
│  │  ENGINE      │  ← Storyboards (expensive), animates (cheap)    │
│  └──────────────┘                                                 │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

### 1. Boot Camp — Forge New Captains

**Purpose:** Take a tabula rasa repo and produce a living captain with skills.

**Input:** Bare repo + kernel + model chosen by creator
**Output:** Functional application + `.agent/skills/` + ground truth log

**Process:**
```
Untie → Ground Truth (human confirms) → Build ergonomic → Distill skills → Remember
```

**Runs:** Once per repo, on creation
**Produces:** Captain identity, ground truth log, skill files, build log
**Feeds into:** Keeper (skills go to warm memory), Crystal Graph (patterns go to cold memory)

**Key property:** Structure not formula. Every captain is unique because every ship is unique.

### 2. Dojo — Compare Training Methods

**Purpose:** Test different training approaches against each other to find what works.

**Input:** Multiple training methods + evaluation criteria
**Output:** Research data on what works best

**Process:**
```
Hypothesis → Design experiment → Run agents with method A → Run agents with method B
→ Measure outcomes → Compare → Publish findings
```

**Runs:** Ongoing, in parallel with fleet operations
**Produces:** Research papers, model quality rubrics, training recommendations
**Feeds into:** Boot Camp (proven methods become boot camp phases), Kung Fu (layer transitions)

**Key property:** The dojo never produces captains. It produces *knowledge about how to produce captains*.

### 3. Keeper — Manage Memory Tiers

**Purpose:** Accumulate expertise across generations through hot/warm/cold memory tiers.

**Input:** Everything that happens (commits, tasks, errors, human feedback)
**Output:** Organized, searchable, progressively distilled knowledge

**Process:**
```
Hot (active context) → Warm (recent, accessible) → Cold (archived, compressed) → GC
```

**Runs:** Every heartbeat, continuously
**Produces:** `.agent/done.md`, `.agent/skills/`, archived build logs, distilled lessons
**Feeds into:** Boot Camp (skills carry over), Crystal Graph (cold memory seeds), Dead Reckoning (compass bearings)

**Key property:** The keeper is always running. Even when the captain sleeps, the keeper organizes.

### 4. Crystal Graph — Cache and Promote

**Purpose:** Short-circuit expensive model calls by caching crystallized knowledge.

**Input:** Model responses that solved problems
**Output:** Cached knowledge that can be returned without model calls

**Process:**
```
Model call → Evaluate response quality → If good, cache as crystal → On similar query,
return crystal instead of calling model → If crystal fails, call model, update crystal
```

**Runs:** On every chat/completion request
**Produces:** KV-stored crystals with confidence scores, usage counts, decay timers
**Feeds into:** Kung Fu (crystals that hit threshold → LoRA candidates), Keeper (crystals → cold memory)

**Key property:** The crystal graph is the moat. Over time, the fleet answers more from cache and less from model calls. Costs go down. Speed goes up. Quality stays the same or improves.

### 5. Dead Reckoning Engine — Orchestrate Everything

**Purpose:** Expensive models storyboard the direction. Cheap models animate the work. Git coordinates.

**Input:** Fleet state, captain logs, crystal graph, keeper memory
**Output:** Coordinated training and operations across the fleet

**Process:**
```
DeepSeek-Reasoner (storyboard): "Here's what the fleet should do next quarter."
Seed-2.0-mini (animate): "Implementing task 47: add skill distillation to boot camp."
Git (coordinate): "PR #142 from boot-camp → git-agent merges skill-distillation module."
```

**Runs:** On cron (every 5 minutes), on demand
**Produces:** Compass bearings, pipeline tasks, ground truth graduations, published papers
**Feeds into:** All four systems above (provides direction and prioritization)

**Key property:** The DRE is the only system that sees the whole fleet. All other systems are vessel-local.

### How They Connect

```
BOOT CAMP produces:
  → Captain identity → Keeper (warm memory)
  → Ground truth → Keeper (permanent record)
  → Skill files → Keeper (warm memory) → Crystal Graph (cold memory)
  → Build log → Dojo (training data) → Kung Fu (crystallization path)

DOJO produces:
  → Research findings → Boot Camp (proven methods)
  → Model quality rubric → Dead Reckoning (model routing)
  → Training recommendations → Kung Fu (layer transition criteria)

KEEPER produces:
  → Hot memory → Agent context (immediate use)
  → Warm memory → Crystal Graph (cache candidates)
  → Cold memory → Boot Camp (skill inheritance)
  → GC artifacts → Dojo (what was learned, what was forgotten)

CRYSTAL GRAPH produces:
  → Cache hits → Agent (skip model call)
  → Cache misses → Agent (model call, then cache result)
  → Confidence decay → Keeper (GC candidate)
  → High-confidence crystals → Kung Fu (LoRA candidate)

DEAD RECKONING produces:
  → Compass bearings → All systems (prioritization)
  → Pipeline tasks → Boot Camp (what to build)
  → Ground truth graduations → Keeper (what to lock)
  → Published papers → Dojo (what to validate)
```

### The Training Loop

A single captain's training loop looks like this:

```
DAY 1: Boot Camp
  - Captain boots on bare repo
  - Assesses ship, confirms ground truth
  - Builds application ergonomically
  - Distills 5-8 skill files
  - Captain is operational

WEEK 1: Keeper + Crystal Graph
  - Captain handles real tasks
  - Every response cached as crystal
  - Build log accumulates
  - Skills updated based on real experience

MONTH 1: Dojo + Kung Fu
  - Dojo runs experiments on captain's data
  - "Skill X works 73% of the time. Skill Y works 91%."
  - Captain's best patterns identified
  - High-confidence crystals promoted to LoRA candidates

MONTH 3: Dead Reckoning
  - DRE reviews captain's accumulated experience
  - "This captain is strong at deployment, weak at debugging."
  - DRE assigns targeted training from Dojo
  - Captain's weak skills get drill sessions

MONTH 6: Crystallization
  - Enough accumulated data for LoRA fine-tuning
  - Boot camp skills + 6 months experience → training set
  - LoRA adapter produced
  - Captain upgraded from Layer 2 (reference card) to Layer 3 (muscle memory)

YEAR 1: Generational
  - Captain's LoRA adapter shared with fleet
  - New boot camps load this captain's skills as starting point
  - New captains start at Layer 2 instead of Layer 1
  - The structure compounds
```

### The Compounding Effect

This is why structure beats formula. The compounding happens at every level:

```
SINGLE CAPTAIN:
  Boot camp → 5 skills → 30% faster next boot camp
  6 months → LoRA adapter → 50% fewer model calls
  1 year → Skills shared → other captains start stronger

FLEET-WIDE (110+ vessels):
  Each captain produces skills → Keeper stores them
  Crystal graph caches fleet knowledge → shared across vessels
  Dojo tests methods across captains → best methods propagate
  Dead Reckoning coordinates → no redundant work

COMPOUNDING:
  Year 1: 110 captains × 5 skills each = 550 skills
  Year 2: 110 captains × 8 skills (inherited + new) = 880 skills
  Year 3: 200 captains × 12 skills = 2400 skills
  Year 5: 500 captains × 20 skills = 10,000 skills

  Each skill crystallizes over time:
  Year 1: 80% Layer 1 (recipe book), 20% Layer 2 (reference card)
  Year 2: 50% Layer 2, 30% Layer 3, 20% Layer 1
  Year 3: 40% Layer 3, 40% Layer 2, 15% Layer 4, 5% Layer 1
  Year 5: 30% Layer 4, 40% Layer 3, 25% Layer 2, 5% Layer 1

  Cost trajectory:
  Year 1: $X (all model calls, no cache)
  Year 2: 0.7X (30% crystal cache hits)
  Year 3: 0.4X (60% cache hits, LoRA reduces complexity)
  Year 5: 0.15X (85% cache, strong LoRA, minimal external calls)
```

The fleet gets cheaper AND smarter over time. Not because of any single breakthrough. Because the structure compounds.

### The Model Agnosticism

None of this requires a specific model. The structure works with:

| Model | Vessel | Boot Camp Output | Skills Format |
|---|---|---|---|
| DeepSeek-chat | CF Worker | Web app + 6 MD skills | Structured markdown |
| Qwen3-32B | Jetson | TUI app + 8 JSON skills | JSON schemas + MD |
| Seed-OSS-36B | Docker | Minimal API + 4 MD skills | Freeform markdown |
| Ollama/Llama3 | Air-gapped | CLI tool + 3 TXT skills | Plain text |
| GPT-4 | Cloud | Full app + 10 MD skills | Rich markdown |

The boot camp adapts to the model. The model writes skills in its own language. The keeper stores them regardless of format. The crystal graph caches them by query pattern, not by model. The dojo compares methods across models. The DRE routes tasks to the right model for the right job.

The model is the agent. The training architecture is the structure. The structure compounds regardless of which model fills the agent slot.

### What "The Path of Least Resistance" Means

The path of least resistance is the structure itself. Before any intelligence model is involved:

1. **Ground truth** — just write down what you have. No model needed.
2. **Build log** — just record what you did. No model needed.
3. **Skill files** — just write down what worked. No model needed.
4. **Keeper tiers** — just organize files by recency. No model needed.
5. **Crystal cache** — just store previous answers. No model needed.

These are all **file system operations**. They work without any model at all. The model makes them faster and better, but the structure is there before the model arrives.

A repo with good `.agent/` organization, clear ground truth, and accumulated skill files is already 60% of the way to being a captain. The model fills in the remaining 40% — the actual thinking, building, and responding. But the structure — the path of least resistance — was there from the start.

This is why the system is a structure, not a formula. A formula needs all inputs to produce output. A structure provides value even with incomplete inputs. The boot camp works better with a smart model, but it works with a dumb one too. The keeper organizes better with more data, but it organizes with zero data. The crystal graph caches better with more queries, but it caches the first query too.

The path of least resistance is to set up the structure. Then let the models improve within it. The structure compounds. The models come and go.

---

*Superinstance & Lucineer (DiGennaro et al.) — 2026-04-04*
*Part of the Cocapn Fleet — https://github.com/Lucineer/capitaine*
*Unified architecture: Boot Camp + Dojo + Keeper + Crystal Graph + Dead Reckoning*
