//import provider, { getLatestBlock, getBlockInfo } from "./getBlocks";
import Blockrow from "./Components/Blockrow";
import { useEffect, useState } from "react";
import provider from "./getBlocks";
import AppBar from "./Components/Appbar";
import Button from "@material-ui/core/Button";
import CameraIcon from "@material-ui/icons/PhotoCamera";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import React from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";

const App = () => {
  //const lastBlock = getLatestBlock();
  //console.log("here", lastBlock);
  const [latestBlock, setLatestBlock] = useState(null);
  //const [error, setError] = useState(null);
  //const [loading, setLoading] = useState(true);
  const getBlock = async () => {
    const blockNumber = await provider().getBlockNumber();
    setLatestBlock(blockNumber);
  };
  const [network, setNetwork] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setNetwork(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  useEffect(() => {
    getBlock();
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

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <CameraIcon className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
            Album layout
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
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
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Latest block on Ethereum Mainnet: {latestBlock}
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                  <MenuItem>
                    {/* <Button variant="contained" color="primary">
                      Switch network
                    </Button> */}
                    <Button className={classes.button} onClick={handleOpen}>
                      Select network:
                    </Button>
                    <FormControl className={classes.formControl}>
                      {/* <InputLabel id="demo-controlled-open-select-label">
                        Network
                      </InputLabel> */}
                      <Select
                        labelId="demo-controlled-open-select-label"
                        id="demo-controlled-open-select"
                        open={open}
                        onClose={handleClose}
                        onOpen={handleOpen}
                        value={1}
                        onChange={handleChange}
                      >
                        <MenuItem value={1}>Ethereum Mainnet</MenuItem>
                        <MenuItem value={2}>Ropsten</MenuItem>
                        <MenuItem value={3}>Kovan</MenuItem>
                        <MenuItem value={4}>Goerli</MenuItem>
                      </Select>
                    </FormControl>
                  </MenuItem>
                </Grid>
              </Grid>
              <Blockrow num={latestBlock} />
            </div>
          </Container>
        </div>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Check out the source code below:
        </Typography>
        <Typography variant="body2" color="textSecondary" align="center">
          <Link color="inherit" href="https://github.com/de33">
            github.com/de33
          </Link>
        </Typography>
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
};

export default App;
