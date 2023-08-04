import { Avatar, Paper } from '@mui/material';
import React from 'react'

const StoryReels = () => {
  return (
    <>
      <section>
        <Paper>
          <div className=" flex p-4 ">
            <div
              className="story relative bg-cover bg-center bg-no-repeat w-[120px] h-[200px] shadow-md rounded-lg mx-1 hover:scale-105 cursor-pointer transition-all ease-linear duration-0"
              style={{
                backgroundImage: `url('https://w0.peakpx.com/wallpaper/944/187/HD-wallpaper-ganesh-black-cool-thumbnail.jpg')`,
              }}
            >
              <Avatar
                className="m-2 border-2 border-[#2381fa] rounded-full"
                src="https://images.unsplash.com/photo-1503249023995-51b0f3778ccf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGQlMjBwaG90b3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"
              />
              <h3 className="absolute left-3 bottom-5 text-[#fff] text-md font-normal">
                Ashish Soni
              </h3>
            </div>
            <div
              className="story relative bg-cover bg-center bg-no-repeat w-[120px] h-[200px] shadow-md rounded-lg mx-1 hover:scale-105 cursor-pointer transition-all ease-linear duration-0"
              style={{
                backgroundImage: `url('https://img.freepik.com/premium-photo/abstract-rainbow-colorful-bright-feather-closeup-up-macro-view-background-plumage-texture-with-dew-drops_753134-644.jpg')`,
              }}
            >
              <Avatar
                className="m-2 border-2 border-[#2381fa] rounded-full"
                src="https://images.unsplash.com/photo-1611316185995-9624c94487d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
              />
              <h3 className="absolute left-3 bottom-5 text-[#fff] text-md font-normal">
                Ashish Soni
              </h3>
            </div>
            <div
              className="story relative bg-cover bg-center bg-no-repeat w-[120px] h-[200px] shadow-md rounded-lg mx-1 hover:scale-105 cursor-pointer transition-all ease-linear duration-0"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1543946207-39bd91e70ca7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnVsbCUyMGhkJTIwd2FsbHBhcGVyfGVufDB8fDB8fHww&w=1000&q=80')`,
              }}
            >
              <Avatar
                className="m-2 border-2 border-[#2381fa] rounded-full"
                src="https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
              />
              <h3 className="absolute left-3 bottom-5 text-[#fff] text-md font-normal">
                Ashish Soni
              </h3>
            </div>
            <div
              className="story relative bg-cover bg-center bg-no-repeat w-[120px] h-[200px] shadow-md rounded-lg mx-1 hover:scale-105 cursor-pointer transition-all ease-linear duration-0"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80')`,
              }}
            >
              <Avatar
                className="m-2 border-2 border-[#2381fa] rounded-full"
                src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
              />
              <h3 className="absolute left-3 bottom-5 text-[#fff] text-md font-normal">
                Ashish Soni
              </h3>
            </div>
          </div>
        </Paper>
      </section>
    </>
  );
}

export default StoryReels