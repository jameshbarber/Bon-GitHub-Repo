import React, { Component } from "react";
import logo from '../logo.svg';
import '../App.css';

class LoginBox extends Component {

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
            <div data-overlay class="min-vh-100 bg-light d-flex flex-column justify-content-md-center">
            <section class="py-3">
              <div class="container">
                <div class="row justify-content-center">
                  <div class="col-xl-4 col-lg-5 col-md-6">
                    <div class="card card-body shadow">
                      <h1 class="h5 text-center">Sign In</h1>
                      <form>
                        <div class="form-group">
                          <input type="email" class="form-control" name="sign-up-email" placeholder="Email Address"></input>
                        </div>
                        <div class="form-group">
                          <input type="password" class="form-control" name="sign-up-password" placeholder="Password"></input>
                          <div class="text-right text-small mt-2">
                            <a href="account-forgot-password.html">Forgot Password?</a>
                          </div>
                        </div>
                        <div class="form-group">
                          <div class="custom-control custom-checkbox text-small">
                            <input type="checkbox" class="custom-control-input" id="sign-in-remember"></input>
                            <label class="custom-control-label" for="sign-in-remember">Remember me next time</label>
                          </div>
                        </div>
                        <button class="btn btn-primary btn-block" type="submit">Sign In</button>
                      </form>
                    </div>
                    <div class="text-center text-small mt-3">
                      Don't have an account? <a href="account-sign-up-simple.html">Sign up here</a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        );
    }
}

export default LoginBox;
