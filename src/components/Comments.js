import React from 'react'

const Comments = ({data}) => {
    const {name,text,replies}=data;
   
  return (
    <div className="flex bg-gray-200 border rounded-lg p-2 my-2" >
    <img
    className="h-10 col-span-5"
    src="https://static.vecteezy.com/system/resources/previews/019/879/186/original/user-icon-on-transparent-background-free-png.png"
    alt="comments-icon"
  />
  <div className="px-3">
    <p className="font-bold">{name}</p>
    <p>{text}</p>
  </div>
  </div>
  )
}

export default Comments