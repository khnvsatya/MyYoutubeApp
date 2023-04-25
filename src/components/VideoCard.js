import React from "react";

const VideoCard = ({ info }) => {
  console.log(info);

  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails, publishedAt } = snippet;
  const { viewCount } = statistics;
  return (
    <div className="p-2 m-2 w-80 shadow-lg cursor-pointer">
      <img
        src={thumbnails.medium.url}
        alt="thumbnail"
        className=" rounded-2xl mb-2"
      />
      <ul>
        <li className=" font-bold py-2">{title}</li>
        <li>{channelTitle}</li>
        <li>{viewCount} views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
