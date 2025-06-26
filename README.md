# 🎥 Mini YouTube Clone

This is a **frontend-only YouTube-inspired video app** built using **React JS** and **Tailwind CSS**.

It demonstrates key React concepts like functional components, props, `useState`, `useEffect`, `react-router-dom` for routing, and sessionStorage for persistence — all without a backend.

---

## 🚀 Features Implemented

### ✅ Core Features
- **Navbar**:
  - Site logo/title
  - Dummy search input
  - "Watch Later" button showing count
  - 🌗 Dark/Light mode toggle using Tailwind

- **Home Page (Video Feed)**:
  - Grid layout of video cards
  - Each card shows:
    - Thumbnail (placeholder)
    - Title, Channel, Views, Time
    - ❤️ Like button (session-persisted)
    - ➕ Watch Later button (session-persisted)

- **Watch Later Page**:
  - Displays only the saved "Watch Later" videos
  - Option to remove from the list

- **Timer**:
  - Live timer that shows time spent on the site using `useEffect` + `setInterval`

- **Dark Mode**:
  - Full-site toggle with Tailwind’s `dark:` classes

---

## 🧠 React Concepts Used

- ✅ Functional components only
- ✅ Props to pass data into components
- ✅ `useState` for:
  - Liking videos
  - Watch Later tracking
  - Dark/Light mode toggle
- ✅ `useEffect` with `setInterval` for:
  - Live timer
  - Persisting likes/watch later to `sessionStorage`
- ✅ `react-router-dom` for navigation (`Home` / `Watch Later`)
- ✅ `sessionStorage` to simulate backend-like persistence

---

## 💅 Styling

- Tailwind CSS for styling, layout, responsiveness, and theming
- Dark/Light mode with Tailwind’s `dark:` utility classes
- Button hover effects and card layout

---

## 📂 Folder Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── VideoCard.jsx
│   ├── DarkModeToggle.jsx
│   └── Timer.jsx
├── pages/
│   ├── Home.jsx
│   └── WatchLater.jsx
├── data/
│   └── dummyVideos.js
├── App.jsx
└── index.js
```

---

## 📦 Dummy Data

Dummy data is stored in `dummyVideos.js`. Each video has the following structure:

```js
{
  id: 1,
  title: "React Hooks Explained",
  channel: "CodeWithYou",
  views: "1.2M",
  time: "2 days ago",
  thumbnail: "https://via.placeholder.com/300x170"
}
```

---

## 🔗 Submission Details

- ✅ GitHub Repo Link: [https://github.com/mahi3006/mini-youtube-clone](https://github.com/mahi3006/mini-youtube-clone)
- ✅ Features demo video: https://drive.google.com/file/d/1hV8f3oH59543scWPgFs8aMarB4YV5gY9/view?usp=sharing
- ✅ Mentioned: Using **Tailwind CSS**

---

## 🧑‍💻 Author

**Mahitha**  
© 2025 — MiniTube  
GitHub: [github.com/mahi3006](https://github.com/mahi3006)

