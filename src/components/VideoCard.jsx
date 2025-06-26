import React, { useState, useEffect } from "react";

const VideoCard = ({ video, likedVideos, setLikedVideos, watchLater, setWatchLater }) => {
  const { id, title, channel, views, time, thumbnail } = video;

  const isLiked = likedVideos.includes(id);
  const isWatchLater = watchLater.includes(id);

  const toggleLike = () => {
    const updated = isLiked
      ? likedVideos.filter((vid) => vid !== id)
      : [...likedVideos, id];

    setLikedVideos(updated);
    sessionStorage.setItem("likedVideos", JSON.stringify(updated));
  };

  const toggleWatchLater = () => {
    const updated = isWatchLater
      ? watchLater.filter((vid) => vid !== id)
      : [...watchLater, id];

    setWatchLater(updated);
    sessionStorage.setItem("watchLater", JSON.stringify(updated));
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-3 w-[300px]">
      <img src={thumbnail} alt={title} className="w-full h-48 object-cover rounded" />
      <h2 className="mt-2 font-semibold text-lg">{title}</h2>
      <p className="text-sm text-gray-600">{channel}</p>
      <p className="text-sm text-gray-500">{views} • {time}</p>
      <div className="flex justify-between mt-3">
        <button
          onClick={toggleLike}
          className={`px-3 py-1 rounded ${isLiked ? 'bg-red-500 text-white' : 'bg-gray-200'}`}
        >
          ❤️ {isLiked ? 'Liked' : 'Like'}
        </button>
        <button
          onClick={toggleWatchLater}
          className={`px-3 py-1 rounded ${isWatchLater ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          ➕ {isWatchLater ? 'Saved' : 'Watch Later'}
        </button>
      </div>
    </div>
  );
};

export default VideoCard;
