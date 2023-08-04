import React from "react";
import StoryReels from "./StoryReels";
import MessageSender from "./MessageSender";
import Post from "./Post";

const Feed = () => {
  return (
    <>
      <div className="feed__scrollbar h-screen overflow-y-scroll overscroll-y-contain pb-10 mt-16">
        <div className=" flex px-2 md:px-[50px]  flex-1 flex-col ">
          <StoryReels />
          <MessageSender />

          <Post
            userURL="https://images.unsplash.com/photo-1503249023995-51b0f3778ccf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGQlMjBwaG90b3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"
            image="https://plus.unsplash.com/premium_photo-1661764643474-47ec49cc74fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1lbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
            username="Ashish Soni"
            timestamp="12:40 PM"
            message="This is text area..."
          />
          <Post
            userURL="https://images.unsplash.com/photo-1481437642641-2f0ae875f836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1lbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
            image="https://images.unsplash.com/photo-1618886614638-80e3c103d31a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fG1lbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
            username="Ashish Soni"
            timestamp="12:40 PM"
            message="This is text area..."
          />
          <Post
            userURL="https://images.unsplash.com/photo-1481437642641-2f0ae875f836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1lbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
            image=""
            username="Ashish Soni"
            timestamp="12:40 PM"
            message="This is text area..."
          />
        </div>
      </div>
    </>
  );
};

export default Feed;
