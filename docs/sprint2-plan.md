# Sprint 2 Plan

**Sprint Goal:** Complete full CRUD functionality, add a health endpoint, implement request logging, and successfully apply the process improvements identified in the Sprint 1 retrospective.

### Sprint Backlog

| Item | Title | Priority | Points |
|---|---|---|---|
| US-004 | Delete a Log | Medium | 2 |
| US-005 | Health Check Endpoint | Medium | 1 |
| US-006 | Request Logging | Low | 2 |
| **Total** | | | **5** |

*Velocity Target: 5 points*

### Engineering Breakdown
* Implement `DELETE /logs/:id` route.
* Write integration tests for DELETE endpoint.
* Implement `GET /health` endpoint with uptime and timestamp.
* Write integration tests for health endpoint.
* Implement request logging middleware (structured JSON to stdout).
* Register logger in `app.js` before all routes.
* Write Sprint 2 review and final retrospective documents.

### Process Improvements Applied from Sprint 1 Retrospective

| # | Improvement | How Applied |
|---|---|---|
| 1 | Write the sprint plan first | This document (`sprint2-plan.md`) is committed before any Sprint 2 source code is written. |
| 2 | Add request logging from the start | Logger middleware will be implemented to ensure all dev activity is visible in CI. |
| 3 | Add health endpoint early | Health endpoint is prioritized to aid in debugging and uptime verification. |