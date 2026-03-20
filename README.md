# 🗓️ Event Horizon: Intelligent Scheduling Dashboard

A glamorous, high-performance scheduling analytical tool designed for modern meeting platforms. This system evaluates event overlaps and optimizes resource allocation using advanced sweep-line algorithms, wrapped in a glassmorphic, financial-grade dashboard.

---

## 🎯 Project Objective
The core goal of **Event Horizon** is to solve the complex "Interval Scheduling" problem. It provides users with two critical insights:
1.  **Personal Feasibility**: Determining if a single individual can attend a specific set of events without time-conflicts.
2.  **Resource Optimization**: Calculating the absolute minimum number of physical rooms required to host a series of concurrent meetings, ensuring zero wasted overhead.

---

## 🏗️ Methodology & Tech Stack
The project is built with a focus on **Minimum Time Complexity** and **Maximum Aesthetic Appeal**:

* **Frontend**: HTML5 & CSS3 with a "Dark Mode" financial dashboard aesthetic. Utilizes CSS Grid and Flexbox for a responsive, high-end SaaS feel.
* **Logic Engine**: Pure JavaScript (ES6+) implementing $O(n \log n)$ sorting and two-pointer traversal.
* **Design Inspiration**: Influenced by high-tier financial reporting software (Futrli, Bold BI) featuring vibrant KPI cards and clean Inter typography.

---

## 🧠 Algorithmic Logic: The "Sweep-Line" Approach

To achieve optimal performance, we treat time not as blocks, but as a series of chronological triggers.

### 1. Conflict Detection (`can_attend_all`)
* **Strategy**: Sort events by start time.
* **Logic**: Iterate through the sorted list. If any event starts before the previous one ends ($Start_{i} < End_{i-1}$), a conflict is flagged.
* **Complexity**: $O(n \log n)$ due to sorting; $O(n)$ for the single-pass check.

### 2. Room Requirement (`min_rooms_required`)
* **Strategy**: Two-Pointer / Sweep-Line.
* **Logic**: 
    1. Separate and sort all **Start Times** and **End Times** independently.
    2. Use two pointers to "walk" through the timeline.
    3. If a Start occurs before the earliest End, increment the "Active Rooms" counter.
    4. If an End occurs, decrement the counter.
* **Complexity**: $O(n \log n)$ performance, making it suitable for massive enterprise datasets.



---

## 🔮 Future-Proofing: Specific Room Assignment
To evolve from a "Count" to a "Label" system (e.g., assigning **"Room Alpha"** or **"Room Bravo"**), the following architectural changes are planned:

> **The Priority Queue Implementation**
> * Store available room names in a "Free Pool."
> * Use a **Min-Heap** to track the end times of currently occupied rooms.
> * When a new event starts, check if the heap's root (the room finishing soonest) is free.
> * If free, reassign that specific room name to the new event. If not, pull a new name from the Free Pool.

---

## ✅ Working Results
* **High Precision**: Successfully handles adjacent events (e.g., 10:00-11:00 and 11:00-12:00) as non-overlapping.
* **Real-time Analytics**: KPI cards update instantly upon "Computation," providing immediate feedback on Hit/Miss ratios.
* **Scalability**: The algorithmic choice ensures that the UI remains lag-free even when processing hundreds of concurrent meeting tuples.

---

## 🚀 Future Scope
* **Buffer Management**: Adding "clean-up" intervals between meetings (e.g., 5-minute gaps).
* **Priority Overrides**: Allowing "VIP" meetings to displace lower-priority events when room capacity is reached.
* **Calendar Sync**: Integration with iCal/Google Calendar APIs to pull live event data into the dashboard.
* **Drag-and-Drop Visualization**: An interactive Gantt-chart style interface for manual room adjustments.
