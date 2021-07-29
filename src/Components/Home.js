import React from "react";
//import provider, { getLatestBlock, getBlockInfo } from "./getBlocks";
import Blockrow from "./Blockrow/Blockrow";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import { NavLink } from "react-router-dom";
import { useStyles } from "../theme";
import useGetBlocks from "../hooks";
const Home = () => {
  const latestBlock = useGetBlocks();
  const classes = useStyles();
  return (
    <div className={classes.heroContent}>
      <Container maxWidth="lg">
        <Typography
          component="h2"
          variant="h3"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          View block information on Ethereum mainnet and testnets.
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
          Latest block on Ethereum Mainnet:{" "}
          <NavLink exact to={`/blocks/${latestBlock}`}>
            {latestBlock}
          </NavLink>
        </Typography>
        <div className={classes.heroButtons}>
          <Grid container spacing={2} justifyContent="center">
            {/* <Grid item>
        <MenuItem> */}
            {/* <Button variant="contained" color="primary">
            Switch network
          </Button> */}
            {/* <Button className={classes.button} onClick={handleOpen}>
            Select network:
          </Button>
          <FormControl className={classes.formControl}> */}
            {/* <InputLabel id="demo-controlled-open-select-label">
              Network
            </InputLabel> */}
            {/* <Select
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
              open={open}
              onClose={handleClose}
              onOpen={handleOpen}
              value={network}
              onChange={handleChange}
            >
              <MenuItem value={"mainnet"}>Ethereum Mainnet</MenuItem>
              <MenuItem value={"ropsten"}>Ropsten</MenuItem>
              <MenuItem value={"kovan"}>Kovan</MenuItem>
              <MenuItem value={"goerli"}>Goerli</MenuItem>
            </Select>
          </FormControl>
        </MenuItem>
      </Grid> */}
          </Grid>
          {/* <Blockrow num={latestBlock} network={network} /> */}
          <Blockrow latestBlock={latestBlock} />
        </div>
      </Container>
    </div>
  );
};

export default Home;
