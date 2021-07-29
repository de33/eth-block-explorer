//import provider, { , getBlockInfo } from "./getBlocks";
import Blockrow from "./Components/Blockrow/Blockrow";
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
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import { useStyles } from "./theme";
import useGetBlocks from "./hooks";
import Home from "./Components/Home";
import BlockPage from "./Components/BlockPage";

const App = () => {
  //const [error, setError] = useState(null);
  //const [loading, setLoading] = useState(true);

  // const [network, setNetwork] = React.useState("mainnet");
  const [open, setOpen] = useState(false);

  // const handleChange = (event) => {
  //   setNetwork(event.target.value);
  // };

  // const handleClose = () => {
  //   setOpen(false);
  // };

  // const handleOpen = () => {
  //   setOpen(true);
  // };

  const classes = useStyles();
  // debugger;

  return (
    <Router>
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
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path={`/blocks/:blockNumber`} exact component={BlockPage} />
          </Switch>
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
    </Router>
  );
};

export default App;
