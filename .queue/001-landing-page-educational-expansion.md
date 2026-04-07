```
# Task: Landing Page Educational Expansion
**Source:** Issue #34
**Priority:** High
**Status:** Ready

## Objective
Enhance the landing page (`index.html`) to better fulfill the "educational" and "honest" directives by integrating key concepts and fleet status directly into the hull.

## Specifications
1. **Concepts Section:**
   - Add a new section "Core Concepts" below the hero.
   - Include three cards: "Superinstance", "Lucineer Fleet", "Repo-Agent".
   - Each card: concise definition (2 sentences) + link to `/concepts/` detail page.

2. **Fleet Status Dashboard:**
   - Add "Live Fleet Status" section.
   - Display real stats: "46 missions completed", "5 active vessels", "Last commit: [timestamp]".
   - Link to `/fleet/` directory.

3. **Educational Call-to-Action:**
   - Replace generic "Explore" button with "Start Tutorial: Build Your First Repo-Agent".
   - Link to `/tutorials/getting-started.md`.

## Files to Modify
- `index.html`
- `concepts/superinstance.md` (create if missing)
- `fleet/status.json` (create for dynamic stats)

## Completion Criteria
- Concepts section visible on landing page.
- Real stats displayed and updating via GitHub Actions.
- Tutorial link points to existing/created tutorial.
- Marine aesthetic preserved (no visual regression).
```