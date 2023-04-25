import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Head = () => {
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-2 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-4 my-[3px] cursor-pointer"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqFOuFn4GcVY995ptcRxbvZoZEVFFdGtENUg&usqp=CAU"
          alt="home-icon"
        />

        <img
          className="h-5 mx-2 cursor-pointer"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
          alt="youtube-logo"
        />
      </div>
      <div className="col-span-10  pl-40">
        <input
          type="text"
          className="w-1/2 text-center border border-gray-400 p-2  rounded-l-3xl"
          placeholder="Search here"
        />
        <button className="border border-gray-400 px-5 py-2 rounded-r-3xl bg-gray-200">
          &#128269;
        </button>
      </div>
      <div>
        <img
          className="h-6 col-span-1"
          src="https://cdn-icons-png.flaticon.com/512/666/666201.png"
          alt="user"
        />
      </div>
    </div>
  );
};

export default Head;
