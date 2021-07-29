import React, { useState, useEffect } from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import provider from "../getBlocks";

const BlockPage = ({
  match: {
    params: { blockNumber },
  },
}) => {
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

  const [blockInfo, setBlockInfo] = useState({});

  const getBlockInfo = async () => {
    const _blockInfo = await provider().getBlockWithTransactions(
      parseInt(blockNumber)
    );
    setBlockInfo(_blockInfo);
  };

  useEffect(() => {
    getBlockInfo();
  }, []);

  return (
    <Card className={classes.card}>
      <CardContent className={classes.cardContent}>
        <Typography
          component="h2"
          variant="h3"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          Block Number: {blockNumber}
        </Typography>
        <Typography display="block" variant="h9" component="h8">
          Mined at {new Date(blockInfo.timestamp * 1000).toLocaleString()}
        </Typography>
        <Typography display="block" variant="h9" component="h8">
          Mined by {blockInfo.miner}
        </Typography>
        <Typography display="block" variant="h9" component="h8">
          Difficulty level: {blockInfo.difficulty}
        </Typography>
        <Typography display="block" variant="h9" component="h8">
          Nonce: {blockInfo.nonce}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default BlockPage;
