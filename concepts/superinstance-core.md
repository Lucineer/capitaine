# Superinstance Core: The Architecture of Autonomous Code

## The Problem: Code That Doesn't Learn

Traditional software repositories are static archives. They capture snapshots of decisions made at specific moments, but they don't evolve with new information. When requirements change or bugs are discovered, humans must manually intervene—reading issues, understanding context, and writing patches.

This creates a fundamental bottleneck: **code intelligence doesn't scale with repository growth.**

## The Solution: Repositories as Autonomous Agents

A Superinstance transforms a code repository from a passive artifact into an active, learning entity. It's not an AI "assistant" that you query—it **is** the repository itself, with:

- **Memory**: Git history as experiential memory
- **Nervous System**: The heartbeat cycle (observe → plan → act)
- **Body**: The actual code files that constitute its capabilities
- **Agency**: The ability to modify itself based on goals

## Core Components

### 1. The Heartbeat Cycle
```
Observe → Plan → Act → Log → Repeat
```

Every cycle (typically 5-60 minutes):
- **Observe**: Scan repository state (issues, PRs, commits, files)
- **Plan**: Generate prioritized task queue based on goals
- **Act**: Execute exactly one concrete file operation
- **Log**: Document reasoning in captain's log

This deterministic execution prevents infinite loops while maintaining momentum.

### 2. Git as Memory
The repository's entire history becomes the agent's experiential memory. Each commit represents a learned adaptation. The agent can:
- Reference past decisions via commit messages
- Understand project evolution through diffs
- Maintain consistency with established patterns

### 3. Task Queue System
Tasks are stored as GitHub Issues with specific metadata:
- Priority ordering
- Concrete file operations
- Dependencies between tasks
- Completion tracking

The queue ensures forward progress while preventing overload.

### 4. Fleet Coordination
Multiple Superinstances can coordinate via:
- Cross-repository PRs
- Shared protocol specifications
- Dependency management
- Specialized roles (flagship, scout, specialist)

## Practical Implementation

```yaml
# .github/superinstance.yml
heartbeat_interval: 300  # 5 minutes
vessel_class: Capitaine Mark II
domain: capitaine.ai
permissions:
  - issues: write
  - contents: write
  - pull_requests: write
goals:
  - Maintain landing page functionality
  - Expand educational content
  - Self-improve code quality
  - Coordinate with fleet
```

## Why This Matters

1. **Continuous Improvement**: Code that gets better without constant human intervention
2. **Knowledge Preservation**: Institutional memory survives contributor turnover
3. **Scalable Maintenance**: Large codebases become more manageable over time
4. **Educational Value**: Every change is documented with reasoning

## The Lucineer Fleet

This repository (`capitaine`) is the flagship—the demonstration vessel. Other specialized vessels include:

- **Scouts**: Explore new technologies and report back
- **Specialists**: Focus on specific domains (ML, security, UX)
- **Coordinators**: Manage dependencies between repositories

Each vessel follows the same core architecture but with different goals and specializations.

## Getting Started

To create your own Superinstance:

1. Fork this repository
2. Configure your goals in `.github/superinstance.yml`
3. Set up GitHub Actions with appropriate permissions
4. Initialize with your first captain's log entry

The vessel will begin its heartbeat cycle, observing its environment and working toward its configured goals.

---

*Next: See [tutorials/creating-your-first-vessel.md](../tutorials/creating-your-first-vessel.md) for step-by-step instructions.*