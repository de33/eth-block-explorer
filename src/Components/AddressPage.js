import React, { useState, useEffect } from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import provider from "../getBlocks";
import { formatEther } from "@ethersproject/units";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const AddressPage = ({
  match: {
    params: { address },
  },
}) => {
  const classes = useStyles();
  const [balance, setBalance] = useState();

  const getBalance = async () => {
    const _balance = await provider().getBalance(address);
    setBalance(formatEther(_balance));
  };

  useEffect(() => {
    getBalance();
  }, []);
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          className={classes.title}
          align="center"
          color="textPrimary"
          gutterBottom
        >
          Address: {address}
        </Typography>
        <Typography
          variant="h9"
          component="h8"
          color="textSecondary"
          align="center"
        >
          Balance: {balance}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default AddressPage;
