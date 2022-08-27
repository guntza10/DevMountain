import React from "react";

function VideoCard({ video }) {
  return (
    <div class="flex justify-center">
      <div class="rounded-lg shadow-lg bg-white max-w-xs">
        <img class="rounded-t-lg min-w-full" src={video.img} alt="" />
        <div class="p-6">
          <h5 class="text-gray-900 text-xl font-medium mb-6">{video.name}</h5>
          <div>
            <div className="truncate mb-2">{video.description}</div>
            <div>{video.duration}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
