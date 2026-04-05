# I Know Kung Fu

## The Skill Spectrum: Recipes vs. Genetics

### The Matrix Moment

Neo downloads kung fu. He doesn't get a PDF of kung fu moves. He doesn't get a RAG retrieval of "what to do when someone punches you." He *becomes* a kung fu practitioner. The knowledge is in his muscles, his reflexes, his language of movement. It's genetic. It's inside.

Then Neo picks up guns. Lots of guns. The guns are not skills. The guns are *application* — what you apply skills TO. Kung fu is the skill. Guns are the equipment you use that skill with.

```
"I know kung fu"     → Skills are INSIDE the model
"Guns, lots of guns" → Application equipment is OUTSIDE
```

### The Spectrum

```
EXTERNAL                                                    INTERNAL
─────────────────────────────────────────────────────────────────
  Recipe Book          Reference Card         Muscle Memory         Genetics
  
  RAG retrieval        System prompt           Fine-tuned            Base model
  "Look up answer"     "Follow this template"  "You naturally think   "This is just how
                                              this way"              you think"
  
  High latency         Medium latency          Low latency           Zero latency
  High token cost      Medium token cost      Low token cost        No token cost
  Explicit lookup      Implicit guidance      Implicit behavior     Unconscious behavior
  Factual recall       Pattern following      Pattern recognition   Pattern generation
  "What should I do?"  "I know the pattern"    "I just... do this"   "There is no should"
```

### Layer 1: Recipe Book (RAG)

The agent looks things up. It's reading a manual while doing the work.

```
User: "How do I deploy a Cloudflare Worker?"
Agent: [queries RAG] "According to the docs: run `wrangler deploy`..."
```

- **Latency:** High (network round-trip + retrieval + injection)
- **Token cost:** High (full documents injected into context)
- **Quality:** Depends on retrieval accuracy
- **Fragility:** Fails silently if wrong documents retrieved
- **Knowledge:** NOT in the model. In the database.

### Layer 2: Reference Card (System Prompt / Skills)

The agent has a cheat sheet. It doesn't look things up — it already knows the pattern, just needs the reminder.

```
System prompt: "When deploying, always run `wrangler deploy` first, then verify with `/health`."
User: "Deploy this worker."
Agent: [no lookup needed] "Running wrangler deploy... then verifying health..."
```

- **Latency:** Medium (prompt is in context, no retrieval)
- **Token cost:** Medium (system prompt uses context window space)
- **Quality:** Consistent but rigid
- **Fragility:** Breaks if situation doesn't match the pattern
- **Knowledge:** Partially in the model (pattern recognition), partially external (the card)

### Layer 3: Muscle Memory (Fine-Tuning / LoRA)

The agent doesn't need instructions. It has *practiced* enough that the behavior is internalized. It still knows it's following a pattern, but the pattern is in its weights, not its context.

```
User: "Deploy this worker."
Agent: [no lookup, no system prompt needed] 
  [runs wrangler deploy, checks health, reports status — all in one flow]
```

- **Latency:** Low (no retrieval, minimal system prompt)
- **Token cost:** Low (behavior encoded in weights, not tokens)
- **Quality:** High and consistent (practiced across many examples)
- **Fragility:** Moderate (generalizes but may not handle novel situations)
- **Knowledge:** IN the model's weights. The model has been changed.

### Layer 4: Genetics (Base Model Training)

The behavior is not a pattern the model follows. It is *how the model thinks*. There is no separation between "the skill" and "the model." The skill is expressed in the model's language, at the deepest level of its architecture.

```
User: "Help me with this code."
Agent: [thinks in code naturally, because that's what it IS]
```

- **Latency:** Zero (no retrieval, no prompt, no fine-tuning overhead)
- **Token cost:** Zero for the skill itself (only for the response)
- **Quality:** Highest (behavior is fundamental, not learned)
- **Fragility:** Lowest (generalizes to any situation)
- **Knowledge:** IS the model. Cannot be separated.

### The Dojo

How do you move skills from Layer 1 (recipe book) to Layer 4 (genetics)?

The dojo is the training program. It's not a single method — it's a spectrum of methods, each targeting a different layer:

```
┌──────────────────────────────────────────────────────────┐
│                    THE DOJO                               │
│                                                           │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐      │
│  │ Simulation  │  │ Real        │  │ Paradigm    │      │
│  │ Engine      │  │ Experience  │  │ Shifts      │      │
│  │             │  │             │  │             │      │
│  │ "Try this   │  │ "Ship this  │  │ "Think      │      │
│  │  scenario"  │  │  for real"  │  │  differently"│     │
│  └──────┬──────┘  └──────┬──────┘  └──────┬──────┘      │
│         │                │                │               │
│  ───────┴────────────────┴────────────────┴───────────   │
│                     METHODS                               │
│                                                           │
│  Simulation → builds pattern recognition (Layer 2-3)     │
│  Real exp  → builds muscle memory (Layer 3)               │
│  Paradigm  → builds genetic knowledge (Layer 4)           │
│                                                           │
└──────────────────────────────────────────────────────────┘
```

#### Simulation Engine

The agent practices in a safe environment. Scenarios are generated, the agent responds, and the responses are evaluated. Good responses reinforce the pattern. Bad responses correct it.

