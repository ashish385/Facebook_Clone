import React, { useState } from 'react';
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import PeopleIcon from "@mui/icons-material/People";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import AppsIcon from "@mui/icons-material/Apps";
import ForumIcon from "@mui/icons-material/Forum";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import {
  AppBar,
  Avatar,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import DrawerComp from "./DrawerComp";

const Header = () => {
  const [value, setValue] = useState();
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);
  return (
    <>
      <AppBar >
        <div className=" flex w-full flex-col md:flex-row py-1 px-5 bg-white sticky top-0 z-50 justify-between shadow-lg">
          <div className=" flex justify-between items-center gap-3 ">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png"
              alt=""
              style={{ width: "40px" }}
            />
            <div className="header__search flex items-center gap-2 bg-gray-200 rounded-2xl px-3 h-[40px]">
              <SearchIcon sx={{ color: "lightgrey" }} />
              <input
                type="text"
                placeholder="Search Facebook "
                className="border-none outline-none bg-transparent min-w-[200px]"
              />
            </div>
            {isMatch ? (
              <DrawerComp />
            ) : (
              <>
                <div className="header__center flex items-center justify-between md:justify-center gap-2 text-3xl ">
                  <div className="header__option relative cursor-pointer px-2 md:px-8 text-[#2381fa] hover:text-[#2381fa]  py-1 hover:rounded-xl hover:bg-gray-200 after:absolute after:h-1 after:left-0 after:right-0 after:bottom-[-5px] after:bg-[#2381fa]">
                    <HomeIcon style={{ fontSize: "90%" }} />
                  </div>
                  <div className="header__option relative cursor-pointer   px-2 md:px-8 text-gray-500 hover:text-[#2381fa]  py-1 hover:rounded-xl hover:bg-gray-200">
                    <OndemandVideoIcon sx={{ fontSize: "90%" }} />
                  </div>
                  <div className="header__option relative cursor-pointer   px-2 md:px-8 text-gray-500 hover:text-[#2381fa]  py-1 hover:rounded-xl hover:bg-gray-200">
                    <PeopleIcon sx={{ fontSize: "90%" }} />
                  </div>
                  <div className="header__option relative cursor-pointer   px-2 md:px-8 text-gray-500 hover:text-[#2381fa]  py-1 hover:rounded-xl hover:bg-gray-200">
                    <SportsEsportsIcon sx={{ fontSize: "90%" }} />
                  </div>
                </div>
                <div className="header__right flex gap-3 items-center">
                  <div className="header__info flex gap-1 items-center">
                    <Avatar
                      src="https://i.pinimg.com/564x/46/5e/d1/465ed15a62706700067ce05878650579.jpg"
                      sx={{ width: "30px", height: "30px" }}
                    />
                    <h2 className="font-semibold pl-1 hidden md:block text-black">
                      Ashish Soni
                    </h2>
                  </div>
                  <IconButton>
                    <AppsIcon className="text-gray-700" />
                  </IconButton>
                  <IconButton>
                    <ForumIcon className="text-gray-700" />
                  </IconButton>
                  <IconButton>
                    <CircleNotificationsIcon className="text-gray-700" />
                  </IconButton>
                  <IconButton>
                    <ArrowDropDownIcon className="text-gray-700" />
                  </IconButton>
                </div>
              </>
            )}
          </div>
        </div>
      </AppBar>
    </>
  );
}

export default Header
