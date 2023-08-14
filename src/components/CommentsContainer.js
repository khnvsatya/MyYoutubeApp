import React, { useEffect, useState } from "react";
import Comment from "./Comment";
import { COMMENT_API } from "../utils/constants";

function CommentsContainer({ videoId }) {
  const [commentsData, setCommentsData] = useState([]);

  useEffect(() => {
    getCommentsData();
  }, []);

  const getCommentsData = async () => {
    const data = await fetch(COMMENT_API(videoId));
    const json = await data.json();
    // console.log(json);
    setCommentsData(json?.items);
  };

  return (
    <div>
      <h2 className="font-bold mt-2"> {commentsData.length} Comments</h2>
      <div className="mt-1 px-4 w-[800px] whitespace-break-spaces">
        {commentsData?.map((commentData) => {
          const { id } = commentData;
          const { totalReplyCount } = commentData?.snippet;
          // console.log(totalReplyCount);
          return (
            <Comment
              key={id}
              datas={commentData}
              replyCount={totalReplyCount}
            />
          );
        })}
      </div>
    </div>
  );
}

export default CommentsContainer;
