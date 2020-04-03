import React from 'react';
import logo from './logo.svg';
import './App.css';
import './src/css/blue.css';
import LoginBox from './comp/Login';
import PageBase from './comp/PageBase';
import { render } from "react-dom"
import { Router, Link } from "@reach/router"
import Bootstrap from 'bootstrap'

let Home = () => <div>Home</div>
let Dash = () => <div>Dash</div>

function App() {
  return (
    <Router>
      <PageBase path="/"/>
      <Dash path="dashboard" />
    </Router>
  );
}

export default App;
