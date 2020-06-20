// import React from 'react';
// // import logo from './logo.svg';
// import './App.css';
// import Landing from "./components/landing/Landing"

// function App() {
//   return (
//     <div className="App">
//       <Landing />
//       
//     </div>
//   );
// }

// export default App;



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

const theme = createMuiTheme(customTheme);

const App = () => {
  let routes;

  routes = (
    <Switch>
      <Route path="/" exact>
        <Landing />
      </Route>
      <Route path="/console" exact>
        <ResponsiveDrawer>
          <ModelApp />
          {/* <Console /> */}
        </ResponsiveDrawer>
      </Route>
      <Redirect to="/" />
    </Switch>
  );

  return (
    <ThemeProvider theme={theme}>
        <Router>{routes}</Router>
    </ThemeProvider>
  );
};

export default App;
