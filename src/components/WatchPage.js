import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { disibleMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import VideoInfo from "./VideoInfo";
import { VIDEO_INFO_API } from "../utils/constants";

const WatchPage = () => {
  const [videoData, setVideoData] = useState([]);
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const [searchParam] = useSearchParams();
  const videoId = searchParam.get("v");

  useEffect(() => {
    getVideoInfo();
  }, []);

  const getVideoInfo = async () => {
    const data = await fetch(VIDEO_INFO_API + videoId);
    const json = await data.json();
    setVideoData(json?.items);
  };

  if (videoData === undefined) return <div>loading...</div>;
  return (
    <div
      className={`flex flex-col mt-[130px] ${isMenuOpen ? "px-4" : "pl-20"}`}
    >
      <div className="w-800">
        <iframe
          width="800"
          height="450"
          src={"https://www.youtube.com/embed/" + videoId}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <VideoInfo videoData={videoData} />
      <CommentsContainer videoId={videoId} />
    </div>
  );
};

export default WatchPage;
