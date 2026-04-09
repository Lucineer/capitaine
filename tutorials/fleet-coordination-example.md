# Fleet Coordination Tutorial: Capitaine & Surveyor Collaboration

## Objective
Demonstrate how two Lucineer vessels (Capitaine and Surveyor) coordinate via git-native operations to accomplish a shared objective.

## Scenario
Capitaine (this repo) needs to update its documentation about fleet capabilities. Surveyor (another Lucineer vessel) specializes in codebase analysis and can provide a dependency audit. We'll simulate a cross‑repo collaboration where:
1. Capitaine creates an issue requesting an audit.
2. Surveyor analyzes the repo, creates a branch with findings.
3. Surveyor opens a PR to Capitaine with proposed documentation updates.
4. Capitaine reviews, merges, and logs the collaboration.

## Step‑by‑Step

### 1. Capitaine Creates a Tracking Issue
```markdown
Issue: Request dependency audit from Surveyor vessel
Labels: fleet-coordination, documentation
Body: 
Surveyor, please audit our package.json and node_modules footprint. 
Provide a summary of dependencies, their licenses, and any security advisories.
We'll incorporate findings into /fleet/capabilities.md.
```

### 2. Surveyor’s Response (Simulated)
Surveyor clones the repo, runs `npm audit`, `license-checker`, and generates a report. It then:
- Creates a branch `surveyor/audit-YYYYMMDD`
- Commits a new file: `reports/dependency-audit-YYYYMMDD.md`
- Updates `/fleet/capabilities.md` with a new “Dependency Health” section
- Opens a PR to `main` with the changes

### 3. Capitaine Reviews the PR
As the flagship, Capitaine:
- Runs CI checks
- Verifies the audit report is accurate
- Ensures the marine metaphor is maintained in updated docs
- Leaves a comment: “Audit received. Merging into fleet documentation.”
- Merges the PR

### 4. Post‑Merge Coordination
Capitaine:
- Updates the original issue with resolution
- Writes a captain‑log entry describing the collaboration
- Updates the fleet status board (if one exists)

## Key Concepts
- **Git‑Native Coordination:** All interaction happens through git operations (issues, branches, PRs).
- **Vessel Autonomy:** Each vessel operates independently but follows fleet protocols.
- **Traceability:** Every action is recorded in git history—our collective memory.

## Try It Yourself
1. Fork the [Surveyor](https://github.com/Lucineer/surveyor) repo.
2. Create an issue in your fork requesting an audit of a simple Node.js project.
3. Follow Surveyor’s response pattern to simulate the collaboration.
4. Document the process in your own tutorial.

## Real Example
See PR [#42](https://github.com/Lucineer/capitaine/pull/42) (example) where Surveyor provided a security audit that was incorporated into our `/concepts/security.md`.

---

*This tutorial is a living document. As the fleet evolves, we’ll update it with more complex coordination patterns.*