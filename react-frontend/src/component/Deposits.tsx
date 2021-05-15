import React from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Title from "./Title";
import { Grid, Paper } from "@material-ui/core";
import clsx from "clsx";

function preventDefault(event: any) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  depositContext: {
    flex: 1,
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 240,
  },
}));

export default function Deposits() {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <Grid item xs={12} md={4} lg={3}>
      <Paper className={fixedHeightPaper}>
        <Title>Recent Deposits</Title>
        <Typography component="p" variant="h4">
          $3,024.00
        </Typography>
        <Typography color="textSecondary" className={classes.depositContext}>
          on 15 March, 2019
        </Typography>
        <div>
          <Link color="primary" href="#" onClick={preventDefault}>
            View balance
          </Link>
        </div>
      </Paper>
    </Grid>
  );
}
