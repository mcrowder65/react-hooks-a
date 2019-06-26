import React from "react";
import "babel-polyfill";
import { Router as BrowserRouter, withRouter } from "react-router-dom";
import { Route } from "react-router";
import { createBrowserHistory } from "history";
import IncompleteCompThatUsesHooks from "./basic-hook/incomplete";
import AgendaAndGoals from "./agenda-and-goals";
import {
  Drawer,
  ListItem,
  ListItemText,
  List,
  Divider,
  Grid,
  Collapse,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
} from "@material-ui/core";
import Menu from "@material-ui/icons/Menu";
import AboutMe from "./about-me";
import Todo from "./todo";

const browserHistory = createBrowserHistory();
const routes = [
  { path: "/about-me", humanReadableName: "About me", component: AboutMe },
  {
    path: "/agenda-and-goals",
    humanReadableName: "Agenda and Goals",
    component: AgendaAndGoals,
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
  {
    path: "/conclusion",
    humanReadableName: "Conclusion",
    component: Todo,
  },
];
const RouterWithoutHOC = (props) => {
  const [isDrawerOpen, setDrawerOpen] = React.useState(true);
  React.useEffect(() => {
    if (props.location.pathname === "/") {
      props.history.push("/about-me");
    }
  }, [props.location.pathname]);
  return (
    <div>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" noWrap>
            {
              routes.find((route) =>
                props.location.pathname.includes(route.path),
              ).humanReadableName
            }
          </Typography>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            edge="end"
            onClick={() => setDrawerOpen((state) => !state)}
          >
            <Menu />
          </IconButton>
        </Toolbar>
      </AppBar>
      <main>
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
      </main>
      <div />
      <Drawer variant="persistent" open={isDrawerOpen} anchor="right">
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
