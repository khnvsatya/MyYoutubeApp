import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_URL } from "../utils/constants";
import ButtonList from "./ButtonList";
import { useNavigate } from "react-router-dom";
import { cacheResults } from "../utils/searchSlice";
import useTriggerOutsideClick from "../utils/useTriggerOutsideClick";

const Head = () => {
  const wrapperRef = useRef(null);
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchSuggestion, setSearchSuggestion] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  useTriggerOutsideClick(wrapperRef, () => {
    setShowSuggestions(false);
  });

  const dispatch = useDispatch();

  const searchSuggCache = useSelector((state) => state.search);

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchSuggCache[searchQuery]) {
        setSearchSuggestion(searchSuggCache[searchQuery]);
      } else {
        getSuggestions();
      }
    }, 200);

    return () => {
      // console.log("it's clearning", searchQuery);
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSuggestions = async () => {
    // console.log(searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_URL + searchQuery);
    const json = await data.json();
    // console.log(json[1]);
    setSearchSuggestion(json[1]);
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  return (
    <div>
      <div className="grid grid-flow-col p-2 shadow-sm ">
        <div className="flex col-span-1 ">
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
            onClick={(e) => navigate("/")}
          />
        </div>
        <div className="col-span-11 ">
          <div className="flex justify-between w-full">
            <div className="pl-40">
              <div className="w-fit">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setShowSuggestions(false);
                    navigate(`/results?search_query=${searchQuery}`);
                    setSearchQuery("");
                  }}
                >
                  <input
                    type="text"
                    className="w-[36rem] text-left border border-gray-400 p-2  rounded-l-3xl "
                    placeholder="Search here"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={() => {
                      setShowSuggestions(true);
                    }}
                  />
                  <button
                    type="submit"
                    className="submit-button border border-gray-400 px-5 py-2 rounded-r-3xl bg-gray-200"
                  >
                    &#128269;
                  </button>
                </form>
              </div>
            </div>
            <img
              className="h-6 left-3"
              src="https://cdn-icons-png.flaticon.com/512/666/666201.png"
              alt="user"
            />
          </div>

          {showSuggestions && (
            <div
              ref={wrapperRef}
              className="w-[36rem] ml-40 h-auto text-left rounded-lg bg-white m-.5 fixed"
              onClick={(e) => {
                console.log(e.target.innerText);
                setSearchQuery(e.target.innerText.slice(3));
                setShowSuggestions(false);
              }}
            >
              <ul>
                {searchSuggestion.map((s) => (
                  <li key={s} className="py-2 shadow-sm p-2 hover:bg-gray-100">
                    🔎 {s}
                  </li>
                ))}
              </ul>
            </div>
          )}
          <ButtonList />
        </div>
      </div>
    </div>
  );
};

export default Head;
