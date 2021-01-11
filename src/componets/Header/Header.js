import React from "react";
import { AppBar, Toolbar, Typography, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import PhoneIcon from "@material-ui/icons/Phone";
import "./Header.css";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <div className="div-header">
          <div className="logo">
            <Typography variant="h6" color="inherit">
              Contact List
            </Typography>
          </div>
          <div className="icon">
            <PhoneIcon />
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
