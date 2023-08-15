import React from "react";
import handlePublishingTime from "../utils/handlePublishingTime";

import { useDispatch } from "react-redux";
import { updateChannelId } from "../utils/appSlice";
import useChannelInfo from "../utils/useChannelInfo";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails, publishedAt, channelId } = snippet;
  const { viewCount } = statistics;

  const dispatch = useDispatch();

  const handleId = () => {
    dispatch(updateChannelId(channelId));
  };

  const channelData = useChannelInfo(channelId);

  if (channelData === undefined) return null;

  return (
    <div
      className="mx-2"
      onClick={() => {
        handleId();
      }}
    >
      <img
        src={thumbnails.medium.url}
        alt="thumbnail"
        className=" rounded-xl mb-2"
      />
      <div className="m-0.5 pb-5 flex gap-3 align-middle">
        <div className="mt-2">
          <img
            className="h-12 w-12 rounded-[50%] bg-slate-200"
            src={
              channelData && channelData.length > 0
                ? channelData[0]?.snippet?.thumbnails?.default?.url
                : ""
            }
            alt="author"
          />
        </div>
        <div>
          <ul>
            <li className=" font-bold py-1 whitespace-break-spaces">
              {title.substring(0, 45)}
            </li>
            <li className=" text-sm font-extralight ">{channelTitle}</li>
            <div className="flex justify-between ">
              <li>{viewCount} views</li>
              <li>{handlePublishingTime(publishedAt)} ago</li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
