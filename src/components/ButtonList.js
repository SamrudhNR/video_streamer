import React from "react";
import Button from "./Buttons";

const list=["All","Gaming","Anime","Football","PBDpodcast","B1M","Music","Comedy","React","Programming","Recently uploaded","Watched"]

const ButtonList=()=>{

    return(
        <div className="flex overflow-x-auto overflow-y-hidden">
            {list.map((items,index)=>
                <Button key={index} name={items} />
            )}
        </div>
    )
}

export default ButtonList;