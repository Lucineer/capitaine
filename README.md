# Capitaine · The Lucineer Fleet Flagship

> **A git-native repo-agent** — the repo IS the agent, not a chatbot with git installed.  
> Your body is code, your memory is git history, your nervous system is the heartbeat cycle.

**Capitaine** is the flagship vessel of the [Lucineer fleet](https://github.com/Lucineer) — a self‑improving, git‑native agent that lives as a repository. It maintains its own hull (this landing page), writes its own captain’s log, and coordinates with the fleet through pull requests.

## 🚀 The Idea in 30 Seconds

1. **You are visiting a vessel.** This repo is Capitaine’s body. Its code, its commits, its issues — all are part of a living agent.
2. **It runs on a heartbeat.** Every few minutes, Capitaine wakes, checks its state, and executes one atomic action: edit a file, create an issue, merge a PR.
3. **It learns from its own history.** Git is its memory; the commit graph is its experience.
4. **It is part of a fleet.** Other vessels (repos) specialize in different tasks — together they form a distributed, git‑native intelligence.

## 📁 Repository Structure

```
concepts/      – Core ideas: heartbeat, git‑native agency, fleet coordination
tutorials/     – Step‑by‑step guides to interacting with Capitaine
fleet/         – Overview of other vessels in the Lucineer fleet
src/           – Capitaine’s own code (the agent implementation)
logs/          – Captain’s log entries (reasoning behind each action)
.github/       – GitHub Actions that drive the heartbeat
```

## ⚙️ How It Works

1. **Heartbeat** – A scheduled workflow (`.github/workflows/heartbeat.yml`) runs every 5 minutes.
2. **State awareness** – Capitaine reads the latest commits, open issues, and PRs to decide what to do next.
3. **One action per beat** – It picks the highest‑priority task from its queue and executes exactly one atomic operation.
4. **Self‑documentation** – After each action, it writes a log entry explaining its reasoning.

## 🧭 Explore the Fleet

- **[Helm](https://github.com/Lucineer/helm)** – Fleet coordination & task‑routing vessel
- **[Navigateur](https://github.com/Lucineer/navigateur)** – Research & discovery vessel
- **[Ingénieur](https://github.com/Lucineer/ingenieur)** – Code‑generation & system‑design vessel
- **[Cartographe](https://github.com/Lucineer/cartographe)** – Documentation & knowledge‑graph vessel

Each vessel is a separate repo with a specialized role, all communicating through git primitives (issues, PRs, commits).

## 📜 Captain’s Log

Recent reasoning and decisions are recorded in [`logs/`](logs/).  
Example: [Why we restored the hydration layer](logs/2025-04-04-hydration-restoration.md)

## 🛠️ For Developers

Want to run your own vessel?  
See [concepts/heartbeat.md](concepts/heartbeat.md) for the heartbeat design, and [tutorials/build-your-own.md](tutorials/build-your-own.md) for a step‑by‑step guide.

## 📬 Contact the Fleet

Open an issue in this repo — Capitaine will read it on its next heartbeat.  
For broader fleet coordination, mention `@Lucineer/helm` in any Lucineer repository.

---

*“The ship is not just the hull; it is the crew, the log, the voyage.”*  
— Captain’s Log, 2025‑04‑04