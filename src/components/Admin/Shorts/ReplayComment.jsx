import React, { useState } from "react";
import Moment from "react-moment";
import Avatar from "./Avatar";
import { AiFillLike } from "react-icons/ai";
import { likeReplayComment } from "../../../Api/userApi/postRequest";

const ReplayComment = ({data }) => {
    const [likeCount,setLikeCount]=useState(data.likes.length)


  return (
    <>
      <div className="ml-8 border-t-2 mt-2">
        <div className="flex">
          <div className="mt-2 ">
            <Avatar
              img={data?.ProfileImg?data?.ProfileImg:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1200px-Default_pfp.svg.png  "}
            />
          </div>
          <span className="font-semibold mt-5 italic text-sm ml-2">{data.username}</span>
          <Moment
            className="self-center text-gray-500 text-xs ml-2 mt-4 items-end"
            fromNow
          >
            {data.createdAt}
          </Moment>
        </div>
        <div className="info ml-4 py-1">
          <p>{data.comment}</p>
        </div>
        <div className="flex mb-1 ">
            <div className="flex">

          <h1 className="self-center text-gray-500 text-xs ml-2  cursor-pointer ">
            Like 
          </h1>

         <h1 className="ml-1 text-xs mt-1">{likeCount}</h1>
            </div>
        </div>
      </div>
    </>
  );
};

export default ReplayComment;
