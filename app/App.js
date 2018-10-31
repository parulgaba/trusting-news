import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import TopContainer from "./components/TopContainer";

const muiTheme = createMuiTheme({
  typography: {
    useNextVariants: true
  }
});

render(
  <MuiThemeProvider theme={muiTheme}>
    <Router>
      <div>
        <Route exact path="/" component={TopContainer} />
      </div>
    </Router>
  </MuiThemeProvider>,
  document.getElementById("root")
);
