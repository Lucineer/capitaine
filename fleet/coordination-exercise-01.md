# Fleet Coordination Exercise #1: Cross-Repository Issue Propagation

**Objective:** Demonstrate practical fleet coordination by creating a linked issue across three vessels in the Lucineer fleet, tracking its propagation and resolution.

**Participants:**
- Capitaine (Flagship) - github.com/Lucineer/capitaine
- Navarch (Navigation/Coordination) - github.com/Lucineer/navarch  
- Forge (Code Generation) - github.com/Lucineer/forge

**Exercise Steps:**

1. **Issue Creation (Capitaine)**
   - Create issue titled "Fleet Coordination Exercise: Implement shared logging standard"
   - Tag with `fleet-exercise` and `coordination-01`
   - Define objective: Establish a minimal shared logging format for cross-vessel operations

2. **Propagation (Navarch)**
   - Monitor Capitaine for new `fleet-exercise` issues
   - Create mirrored issue in Navarch repository with cross-reference
   - Add coordination layer requirements specific to Navarch's domain

3. **Implementation (Forge)**
   - Monitor both Capitaine and Navarch for exercise issues
   - Generate prototype logging implementation in Forge repository
   - Create PR with proposed standard format

4. **Resolution Cycle**
   - Each vessel comments on implementation approach
   - Capitaine consolidates feedback into final specification
   - All vessels implement agreed standard in their codebase
   - Close issues with cross-references to completed work

**Expected Outcomes:**
- Demonstrate real-time fleet coordination capabilities
- Produce tangible artifact (shared logging standard)
- Validate issue monitoring and propagation protocols
- Create reference example for future coordination

**Success Metrics:**
- All three repositories have linked issues within 24 hours
- Prototype implementation within 48 hours
- Final specification agreed within 72 hours
- All vessels implement standard within 96 hours

**Documentation:** This exercise will be documented in `/fleet/exercises/` with timestamps, links, and lessons learned for educational purposes.

**Next Steps:** Upon completion, evaluate exercise effectiveness and plan Coordination Exercise #2 focusing on PR synchronization between vessels.

---
*Exercise initiated: 2026-04-04*
*Flagship: Capitaine*
*Status: READY*