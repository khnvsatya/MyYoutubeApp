// import React from "react";

import { useState } from "react";

const Comment = ({ datas, replyCount }) => {
  const { textDisplay, authorDisplayName, authorProfileImageUrl, likeCount } =
    datas?.snippet?.topLevelComment?.snippet
      ? datas?.snippet?.topLevelComment?.snippet
      : datas?.snippet;

  const { replies } = datas;
  const [showReplies, setShowReplies] = useState(false);

  return (
    <div className="flex pl-2 ">
      <img
        src={authorProfileImageUrl}
        alt="username"
        className="h-10 w-10 mt-1 rounded-full"
      />
      <div className="p-3">
        <p className=" text-sm font-semibold">@{authorDisplayName}</p>
        <p className="w-[800px] whitespace-break-spaces text-sm">
          {textDisplay}
        </p>
        <div className="flex mb-3 ">
          <p className="w-[80px] h-3 ">👍{likeCount}</p>
          <p className="w-[80px] h-3 ">👎</p>
        </div>
        {replyCount > 0 && (
          <div>
            <span
              className="p-2 mb-2 text-blue-600 hover:cursor-pointer"
              onClick={() => {
                setShowReplies((prev) => !prev);
              }}
            >
              {replyCount}replies {showReplies ? " ʌ " : " v "}
            </span>
            {showReplies &&
              replies?.comments?.map((replyText) => {
                return <Comment key={replyText.id} datas={replyText} />;
              })}
          </div>
        )}
      </div>
    </div>
  );
};
export default Comment;
