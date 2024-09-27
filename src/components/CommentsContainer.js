import React, { useEffect, useState } from "react";
import Comments from "./Comments";
import { useDispatch, useSelector } from "react-redux";
import { setComments } from "../utils/CommentSlice";
import { YOUTUBE_COMMENT_API } from "../utils/constants";
import { AiFillLike } from "react-icons/ai";
import { BiSolidDislike } from "react-icons/bi";


const Comment = ({ data }) => {
    return (
      <div className="flex p-2">
        <img
          className="w-16 h-16 p-2 rounded-full"
          alt="user"
          src={data?.authorProfileImageUrl}
        />
        <div>
          <div className="py-1 font-bold">{data?.authorDisplayName}</div>
          <div className="font-semi-bold text-sm">{data?.textOriginal}</div>
        </div>
      </div>
    );
  };
  
  const CommentsList = ({ list, isComment }) => {
    const [like, Setlike] = useState(0);
  
    const handleLike = () => {
      Setlike(like + 1);
    };
    const handleDislike = () => {
      Setlike(like - 1);
    };

  isComment && console.log("Comments: ", list);
  return (
    list?.length > 0 &&
    list.map((comment) => {
      // comment.replies && console.log("Comment: ",comment?.replies?.comments?.length)
      return (
        <div className="hidden md:block" key={comment?.id}>
          <div className="border max-w-[60rem] mt-2 mb-4 rounded-lg shadow-lg ">
            {/* /border ke liye use kiya gya haiii */}
           
            <Comment
              data={
                isComment
                  ? comment?.snippet
                  : comment?.snippet?.topLevelComment?.snippet
              }
            />
         

            {comment?.replies?.comments?.length > 0 && (
              <div className="pl-16 border ">
                <CommentsList
                  list={comment?.replies?.comments}
                  isComment={true}
                  />
                  </div>
             
            )}
            <div className="flex items-center mb-2 mx-20">
              <button
                onClick={ handleLike}
                className="mr-2 flex items-center mb-2 "
                >
               <AiFillLike className="hover:text-green-400 text-xl" />
              </button>
              <button
                onClick={ handleDislike}
                className="flex items-center mb-2 "
              >
                <BiSolidDislike className="mt-1 hover:text-red-700 text-xl  " />
              </button>
              <span className="mb-2 ml-2 font-bold hover:cur">Reply</span>
            </div>
          </div>
        </div>
      );
    })
  );
};

const CommentsContainer = ({ videoID }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    getComments(videoID);
  }, []);

  const commentList = useSelector((store) => store.comments.list);

  async function getComments(videoID) {
    const data = await fetch(
      YOUTUBE_COMMENT_API.replace("[VIDEO_ID]", videoID)
    );
    const json = await data.json();
    // console.log(json);
    dispatch(setComments(json));
  }

  return (
    <div className="m-5 p-2">
      <div className=" text-2xl font-bold">Comments:</div>
      <div>
        <CommentsList list={commentList?.items} />
      </div>
    </div>
  );
};
export default CommentsContainer;