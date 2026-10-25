# Little Grove 🌱
https://github.com/aditifadnavis/littlegroove/blob/main/Screenshot%202026-10-25%20120400.png
A cozy focus timer that turns completed work sessions into a growing virtual garden. Pick a timer, focus on one task, then choose a plant to add to your collection. Your garden is saved when you refresh.

## Run locally

Install Node.js 20 or newer. In this project folder run:

```bash
npm install 
npm run dev
```

Open http://localhost:3001. To work on the frontend with hot reload, open a second terminal and run `npm run dev:web`; open http://localhost:5173. Vite forwards `/api` requests to the Node server.

To make the production frontend, run `npm run build`. Then `npm start` serves the built app and API at port 3001.

## The simple flow

```text
Choose focus time → finish timer → pick a plant → garden is saved
```

The React page keeps the timer and modal state. When you plant something, the page sends it to the Node/Express API. The server validates the plant and writes it to `data/garden.json`. When the page opens again, it asks the API for the saved plants.

## What this demonstrates

- HTML page structure
- CSS layout, animation, and mobile styling
- JavaScript state and timer behavior
- React components and state updates
- Node.js and Express routes
- Basic input validation and JSON file persistence

## A quick demo

1. Choose 25 minutes and start the timer. (For a quick demo, set the timer value in the React state to 1 minute.)
2. Pause and resume to show the timer controls.
3. Complete a session, name a plant, and choose its type.
4. Show it appear in the garden and the stats update.
5. Refresh the page to show the plant remains saved. Click a plant to remove it.

## Interview explanation

“I built Little Grove, a focus timer that rewards a completed session with a plant in a virtual garden. The frontend is React, and a small Express server saves the plants to a JSON file. It gave me a way to practice timer state, forms, API requests, validation, and persistence in one small app.”

## Project limits

This is a learning demo. There are no accounts, cloud sync, or database. The timer runs in the browser tab, so closing the page stops it. For multiple users, I’d add accounts and a database. For reliable timers across tabs/devices, I’d store session start times on the server.
