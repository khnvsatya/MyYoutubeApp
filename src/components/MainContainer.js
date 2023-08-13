import React from "react";
import ButtonList from "./ButtonList";
import VideoContent from "./VideoContent";
import { useSelector } from "react-redux";

const MainContainer = () => {
  return (
    <div className="mt-[130px]">
      <VideoContent />
    </div>
  );
};

export default MainContainer;
