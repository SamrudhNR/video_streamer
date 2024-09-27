import React from "react";
import {useSelector} from "react-redux";
import { Link } from "react-router-dom";


const SideBar=()=>{

    const isMenuOpen= useSelector(store=>store.app.isMenuOpen);

    if(!isMenuOpen) return null;
    return(
        <div className="p-5 shadow-lg w-52">
            <Link to="/"><h1 className="font-bold flex flex-wrap space-x-1"><img className="h-5 m-0.5" alt="home" src="https://e7.pngegg.com/pngimages/703/597/png-clipart-logo-house-home-house-angle-building-thumbnail.png"/>
                Home</h1></Link>
            <h1 className="font-bold flex flex-wrap space-x-1 pt-2"><img className="h-5 m-0.5" alt="youlogo" src="https://cdn-icons-png.flaticon.com/512/552/552721.png"/>
                You</h1>
            <ul className="ml-2">
                <li>Your channel</li>
                <li>History</li>
                <li>Playlists</li>
                <li>Your videos</li>
                
                <li>Watch later</li>
            </ul>
            
            <h1 className="font-bold pt-5">Subscriptions</h1>
            <ul className="ml-2">
                <li>Music</li>
                <li>Sports</li>
                <li>Gaming</li>
                <li>Movies</li>
            </ul>

            <h1 className="font-bold pt-5">Explore</h1>
            <ul className="ml-2">
                <li>Trending</li> 
                <li>Shopping</li>
                <li>Music</li>
                <li>Live</li>
                <li>Podcasts</li>
                <li>Fashion & Beauty</li>
            </ul>

        </div>
    )
}

export default SideBar;