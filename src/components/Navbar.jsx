import React, { useState } from "react";
import {
  AppBar,
  Button,
  IconButton,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import AddBusinessRoundedIcon from "@mui/icons-material/AddBusinessRounded";
import HomeIcon from "@mui/icons-material/Home";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import PeopleIcon from "@mui/icons-material/People";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import AppsIcon from "@mui/icons-material/Apps";
import ForumIcon from "@mui/icons-material/Forum";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import DrawerComp from "./DrawerComp";
const NavItem = [
  {
    icon: "HomeIcon",
    link: "/",
  },
  {
    icon: "OndemandVideoIcon",
    link: "#",
  },
  {
    icon: "PeopleIcon",
    link: "#",
  },
  {
    icon: "SportsEsportsIcon",
    link: "#",
  },
];

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const Navbar = () => {
  const [value, setValue] = useState();
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);
  return (
    <>
      <AppBar sx={{ bgcolor: "white", color: "black" }}>
        <Toolbar>
          <AddBusinessRoundedIcon sx={{ transform: "scale(2)" }} />
          {isMatch ? (
            <>
              <Typography sx={{ fontSize: "2rem", paddingLeft: "10%" }}>
                Flow
              </Typography>
              <DrawerComp />
            </>
          ) : (
            <>
              <Tabs
                sx={{ marginLeft: "auto" }}
                indicatorColor="#1D5D9B"
                textColor="inherit"
                value={value}
                onChange={(e, value) => setValue(value)}
              >
                <LinkTab label={<HomeIcon fontSize="large" />} href="/drafts" />
                <LinkTab
                  label={<OndemandVideoIcon fontSize="large" />}
                  href="/trash"
                />
                <LinkTab
                  label={<PeopleIcon fontSize="large" />}
                  href="/trash"
                />
                <LinkTab
                  label={<SportsEsportsIcon fontSize="large" />}
                  href="/trash"
                />
              </Tabs>
              <Tabs
                sx={{ marginLeft: "auto" }}
                indicatorColor=""
                textColor="inherit"
                value={value}
                onChange={(e, value) => setValue(value)}
              >
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
              </Tabs>
            </>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
