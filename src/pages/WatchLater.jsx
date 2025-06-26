import React, { useEffect, useState } from "react";
import { videos } from "../data/dummyVideos";
import VideoCard from "../components/VideoCard";

const WatchLater = () => {
  const [likedVideos, setLikedVideos] = useState(() => {
    const stored = sessionStorage.getItem("likedVideos");
    return stored ? JSON.parse(stored) : [];
  });

  const [watchLater, setWatchLater] = useState(() => {
    const stored = sessionStorage.getItem("watchLater");
    return stored ? JSON.parse(stored) : [];
  });

  const filteredVideos = videos.filter((video) =>
    watchLater.includes(video.id)
  );

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">📺 Watch Later</h1>
      {filteredVideos.length === 0 ? (
        <p className="text-gray-500">You haven't added any videos yet.</p>
      ) : (
        <div className="flex flex-wrap gap-6">
          {filteredVideos.map((video) => (
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
      )}
    </div>
  );
};

export default WatchLater;
