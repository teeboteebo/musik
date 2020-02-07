import React from 'react';
import './scss/compiler.scss'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import GamePage from './views/GamePage'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/game" component={GamePage} />
      </Switch>
    </Router>
  );
}

export default App;
