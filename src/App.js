import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import WatchLater from "./pages/WatchLater";
import { videos } from "./data/dummyVideos";
import Timer from "./components/Timer";

function App() {
  const [watchLater, setWatchLater] = useState(() => {
    const stored = sessionStorage.getItem("watchLater");
    return stored ? JSON.parse(stored) : [];
  });

  const [likedVideos, setLikedVideos] = useState(() => {
    const stored = sessionStorage.getItem("likedVideos");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    sessionStorage.setItem("watchLater", JSON.stringify(watchLater));
  }, [watchLater]);

  useEffect(() => {
    sessionStorage.setItem("likedVideos", JSON.stringify(likedVideos));
  }, [likedVideos]);

  return (
    <Router>
      <div className="min-h-screen bg-gray-100 text-black dark:bg-gray-900 dark:text-white transition-all">
        <Navbar watchLaterCount={watchLater.length} />
        <Timer />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                videos={videos}
                watchLater={watchLater}
                setWatchLater={setWatchLater}
                likedVideos={likedVideos}
                setLikedVideos={setLikedVideos}
              />
            }
          />
          <Route
            path="/watch-later"
            element={
              <WatchLater
                watchLater={watchLater}
                setWatchLater={setWatchLater}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
