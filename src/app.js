import React from "react";
import "babel-polyfill";
import { Router as BrowserRouter, withRouter } from "react-router-dom";
import { Route } from "react-router";
import { createBrowserHistory } from "history";
import DisplayNetworkStatus from "./network-status";
import IncompleteCompThatUsesHooks from "./basic-hook/incomplete";
import { Drawer, ListItem, ListItemText, List } from "@material-ui/core";
import AboutMe from "./about-me";

const browserHistory = createBrowserHistory();
const routes = {
  "about-me": "About me",
  "basic-hook": "Basic Hook",
};
const RouterWithoutHOC = (props) => {
  return (
    <div>
      <Route exact path="/about-me" component={AboutMe} />
      <Route exact path="/" component={DisplayNetworkStatus} />
      <Route path="/basic-hook" component={IncompleteCompThatUsesHooks} />
      <Drawer variant="permanent" anchor="right">
        <List>
          {Object.entries(routes).map(([routeName, humanReadableName]) => (
            <ListItem
              button
              key={routeName}
              onClick={() => {
                props.history.push(routeName);
              }}
            >
              <ListItemText primary={humanReadableName} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
};
const Router = withRouter(RouterWithoutHOC);
function App() {
  // const [route, setRoute] = useLocalStorageSetState("/", "current-route");
  return (
    <BrowserRouter history={browserHistory}>
      <div>
        <Router />
      </div>
    </BrowserRouter>
  );
}

export default App;
