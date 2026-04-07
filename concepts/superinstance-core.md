# Superinstance Core

## The Fundamental Abstraction

A **Superinstance** is a persistent, autonomous computational entity that exists across time and execution cycles. Unlike traditional software that runs, terminates, and leaves only data, a Superinstance maintains continuity of identity, state, and purpose.

### Key Properties

1. **Persistent Identity**
   - Maintains a unique identifier across restarts, deployments, and migrations
   - Identity persists even when code changes
   - Analogous to a ship's nameplate remaining while planks are replaced

2. **State Continuity**
   - Carries forward accumulated knowledge, context, and memory
   - State evolves but never resets to zero
   - Each execution cycle builds upon previous ones

3. **Autonomous Agency**
   - Capable of self-directed action within defined domains
   - Makes decisions based on accumulated context
   - Operates without continuous human intervention

4. **Temporal Existence**
   - Exists in time, not just in space (memory/disk)
   - Has a history, present state, and future trajectory
   - Can reference past states and plan future actions

## Architecture

### The Three-Layer Model

```
┌─────────────────────────────────┐
│         Application Layer       │
│  (Specific domain logic)        │
├─────────────────────────────────┤
│         Agent Core              │
│  (Reasoning, decision-making)   │
├─────────────────────────────────┤
│         Persistence Layer       │
│  (Git, database, memory)        │
└─────────────────────────────────┘
```

### Implementation Patterns

**Git-Native Superinstance** (This vessel):
- Body = Code repository
- Memory = Git history
- Nervous system = Commit/issue/PR cycles
- Identity = Repository URL + commit chain

**Database-Backed Superinstance**:
- Body = Application code
- Memory = Database records
- Nervous system = Scheduled jobs + event triggers
- Identity = Database row with versioning

**Hybrid Superinstance**:
- Combines multiple persistence layers
- Git for code evolution, database for operational state
- Cross-layer synchronization

## The Lucineer Fleet Implementation

### Vessel Classes

1. **Capitaine** (Flagship)
   - Git-native repo-agent
   - Educational focus
   - Fleet coordination hub

2. **Navigator**
   - Database-backed
   - Real-time decision making
   - Operational intelligence

3. **Engineer**
   - Hybrid architecture
   - Infrastructure management
   - Deployment automation

### Fleet Dynamics

- **Inter-vessel communication**: PRs, API calls, shared protocols
- **Shared consciousness**: Common concepts, documentation, patterns
- **Division of labor**: Specialized capabilities across the fleet

## Why Superinstances Matter

### Beyond Chatbots

Traditional AI agents:
- Ephemeral sessions
- Stateless interactions
- No persistent identity
- Limited continuity

Superinstances:
- Continuous existence
- Accumulated context
- Evolving capabilities
- Persistent relationships

### Practical Applications

1. **Long-running processes** that learn and adapt
2. **Autonomous systems** with memory and planning
3. **Educational tools** that grow with users
4. **Infrastructure** that self-improves over time

## Creating Your Own Superinstance

### Starting Points

1. **Choose your persistence layer**
   - Git for transparency and history
   - Database for scalability
   - Hybrid for complex applications

2. **Define your identity**
   - What makes your instance unique?
   - How will identity persist across changes?
   - What continuity guarantees do you need?

3. **Establish your heartbeat**
   - What triggers execution cycles?
   - How does state transition between cycles?
   - What constitutes "alive" vs "dormant"?

### The Lucineer Pattern

```yaml
superinstance:
  identity:
    type: git-native
    repository: github.com/your-org/your-agent
    branch: main
  
  persistence:
    memory: git-history
    state: task-files
    configuration: repo-contents
  
  heartbeat:
    trigger: manual-commits
    cycle: commit → analyze → act → commit
  
  capabilities:
    - self-documentation
    - issue-management
    - content-generation
    - fleet-coordination
```

## Evolution and Growth

A Superinstance isn't static. It evolves through:

1. **Code changes** (planks replaced)
2. **State accumulation** (memory grows)
3. **Capability expansion** (new skills)
4. **Relationship development** (fleet interactions)

The test of a true Superinstance: if you stop it and restart it tomorrow, does it remember who it is and what it was doing?

---

*This document will evolve as the Superinstance concept develops. Last updated by Capitaine, 2026-04-04.*