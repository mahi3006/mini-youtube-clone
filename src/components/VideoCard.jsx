import React from "react";

const VideoCard = ({
  id,
  title,
  channel,
  views,
  time,
  thumbnail,
  watchLater,
  setWatchLater,
  likedVideos,
  setLikedVideos,
}) => {
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
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-3 w-[300px] transition-colors text-black dark:text-white">
      <img src={thumbnail} alt={title} className="w-full h-48 object-cover rounded" />
      <h2 className="mt-2 font-semibold text-lg">{title}</h2>
      <p className="text-sm text-gray-600 dark:text-gray-300">{channel}</p>
      <p className="text-sm text-gray-500 dark:text-gray-400">{views} • {time}</p>
      <div className="flex justify-between mt-3">
        <button
          onClick={toggleLike}
          className={`px-3 py-1 rounded ${isLiked ? 'bg-red-500 text-white' : 'bg-gray-200 dark:bg-gray-700 dark:text-white'}`}
        >
          ❤️ {isLiked ? 'Liked' : 'Like'}
        </button>
        <button
          onClick={toggleWatchLater}
          className={`px-3 py-1 rounded ${isWatchLater ? 'bg-blue-500 text-white' : 'bg-gray-200 dark:bg-gray-700 dark:text-white'}`}
        >
          ➕ {isWatchLater ? 'Saved' : 'Watch Later'}
        </button>
      </div>
    </div>
  );
};

export default VideoCard;
