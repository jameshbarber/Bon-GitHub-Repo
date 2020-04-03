import React from 'react';

class LoginBox extends React.Component {
    render() {
        return (
            <div class="container-fluid h-100 h-sm-auto text-center">
                <div class="row h-100 h-sm-auto">
                    <div class="col-12 col-md-6 h-md-100 h-sm-auto order-2 order-md-1">
                        <div class="row align-items-center h-100 h-sm-auto">
                            <div class="col-12 col-md-10 col-lg-8 col-xl-6 mx-auto">
                                <h1 class="font-weight-heavy mb-3 mt-4 content-color-main text-left">Bon Receipts</h1>
                                <h4 class="font-weight-light mb-4 content-color-secondary text-left">Welcome back,<br></br>Please sign in to your account.</h4>
                                <div class="card mb-2">
                                    <div class="card-body p-0">
                                        <label for="inputEmail" class="sr-only">Email address</label>
                                        <input type="email" id="inputEmail" class="form-control form-control-lg border-0" placeholder="Email address" required="" autofocus=""></input>
                                        <hr class="my-0"></hr>
                                        <label for="inputPassword" class="sr-only">Password</label>
                                        <input type="password" id="inputPassword" class="form-control form-control-lg border-0" placeholder="Password" required=""></input>
                                    </div>
                                </div>
                                <small class="form-text text-muted">This is basic html demo page. Click on Sign in button and you will be redirected to dashbaord admin page.</small>
                                <div class="my-4 row">
                                    <div class="col-6 col-md">
                                        <div class="custom-control custom-checkbox">
                                            <input type="checkbox" class="custom-control-input" id="customCheck1" checked></input>
                                            <label class="custom-control-label" for="customCheck1">Remember Me</label>
                                        </div>
                                    </div>
                                    <div class="col-6 col-md text-right">
                                        <a href="" class="content-color-primary">Forgot Password?</a>
                                    </div>
                                </div>
                                <div class="text-left mb-4">
                                    <a href="index.html" class=" btn btn-primary pink-gradient">Sign In</a>
                                    <a href="signup1.html" class="float-right btn btn-outline-primary">Sign Up</a>
                                </div>

                            </div>
                        </div>
                    </div>
                    </div>
            </div>
        );
    }
}

export default LoginBox;
