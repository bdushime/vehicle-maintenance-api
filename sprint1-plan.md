# Sprint 1 Plan

**Sprint Duration:** Week 1 
[cite_start]**Sprint Goal:** Deliver a working read and create API for vehicle maintenance logs, with a CI pipeline that runs tests automatically on every push[cite: 127].

### Sprint Backlog

| Item | Title | Priority | Points |
|---|---|---|---|
| US-001 | View All Logs | High | 2 |
| US-002 | Create a New Log | High | 3 |
| US-003 | Retrieve a Single Log | High | 2 |
| **Total** | | | [cite_start]**7** | [cite: 129]

### Engineering Breakdown
* [cite_start]Initialize Node.js project, install express + jest + supertest[cite: 131].
* [cite_start]Create project folder structure, configure `.gitignore` and `jest.config.js`[cite: 132].
* [cite_start]Set up GitHub Actions CI workflow[cite: 133].
* [cite_start]Implement in-memory data store (`logStore.js`)[cite: 134].
* [cite_start]Implement Express app with GET `/logs`, POST `/logs`, GET `/logs/:id`[cite: 135].
* [cite_start]Write unit tests for `logStore`[cite: 135].
* [cite_start]Write integration tests for all three endpoints[cite: 136].
* [cite_start]Verify CI pipeline triggers and passes on every push[cite: 137].

### Planned Commits
1. [cite_start]`chore: initialize project with package.json, README, and .gitignore` [cite: 141]
2. [cite_start]`chore: add jest configuration and install dependencies` [cite: 141]
3. [cite_start]`chore: add GitHub Actions CI workflow` [cite: 141]
4. [cite_start]`feat: implement in-memory log store` [cite: 141]
5. [cite_start]`test: add unit tests for log store` [cite: 141]
6. [cite_start]`feat: implement Express app and GET /logs endpoint` [cite: 141]
7. [cite_start]`test: add integration test for GET /logs` [cite: 141]
8. [cite_start]`feat: implement POST /logs endpoint with validation` [cite: 141]
9. [cite_start]`test: add integration tests for POST /logs` [cite: 141]
10. [cite_start]`feat: implement GET /logs/:id endpoint` [cite: 141]
11. [cite_start]`test: add integration tests for GET /logs/:id` [cite: 142, 144]
12. [cite_start]`docs: add Sprint 0 artifacts, Sprint 1 review and retrospective` [cite: 143, 145]