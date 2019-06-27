import React from "react";
import "babel-polyfill";
import { Router as BrowserRouter, withRouter } from "react-router-dom";
import { Route } from "react-router";
import { createBrowserHistory } from "history";
import { useLocalStorageSetState } from "mooks";
import AgendaAndGoals from "./agenda-and-goals";
import NetworkStatusHoc from "./hoc/network-status";
import Sample from "./sample";
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
import HocsInAppian from "./hoc/hocs-in-appian";
import ApiCallHoc from "./hoc/api-call";
import FunctionComposition from "./hoc/function-composition";
import BringItAllTogetherHOC from "./hoc/bring-it-together";
import NetworkStatusRenderProps from "./render-props/network-status";
import RenderPropsApiCall from "./render-props/api-call";
import BringingItAllTogetherRenderProps from "./render-props/bringing-it-all-together";
import UseStateExample from "./basic-hook/use-state";
import UseEffectExample from "./basic-hook/use-effect-example";
import UseEffectExampleTimesTwo from "./basic-hook/use-effect-times-two";
import Destructuring from "./basic-hook/destructuring";
import NetworkStatusHooks from "./hooks/network-status";
import ApiCallHooks from "./hooks/api-call";
import BringingItAllTogetherHooks from "./hooks/bringing-it-all-together";
import Conclusion from "./conclusion";
import Children from "./render-props/children";
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
    component: Todo,
    subcomponents: [
      {
        path: "/example-hoc",
        humanReadableName: "HOCs in Appian!",
        component: HocsInAppian,
      },
      {
        path: "/network-status",
        humanReadableName: "Network Status",
        component: NetworkStatusHoc,
      },
      {
        path: "/api-call",
        humanReadableName: "Api Call",
        component: ApiCallHoc,
      },
      {
        path: "/function-composition",
        humanReadableName: "Function Composition",
        component: FunctionComposition,
      },
      {
        path: "/bringing-it-all-together",
        humanReadableName: "Bringing it all together",
        component: BringItAllTogetherHOC,
      },
    ],
  },
  {
    path: "/render-props",
    humanReadableName: "Render Props",
    component: Todo,
    subcomponents: [
      {
        path: "/children",
        humanReadableName: "Children 🚸",
        component: Children,
      },
      {
        path: "/network-status",
        humanReadableName: "Network Status",
        component: NetworkStatusRenderProps,
      },
      {
        path: "/api-call",
        humanReadableName: "Api Call",
        component: RenderPropsApiCall,
      },
      {
        path: "/bringing-it-all-together",
        humanReadableName: "Bringing it all together",
        component: BringingItAllTogetherRenderProps,
      },
    ],
  },
  {
    path: "/basic-hook",
    humanReadableName: "Basic Hook",
    component: Todo,
    subcomponents: [
      {
        path: "/destructuring",
        humanReadableName: "Destructuring",
        component: Destructuring,
      },
      {
        path: "/use-state",
        humanReadableName: "useState",
        component: UseStateExample,
      },
      {
        path: "/use-effect",
        humanReadableName: "useEffect",
        component: UseEffectExample,
      },
      {
        path: "/times-two-use-effect",
        humanReadableName: "count even number occurrences",
        component: UseEffectExampleTimesTwo,
      },
    ],
  },
  {
    path: "/rewrite-in-hooks",
    humanReadableName: "Writing it all in hooks",
    component: Todo,
    subcomponents: [
      {
        path: "/network-status",
        humanReadableName: "Network Status",
        component: NetworkStatusHooks,
      },
      {
        path: "/api-call",
        humanReadableName: "Api Call",
        component: ApiCallHooks,
      },
      {
        path: "/bringing-it-all-together",
        humanReadableName: "Bringing it all together",
        component: BringingItAllTogetherHooks,
      },
    ],
  },
  {
    path: "/conclusion",
    humanReadableName: "Conclusion",
    component: Conclusion,
  },
];
const RouterWithoutHOC = (props) => {
  const [isDrawerOpen, setDrawerOpen] = useLocalStorageSetState(
    true,
    "drawer-status",
  );
  React.useEffect(() => {
    if (props.location.pathname === "/") {
      props.history.push("/about-me");
    }
  }, [props.location.pathname]);
  const headerTitle = routes.find((route) =>
    props.location.pathname.includes(route.path),
  );
  return (
    <div>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" noWrap>
            {headerTitle && headerTitle.humanReadableName}
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
        <div style={{ marginTop: 100 }}>
          <Route exact path="/sample" component={Sample} />
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
        </div>
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
