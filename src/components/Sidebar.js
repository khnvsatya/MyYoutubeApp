import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen)
    return (
      <div className="mr-2">
        <div className="w-[70px] shadow-lg px-3  fixed left-0 top-32 bottom-0 bg-white ">
          <ul className="py-2">
            <li className="mt-8 mb-2">
              <Link to="/">
                <span className="mx-3 ">🏠</span>
                <br />
                <span>Home</span>
              </Link>
            </li>
            <li className="mt-8 mb-2">
              <span className="mx-3 ">▶</span>
              <br />
              <span>Shorts</span>
            </li>
            <li className="mt-8 mb-2">
              <span className="mx-3 ">🎥</span>
              <br />
              <span>Library</span>
            </li>
          </ul>
        </div>
      </div>
    );
  return (
    <div className="mr-44">
      <div className="w-[170px] shadow-lg px-8 z-10  text-left fixed left-0 bottom-0 top-[70px] bg-white overflow-scroll">
        <ul>
          <li className="mt-2 mb-2">
            <Link to="/"> Home</Link>
          </li>
          <li className="mb-2">Library</li>
          <li className="mb-2">History</li>
          <li className="mb-2">
            <Link to="/watch">Watch later</Link>
          </li>
          <li className="mb-4">Liked Videos</li>
        </ul>
        <hr className="mt-3" />
        <h1 className="mt-3 font-bold">Subscriptions</h1>
        <ul>
          <li className="mt-4 mb-2">Music</li>
          <li className="mb-2">Sports</li>
          <li className="mb-2">Gaming</li>
          <li className="mb-4">Movies</li>
        </ul>
        <hr className="mt-3" />
        <h1 className="mt-3 font-bold">Explore</h1>
        <ul>
          <li className="mt-4 mb-2">Trending</li>
          <li className="mb-2">Live</li>
          <li className="mb-2">News</li>
          <li className="mb-2">Fashion & Beautty</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
