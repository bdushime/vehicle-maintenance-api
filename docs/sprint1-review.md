# Sprint 1 Review

**Sprint Goal:** Deliver a working read and create API for vehicle maintenance logs, with a CI pipeline that runs tests automatically on every push.

### Delivered Items
| Story | Title | Points | Status |
|---|---|---|---|
| US-001 | View All Logs | 2 | DONE |
| US-002 | Create a New Log | 3 | DONE |
| US-003 | Retrieve a Single Log | 2 | DONE |
| **Total** | | **7** | |

*Velocity: 7 points committed, 7 points completed.*

### Acceptance Criteria Verification
* **US-001:** `GET /logs` returns HTTP 200 and a JSON array (empty if no logs exist).
* **US-002:** `POST /logs` returns HTTP 201. Requires `vehicle` and `serviceType`. Rejects invalid requests with HTTP 400.
* **US-003:** `GET /logs/:id` returns HTTP 200 with the log object, or HTTP 404 if the ID does not exist.

### Test Results & CI Pipeline
* Test suites: 2 passed (unit, integration).
* Tests passing: 100%.
* Pipeline triggers automatically on every push to the `master` branch.
* *Note: Pipeline successfully caught a Windows/Linux `.gitignore` configuration error early in the sprint, which was subsequently fixed, demonstrating the value of CI.*

### Demo / Verification
The following endpoints are live and verified via Supertest:
* `GET /logs` -> `200 []`
* `POST /logs` -> `201 { id, vehicle, serviceType, ... }`
* `GET /logs/:id` -> `200 { log }` OR `404 { error }`