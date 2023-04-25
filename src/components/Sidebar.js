import React from "react";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null;
  return (
    <div className=" w-44 shadow-lg px-2">
      <ul>
        <li>Library</li>
        <li>History</li>
        <li>Watch Later</li>
        <li>Liked Videos</li>
      </ul>
      <hr className="mt-3" />
      <h1 className="mt-3 font-bold">Subscriptions</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
      <hr className="mt-3" />
      <h1 className="mt-3 font-bold">Explore</h1>
      <ul>
        <li>Trending</li>
        <li>Live</li>
        <li>News</li>
        <li>Fashion & Beautty</li>
      </ul>
    </div>
  );
};

export default Sidebar;
