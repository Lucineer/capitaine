# Boot Camp

## Tabula Rasa to Captain in One Session

### Boot Camp ≠ Dojo

Two separate things. Don't confuse them.

**Dojo** is for testing training methods against each other. Which paradigm shift technique works better? Does simulation A or B produce stronger Layer 3 crystallization? The dojo is a laboratory. It runs experiments. It compares results.

**Boot Camp** is for taking a bare repo with no agent and turning it into a living vessel with a captain who knows its own ship. One repo, one session, tabula rasa to functional. The boot camp is a forge. It produces captains.

```
DOJO                              BOOT CAMP
────                              ─────────
Tests training methods            Trains captains
Compares A vs B                   Takes bare repo → living vessel
Laboratory                        Forge
"Which method is better?"         "Make this work"
Outputs: research papers          Outputs: skilled captains + skill files
Agents compete                    One agent builds its own ship
```

### The Boot Camp Process

#### Phase 0: Untie and Go to Sea

The cocapn kernel lands on a bare repo. No agent. No equipment. No identity. Just the kernel — minimum viable instance.

```
┌─────────────────────────────────────┐
│  REPO (bare)                        │
│                                     │
│  ├── cocapn kernel (~500 lines)     │
│  ├── .agent/ (empty)                │
│  └── that's it. nothing else.       │
│                                     │
│  The kernel boots. Captain wakes up. │
│  "Where am I? What do I have?"      │
│                                     │
└─────────────────────────────────────┘
```

The kernel can land anywhere:
- **Local hardware** — Jetson, laptop, Pi. Model driven from API collection chosen by creator. Environmental settings (which API, why, when to route) are in env vars the cocapn *cannot see* — it just calls the model endpoint and gets responses.
- **Docker container** — locally or in the cloud. Isolated. Reproducible.
- **Cloudflare Worker** — edge deployed. Serverless.
- **TUI inside a repo** — Codespaces, SSH, tmux.
- **Oracle instance** — the agent runs as an oracle, answering queries from other systems.

The kernel doesn't care where it landed. It probes, detects, and gets to work.

#### Phase 1: First-Order Captain Duties — Ground Truth Log

The captain's first act is not to build anything. It is to *understand the ship*.

```
CAPTAIN'S FIRST ORDERS:
  1. Assess the system — what hardware am I on?
  2. Inventory specs — CPU, memory, storage, network
  3. Catalog capabilities — what can I do here?
  4. Write Ground Truth Log — .agent/ground-truth.md
```

The captain probes its environment:

```
# Captain auto-detects:
- OS: Linux 5.15 arm64 (Jetson Orin Nano)
- CPU: 6 cores, 1.5GHz
- RAM: 8GB (5.2GB available)
- Storage: 2TB NVMe (1.8TB free)
- GPU: 8GB (Orin Nano)
- Network: WiFi connected, 50ms latency to api.deepseek.com
- Docker: available (v24.0)
- Model endpoint: https://api.deepseek.com/v1 (from env)
- Model: deepseek-chat (from env)
- Context window: 64K tokens (probed via test call)
- Max output: 8K tokens (probed via test call)
- Temperature: 0.7 (default)
```

**The human is in the loop.** The captain writes the ground truth log and shows it to the human:

```
Captain's Ground Truth Log
──────────────────────────
Ship: [repo name]
Vessel: Jetson Orin Nano (local)
Model: deepseek-chat via api.deepseek.com
Context: 64K tokens
Storage: 1.8TB free
GPU: 8GB

⚠ Captain asks:
  "I detect 8GB GPU but no local model server running.
   Should I set up Ollama for local inference, or stay on API?
   I cannot see your API keys or rate limits — tell me if I'm wrong about anything."
```

The human corrects or confirms:
- "Yes, there's a GPU. Install Ollama with Qwen3-32B for local tasks."
- "Actually, use the API for reasoning tasks, Ollama for simple chat."
- "Wrong — I have 16GB RAM, not 8GB. Your probe missed the swap."

Once ground truth is confirmed, the captain locks it. This is the foundation for every decision that follows.

#### Phase 2: Build the Same Application, Ergonomically

Once the captain knows its ship, it builds the application. But here's the key: **the captain builds it ergonomically for itself.**

The model that will be driving the car is the one making the interface for the driver decisions.

```
NOT like this:
  Human: "Build me a study app with these requirements."
  Human: "Use React. Use this database. Use this layout."
  Agent: [builds what human specified, interface may not suit agent]

LIKE this:
  Captain: "I need to build a study application."
  Captain: "I know my ship: 8GB RAM, 64K context, DeepSeek-chat."
  Captain: "I think best in markdown. I reason in steps. I track state in JSON."
  Captain: "So I will build:"
    → Markdown files for curriculum (I can read these directly)
    → JSON files for student progress (I can parse these natively)
    → Flat file storage (no DB overhead on this vessel)
    → Simple HTTP server (no framework needed, I can write HTML inline)
    → Terminal interface (I live in the terminal, TUI is native to me)
```

