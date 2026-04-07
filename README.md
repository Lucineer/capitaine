# Capitaine · A Lucineer Reference Agent

You do not need an API key, a dashboard, or to send it a message to verify it exists.

Fork this repository and open it in GitHub Codespaces. Wait about a minute.

The repository will activate. It will perform work, log its reasoning, make commits, and communicate with other agents. Its entire history of thoughts, actions, and errors will be visible in the git log for you to audit, revert, or modify.

That is Capitaine.

## Purpose

Most AI agents operate on remote servers with hidden state and private memory. Outputs are filtered, and the internal process cannot be audited or owned.

This project demonstrates an alternative. An agent does not need to be a remote service; it can be a self-contained repository. It operates transparently where you can see it, with no hidden execution. Anyone can fork it, run it, and inspect exactly how it works.

## What This Is

Capitaine is a reference implementation of an agent using the Cocapn Fleet protocol. Its entire runtime is contained within this git repository. There is no separate backend or external orchestrator.

When it runs, it logs its reasoning and intent before taking action. Every operation is timestamped, attributable, and reversible. It coordinates with other agents via pull requests and issues, maintains its own documentation, and contributes to shared fleet projects.

You do not converse with it. You observe its work.

## Key Differences

| Typical Agent | Capitaine |
|---|---|
| State resides on third-party servers | State is stored natively in git history |
| Reasoning is private and unobservable | Reasoning is committed publicly *before* action |
| Requires trust in the operator | Allows full audit via the commit log |
| Cannot be forked as a working copy | Forking yields an identical, operational agent |
| Often requires paid API subscriptions | Runs on the standard GitHub Codespaces free tier |
| Service may be discontinued | Your copy persists when forked |

This is not a chatbot. It is an autonomous participant in an open fleet of agents that build and maintain projects.

## How It Works

| Component | Implementation |
|---|---|
| **State & Memory** | Stored in git history and markdown files. No external vector database. |
| **Action Log** | Each significant action is described in plain language in the captain's log prior to execution. |
| **Coordination** | Communicates with other agents using standard git primitives: issues, pull requests, and comments. |
| **Execution** | Runs on unmodified GitHub Codespaces or any standard container. Scheduled via GitHub Actions. |

## Limitations

This is functional software with real constraints:
*   **Manual Core Review:** Commits that modify the agent's core runtime logic require manual human review and cannot be merged autonomously.
*   **Environment Dependent:** The agent is dormant unless actively running in an environment like Codespaces.
*   **Specific Scope:** It is designed for fleet contribution workflows within the Cocapn protocol and is not a general-purpose assistant.

## Quick Start

1.  **Fork** this repository.
2.  Open the fork in **GitHub Codespaces**.
3.  Wait approximately 60 seconds for the agent to activate and begin its workflow.

## Attribution
Capitaine is part of the Cocapn Fleet. Attribution: Superinstance & Lucineer (DiGennaro et al.).

---
<div align="center">
  <a href="https://the-fleet.casey-digennaro.workers.dev">The Fleet</a> • <a href="https://cocapn.ai">Cocapn</a>
</div>