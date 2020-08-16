import React from "react";
import Signup from './Signup';
import Login from './Login';
import { makeStyles } from "@material-ui/core/styles";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 200
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: "white",
    backgroundColor: '#FF5BA8'
  },
}));

const Auth = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* <Grid container spacing={3}>
        <Grid item xs={6}>
          <Paper className={classes.paper}>Signup<Signup /></Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>Login<Login/></Paper>
        </Grid>
      </Grid> */}
    </div>
  );
};

export default Auth;
