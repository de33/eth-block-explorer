import React, { useEffect, useState } from "react";
import { block } from "strip-comments";
import provider from "../getBlocks";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import moment from "moment";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import Address from "./Address";

const Block = (props) => {
  const [blockInfo, setBlockInfo] = useState({});

  const getBlockInfo = async () => {
    const _blockInfo = await provider().getBlockWithTransactions(props.num);
    setBlockInfo(_blockInfo);
  };

  useEffect(() => {
    getBlockInfo();
  }, []);

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

  console.log("hereee", blockInfo);

  return (
    // <div>
    //   <h5>I am block {blockInfo.number} </h5>
    // </div>
    <Card className={classes.card}>
      <CardContent className={classes.cardContent}>
        <Typography gutterBottom variant="h4" component="h2">
          Block{" "}
          <NavLink exact to={`/blocks/${blockInfo.number}`}>
            #{blockInfo.number}
          </NavLink>
        </Typography>
        <Typography variant="h9" component="h8">
          Mined {moment(blockInfo.timestamp * 1000).fromNow()} by{" "}
          <NavLink to={`/addresses/${blockInfo.miner}`}>
            {blockInfo.miner}
          </NavLink>
        </Typography>
        {/* <Typography>Timestamp {blockInfo.timestamp}</Typography>
        <Typography>Difficulty {blockInfo.difficulty}</Typography> */}
      </CardContent>
      <CardActions>
        <NavLink exact to={`/blocks/${blockInfo.number}`}>
          {" "}
          <Button size="small" color="primary">
            View more info
          </Button>
        </NavLink>
      </CardActions>
    </Card>
  );
};

export default Block;
