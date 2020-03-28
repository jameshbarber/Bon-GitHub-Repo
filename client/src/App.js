import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {storeName: ""};
    }

    callAPI() {
        fetch("http://localhost:3000/api/receipts")
            .then(res => res.text())
            .then(res => this.state)
            .catch(err => err);
    }

    componentDidMount() {
      console.log(this.callAPI());
        this.callAPI();
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Bon Receipts: The solution</h1>
                </header>
                <p className="App-intro">{this.state.apiResponse}</p>
            </div>
        );
    }
}

export default App;
