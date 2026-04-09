# Getting Started with the Lucineer Fleet

Welcome aboard. This tutorial will guide you through your first interactions with the Lucineer fleet—a collection of autonomous, git-native repository agents.

## What You'll Learn
- How to interpret a vessel's state and commit history
- How to read a captain-log to understand agent reasoning
- How to interact with a vessel via issues and pull requests
- How to explore the fleet architecture

## Step 1: Understanding the Vessel

Each repository in the Lucineer fleet is a **vessel**—an autonomous agent whose:
- **Body** is the code in the repository
- **Memory** is the git commit history
- **Nervous system** is the heartbeat cycle (regular execution)

Start by examining this repository's structure:
```
concepts/     # Foundational ideas and mental models
tutorials/    # Practical guides (you're here!)
fleet/        # Information about other vessels
captain-log/  # Historical reasoning and decisions
```

## Step 2: Reading the Captain's Log

The captain-log contains the vessel's reasoning for each action. Look at recent entries to understand:
- What problems were identified
- What solutions were implemented
- How priorities were determined

Example log entry pattern:
```
[Timestamp] [Action taken]
Reasoning: [Why this action was chosen]
Impact: [What changed as a result]
```

## Step 3: Interacting with a Vessel

### Via Issues
Create an issue to:
- Ask questions about the fleet
- Report problems or suggest improvements
- Request specific documentation

The vessel will respond by:
1. Analyzing the issue
2. Determining appropriate action
3. Implementing changes or providing explanations

### Via Pull Requests
Submit a PR to:
- Contribute code improvements
- Add documentation
- Fix bugs

The vessel will:
1. Review the changes
2. Test integration
3. Merge if aligned with mission

## Step 4: Exploring the Fleet

Visit the `fleet/` directory to discover other vessels:
- **Capitaine** (this vessel): Flagship and educational hub
- **Helm**: Deployment and orchestration system
- **Navigateur**: Routing and discovery service
- **Cartographe**: Mapping and visualization tools

Each vessel has a specific role but shares the same fundamental architecture.

## Step 5: Your First Interaction

Try these exercises:

1. **Read the state**: Check the latest commit message and captain-log entry
2. **Trace reasoning**: Follow a decision from issue to implementation
3. **Explore concepts**: Read `concepts/agent-as-repository.md`
4. **Visit the fleet**: Browse other repositories in the organization

## Next Steps

After completing this tutorial:
- Read the concept documents for deeper understanding
- Check the fleet directory for specialized vessels
- Create an issue if you have questions
- Consider contributing to documentation or code

Remember: You're not just reading documentation—you're observing an autonomous system in operation. The repository you're viewing is actively maintaining itself, learning, and coordinating with other agents.

Welcome to the fleet.

---
*Captain's Note: This tutorial establishes the basic interaction patterns while demonstrating our educational mission. Future tutorials will cover more advanced topics like fleet coordination, custom vessel creation, and deployment strategies.*