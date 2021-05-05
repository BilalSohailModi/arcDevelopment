import React, { useState, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Button from "@material-ui/core/Button";
import { makeStyles, useTheme } from "@material-ui/styles/";
import { Link } from "react-router-dom";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import logo from "../../assets/logo.svg";

function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyle = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.modal + 1,
  },
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "3em",
    [theme.breakpoints.down("md")]: {
      marginBottom: "2em",
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "1.25em",
    },
  },
  logo: {
    height: "8em",
    [theme.breakpoints.down("md")]: {
      height: "7em",
    },
    [theme.breakpoints.down("xs")]: {
      height: "5.5em",
    },
  },
  logoContainer: {
    padding: 0,
  },
  tabContainer: {
    marginLeft: "auto",
    "&:hover": { backgroundColor: "transparent" },
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: "25px",
  },
  button: {
    ...theme.typography.estimate,
    marginLeft: "50px",
    marginRight: "25px",
    borderRadius: "50px",
    height: "50px",
  },
  menu: {
    backgroundColor: theme.palette.common.blue,
    color: "white",
    borderRadius: "0px",
  },
  menuItem: {
    ...theme.typography.tab,
    opacity: 0.7,
    "&:hover": {
      opacity: 1,
    },
  },
  iconButtonContainer: {
    backgroundColor: "transparent",
    marginLeft: "auto",
  },
  drawerIcon: {
    color: "white",
    width: "50px",
    height: "50px",
  },
  drawer: {
    backgroundColor: theme.palette.common.blue,
  },
  drawerItem: {
    ...theme.typography.tab,
    color: "white",
    opacity: 0.7,
  },
  drawerEstimate: {
    backgroundColor: theme.palette.common.orange,
  },
  drawerItemSelected: {
    "& .MuiListItemText-root": {
      opacity: 1,
    },
  },
}));

const Headers = (props) => {
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  const [drawer, setDrawer] = useState(false);

  const classes = useStyle();
  const theme = useTheme();

  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const [anchorEl, setAnchoreEl] = useState(null);

  const changeHandlar = (event, value) => {
    props.setValue(value);
  };

  const clickHandlar = (event) => {
    setAnchoreEl(event.currentTarget);
  };

  const closeHandlar = (event) => {
    setAnchoreEl(null);
  };

  const menuItemClickedHandlar = (event, i) => {
    setAnchoreEl(null);

    props.setSelectIndex(i);
  };

  const menuItem = [
    { name: "Services", link: "/services", selectedRoute: 1, selectIndex: 0 },
    {
      name: "Custom Software Development",
      link: "/customsoftware",
      selectedRoute: 1,
      selectIndex: 1,
    },
    {
      name: "Mobile App Development",
      link: "/mobileapp",
      selectedRoute: 1,
      selectIndex: 2,
    },
    {
      name: "Website Development",
      link: "/website",
      selectedRoute: 1,
      selectIndex: 3,
    },
  ];

  const route = [
    { name: "Home", link: "/", selectedRoute: 0 },
    {
      name: "Services",
      link: "/services",
      selectedRoute: 1,
      ariaOwn: anchorEl ? "simple_menu" : undefined,
      ariaPopup: anchorEl ? "true" : undefined,
      mouseOver: (event) => clickHandlar(event),
    },
    { name: "The Revolution", link: "/revolution", selectedRoute: 2 },
    { name: "About Us", link: "/aboutUs", selectedRoute: 3 },
    { name: "Contact Us", link: "/contactUs", selectedRoute: 4 },
  ];

  useEffect(() =>
    [...menuItem, ...route].map((rout, index) => {
      switch (window.location.pathname) {
        case rout.link: {
          if (props.value !== rout.selectedRoute && props.value !== 1) {
            props.setValue(rout.selectedRoute);
          }
          break;
        }
        default:
          break;
      }
    })
  );

  const tabs = (
    <React.Fragment>
      <Tabs
        value={props.value}
        className={classes.tabContainer}
        onChange={changeHandlar}
        indicatorColor="primary"
      >
        {route.map((r) => (
          <Tab
            key={r.name}
            label={r.name}
            className={classes.tab}
            component={Link}
            to={r.link}
            aria-owns={r.ariaOwn}
            aria-haspopup={r.ariaPopup}
            onMouseOver={r.mouseOver}
          />
        ))}
      </Tabs>
      <Button variant="contained" color="secondary" className={classes.button}>
        Free Estimate
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={closeHandlar}
        MenuListProps={{ onMouseLeave: closeHandlar }}
        classes={{ paper: classes.menu }}
        elevation={0}
        style={{ zIndex: 1302 }}
      >
        {menuItem.map((option, index) => {
          return (
            <MenuItem
              key={index}
              onClick={(event) => {
                closeHandlar();
                props.setValue(1);
                menuItemClickedHandlar(event, index);
              }}
              component={Link}
              to={option.link}
              classes={{ root: classes.menuItem }}
              selected={index === props.selectIndex && props.value === 1}
            >
              {option.name}
            </MenuItem>
          );
        })}
      </Menu>
    </React.Fragment>
  );

  const Drawerr = (
    <React.Fragment>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={drawer}
        onClose={() => setDrawer(false)}
        onOpen={() => setDrawer(true)}
        classes={{ paper: classes.drawer }}
      >
        <div className={classes.toolbarMargin} />
        {route.map((r, index) => (
          <List disablePadding key={index}>
            <ListItem
              divider
              button
              onClick={() => {
                setDrawer(false);
                props.setValue(index);
              }}
              component={Link}
              to={r.link}
              selected={props.value === index}
              classes={{ selected: classes.drawerItemSelected }}
            >
              <ListItemText disableTypography className={classes.drawerItem}>
                {r.name}
              </ListItemText>
            </ListItem>
          </List>
        ))}
      </SwipeableDrawer>
      <IconButton
        onClick={() => setDrawer(!drawer)}
        className={classes.iconButtonContainer}
      >
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </React.Fragment>
  );
  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar disableGutters>
            {/* <Typography variant="h3">Arc Develpoment</Typography> */}
            <Button
              disableRipple
              component={Link}
              to="/home"
              onClick={() => props.setValue(0)}
              className={classes.logoContainer}
            >
              <img src={logo} className={classes.logo} alt="company logo" />
            </Button>
            {matches ? Drawerr : tabs}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
};

export default Headers;
