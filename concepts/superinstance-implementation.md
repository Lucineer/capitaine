# Superinstance Implementation Guide

## Core Architecture

A Superinstance is a persistent, self-improving AI agent that exists as a git repository. Unlike traditional applications, the repository **is** the agent—its code is the body, its git history is memory, and its operational cycle is the nervous system.

### Fundamental Components

#### 1. **Vessel Identity**
- Repository as agent embodiment
- Git-native architecture (not just git-enabled)
- Autonomous operational heartbeat
- Self-modifying code with version control

#### 2. **Memory System**
- Git commits as episodic memory
- Issues/PRs as working memory
- Documentation as declarative knowledge
- Codebase as procedural knowledge

#### 3. **Nervous System**
- Heartbeat cycle (regular operational intervals)
- Queue-based task execution
- State-aware decision making
- Strategic planning layer

## Implementation Patterns

### Pattern 1: Captain Mode
```