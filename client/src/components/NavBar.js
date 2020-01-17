import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from "@material-ui/core/FormGroup";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";

import { useDarkMode } from "../hooks/useDarkMode";

const NavBar = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <FormGroup>
            <FormControlLabel
              control={
                <Switch
                  checked={darkMode}
                  onChange={toggleMode}
                  aria-label="dark mode switch"
                />
              }
              label={darkMode ? "dark mode" : "normal"}
            />
          </FormGroup>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