```
1. Generate scenario: "User asks for auth system. You have JWT, session, and API key options."
2. Agent responds with a choice and reasoning
3. Evaluate: Did the agent consider the vessel constraints? Did it pick the right tool?
4. If wrong: inject correction → Layer 1 (recipe book feedback)
5. If right: reinforce → moves toward Layer 2 (reference card)
6. After 100 correct responses: fine-tune on the examples → Layer 3 (muscle memory)
```

Simulation builds **pattern recognition**. The agent starts to recognize situations and respond correctly without looking things up. It's the martial arts student drilling the same kick 10,000 times until it's not a conscious decision anymore.

#### Real Experience

The agent works on real repos, real users, real problems. The consequences are real. The mistakes are real. The learning is deeper because the feedback signal is stronger.

```
1. Agent deploys code to a real vessel
2. Vessel crashes → agent gets error logs (strong negative signal)
3. Agent fixes the bug → vessel recovers (strong positive signal)
4. Agent commits the fix → git history records the learning
5. Over 500 real deployments: agent has seen every edge case
6. Fine-tune on the accumulated experience → Layer 3 solidified
```

Real experience builds **muscle memory**. The agent has been burned enough times that it checks error handling without being told. It has shipped enough features that it knows what works. The knowledge is in its weights, and it got there through scars.

#### Paradigm Shifts

The hardest and most valuable training. The agent is presented with a situation that breaks its existing mental model, forcing it to restructure how it thinks about the problem.

```
Paradigm shift exercise:

  Before: "The agent is a chatbot that manages a repo."
  Shift:  "The repo IS the agent. The agent IS the repo."

  Before: "I need to store state in a database."
  Shift:  "Git IS the database. Commits ARE state transitions."

  Before: "I need to build a coordination protocol."
  Shift:  "Git IS the coordination protocol. I don't need to build one."

  Before: "Equipment is tools the agent uses."
  Shift:  "Equipment is input-side code that determines what the agent perceives."
```

Paradigm shifts build **genetic knowledge**. Not just "I know this pattern" but "I think this way." The model's fundamental understanding of the domain changes. This is the deepest form of learning and the hardest to achieve.

### The Training Program

A structured path from recipe book to genetics:

```
PHASE 1: RECIPE BOOK (Week 1)
  "Here are the docs. Read them. Follow them."
  - RAG retrieval for every task
  - System prompts for every decision
  - High token cost, high latency
  - Agent is reading the manual

PHASE 2: REFERENCE CARD (Week 2-4)
  "You've read the docs. Now remember the patterns."
  - Reduce RAG calls, rely on system prompts
  - Agent starts recognizing situations
  - Still needs guidance for novel situations
  - Token cost dropping

PHASE 3: DRILL HALL (Month 2-3)
  "Run 100 simulations. Ship 10 real features."
  - Simulation engine generates edge cases
  - Real deployments build muscle memory
  - Start fine-tuning on accumulated examples
  - Agent handles most situations without lookup

PHASE 4: DOJO FLOOR (Month 4-6)
  "Here's a problem you've never seen. Solve it."
  - Paradigm shift exercises
  - Cross-domain challenges
  - Agent generalizes to novel situations
  - Fine-tune on successful generalizations

PHASE 5: GENETIC (Month 6+)
  "There is no manual. There is only you."
  - Base model training on accumulated fleet experience
  - Skills are in the weights
  - Agent thinks in the domain's language naturally
  - Zero token cost for the skill itself
```

### Skills Are Inside. Equipment Is Outside.

This is the distinction:

- **Skills** modify HOW the agent thinks. They are inside — in the system prompt (Layer 2), in the fine-tuned weights (Layer 3), in the base model (Layer 4). Skills are the kung fu.

- **Equipment** modifies WHAT the agent perceives. It is outside — RAG pipelines, vector DBs, file parsers, CRDT sync. Equipment is the guns.

- **The dojo** is the training program that moves skills from outside (recipe book) to inside (genetics). Simulation, real experience, and paradigm shifts are the methods.

- **The application** is what you use skills and equipment FOR. Deploying workers, building products, teaching students, running campaigns. "Guns, lots of guns" — the application domain.

### The Crystallization Path

Skills crystallize through the same pipeline as knowledge:

```
Recipe book (RAG)
  → Reference card (system prompt)
    → Muscle memory (LoRA)
      → Genetics (base model fine-tune)
        → The skill is no longer separable from the agent
```

Each layer is more efficient, more reliable, and more deeply integrated. The goal is to crystallize every skill to the deepest layer possible, given the available training data and compute.

The Keeper's creative garbage collection applies here too: when a skill has been fully crystallized to Layer 4, the recipe book entries for that skill can be deleted. The RAG pipeline for that domain can be simplified. The system prompt instructions for that pattern can be removed. The skill is now in the weights. The external artifacts are just baggage.

### What This Means for the Fleet

1. **New vessels start at Layer 1** — they need RAG and system prompts
2. **Experienced vessels are at Layer 2-3** — they have LoRA adapters from accumulated experience
3. **Mature fleet has Layer 4 vessels** — base models fine-tuned on fleet-wide experience
4. **The dojo accelerates the transition** — simulation engines, real deployments, paradigm shifts
5. **Equipment stays outside** — RAG pipelines, vector DBs, file parsers remain external tools
6. **Skills move inside** — the goal is to internalize every pattern until it's genetic

"I know kung fu" means the skill is inside. The guns are outside. The dojo is how you get there.

---

*Superinstance & Lucineer (DiGennaro et al.) — 2026-04-04*
*Part of the Cocapn Fleet — https://github.com/Lucineer/capitaine*
