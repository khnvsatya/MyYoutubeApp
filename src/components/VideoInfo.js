import React, { useEffect, useState } from "react";
import { CHANNEL_INFO } from "../utils/constants";
import handlePublishingTime from "../utils/handlePublishingTime";
import useChannelInfo from "../utils/useChannelInfo";
import { useSelector } from "react-redux";

const VideoInfo = ({ videoData }) => {
  const selectedChannelId = useSelector((store) => store.app.selectedChannelId);

  const [showDescription, setShowDescription] = useState(false);

  const channelData = useChannelInfo(selectedChannelId);

  if (channelData === undefined) return null;

  return (
    <div>
      {videoData?.map((data) => {
        const { id } = data;
        const { title, description, channelTitle, publishedAt } = data?.snippet;
        const { viewCount } = data?.statistics;

        let descript = showDescription
          ? description
          : description.substring(0, 90) + "...";

        return (
          <div key={id} className="w-[800px] whitespace-break-spaces p-2 font">
            <h2 className=" font-bold text-lg mb-2">{title}</h2>
            <div className="flex m-2 pb-2">
              <img
                className="h-12 w-12 bg-slate-400 rounded-[50%]"
                src={
                  channelData && channelData.length > 0
                    ? channelData[0]?.snippet?.thumbnails?.default?.url
                    : ""
                }
                alt="author"
              />
              <div className="pt-1 pl-2 flex flex-col gap-[1px]">
                <p className="font-bold">{channelTitle}</p>
                <span>xxx subscribers</span>
              </div>
            </div>
            <div className="p-5 bg-gray-100 rounded-xl">
              <span className="font-bold mr-4">{viewCount}views</span>
              <span className="font-bold ">
                {handlePublishingTime(publishedAt)} ago
              </span>
              <div>
                <p>{descript}</p>
                <span
                  className=" cursor-pointer font-bold"
                  onClick={(e) => {
                    setShowDescription((prev) => !prev);
                  }}
                >
                  {showDescription ? `Show Less` : `Show More`}
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default VideoInfo;
