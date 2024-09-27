import React, { useEffect, useState } from "react";
import { YOUTUBE_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";

const VideoContainer=()=>{
    const [videos, setVideos]= useState([])
    useEffect(()=>{
        getvideos();
    },[]);

    const getvideos=async ()=>{
        const data= await fetch(YOUTUBE_API);
        const json1= await data.json();
        console.log(json1);
        setVideos(json1.items)
    }

    if(!videos?.length){
        return <Shimmer/>
    }
    return(
        <div className="flex flex-wrap">
            {videos.map((video)=>(
            <Link to={"/watch?v="+video.id}><VideoCard key={video.id} info={video}/></Link>
            ))}
        </div>
    )
}


export default VideoContainer;