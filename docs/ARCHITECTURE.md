# Little Grove architecture

```text
React page
   │ GET /api/plants
   │ POST /api/plants
   │ DELETE /api/plants/:id
   ▼
Node.js + Express
   │ read/write
   ▼
data/garden.json
```

React owns temporary screen state: timer value, running/paused state, plant form, and the garden displayed on screen. Express owns validation and persistence. The JSON file stores the plant name, type, date planted, and focus session length.

For a multi-user product, add authentication, store a user ID on each plant, and move persistence to a database. For timers that survive browser closure, store the session start and target end times on the server.
