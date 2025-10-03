# Countdown_timer

7-Day Countdown — Beginner-Friendly

A tiny, clean countdown timer built with HTML + CSS + vanilla JavaScript.
It’s perfect for a junior portfolio: small enough to read in minutes, but with just enough structure to show you understand DOM work, date math, and simple state updates.

Features：


1) Three modes (switch by editing one line in script.js)

	- duration: countdown from now for a fixed duration (e.g., 7 days) and auto-reset when it reaches 0
	
	- fixed: countdown to a specific date/time (e.g., 2025-11-01 00:00:00)
	
	- next-month-1st: always targets the 1st day of next month at 00:00
	
2) Readable UI with accessible text and large digits

3) No frameworks — easy to review in interviews and friendly to GitHub Pages


Tech Stack:

1) HTML5 for structure (index.html)

2) Modern CSS for layout/typography (style.css)

3) ES6+ JavaScript for time logic + DOM updates (script.js)


How It Works (for reviewers)

- On load, script.js calculates a targetTime based on MODE.

- Every 1000 ms, render():

	- Computes the distance between now and targetTime

	- Converts it to days/hours/minutes/seconds

	- Writes values into the DOM (#days, #hours, #minutes, #seconds)

- When the timer reaches 0:

	- In duration mode it rolls forward to the next window (e.g., another 7 days) so the timer never looks “dead”.

	- In fixed or next-month-1st, it recalculates the next appropriate target if you choose (implementation provided in the code via getNextTarget()).

Key helpers:

pad(n) → formats numbers to 00

getNextTarget() → returns the next target based on the selected mode
