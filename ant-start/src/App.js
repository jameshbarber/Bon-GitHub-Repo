import React from 'react'
import SiderDemo from './components/HomeDemo';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import LoginBox from './components/LoginBox';

const app = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <LoginBox />
        </Route>
        <Route path="/register">
        </Route>
        <Route path="/">
          <SiderDemo></SiderDemo>
        </Route>
      </Switch>
    </Router>

  );
}

export default app;

