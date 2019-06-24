import React, { Component } from "react";
import { Router as BrowserRouter } from "react-router-dom";
import { Route } from "react-router";
import { createBrowserHistory } from "history";
import { Grid } from "@material-ui/core";
import DisplayNetworkStatus from "./network-status";

const browserHistory = createBrowserHistory();

function withNextRoute(Comp, next, prev) {
  function Wrapper(props) {
    return (
      <Grid
        container
        direction="column"
        justify="space-between"
        style={{ height: "95vh" }}
      >
        <Grid item>
          <Comp {...props} />
        </Grid>
        <Grid container>
          <Grid item>
            <button onClick={() => browserHistory.push(next)}>Next</button>
          </Grid>
          <Grid item>
            {prev && (
              <button onClick={() => browserHistory.push(prev)}>
                Previous
              </button>
            )}
          </Grid>
        </Grid>
      </Grid>
    );
  }
  return Wrapper;
}
class App extends Component {
  render() {
    return (
      <BrowserRouter history={browserHistory}>
        <div>
          <Route exact path="/" component={DisplayNetworkStatus} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
