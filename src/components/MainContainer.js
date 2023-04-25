import React from "react";
import ButtonList from "./ButtonList";
import VideoContent from "./VideoContent";

const MainContainer = () => {
  return (
    <div className="col-span-11  object-center">
      <ButtonList />
      <VideoContent />
    </div>
  );
};

export default MainContainer;
