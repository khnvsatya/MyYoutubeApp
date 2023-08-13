import React from "react";
import handlePublishingTime from "../utils/handlePublishingTime";

const VideoCard = ({ info }) => {
  // console.log(info);

  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails, publishedAt } = snippet;
  const { viewCount } = statistics;
  return (
    <div className="mx-2">
      <img
        src={thumbnails.medium.url}
        alt="thumbnail"
        className=" rounded-xl mb-2"
      />
      <div className="m-2 pb-5">
        <ul>
          <li className=" font-bold py-2 whitespace-break-spaces">
            {title.substring(0, 45)}
          </li>
          <li>{channelTitle}</li>
          <div className="flex justify-between ">
            <li>{viewCount} views</li>
            <li>{handlePublishingTime(publishedAt)} ago</li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default VideoCard;
