import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { YOUTUBE_VIDEO_API } from "../utils/constants";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const VideoContent = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();

    setVideos(json?.items);
  };
  return (
    <div
      className={`flex flex-wrap gap-2 ${
        !isMenuOpen ? "w-[95%] mx-20 my-1" : ""
      }`}
    >
      {videos?.map((video) => (
        <div
          key={video.id}
          className={`p-2  w-[343px] shadow-lg cursor-pointer  ${
            !isMenuOpen ? "scale-110 h-[315px] m-[20px] " : "h-80 m-1"
          }`}
        >
          <Link to={"/watch?v=" + video.id}>
            <VideoCard info={video} />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default VideoContent;
