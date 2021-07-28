import React, { useState } from "react";
import Block from "./Block";
import { Container } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { Snackbar } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import provider from "../getBlocks";

const Blockrow = (props) => {
  console.log("hey", props);
  let rows = [];
  const [blockNumber, setBlockNumber] = useState(props.num);
  const number = 6;
  const [row, setRow] = useState();
  const [open, setOpen] = useState(false);

  //   provider().on("block", (_blockNumber) => {
  //     if (_blockNumber > blockNumber) {
  //       setOpen(true);
  //       setBlockNumber(_blockNumber);
  //     }
  //   });

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const createBlockRow = () => {
    for (let i = 0; i < number; i++) {
      rows.push(blockNumber - i);
    }
  };

  const useStyles = makeStyles((theme) => ({
    icon: {
      marginRight: theme.spacing(2),
    },
    heroContent: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
      marginTop: theme.spacing(4),
    },
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    card: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
    },
    cardMedia: {
      paddingTop: "56.25%", // 16:9
    },
    cardContent: {
      flexGrow: 1,
    },
    footer: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(6),
    },
  }));

  const classes = useStyles();

  createBlockRow();
  return (
    // <div>
    //   {rows.map((el, index) => {
    //     return <Block num={el}>index</Block>;
    //   })}
    // </div>
    <Container className={classes.cardGrid} maxWidth="lg">
      {/* End hero unit */}
      <Grid container spacing={3}>
        {rows.map((el, index) => (
          <Grid item key={el} xs={12} sm={6} md={4}>
            <Block num={el} network={props.network}>
              index
            </Block>
          </Grid>
        ))}
      </Grid>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert onClose={handleClose} severity="info">
          A new block has been mined! Click to update.
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default Blockrow;
