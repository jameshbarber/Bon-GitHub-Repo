import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import { Home } from './components/Home';
import { Receipts } from './components/Receipts';
import { NoMatch } from './components/NoMatch';


function App() {
  return (
    <React.Fragment>
      <Router>
        <Sidebar/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/receipts" component={Receipts} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
