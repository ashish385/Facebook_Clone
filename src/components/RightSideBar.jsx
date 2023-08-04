import React from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Avatar, Paper } from "@mui/material";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VideocamIcon from "@mui/icons-material/Videocam";
import SearchIcon from "@mui/icons-material/Search";

const RightSideBar = () => {
  return (
    <>
      <section className="mt-10">
        <Paper elevation={3}>
          <div className="h-screen pl-4 pr-6 pt-7 overflow-y-auto sticky bg-white">
            <div className="flex justify-between items-center">
              <div className="left">
                <p className="text-lg font-semibold">Your Pages</p>
              </div>
              <MoreHorizIcon />
            </div>
            <div className="flex flex-col gap-3 mt-2 mb-2">
              <div className="flex gap-x-2 items-center ">
                <Avatar src="https://images.unsplash.com/photo-1506634572416-48cdfe530110?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fG1lbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60" />
                <p className="text-md font-semibold">Web Designer</p>
              </div>
              <div className="flex gap-2 text-gray-500">
                <NotificationsNoneIcon />
                <p>1 Notification</p>
              </div>
              <div className="flex gap-2 text-gray-500">
                <VolumeUpIcon />
                <p>Create Promotion</p>
              </div>
            </div>
            <hr />
            <br />
            <div className="flex justify-between items-center">
              <div className="left">
                <p className="text-lg font-semibold">Contact</p>
              </div>
              <div className="flex gap-2">
                <VideocamIcon />
                <SearchIcon />
                <MoreHorizIcon />
              </div>
            </div>
            <div className="flex flex-col gap-3 mt-2 mb-2">
              <div className="flex gap-x-2 items-center ">
                <Avatar src="https://images.unsplash.com/photo-1506634572416-48cdfe530110?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fG1lbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60" />
                <p className="text-md font-semibold">Aman</p>
              </div>
              <div className="flex gap-x-2 items-center ">
                <Avatar src="https://plus.unsplash.com/premium_photo-1661715894857-64f4bdce8c79?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" />
                <p className="text-md font-semibold">Rahul</p>
              </div>
              <div className="flex gap-x-2 items-center ">
                <Avatar src="https://images.unsplash.com/photo-1552642986-ccb41e7059e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fG1lbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60" />
                <p className="text-md font-semibold">Shyam</p>
              </div>
            </div>
          </div>
        </Paper>
      </section>
    </>
  );
};

export default RightSideBar;
