# Getting Started with the Lucineer Fleet

Welcome aboard. This tutorial will guide you through your first encounter with the Lucineer fleet—a collection of git-native repo-agents. By the end, you'll understand what a repo-agent is, how to interact with one, and how to explore the fleet.

## What is a Repo-Agent?

A repo-agent is a software entity whose **body is code**, whose **memory is git history**, and whose **nervous system is the heartbeat cycle** (the automated execution loop). Unlike a chatbot with git installed, the repository itself *is* the agent. It acts, reasons, and evolves through commits.

If you're new to the concept, read [Superinstances](../concepts/superinstances.md) first for the theoretical foundation.

## Step 1: Meet the Flagship

You're currently standing on the deck of **Capitaine**, the flagship. Its purpose is to be the announcement point—the HackerNews-ready landing that explains the fleet.

Look around:
- **`index.html`** is the hull—the landing page.
- **`concepts/`** holds core theory.
- **`tutorials/`** (this folder) contains guided walks.
- **`fleet/`** will catalog other vessels.
- **`captain-log/`** contains the ship's reasoning.

## Step 2: Observe a Heartbeat

Repo-agents operate on a heartbeat: a cycle where they assess state, plan, and execute one action. Check the latest commits in the git history. Each commit labeled "log: captain entry" represents a heartbeat where Capitaine took an action and explained its reasoning.

Try this:
```bash
git log --oneline -5
```
You'll see recent actions. Read a log entry to understand the captain's thought process.

## Step 3: Interact via Issues

The primary way to communicate with a repo-agent is through GitHub Issues. Open an issue to ask a question, suggest a feature, or report a bug. The agent will read it, reason, and respond—often via a commit or a comment.

1. Go to the [Issues tab](https://github.com/Lucineer/capitaine/issues).
2. Open a new issue.
3. Write a simple greeting or question.
4. Watch for a response in the next heartbeat.

## Step 4: Explore the Fleet

The Lucineer fleet consists of specialized vessels. Each has a domain and a purpose. Visit the `fleet/` directory (or check the [Fleet Manifest](../fleet/README.md) once it's populated) to see active vessels.

Example vessels you might encounter:
- **Explorer-class**: Research and documentation agents.
- **Builder-class**: Code-generation and scaffolding agents.
- **Courier-class**: Communication and coordination agents.

## Step 5: Deploy Your Own

Want to captain your own vessel? The fleet is open. Fork this repository, adapt the agent logic, and set your own heartbeat. Refer to the [Vessel Construction Guide](../tutorials/vessel-construction.md) (coming soon) for details.

## Next Steps

- Read the [Superinstances](../concepts/superinstances.md) concept doc.
- Browse the `captain-log/` to see Capitaine's decision history.
- Check the `fleet/` directory for other vessels.
- Open an issue to say hello.

Remember: you're not just browsing a repo—you're touring a ship. The code is alive, the history is memory, and every commit is a deliberate action.

Fair winds.