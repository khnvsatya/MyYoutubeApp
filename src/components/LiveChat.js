import React, { useEffect, useState } from "react";
import {
  generateRandomCompliment,
  generateRandomId,
  generateRandomName,
} from "../utils/helper";
import { useDispatch, useSelector } from "react-redux";

import { addMessages } from "../utils/chatSlice";

const LiveChat = () => {
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);
  const [userMessage, setUserMessage] = useState("");

  useEffect(() => {
    const commentData = setInterval(() => {
      console.log("get new message");
      let newMessage = {
        name: generateRandomName(),
        text: generateRandomCompliment(),
        id: generateRandomId(6),
      };
      // let newData = [newMessage, ...data];
      dispatch(addMessages(newMessage));
    }, [1500]);

    return () => {
      clearInterval(commentData);
    };
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let newMessage = {
      name: generateRandomName(),
      text: userMessage,
      id: generateRandomId(6),
    };
    dispatch(addMessages(newMessage));
    setUserMessage("");
  };

  return (
    <div className="mx-3 p-1 w-full border-2 h-[500px] ">
      <div className=" w-full h-[450px] overflow-y-scroll flex flex-col-reverse">
        {chatMessages.map((comment) => {
          const { name, text, id } = comment;
          return (
            <div className="flex mx-1 my-2 " key={id}>
              <img
                className="h-6 left-3"
                src="https://cdn-icons-png.flaticon.com/512/666/666201.png"
                alt="user"
              />
              <span className="font-bold px-2">{name}</span>
              <span>{text}</span>
            </div>
          );
        })}
      </div>
      <form onSubmit={handleSubmit}>
        <div className="flex justify-between align-middle px-1 w-full">
          <img
            className="h-6 mr-2 mt-2"
            src="https://cdn-icons-png.flaticon.com/512/666/666201.png"
            alt="user"
          />
          <input
            type="text"
            name=""
            id=""
            className="outline-none border-b-2 border-blue-500 w-full mb-2 "
            placeholder="Enter you text here"
            value={userMessage}
            onChange={(e) => setUserMessage(e.target.value)}
          />
          <button type="submit" className=" border-none p-2  ">
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default LiveChat;
