import React, { useEffect, useState } from "react";
import { videos } from "../data/dummyVideos";
import VideoCard from "../components/VideoCard";

const Home = () => {
  const [likedVideos, setLikedVideos] = useState(() => {
    const stored = sessionStorage.getItem("likedVideos");
    return stored ? JSON.parse(stored) : [];
  });

  const [watchLater, setWatchLater] = useState(() => {
    const stored = sessionStorage.getItem("watchLater");
    return stored ? JSON.parse(stored) : [];
  });

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">📺 Videos</h1>
      <div className="flex flex-wrap gap-6">
        {videos.map((video) => (
          <VideoCard
            key={video.id}
            video={video}
            likedVideos={likedVideos}
            setLikedVideos={setLikedVideos}
            watchLater={watchLater}
            setWatchLater={setWatchLater}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
