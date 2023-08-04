import React from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import PublicIcon from "@mui/icons-material/Public";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import { Avatar, Paper } from "@mui/material";

const Post = ({ userURL ,image, username, timestamp, message}) => {
  return (
    <>
      <section>
        <Paper>
          <div className="bg-[#fff] w-full  rounded-lg mt-5 md:p-3">
            <div className="flex justify-between">
              <div className="flex items-center">
                <Avatar src={userURL} />
                <div className="ml-3 ">
                  <h3 className="font-semibold">{username}</h3>
                  <p className="text-sm flex items-center text-gray-500 ">
                    {timestamp}{" "}
                    <PublicIcon fontSize="12px" className="ml-1 mt-1" />
                  </p>
                </div>
              </div>
              <MoreHorizIcon />
            </div>
            <div className="bg-gray-100 mt-1 border-t">
              <p className="my-3 w-full  rounded-md px-2 ">{message}</p>
              {image && (
                <img src={image} alt="" className="w-full rounded-md" />
              )}
            </div>
            <div className="flex justify-between w-full items-center border-t mt-3 pt-1 border-gray-300  ">
              <div className="flex justify-center  items-center gap-1 px-4 py-1 rounded-md text-gray-600 hover:bg-gray-200">
                <ThumbUpAltOutlinedIcon />
                <p className="text-sm md:text-lg font-medium ">Like</p>
              </div>
              <div className="flex justify-center items-center gap-1 px-4 py-1 rounded-md text-gray-600 hover:bg-gray-200">
                <ChatBubbleOutlineOutlinedIcon className="mt-1" />
                <p className="text-sm md:text-lg font-medium  ">Comment</p>
              </div>
              <div className="flex justify-center items-center gap-1 px-4 py-1 rounded-md text-gray-600 hover:bg-gray-200">
                <SendOutlinedIcon />
                <p className="text-sm md:text-lg font-medium ">Share</p>
              </div>
            </div>
          </div>
        </Paper>
      </section>
    </>
  );
};

export default Post;
