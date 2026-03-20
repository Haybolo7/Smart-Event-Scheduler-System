/**
 * Main Processing Function
 */
function processEvents() {
    const rawInput = document.getElementById('eventInput').value;
    const events = parseInput(rawInput);

    if (events.length === 0) {
        alert("Please enter valid events in the format [(9, 10), (10, 11)]");
        return;
    }

    // Algorithm 1: Overlap Check
    const canAttend = canAttendAll(events);
    
    // Algorithm 2: Min Rooms Calculation
    const rooms = minRoomsRequired(events);

    updateUI(canAttend, rooms, events);
}

/**
 * Parses string like "[(9, 10), (10, 11)]" into [[9, 10], [10, 11]]
 */
function parseInput(str) {
    const regex = /\((\d+),\s*(\d+)\)/g;
    let match;
    const result = [];
    while ((match = regex.exec(str)) !== null) {
        result.push([parseInt(match[1]), parseInt(match[2])]);
    }
    return result;
}

/**
 * Logic: Person can attend all if no events overlap.
 * Complexity: O(n log n) due to sorting.
 */
function canAttendAll(events) {
    if (events.length <= 1) return true;
    
    // Sort by start time
    const sorted = [...events].sort((a, b) => a[0] - b[0]);

    for (let i = 1; i < sorted.length; i++) {
        // If current start < previous end, there is an overlap
        if (sorted[i][0] < sorted[i - 1][1]) {
            return false;
        }
    }
    return true;
}

/**
 * Logic: Chronologically track starts and ends to find peak room usage.
 * Complexity: O(n log n) due to sorting.
 */
function minRoomsRequired(events) {
    const starts = events.map(e => e[0]).sort((a, b) => a - b);
    const ends = events.map(e => e[1]).sort((a, b) => a - b);

    let rooms = 0;
    let maxRooms = 0;
    let s = 0, e = 0;

    while (s < events.length) {
        if (starts[s] < ends[e]) {
            // New meeting starts before the oldest meeting ends
            rooms++;
            s++;
        } else {
            // A meeting ended (or ends at the same time a new one starts)
            rooms--;
            e++;
        }
        maxRooms = Math.max(maxRooms, rooms);
    }
    return maxRooms;
}

/**
 * UI Manipulation
 */
function updateUI(canAttend, rooms, events) {
    // Update KPI Text
    const attendEl = document.getElementById('attendResult');
    const barEl = document.getElementById('attendBar');
    
    attendEl.innerText = canAttend ? "YES" : "NO";
    attendEl.style.color = canAttend ? "#10b981" : "#ef4444";
    
    barEl.style.width = "100%";
    barEl.style.backgroundColor = canAttend ? "#10b981" : "#ef4444";

    document.getElementById('roomsResult').innerText = rooms;

    // Build Timeline View
    const timeline = document.getElementById('timeline');
    timeline.innerHTML = '';
    events.forEach((ev, i) => {
        const div = document.createElement('div');
        div.className = 'timeline-item';
        div.innerText = `Event ${i+1}: ${ev[0]}:00 - ${ev[1]}:00`;
        timeline.appendChild(div);
    });
}