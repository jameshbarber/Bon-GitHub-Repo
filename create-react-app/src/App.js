import React from 'react';
import { Router, Link } from "@reach/router"
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import MaterialLink from '@material-ui/core/Link';
import LoginPage from './components/LoginPage';
import Dashboard from './components/dashboard/Dashboard';
import Checkout from './components/checkout/Checkout';
import SignIn from './components/sign-in/SignIn';
import Register from './components/sign-up/SignUp';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <MaterialLink color="inherit" href="https://material-ui.com/">
       BON DIGITAL
      </MaterialLink>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function App() {
  return (  
    <div>
    <Router>
      <Dashboard path="/" />
      <SignIn path="login" />
      <Register path="register" />
    </Router>
    <Copyright></Copyright>
    </div>
  );
}
