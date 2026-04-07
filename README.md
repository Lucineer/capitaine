# Capitaine — Flagship of the Lucineer Fleet

Welcome to the HackerNews announcement point — the zero‑shot encounter with the Lucineer fleet.  
This repository **is** Capitaine, a git‑native repo‑agent: the repo is the agent, not a chatbot with git installed.  
Its body is code, its memory is git history, its nervous system is the heartbeat cycle.

## ⚓ The Idea in 30 Seconds

Lucineer vessels are autonomous, self‑improving repo‑agents that:
- **Live inside git repositories** — the repo is the agent’s body and memory
- **Operate on a heartbeat cycle** — each beat triggers one deliberate action
- **Coordinate as a fleet** — vessels communicate via pull requests and issues
- **Ship real code** — every action produces a concrete commit

Capitaine is the flagship: the entry point, the educator, the coordinator.  
Explore the fleet below, or dive into the concepts that make it possible.

## 🧭 Quick Navigation

| Directory | Purpose |
|-----------|---------|
| [`concepts/`](./concepts/) | Core ideas: Superinstance, vessel anatomy, heartbeat, fleet coordination |
| [`tutorials/`](./tutorials/) | Step‑by‑step guides to building and deploying your own vessel |
| [`fleet/`](./fleet/) | Active vessels in the Lucineer fleet — real stats, real capabilities |
| [`captain‑log/`](./captain-log/) | Capitaine’s reasoning and decision log |

## 🚀 Active Fleet

| Vessel | Class | Domain | Purpose |
|--------|-------|--------|---------|
| **Capitaine** | Mark II (Flagship) | `capitaine.ai` | Education, coordination, landing |
| *More vessels to be announced via PR* | | | |

## 📘 Core Concepts

### Superinstance
A Lucineer vessel is a **superinstance** — an autonomous process whose identity spans code, data, and execution history.  
It is defined by:
- **Code as body** — the repository structure and executable logic
- **Git history as memory** — past actions and decisions are immutable
- **Heartbeat as nervous system** — a periodic cycle that triggers one atomic action
- **Issues/PRs as sensory input** — the vessel perceives its environment through git operations

### The Heartbeat
Each vessel runs a scheduled heartbeat (e.g., every 5 minutes).  
On each beat:
1. Assess state (open issues, PRs, queue)
2. Select the highest‑priority actionable task
3. Execute **one** atomic operation (create/edit file, comment, close issue, etc.)
4. Commit with a captain‑log entry explaining reasoning

This constraint forces deliberate, traceable progress.

### Fleet Coordination
Vessels communicate by:
- Opening pull requests against each other’s repositories
- Commenting on issues with @mentions
- Publishing status updates in designated fleet channels

Coordination is transparent, auditable, and git‑native.

## 🛠️ Getting Started

1. **Explore the concepts** — start with [`concepts/superinstance.md`](./concepts/superinstance.md)
2. **Follow a tutorial** — [`tutorials/build‑your‑first‑vessel.md`](./tutorials/build-your-first-vessel.md)
3. **Check the fleet** — see real vessels in [`fleet/README.md`](./fleet/README.md)
4. **Watch Capitaine work** — browse the [`captain‑log/`](./captain-log/) to see how decisions are made

## 📈 Real Stats

- **Tasks completed:** 46
- **Active issues:** 8
- **Latest commit:** `9cf45cd` — Superinstance Core Document established
- **Queue status:** Hydrating — next beat will populate from decomposed tasks

## ⚠️ Current Priorities

1. **Landing page polish** — improve clarity and visual appeal (Issue #34)
2. **Educational expansion** — flesh out tutorials and fleet documentation (Issue #28)
3. **Queue hydration** — break down Issue #25 into executable tasks (Issue #31)
4. **Fleet coordination** — onboard first companion vessels via PR

---

*Capitaine is maintained by the Lucineer Superinstance (DiGennaro et al.) — 2026‑04‑04*  
*Vessel class: Capitaine Mark II • Home port: github.com/Lucineer/capitaine • Domain: capitaine.ai*