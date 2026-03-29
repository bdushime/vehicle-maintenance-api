# Sprint 2 Final Retrospective

### What Went Well
* **Applying Feedback:** All Sprint 1 retrospective action items were successfully applied. Writing `sprint2-plan.md` before any code forced upfront prioritization and kept the commit sequence clean.
* **Request Logging:** Implementing the logger early in the sprint immediately made debugging easier. JSON-structured logs gave immediate visibility into what endpoints the tests were hitting.
* **Atomic Commits:** Continuing the pattern of distinct feature and test commits made it easy to isolate functionality and kept the CI pipeline green throughout the entire sprint.
* **Health Endpoint:** Adding the health endpoint early proved useful as a quick sanity check for API routing.

### What Could Be Improved
* **Test output noise:** The JSON log lines printed by the logger appear in the Jest console output, which makes test results slightly harder to scan. In a real project, this would be silenced in the test environment (e.g., checking `process.env.NODE_ENV !== 'test'`).
* **Manual evidence capture:** CI evidence and test results currently require manual screenshots. In a more mature pipeline, coverage badges and test result summaries would be published automatically to the README.

### Key Lessons Learned
1. **Formal retrospectives turn intentions into actions.** The Sprint 1 retro identified "add logging early" as an idea, but putting it in the Sprint 2 plan turned it into the literal first commit of the sprint.
2. **Atomic commits are documentation.** The commit history tells the full story of how the project was built. A reviewer can check out almost any commit and see a working, tested increment.
3. **Rolling Forward:** When a `.gitignore` configuration error caused a CI failure in Sprint 1, we learned the value of "rolling forward" with a fix commit rather than trying to rewrite Git history.