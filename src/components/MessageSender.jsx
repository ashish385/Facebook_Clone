import { Avatar, Paper } from '@mui/material';
import React from 'react';
import VideoCallIcon from "@mui/icons-material/VideoCall";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";

const MessageSender = () => {
    return (
      <>
        <section>
          <Paper>
            <div className="flex flex-col bg-white w-full p-3 mt-5 rounded-lg shadow-md box-border">
              <div className="top flex items-center flex-1 gap-2 ">
                <Avatar src="https://images.unsplash.com/photo-1503249023995-51b0f3778ccf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGQlMjBwaG90b3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60" />
                <form className="bg-gray-200 p-2  rounded-2xl flex-1">
                  <input
                    type="text"
                    placeholder="What's on your mind Ashish?"
                    className="w-full bg-transparent pl-2 border-none outline-none placeholder:text-gray-500"
                  />
                </form>
              </div>

              <div className="flex items-center justify-between border-t-[1px] mt-4 pt-2">
                <div className="flex items-center py-1 px-4 gap-2 rounded-md mt-2 cursor-pointer hover:bg-gray-200">
                  <VideoCallIcon style={{ color: "red" }} fontSize="large" />
                  <p>Live</p>
                </div>
                <div className="flex items-center py-1 px-4 gap-2 rounded-md mt-2 cursor-pointer hover:bg-gray-200">
                  <PhotoLibraryIcon
                    style={{ color: "orange" }}
                    fontSize="large"
                  />
                  <p>Photo/Video</p>
                </div>
                <div className="flex items-center py-1 px-4 gap-2 rounded-md mt-2 cursor-pointer hover:bg-gray-200">
                  <EmojiEmotionsIcon
                    style={{ color: "yellowgreen" }}
                    fontSize="large"
                  />
                  <p>Feeling/Activity</p>
                </div>
              </div>
            </div>
          </Paper>
        </section>
      </>
    );
}

export default MessageSender