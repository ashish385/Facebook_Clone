import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Sidebar from "./Sidebar";
import SidebarOptions from "./SidebarOptions";
import StorefrontIcon from "@mui/icons-material/Storefront";
const pages = ["Products", "Services", "ABoutUs", "ContactUs"];
const DrawerComp = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <React.Fragment>
      <Drawer
        anchor="left"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <div className="bg-red-500">
          <SidebarOptions
            Icon={StorefrontIcon}
            // src="https://www.pngitem.com/pimgs/m/395-3953339_socialdealer-offers-facebook-marketplace-for-automotive-circle-hd.png"
            title="Marketplace "
          />
        </div>
      </Drawer>
      <IconButton
        sx={{ color: "white", marginLeft: "auto" }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon color="secondary" />
      </IconButton>
    </React.Fragment>
  );
};

export default DrawerComp;
