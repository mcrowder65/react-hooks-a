import React from "react";
import "babel-polyfill";
import { Router as BrowserRouter, withRouter } from "react-router-dom";
import { Route } from "react-router";
import { createBrowserHistory } from "history";
import IncompleteCompThatUsesHooks from "./basic-hook/incomplete";
import {
  Drawer,
  ListItem,
  ListItemText,
  List,
  Divider,
  Grid,
  Collapse,
} from "@material-ui/core";
import AboutMe from "./about-me";
import Todo from "./todo";

const browserHistory = createBrowserHistory();
const routes = [
  { path: "/about-me", humanReadableName: "About me", component: AboutMe },
  {
    path: "/agenda-and-goals",
    humanReadableName: "Agenda and Goals",
    component: Todo,
  },
  {
    path: "/hocs",
    humanReadableName: "Higher Order Components",
    subcomponents: [
      {
        path: "/example-hoc",
        humanReadableName: "HOCs in Appian!",
        component: Todo,
      },
      {
        path: "/network-status",
        humanReadableName: "Network Status",
        component: Todo,
      },
      {
        path: "/api-call",
        humanReadableName: "Api Call",
        component: Todo,
      },
      {
        path: "/function-composition",
        humanReadableName: "Function Composition",
        component: Todo,
      },
      {
        path: "/bringing-it-all-together",
        humanReadableName: "Bringing it all together",
        component: Todo,
      },
    ],
  },
  {
    path: "/render-props",
    humanReadableName: "Render Props",
    subcomponents: [
      {
        path: "/network-status",
        humanReadableName: "Network Status",
        component: Todo,
      },
      {
        path: "/api-call",
        humanReadableName: "Api Call",
        component: Todo,
      },
      {
        path: "/bringing-it-all-together",
        humanReadableName: "Bringing it all together",
        component: Todo,
      },
    ],
  },
  {
    path: "/basic-hook",
    humanReadableName: "Basic Hook",
    subcomponents: [
      {
        path: "/use-state",
        humanReadableName: "useState",
        component: Todo,
      },
      {
        path: "/use-effect",
        humanReadableName: "useEffect",
        component: Todo,
      },
      {
        path: "/times-two-use-effect",
        humanReadableName: "useEffect times two!",
        component: Todo,
      },
    ],
  },
  {
    path: "/rewrite-in-hooks",
    humanReadableName: "Writing it all in hooks",
    subcomponents: [
      {
        path: "/network-status",
        humanReadableName: "Network Status",
        component: Todo,
      },
      {
        path: "/api-call",
        humanReadableName: "Api Call",
        component: Todo,
      },
      {
        path: "/bringing-it-all-together",
        humanReadableName: "Bringing it all together",
        component: Todo,
      },
    ],
  },
  {
    path: "/time-permitting",
    humanReadableName: "Time permitting extras!",
    subcomponents: [
      {
        path: "/use-memo",
        humanReadableName: "useMemo",
        component: Todo,
      },
    ],
  },
];
const RouterWithoutHOC = (props) => {
  return (
    <div>
      {routes.map((route, index) => {
        return (
          <React.Fragment key={`${route.path}-${index}`}>
            <Route exact path={route.path} component={route.component} />
            {(route.subcomponents || []).map((subroute, i) => {
              return (
                <Route
                  exact
                  path={`${route.path}${subroute.path}`}
                  component={subroute.component}
                  key={`${route.path}-${subroute.path}-${i}`}
                />
              );
            })}
          </React.Fragment>
        );
      })}
      <Drawer variant="permanent" anchor="right">
        <List>
          {routes.map((route, index) => (
            <React.Fragment key={`drawer-${route.path}-${index}`}>
              <ListItem
                style={{
                  backgroundColor: props.location.pathname.includes(route.path)
                    ? "lightgray"
                    : undefined,
                }}
                button
                onClick={() => {
                  props.history.push(
                    `${route.path}${
                      route.subcomponents ? route.subcomponents[0].path : ""
                    }`,
                  );
                }}
              >
                <ListItemText
                  primary={`#${index + 1} ${route.humanReadableName}`}
                />
              </ListItem>
              <Divider />
              {route.subcomponents ? (
                <Collapse
                  component="li"
                  in={props.location.pathname.includes(route.path)}
                >
                  <List>
                    {(route.subcomponents || []).map((subroute, i) => {
                      return (
                        <ListItem
                          key={`subdrawer-${subroute.path}-${i}`}
                          button
                          style={{
                            backgroundColor: props.location.pathname.includes(
                              subroute.path,
                            )
                              ? "lightblue"
                              : undefined,
                          }}
                          onClick={() => {
                            props.history.push(`${route.path}${subroute.path}`);
                          }}
                        >
                          <Grid container justify="flex-end">
                            <Grid item>
                              <ListItemText>
                                {subroute.humanReadableName}
                              </ListItemText>
                            </Grid>
                          </Grid>
                        </ListItem>
                      );
                    })}
                  </List>
                  <Divider />
                </Collapse>
              ) : null}
            </React.Fragment>
          ))}
        </List>
      </Drawer>
    </div>
  );
};
const Router = withRouter(RouterWithoutHOC);
function App() {
  return (
    <BrowserRouter history={browserHistory}>
      <div>
        <Router />
      </div>
    </BrowserRouter>
  );
}

export default App;