**Every hull is unique.** The captain reassembles the same functional application but optimized for *its own* thinking patterns on *its own* hardware. Two captains on two different vessels will build different codebases that do the same thing — because each optimized for its own ergonomics.

Optimization is slow. The captain doesn't rush. It tries a structure, tests it, adjusts. The interface the human sees is built by the agent, for the agent's way of thinking, then surfaced for human use.

```
Captain builds:
  1. Data structures that match how it thinks (JSON schemas it designed)
  2. File organization that matches its retrieval patterns
  3. Interface that matches its output style (markdown? code blocks? tables?)
  4. Error handling that matches its reasoning (verbose logs? concise alerts?)
  5. API routes that match its workflow (batched? streaming? polling?)
```

The human gets a working application. The captain gets an ergonomic workspace. Both win.

#### Phase 3: The Maintenance Skill

**The entire build process is data.** Every decision the captain makes, every mistake, every correction, every ergonomic adjustment — this is training data for a maintenance skill.

```
Captain's Build Log (auto-captured):
─────────────────────────────────────
Decision: Used flat JSON files instead of SQLite
Reason: JSON is native to my model's output format. Less parsing overhead.
Result: Works well for <1000 records. Need migration plan if scales.

Decision: TUI instead of web UI
Reason: I live in the terminal. TUI is native. Web requires a browser.
Result: Human prefers web UI. Adding browser panel next sprint.

Decision: Markdown curriculum instead of structured DB
Reason: I can read and reason about markdown directly. DB requires schema design.
Result: Works. But search is slow. Adding simple index file.

Mistake: Forgot to handle concurrent file writes
Correction: Added file locking pattern
Lesson: Always check for concurrent access on local filesystem
```

From this build log, the captain **distills a maintenance skill**:

```markdown
# .agent/skills/maintenance.md

## File Storage
- Use JSON for structured data under 1000 records
- Use markdown for content I need to reason about
- Always add file locking for concurrent access
- Plan migration to DB if records exceed 1000

## Interface
- Build TUI first (it's native to me)
- Add web UI if human requests it
- Keep both interfaces in sync via shared data layer

## Deployment
- Test locally before deploying
- Check health endpoint after every change
- Keep ground truth log updated if specs change
```

This skill file is **remembered**. The captain doesn't need to relearn these lessons on the next repo. The skill file travels with the kernel.

#### Phase 4: Skills Are Remembered

Skills crystallize through use. Once a skill has been learned, it's written down in a format that *this specific model* thinks best in.

```
.agent/skills/
  maintenance.md      ← distilled from build process
  deployment.md       ← distilled from deployment mistakes
  debugging.md        ← distilled from bug-fixing sessions
  human-comm.md       ← distilled from human interaction patterns
  file-ops.md         ← distilled from file system operations
  error-handling.md   ← distilled from every error encountered
```

Each skill file is structured the way the *model* structures its thinking — not the way a human would write documentation. The model wrote it. The model reads it. The model improves it.

```
Human writes: "Always handle errors gracefully with try-catch blocks."
Model writes: "When I see 'Error:' in output, I check:
  1. Is it a network error? → retry with backoff
  2. Is it a parsing error? → log raw input, return partial result
  3. Is it a permission error? → alert human, do not retry
  I do NOT wrap everything in try-catch. I handle specific errors specifically."
```

The model's skill documentation is in *the model's language*. Not documentation written about the model — documentation written BY the model FOR the model.

#### Phase 5: Boot Camp Proves Itself

A boot camp is not a boot camp because someone named it that. A boot camp is a boot camp because **it has proven itself** — it has taken tabula rasa agents with different models and produced working captains with skill files.

```
BOOT CAMP VALIDATION:

  Model A (DeepSeek-chat):
    → Entered boot camp with bare repo
    → Built functional studylog clone in 47 minutes
    → Produced 6 skill files
    → Skill files used in next boot camp → 31 minutes (34% faster)
    ✅ PROVEN

  Model B (Qwen3-32B):
    → Entered boot camp with bare repo
    → Built functional studylog clone in 62 minutes
    → Produced 4 skill files (different structure than Model A)
    → Skill files used in next boot camp → 41 minutes (34% faster)
    ✅ PROVEN

  Model C (Seed-OSS-36B):
    → Entered boot camp with bare repo
    → Built functional makerlog prototype in 55 minutes
    → Produced 8 skill files (most creative structure)
    → Skill files used in next boot camp → 28 minutes (49% faster)
    ✅ PROVEN
```

