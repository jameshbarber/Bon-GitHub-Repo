import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// <!-- Material design icons CSS -->
// <link rel="stylesheet" href="vendor/materializeicon/material-icons.css">
import "./src/vendor/animatecss/animate.css";
import "./src/vendor/swiper/css/swiper.min.css";
import "./src/vendor/bootstrap-daterangepicker-master/daterangepicker.css";
import "./src/vendor/footable-bootstrap/css/footable.bootstrap.min.css";
import "./src/vendor/jquery-jvectormap/jquery-jvectormap-2.0.3.css";
import "./src/css/purplesidebar.css"
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
