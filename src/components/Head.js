import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import  {toggleMenu}  from "../utils/appSlice";
// import Sat from "../items/Sat.png";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import {cacheResults} from "../utils/searchSlice";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false); //for hiding youtube serach bar

  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();

  useEffect(() => {
    //make API call
    // console.log(searchQuery);

    //make an api call after ever key press
    //but if the difference between 2 api call is <200ms
    //decline the API call

    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestion();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };

    // getSearchSuggestion();
  }, [searchQuery]);

  const getSearchSuggestion = async () => {
    console.log("API Call - " + searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    // console.log(json[1]);
    setSuggestions(json[1]);

    //update cache
    dispatch(
      cacheResults({
        [searchQuery]:json[1],
      })
    );
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu()); //it is comes form appSlice
  };


  const searchShow =()=>{
    alert("working on it");
  }


  return (
    <div className=" grid grid-flow-col p-3 m-2 shadow-xl">
      <div className="flex col-span-1 gap-6">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-10 cursor-pointer"
          src="https://w7.pngwing.com/pngs/626/110/png-transparent-black-logo-computer-icons-hamburger-button-menu-new-menu-angle-text-rectangle.png"
          alt="hamburger"
        />
    
        <img className="h-[70px] -mt-4" src="https://cdn-icons-png.flaticon.com/512/48/48968.png" alt="you-tube logo" />
       
      </div>
      {/* ----------search bar------------------------- */}
      <div className="col-span-10 pl-80  ">
        <div>
          <input
            className="w-1/2  border   border-gray-300 p-2 rounded-l-full"
            type="text"
            placeholder="Search "
            value={searchQuery}
            onChange={(e) => {setSearchQuery(e.target.value);}}
            onFocus={() => setShowSuggestion(true)}
            onBlur={() => setShowSuggestion(false)}
          />
          <button className="border  border-gray-300  bg-gray-100 p-2 rounded-r-full" onClick={searchShow}>
            search
          </button>
        </div>
        {showSuggestion && (
          <div className="   fixed   bg-white py-2 px-3 w-[430px] border rounded-lg border-gray-100">
            <ul>
              {suggestions.map((s) => (
                <li key={s} className="py-2 px-3 shadow-sm hover:bg-gray-100">
                  {" "}
                  🔍 {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* ----------user icon------------------- */}
      <div>
        <img
          className="h-10 col-span-5"
          src="https://static.vecteezy.com/system/resources/previews/019/879/186/original/user-icon-on-transparent-background-free-png.png"
          alt="user"
        />
      </div>
    </div>
  );
};

export default Head;