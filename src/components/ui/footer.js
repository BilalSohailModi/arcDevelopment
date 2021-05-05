import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import adornment from "../../assets/Footer Adornment.svg";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import Hidden from "@material-ui/core/Hidden";

import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";
import instagram from "../../assets/instagram.svg";

const useStyle = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.common.blue,
    width: "100%",
    zIndex: 1302,
    position: "relative",
  },
  footerImage: {
    width: "25em",
    [theme.breakpoints.down("md")]: {
      width: "21em",
    },
    [theme.breakpoints.down("xs")]: {
      width: "15em",
    },
    verticalAlign: "bottom",
  },
  grid: {
    position: "absolute",
  },
  gridItem: {
    margin: "3em",
  },
  menuItemLink: {
    textDecoration: "none",
    color: "white",
  },
  icon: {
    width: "4em",
    height: "4em",
    [theme.breakpoints.down("md")]: {
      width: "2.5em",
      height: "2.5em",
    },
  },
  IconGrid: {
    position: "absolute",
    marginTop: "-6em",
    right: "1.25em",
    [theme.breakpoints.down("md")]: {
      right: "0.6em",
    },
  },
}));
const Footer = (props) => {
  const classes = useStyle();

  return (
    <footer className={classes.footer}>
      <Hidden mdDown>
        <Grid container className={classes.grid} spacing={2} justify="center">
          <Grid item>
            <Grid
              container
              spacing={2}
              direction="column"
              className={classes.gridItem}
            >
              <Grid
                item
                className={classes.menuItemLink}
                component={Link}
                to="/"
                onClick={() => {
                  props.setValue(0);
                }}
              >
                Home
              </Grid>
            </Grid>
          </Grid>

          <Grid item>
            <Grid
              container
              spacing={2}
              direction="column"
              className={classes.gridItem}
            >
              <Grid
                item
                className={classes.menuItemLink}
                component={Link}
                to="/services"
                onClick={() => {
                  props.setSelectIndex(0);
                  props.setValue(1);
                }}
              >
                Services
              </Grid>
              <Grid
                item
                className={classes.menuItemLink}
                component={Link}
                to="/customsoftware"
                onClick={() => {
                  props.setSelectIndex(1);
                  props.setValue(1);
                }}
              >
                Custom Software Development
              </Grid>
              <Grid
                item
                className={classes.menuItemLink}
                component={Link}
                to="/mobileapp"
                onClick={() => {
                  props.setSelectIndex(2);
                  props.setValue(1);
                }}
              >
                Mobile App Development
              </Grid>
              <Grid
                item
                className={classes.menuItemLink}
                component={Link}
                to="/website"
                onClick={() => {
                  props.setSelectIndex(3);
                  props.setValue(1);
                }}
              >
                Website Development
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid
              container
              spacing={2}
              direction="column"
              className={classes.gridItem}
            >
              <Grid
                item
                className={classes.menuItemLink}
                component={Link}
                to="/revolution"
                onClick={() => {
                  props.setValue(2);
                }}
              >
                The Revolution
              </Grid>
              <Grid
                item
                className={classes.menuItemLink}
                component={Link}
                to="/revolution"
                onClick={() => {
                  props.setValue(2);
                }}
              >
                Vision
              </Grid>
              <Grid
                item
                className={classes.menuItemLink}
                component={Link}
                to="/revolution"
                onClick={() => {
                  props.setValue(2);
                }}
              >
                Technology
              </Grid>
              <Grid
                item
                className={classes.menuItemLink}
                component={Link}
                to="/revolution"
                onClick={() => {
                  props.setValue(2);
                }}
              >
                Process
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid
              container
              direction="column"
              className={classes.gridItem}
              spacing={2}
            >
              <Grid
                item
                className={classes.menuItemLink}
                component={Link}
                to="/aboutus"
                onClick={() => {
                  props.setValue(3);
                }}
              >
                About Us
              </Grid>
              <Grid
                item
                className={classes.menuItemLink}
                component={Link}
                to="/aboutus"
                onClick={() => {
                  props.setValue(3);
                }}
              >
                History
              </Grid>
              <Grid
                item
                className={classes.menuItemLink}
                component={Link}
                to="/aboutus"
                onClick={() => {
                  props.setValue(3);
                }}
              >
                Team
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid
              container
              direction="column"
              className={classes.gridItem}
              spacing={2}
            >
              <Grid
                item
                className={classes.menuItemLink}
                component={Link}
                to="/contactus"
                onClick={() => {
                  props.setValue(4);
                }}
              >
                Contact Us
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>
      <img
        src={adornment}
        alt="Black Adornment"
        className={classes.footerImage}
      />
      <Grid
        container
        className={classes.IconGrid}
        justify="flex-end"
        spacing={2}
      >
        <Grid item>
          <img src={facebook} alt="Facebook" className={classes.icon} />
        </Grid>
        <Grid item>
          <img src={twitter} alt="twitter" className={classes.icon} />
        </Grid>
        <Grid item>
          <img src={instagram} alt="instagram" className={classes.icon} />
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
