import React, { useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Drawer from "@material-ui/core/Drawer";
import { Link } from "react-router-dom";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { useAuth0 } from "./react-auth0-wrapper";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E20 90%)",
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "lightgreen"
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: "0 8px",
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
  }
}));

export default function ButtonAppBar(side) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  function toggleDrawer(booleanValue) {
    setOpen(true);
  }

  function handleDrawerClose() {
    setOpen(false);
  }

  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        style={{ backgroundColor: "lightblue", color: "white" }}
      >
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link className="Link" to="/">
              Home
            </Link>
          </Typography>
          <Typography
            variant="h6"
            className={classes.title}
            style={{ color: "black" }}
          >
            The Landscape Vids
          </Typography>

          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
          {!isAuthenticated && (
            <Button onClick={() => loginWithRedirect({})}>Log in</Button>
          )}

          {isAuthenticated && <Button onClick={() => logout()}>Log out</Button>}
        </Toolbar>
      </AppBar>

      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={open}
        onClose={handleDrawerClose}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "ltr" ? (
            <ChevronLeftIcon />
          ) : (
            <ChevronRightIcon />
          )}
        </IconButton>
        <ul>
          <li>
            <Link className="Link2" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="Link2" to="/waves">
              Waves Home
            </Link>
          </li>
          <li>
            <Link className="Link2" to="/autumn">
              Autumn Home
            </Link>
          </li>
          <li>
            <Link className="Link2" to="/fog">
              Fog Home
            </Link>
          </li>
          <li>
            <Link className="Link2" to="/space">
              Space Home
            </Link>
          </li>
        </ul>
      </Drawer>
    </div>
  );
}
