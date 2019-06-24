import React, { Component } from "react";
import "babel-polyfill";
import { Router as BrowserRouter } from "react-router-dom";
import { Route } from "react-router";
import { createBrowserHistory } from "history";
import DisplayNetworkStatus from "./network-status";
import IncompleteCompThatUsesHooks from "./basic-hook/incomplete";

const browserHistory = createBrowserHistory();

class App extends Component {
  render() {
    return (
      <BrowserRouter history={browserHistory}>
        <div>
          <Route exact path="/" component={DisplayNetworkStatus} />
          <Route path="/basic-hook" component={IncompleteCompThatUsesHooks} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
