# Sprint 2 Review

**Sprint Goal:** Complete full CRUD functionality, add a health endpoint, implement request logging, and successfully apply the process improvements identified in the Sprint 1 retrospective.

### Delivered Items
| Story | Title | Points | Status |
|---|---|---|---|
| US-004 | Delete a Log | 2 | DONE |
| US-005 | Health Check Endpoint | 1 | DONE |
| US-006 | Request Logging | 2 | DONE |
| **Total** | | **5** | |

*Velocity: 5 points committed, 5 points completed.*

### Acceptance Criteria Verification
* **US-004:** `DELETE /logs/:id` returns HTTP 204. Log is removed from the store. Returns 404 for non-existent IDs.
* **US-005:** `GET /health` returns HTTP 200 with status, uptime, and timestamp.
* **US-006:** Logger middleware intercepts all requests and logs method, URL, status code, and response time in milliseconds to stdout as structured JSON.

### Test Results & CI Pipeline
* Test suites: 3 passed (unit, integration/logs, integration/health).
* Tests passing: 13 passed, 0 failed.
* CI Pipeline successfully passed on every commit for Sprint 2.
* Request logs are visible in the CI output and local test console.

### What Was Not Delivered
Nothing. All Sprint 2 backlog items were completed, meaning the entire product backlog (US-001 through US-006) has been successfully delivered.