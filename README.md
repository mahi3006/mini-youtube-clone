# 📺 MiniTube - A YouTube-Inspired Video App

This is a frontend-only **Mini YouTube Clone** built using **React JS** and styled with **Tailwind CSS** as part of Week 2’s assignment. The project demonstrates reusable components, React hooks, `react-router-dom`, and sessionStorage for data persistence.

---

## 🔧 Features Implemented

### ✅ Core Features

- **Navbar**
  - App Title: `MiniTube`
  - Dummy search bar
  - "Watch Later" button with real-time count (based on sessionStorage)

- **Home Page (`/`)**
  - Grid layout of video cards
  - Each card includes:
    - Thumbnail image
    - Video title
    - Channel name
    - View count and time posted
    - ❤️ Like Button (toggles like state)
    - ➕ Add to Watch Later (saves video to Watch Later page)

- **Watch Later Page (`/watch-later`)**
  - Displays only videos marked “Watch Later”
  - Reuses the same video card layout
  - ❌ Button to remove videos from the list

### ⚛️ React Concepts Used

- Functional components only
- `useState` for:
  - Liking videos
  - Tracking Watch Later list
- `useEffect` used for optional timer (if added)
- `react-router-dom` for routing (Home & Watch Later)
- `sessionStorage` to persist likes and saved videos

---

## 💾 sessionStorage Usage

- Likes and Watch Later data are stored using `sessionStorage`, so data persists **within a single session**.
- State resets after full browser reload — as expected (no backend).

---

## 🧪 Bonus Features (if any)

> *(Include or delete the ones you added)*

- ⏱ Timer tracking “Time spent on the app”
- 🌓 Optional dark/light mode toggle
- 🧭 Sidebar with dummy links (Home, Shorts...)
- 🧠 Feedback messages (e.g., “Added to Watch Later ✅”)
- 🎨 Hover animations on video cards
- 📱 Responsive layout via Tailwind CSS utility classes

---

## 📁 Folder Structure

```plaintext
src/
├── components/
│   ├── Navbar.jsx
│   ├── VideoCard.jsx
│   └── Timer.jsx
├── pages/
│   ├── Home.jsx
│   └── WatchLater.jsx
├── data/
│   └── dummyVideos.js
├── App.jsx
└── index.js
