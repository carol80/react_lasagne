import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";


import { ThemeProvider } from "@material-ui/styles";
import customTheme from './components/theme/theme.json';
import { createMuiTheme } from "@material-ui/core/styles";

import ResponsiveDrawer from "./components/utils/ResponsiveDrawer";
import ModelApp from "./components/ModelPage/ModelApp"
// import Console from "./components/utils/Console";
import Landing from "./components/landing/Landing";
import CDQAdocs from "./components/CDQA/Ask.js"
import CDQAdemo from "./components/CDQA/AskDemo.js"
import HTRdocs from "./components/HTR/Hand.js"
import HTRdemo from "./components/HTR/HandDemo.js"
import QAdocs from "./components/QA/QA.js"
import QAdemo from "./components/QA/QADemo.js"
import Dashboard from "./components/dashboard/Dashboard"
import Activity from "./components/dashboard/Activity"
import Subscribe from "./components/subscribe/subscribe.js"

const theme = createMuiTheme(customTheme);

const App = () => {
  let routes;
  let token;
  let data = localStorage.getItem('userData')
  if (data != null){
    token = JSON.parse(data).token
  }


  if (token) {
    routes = (
      <Switch>
        <Route path="/console" exact>
            <ModelApp />
        </Route>
        <Route path="/dashboard" exact>
          <ResponsiveDrawer>
            <Dashboard />
          </ResponsiveDrawer>
        </Route>
        <Route path="/activity" exact>
          <ResponsiveDrawer>
            <Activity />
          </ResponsiveDrawer>
        </Route>
        <Route path="/HTRdocs" exact>
          <ResponsiveDrawer>
            <HTRdocs />
          </ResponsiveDrawer>
        </Route>
        <Route path="/HTRdemo" exact>
          <ResponsiveDrawer>
            <HTRdemo />
          </ResponsiveDrawer>
        </Route>
        <Route path="/QandAdocs" exact>
          <ResponsiveDrawer>
            <QAdocs />
          </ResponsiveDrawer>
        </Route>
        <Route path="/QandAdemo" exact>
          <ResponsiveDrawer>
            <QAdemo />
          </ResponsiveDrawer>
        </Route>
        <Route path="/CDQAdocs" exact>
          <ResponsiveDrawer>
            <CDQAdocs />
          </ResponsiveDrawer>
        </Route>
        <Route path="/CDQAdemo" exact>
          <ResponsiveDrawer>
            <CDQAdemo />
          </ResponsiveDrawer>
        </Route>
        <Redirect to="/dashboard" />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route path="/" exact>
          <Landing />
        </Route>
        <Route path="/SignUp" exact>
          <Subscribe />
        </Route>
        <Route path="/Login" exact>
          <Subscribe />
        </Route>
        <Redirect to="/" />
      </Switch>
    );
  }


  return (
    <ThemeProvider theme={theme}>
        <Router >{routes}</Router>
    </ThemeProvider>
  );
};

export default App;
