import React, { useState } from "react";
import Block from "../Block";
import { Container } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { Snackbar } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import provider from "../../getBlocks";
import useStyles from "./styles";

const Blockrow = ({ latestBlock, network = "bloop" }) => {
  const [blockNumber, setBlockNumber] = useState(latestBlock);

  const number = 6;
  const rows = new Array(number).fill().map((_, idx) => latestBlock - idx);
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  // const listener = () => {
  //   provider().on("block", _blockNumber => {
  //     if (_blockNumber > blockNumber) {
  //       setOpen(true);
  //       setBlockNumber(_blockNumber);
  //     }
  //   });
  // };
  // listener();
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

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
            <Block num={el} network={network}>
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
