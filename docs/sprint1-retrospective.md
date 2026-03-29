# Sprint 1 Retrospective

### What Went Well
* **Test-first discipline:** Writing tests immediately after each feature kept the code focused and caught issues early.
* **In-memory store:** Using an in-memory store with a `reset()` function eliminated database setup friction and made test isolation trivial.
* **Catching Config Errors:** The CI pipeline successfully caught a hidden `.gitignore` encoding issue (uploading `node_modules` from Windows to Linux) that local testing missed. We rolled forward and fixed it.

### What Could Be Improved
* **No request logging:** Debugging test failures is difficult without seeing the actual HTTP requests being made in the console.
* **Sprint planning timing:** We need to ensure the Sprint 2 plan is fully written and committed *before* any new feature code is written to avoid context-switching.

### Action Items for Sprint 2
| # | Improvement | Action |
|---|---|---|
| 1 | Write the sprint plan first | Commit `sprint2-plan.md` before writing any Sprint 2 feature code. |
| 2 | Add request logging | Implement a logger middleware early in Sprint 2 to aid debugging. |
| 3 | Add health endpoint early | Implement `GET /health` to make API verification easier. |