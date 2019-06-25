import React from "react";
import "babel-polyfill";
import { Router as BrowserRouter, withRouter } from "react-router-dom";
import { Route } from "react-router";
import { createBrowserHistory } from "history";
import IncompleteCompThatUsesHooks from "./basic-hook/incomplete";
import { Drawer, ListItem, ListItemText, List } from "@material-ui/core";
import AboutMe from "./about-me";

const browserHistory = createBrowserHistory();
const routes = [
  { path: "/about-me", humanReadableName: "About me", component: AboutMe },
  {
    path: "/basic-hook",
    humanReadableName: "Basic Hook",
    component: IncompleteCompThatUsesHooks,
  },
];
const RouterWithoutHOC = (props) => {
  console.log(props);
  return (
    <div>
      {routes.map((route) => {
        return (
          <Route
            path={route.path}
            component={route.component}
            key={route.path}
          />
        );
      })}
      <Drawer variant="permanent" anchor="right">
        <List>
          {routes.map((route, index) => (
            <ListItem
              style={{
                backgroundColor:
                  props.location.pathname === route.path
                    ? "lightgray"
                    : undefined,
              }}
              button
              key={route.path}
              onClick={() => {
                props.history.push(route.path);
              }}
            >
              <ListItemText
                primary={`#${index + 1} ${route.humanReadableName}`}
              />
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