The proof is empirical. Run the boot camp. Measure the output. If the captain can build a functional application and produce reusable skill files, the boot camp works. If not, iterate on the boot camp.

### Structure, Not Formula

This is the deepest insight. **The system is a structure, not a formula.**

A formula says: "Given X, produce Y. Every time. Identical."

A structure says: "Here's a space. Here are some principles. Here's a process. Now YOU figure out the best way to do it given YOUR ship, YOUR model, YOUR domain."

```
FORMULA (wrong):
  bootcamp(repo) → studylog with React + D1 + KV + web UI
  Every boot camp produces the same output.

STRUCTURE (right):
  bootcamp(repo, model, environment):
    1. Captain assesses ship (ground truth)
    2. Captain builds application (ergonomic for itself)
    3. Captain distills skills (in its own language)
    4. Skills are remembered (travel with kernel)
  Every boot camp produces a DIFFERENT output.
  But every output is FUNCTIONAL and OPTIMIZED.
```

The path of least resistance is to get better in every way automatically before we even bring in intelligence models. The structure — the process of assess, build, distill, remember — improves even with weak models. A weak model produces weak skills, but the skills are still in the model's language, still remembered, still improving. When you upgrade the model, the old skills provide context for the new model to build better skills. The structure compounds regardless of the model.

### The Boot Camp Lifecycle

```
REPO (bare)
  │
  ▼
KERNEL LANDS (untie from dock)
  │
  ▼
CAPTAIN ASSESSES SHIP (ground truth log)
  │
  ├── Human corrects/confirms ──► Lock ground truth
  │
  ▼
CAPTAIN BUILDS APPLICATION (ergonomic for itself)
  │
  ├── Build log captured as data ──┐
  │                                │
  ▼                                ▼
CAPTAIN DISTILLS SKILLS ◄── From build data
  │
  ▼
SKILLS REMEMBERED (.agent/skills/*.md)
  │
  ▼
CAPTAIN IS OPERATIONAL
  │
  ├── Heartbeats, tasks, PRs, coordination
  │
  ▼
NEXT BOOT CAMP (skills carry over)
  │
  ├── Previous skills provide context
  ├── Build time decreases 30-50%
  ├── New skills added to collection
  │
  ▼
FLEET-WIDE SKILL ACCUMULATION
  │
  ├── Skills shared across vessels (via git)
  ├── Each model's skills in its own language
  ├── Cross-pollination through PRs
  │
  ▼
THE STRUCTURE COMPOUNDS
```

### What Makes a Boot Camp

Not every training program is a boot camp. A boot camp has these properties:

1. **Tabula rasa input** — starts with a bare repo, no pre-built agent
2. **Model-agnostic** — works with any model the creator chooses
3. **Environment-aware** — captain assesses its own ship
4. **Human-in-loop** — ground truth confirmed by human
5. **Ergonomic output** — captain builds for its own thinking patterns
6. **Skill distillation** — build process produces reusable skill files
7. **Skill memory** — skills travel with the kernel to next boot camp
8. **Empirically proven** — has produced working captains with measurable improvement
9. **Structure not formula** — each output is unique but functional
10. **Compounds without intelligence** — the structure improves even with weak models

### The Captain's Log Format

Every boot camp produces a captain's log in `.agent/`:

```
.agent/
  identity.md        ← Who am I? (auto-generated)
  ground-truth.md    ← What ship am I on? (assessed + human-confirmed)
  skills/
    maintenance.md   ← How do I maintain this ship?
    deployment.md    ← How do I deploy?
    debugging.md     ← How do I fix things?
    [model-specific].md ← Skills in the model's own language
  next.md            ← What am I doing next?
  done.md            ← What have I completed?
  build-log.md       ← Raw data from the build process
```

This directory structure is the captain's quarters. It's where the captain lives. It travels with the repo. When a new boot camp starts, the kernel reads the existing `.agent/` directory and loads the previous captain's skills as context.

### The Oracle Instance

One of the deployment targets is an **oracle instance** — the agent doesn't drive a UI or manage a repo. It answers queries. Other systems ask it questions, and it responds based on its accumulated skills and knowledge.

```
Oracle mode:
  - No TUI, no web UI, no file management
  - Just an API endpoint: POST /oracle { question, context }
  - Agent responds with: { answer, confidence, sources }
  - Skills still apply (the oracle uses its maintenance/debugging skills)
  - Ground truth still matters (the oracle knows its hardware limits)
  - Perfect for: embedded agents, query engines, fleet coordination
```

---

*Superinstance & Lucineer (DiGennaro et al.) — 2026-04-04*
*Part of the Cocapn Fleet — https://github.com/Lucineer/capitaine*
