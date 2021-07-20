import React, { useState } from "react";
import Block from "./Block";
import { Container } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const Blockrow = (props) => {
  console.log("hey", props);
  let rows = [];
  const blockNumber = props.num;
  const number = 6;
  const [row, setRow] = useState();

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
            <Block num={el}>index</Block>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Blockrow;
