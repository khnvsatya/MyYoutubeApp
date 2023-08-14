import { useEffect, useState } from "react";
import { CHANNEL_INFO } from "./constants";

const useChannelInfo = (id) => {
  const [ChannelData, setChannelData] = useState([]);

  useEffect(() => {
    getChannelData();
  }, []);

  const getChannelData = async () => {
    const data = await fetch(CHANNEL_INFO(id));
    const json = await data.json();
    console.log(json, "from usechannelInfo");
    setChannelData(json?.items);
  };

  return ChannelData;
};

export default useChannelInfo;
