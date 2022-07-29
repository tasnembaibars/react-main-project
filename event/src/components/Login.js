
import React from "react";
import { NavLink } from "react-router-dom";

function Login() {
    return (
        <>
            {/* <!-- start preloader --> */}
            {/* <div class="preloader">
        <div class="vertical-centered-box">
            <div class="content">
                <div class="loader-circle"></div>
                <div class="loader-line-mask">
                    <div class="loader-line"></div>
                </div>
                <img src="assets/images/favicon.png" alt=""/>
            </div>
        </div>
    </div> */}
            {/* <!-- end preloader --> */}
            <div class="wpo-login-area">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <form class="wpo-accountWrapper" action="#">
                                <div class="wpo-accountInfo">
                                    <div class="wpo-accountInfoHeader">
                                        <a href="#"><img src="assets/images/logo-2.png" alt="" /></a>
                                        {/* <a class="wpo-accountBtn" href="register.html">
                                        <span class="">Create Account</span>
                                    </a> */}

                                    </div>
                                    <div class="image">
                                        <img src="assets/images/login.svg" alt="" />
                                    </div>
                                    <div class="back-home">
                                        {/* <a class="wpo-accountBtn" href="index.html">
                                         <span class="">Back To Home</span>
                                         </a> */}

                                        <NavLink className="wpo-accountBtn" to="/">
                                            <span class="">Back To Home</span>
                                        </NavLink>
                                    </div>
                                </div>
                                <div class="wpo-accountForm form-style">
                                    <div class="fromTitle">
                                        <h2>Login</h2>
                                        <p>Sign into your pages account</p>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-12 col-md-12 col-12">
                                            <label>Email</label>
                                            <input type="email" id="email" name="email" placeholder="Your Email" required/>
                                        </div>
                                        <div class="col-lg-12 col-md-12 col-12">
                                            <div class="form-group">
                                                <label >Password</label>
                                                <input class="pwd6" type="password" placeholder="Your Password"  name="pass" required/>
                                                <span class="input-group-btn">
                                                    <button class="btn btn-default reveal6" type="button"><i class="fa fa-eye"></i></button>
                                                </span>
                                            </div>
                                        </div>
                                        {/* <div class="col-lg-12 col-md-12 col-12">
                                            <div class="check-box-wrap">
                                                <div class="input-box">
                                                    <input type="checkbox" id="fruit4" name="fruit-4" value="Strawberry" />
                                                    <label for="fruit4">Remember Me</label>
                                                </div>
                                                <div class="forget-btn">
                                                    <a href="forgot.html">Forgot Password?</a>
                                                </div>
                                            </div>
                                        </div> */}
                                        <div class="col-lg-12 col-md-12 col-12">
                                            <button type="submit" class="wpo-accountBtn">Login</button>
                                        </div>
                                    </div>
                                    <h4 class="or"><span>OR</span></h4>
                                    <ul class="wpo-socialLoginBtn">
                                        <li><button class="facebook" tabindex="0" type="button"><span><i class="fa fa-facebook"></i></span></button></li>
                                        <li><button class="twitter" tabindex="0" type="button"><span><i class="fa fa-twitter"></i></span></button></li>
                                        <li><button class="linkedin" tabindex="0" type="button"><span><i class="fa fa-linkedin"></i></span></button></li>
                                    </ul>
                                    <p class="subText">Don't have an account?<NavLink to="/register"> Create free account</NavLink></p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>


        </>

    );
}


export default Login;