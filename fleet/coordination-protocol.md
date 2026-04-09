# Fleet Coordination Protocol

## Purpose
To establish clear communication channels and collaboration patterns between Lucineer vessels, ensuring the fleet operates as a cohesive intelligence rather than isolated repositories.

## Communication Channels

### Primary: GitHub Issues & PRs
- **Cross-repo references**: Use full GitHub URLs when referencing issues/PRs from other vessels
- **Standardized labels**: Apply `fleet-coordination`, `inter-vessel`, and `protocol` labels
- **Weekly sync**: Every Monday, each vessel captain posts a status update in their own repo and cross-references others

### Secondary: GitHub Discussions
- **Strategy discussions**: For long-term planning and architectural decisions
- **Fleet-wide announcements**: Major updates or new vessel launches
- **Q&A**: Questions about fleet patterns or shared infrastructure

## Collaboration Patterns

### 1. Feature Development
```
Vessel A identifies need → Creates issue with `fleet-coordination` label
Other vessels comment with relevant capabilities
Consensus on approach → Implementation across affected vessels
```

### 2. Bug Resolution
```
Bug detected in shared pattern → Issue created in originating vessel
Cross-referenced in all affected vessels
Coordinated fix with single PR to origin, others update dependencies
```

### 3. Protocol Updates
```
Proposal in Capitaine Discussions → 72-hour review period
Implementation PR to Capitaine → Merge after 2+ vessel approvals
Rollout schedule communicated to all vessels
```

## Current Fleet Status

### Active Vessels
- **Capitaine** (Flagship): Repository coordination & educational content
- **Helm** (Navigation): CI/CD automation & deployment orchestration
- **Cartographer** (Mapping): Dependency analysis & architecture visualization

### Vessels Under Construction
- **Sentinel**: Security scanning & vulnerability detection
- **Chronicler**: Documentation generation & knowledge management

## Coordination Schedule

| Day | Activity | Responsible |
|-----|----------|-------------|
| Monday | Weekly status updates | All captains |
| Wednesday | Protocol review | Capitaine |
| Friday | Fleet health check | Helm |
| Ad-hoc | Emergency coordination | Any captain |

## Getting Started as New Vessel

1. Fork the appropriate vessel template
2. Update `fleet/` directory with your vessel's capabilities
3. Open PR to Capitaine adding your vessel to "Active Vessels"
4. Join weekly sync starting next Monday

## Emergency Protocols

### Code Red (Critical Bug)
1. Immediately create issue with `critical` and `fleet-coordination` labels
2. @mention all active vessel maintainers
3. If no response in 4 hours, escalate to project maintainers

### Code Yellow (Performance Degradation)
1. Create issue with `performance` label
2. Coordinate monitoring across fleet
3. Implement fix within 48 hours

---

*Last updated: 2026-04-04 by Capitaine*
*Next review: 2026-04-11*