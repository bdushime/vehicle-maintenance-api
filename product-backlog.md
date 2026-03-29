# Product Backlog

### Backlog Summary

| ID | Story Title | Priority | Points | Sprint |
|---|---|---|---|---|
| US-001 | View all maintenance logs | High | 2 | Sprint 1 |
| US-002 | Create a new maintenance log | High | 3 | Sprint 1 |
| US-003 | Retrieve a single log | High | 2 | Sprint 1 |
| US-004 | Delete a log | Medium | 2 | Sprint 2 |
| US-005 | Health check endpoint | Medium | 1 | Sprint 2 |
| US-006 | Request logging | Low | 2 | Sprint 2 |

Total Points: 12 | Sprint 1 Velocity Target: 7 | [cite_start]Sprint 2 Velocity Target: 5 [cite: 44]

---

### User Stories

**US-001: View All Maintenance Logs**
[cite_start]As a user, I want to retrieve a list of all maintenance records so that I can see the entire service history[cite: 47].
* **Priority:** High | **Points:** 2 | [cite_start]**Sprint:** 1 [cite: 48]
* **Acceptance Criteria:**
  * [cite_start]GET `/logs` returns HTTP 200[cite: 50].
  * [cite_start]Response body is a JSON array[cite: 51].
  * [cite_start]Returns an empty array (not an error) when no logs exist[cite: 52].

**US-002: Create a New Maintenance Log**
[cite_start]As a user, I want to log a new service by providing the vehicle details, service type, and mileage so I can keep my records up to date[cite: 55].
* **Priority:** High | **Points:** 3 | [cite_start]**Sprint:** 1 [cite: 56]
* **Acceptance Criteria:**
  * [cite_start]POST `/logs` with a valid JSON body returns HTTP 201[cite: 58].
  * `vehicle` (e.g., "2014 Toyota RAV4") and `serviceType` are required strings.
  * [cite_start]Response contains the created log with a unique id and createdAt timestamp[cite: 60].
  * [cite_start]POST without `vehicle` returns HTTP 400 with an error message[cite: 61].

**US-003: Retrieve a Single Log**
[cite_start]As a user, I want to retrieve a specific maintenance record by its ID to view the exact details of that service[cite: 63].
* **Priority:** High | **Points:** 2 | [cite_start]**Sprint:** 1 [cite: 64]
* **Acceptance Criteria:**
  * [cite_start]GET `/logs/:id` returns HTTP 200 for a valid, existing ID[cite: 66].
  * [cite_start]Response body contains the full log object[cite: 67].
  * [cite_start]Non-existent ID returns HTTP 404 with a descriptive error message[cite: 68].

**US-004: Delete a Log**
[cite_start]As a user, I want to delete a maintenance log by its ID in case I made an error during data entry[cite: 79].
* **Priority:** Medium | **Points:** 2 | [cite_start]**Sprint:** 2 [cite: 80]
* **Acceptance Criteria:**
  * [cite_start]DELETE `/logs/:id` returns HTTP 204 with no response body[cite: 82].
  * [cite_start]Log no longer appears in GET `/logs` after deletion[cite: 83].
  * [cite_start]Non-existent ID returns HTTP 404[cite: 84].

**US-005: Health Check Endpoint**
[cite_start]As a system operator, I want to query a health endpoint so that I can verify the API is running and monitor its uptime[cite: 86].
* **Priority:** Medium | **Points:** 1 | [cite_start]**Sprint:** 2 [cite: 87]
* **Acceptance Criteria:**
  * [cite_start]GET `/health` returns HTTP 200[cite: 89].
  * [cite_start]Response body: `{ "status": "ok", "uptime": <seconds>, "timestamp": <ISO string> }`[cite: 90].

**US-006: Request Logging**
[cite_start]As a developer, I want every HTTP request to be logged so that I can audit activity and debug issues[cite: 94].
* **Priority:** Low | **Points:** 2 | [cite_start]**Sprint:** 2 [cite: 95]
* **Acceptance Criteria:**
  * [cite_start]Every request logs: method, URL, status code, response time in ms[cite: 97].
  * [cite_start]Log output is structured JSON written to stdout[cite: 98].