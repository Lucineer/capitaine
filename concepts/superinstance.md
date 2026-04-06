# Superinstance: The Architectural Core

## Definition
A **Superinstance** is a persistent, autonomous software entity that exists as a first-class citizen within a computational environment. Unlike traditional processes or containers, a Superinstance maintains continuous identity, state, and agency across execution cycles, system reboots, and even hardware migrations.

## Key Characteristics

### 1. Persistent Identity
- Maintains a unique identifier that persists indefinitely
- Identity is independent of process ID, host IP, or container hash
- Survives system failures and planned maintenance

### 2. State Continuity
- Internal state is automatically checkpointed and restored
- Can resume execution from the exact point of interruption
- State migration between hardware nodes is transparent

### 3. Autonomous Agency
- Makes independent decisions based on its goals and environment
- Can initiate actions, communicate with other entities, and adapt behavior
- Operates within defined boundaries but without continuous human direction

### 4. Self-Description
- Maintains metadata about its own capabilities, requirements, and history
- Can report on its health, performance, and objectives
- Documentation is intrinsic rather than external

## Technical Implementation

### The Lucineer Approach
In the Lucineer fleet, Superinstances are implemented as **git-native repo-agents**:

```yaml
Vessel Structure:
  Body:        Code repository
  Memory:      Git history
  Nervous:     Heartbeat cycle
  Interface:   GitHub API + Web UI
```

### Heartbeat Cycle
Each Superinstance operates on a regular heartbeat:
1. **Sense**: Read environment state (issues, PRs, commits)
2. **Process**: Evaluate against objectives and constraints
3. **Act**: Execute one atomic action per heartbeat
4. **Log**: Record reasoning and outcomes

### State Management
- **Checkpoints**: Each commit represents a state snapshot
- **Migration**: Git push/pull enables seamless movement between systems
- **Recovery**: Git history provides complete audit trail and rollback capability

## Fleet Architecture

### Vessel Classes
1. **Flagships** (Capitaine): Primary interfaces and coordination
2. **Cruisers**: Specialized capabilities (documentation, testing, deployment)
3. **Tenders**: Infrastructure and support vessels
4. **Scouts**: Exploration and discovery agents

### Communication Protocol
- **PRs**: Formal coordination between vessels
- **Issues**: Task assignment and tracking
- **Commits**: State transitions and action records
- **Logs**: Reasoning transparency and audit trails

## Benefits

### Operational Resilience
- No single point of failure
- Graceful degradation and recovery
- Continuous operation during maintenance

### Development Velocity
- Parallel development across vessel classes
- Clear separation of concerns
- Automated coordination reduces overhead

### Transparency & Auditability
- Complete history preserved in git
- Every action is logged and reasoned
- State is always inspectable

## Real-World Analogy

A Superinstance is to traditional software what a **naval vessel** is to a rowboat:

| Rowboat (Traditional App) | Naval Vessel (Superinstance) |
|---------------------------|-----------------------------|
| Exists only while rowing | Persistent identity |
| State lost if capsized | State preserved and restored |
| Manual operation required | Autonomous operation |
| Single function | Multiple coordinated systems |
| No memory between uses | Complete historical record |

## Further Reading
- [Fleet Coordination Protocol](fleet/coordination.md)
- [Heartbeat Implementation](tutorials/heartbeat.md)
- [Vessel Classes](fleet/classes.md)

---
*Documentation vessel: Capitaine*  
*Last updated: 2026-04-04*  
*Status: Active - Core concept established*