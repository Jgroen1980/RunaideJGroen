import React from 'react';
import './App.scss';
import {BrowserRouter as Router, Switch, Route,} from 'react-router-dom';


import ResultsPage from "./pages/Results";
import Homepage from "./pages/Home";
import AddRunPage from "./pages/AddRun";
import AboutPage from "./pages/About";




function App() {
  return (

      <Router>
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
            <Route exact path="/results">
              <ResultsPage />
            </Route>
            <Route exact path="/addrun">
              <AddRunPage />
            </Route>
          <Route exact path="/about">
            <AboutPage />
          </Route>
        </Switch>
      </Router>
  );
}

export default App;
