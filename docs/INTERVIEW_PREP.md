# Interview notes: Little Grove

## 30-second answer
“I made Little Grove, a focus timer that grows a virtual garden. You choose a 25, 45, or 60 minute session. When it finishes, you choose and name a plant. React manages the page and timer; an Express API saves the garden to a JSON file so it remains after a refresh.”

## Demo path
1. Explain the goal: make focused work feel rewarding.
2. Choose a timer and start/pause it.
3. For a short live demo, temporarily change the selected timer from 25 minutes to 1 minute in the code.
4. Finish and choose a plant type and name.
5. Show the garden, stats, refresh persistence, and remove-on-click interaction.

## Likely questions

**Why this project?**
“I wanted something visual and easy to demonstrate, but with a complete data flow from the browser to a server and back.”

**What does React do here?**
“The timer value, selected plant, garden, and open popup can change. React stores those as state and updates the page when the state changes.”

**How is the garden saved?**
“The browser sends a POST request to the Express server. The server checks the plant name, type, and focus time, then saves the updated list to a JSON file. On page load, the browser requests the saved list.”

**What is an API?**
“It’s how the browser communicates with the server. This project has a GET route to read plants, a POST route to add one, and a DELETE route to remove one.”

**Why not use a database?**
“For a small local demo, a JSON file is easy to read and needs no extra setup. If multiple people used it or the data mattered, I’d use a real database.”

**What happens if I close the tab during a timer?**
“The timer currently runs in the page, so it pauses when the page is closed. A production version could save the session start time on the server and calculate the remaining time when the user comes back.”

**What would you add next?**
“I’d add automated tests, then accounts and a database so each person gets their own garden.”

## Keep the story honest

The app does not block distracting websites, sync timers between devices, or have user accounts. It is a small focus timer and saved garden. Explain the parts you built and describe those as future improvements.
