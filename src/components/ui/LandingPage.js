import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Lottie from "react-lottie";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ButtonArrow from "./ButtonArrow";
import Typography from "@material-ui/core/Typography";
import animationData from "../../animations/landinganimation/data.js";

import useMediaQuery from "@material-ui/core/useMediaQuery";

import customSoftwareLogo from "../../assets/Custom Software Icon.svg";
const useStyle = makeStyles((theme) => ({
  animations: {
    maxWidth: "50em",
    minWidth: "21em",
    marginTop: "2em",
    marginLeft: "10%",
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
      maxWidth: "30em",
      minWidth: "15em",
    },
  },
  estimate: {
    ...theme.typography.estimate,
    borderRadius: 50,
    backgroundColor: theme.palette.common.orange,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  learnMore: {
    ...theme.typography.LearnMore,
    width: 135,
    height: 45,
    fontSize: "0.7rem",
  },
  learnMoreCustom: {
    ...theme.typography.LearnMore,
    height: 35,
    fontSize: "0.7rem",
    padding: 5,
    [theme.breakpoints.down("sm")]: {
      marginBottom: "2em",
    },
  },
  mainContainer: {
    marginTop: "5em",
    [theme.breakpoints.down("md")]: {
      marginTop: "3em",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: "1em",
    },
  },
  heroTextContainer: {
    minWidth: "21.5em",
    marginLeft: "1em",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
    },
  },
  specialText: {
    fontFamily: "Pacifico",
    color: theme.palette.common.blue,
  },
  subtitle1: {
    marginBottom: "1em",
  },
  servicesContainer: {
    marginTop: "12em",
    [theme.breakpoints.down("sm")]: {
      padding: 25,
    },
  },
}));

const LandingPage = (props) => {
  const classes = useStyle();
  const theme = useTheme();
  const matcheSm = useMediaQuery(theme.breakpoints.down("sm"));
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <Grid container direction="column" className={classes.mainContainer}>
      {/* hero Block */}
      <Grid item>
        <Grid container justify="center" alignItems="center" direction="row">
          <Grid sm item className={classes.heroTextContainer}>
            <Typography variant="h2" align="center">
              Bringing West Coast Technology <br /> to the Midwest
            </Typography>
            <Grid container justify="center" spacing={4}>
              <Grid item>
                <Button variant="contained" className={classes.estimate}>
                  Free Estimate
                </Button>
              </Grid>
              <Grid item>
                <Button variant="outlined" className={classes.learnMore}>
                  <span style={{ marginRight: "1em" }}>Learn More</span>
                  <ButtonArrow
                    width="15"
                    height="15"
                    fill={theme.palette.common.blue}
                  />
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid sm item className={classes.animations}>
            <Lottie options={defaultOptions} height={"100%"} width={"100%"} />
          </Grid>
        </Grid>
      </Grid>

      <Grid
        container
        className={classes.servicesContainer}
        justify={matcheSm ? "center" : undefined}
      >
        <Grid
          item
          style={{
            marginLeft: matcheSm ? undefined : "5em",
            textAlign: matcheSm ? "center" : undefined,
          }}
        >
          <Typography variant="h4">Custom Software Development</Typography>
          <Typography className={classes.subtitle1} variant="subtitle1">
            Save Energy Save Time Save Money
          </Typography>
          <Typography variant="subtitle1">
            Complete Digital Solutions, From Investigation to{" "}
            <span className={classes.specialText}>Celebrations</span>
          </Typography>
          <Button variant="outlined" className={classes.learnMoreCustom}>
            <span style={{ marginRight: "1em" }}>Learn More</span>
            <ButtonArrow
              width="15"
              height="15"
              fill={theme.palette.common.blue}
            />
          </Button>
        </Grid>
        <Grid item style={{ marginLeft: "2em" }}>
          <img src={customSoftwareLogo} alt="custom Software Logo" />
        </Grid>
      </Grid>
    </Grid>
  );
};
export default LandingPage;
