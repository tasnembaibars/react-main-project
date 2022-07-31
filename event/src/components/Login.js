
import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { userContext } from "../App";
import { useContext } from "react";
// import userContext
import { useNavigate } from "react-router-dom";
function Login() {
    const navigate = useNavigate();

    const { userData, setUserData } = useContext(userContext)

    const [user, setUser] = useState({
        email: "",
        password: "",
    });

    const [error, setError] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();

        axios({
            method: "post",
            url: "http://localhost:8000/api/login",
            data: user
        }).then((res) => {
            setUserData(res.data)
            if (res.data.errors) {
                setError(res.data.errors)
            } else {
                sessionStorage.setItem("user_id", res.data.id);
                navigate("/");
            }
        }).catch((error) => {
            console.log(error.response.data.message);
        });


    }

    console.log(userData)



    return (
        <>

            <div class="wpo-login-area">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                           
                            <form class="wpo-accountWrapper" action="#" onSubmit={handleSubmit}>
                                <div class="wpo-accountInfo">
                                    <div class="wpo-accountInfoHeader">
                                        <a href="#"><img src="assets/images/logo-2.png" alt="" /></a>
                                    </div>
                                    <div class="image">
                                        <img src="assets/images/login.svg" alt="" />
                                    </div>
                                    <div class="back-home">

                                        <NavLink className="wpo-accountBtn" to="/">
                                            <span class="">Back To Home</span>
                                        </NavLink>
                                    </div>
                                </div>
                                <div class="wpo-accountForm form-style">
                                    <div class="fromTitle">
                                        <h2>Login</h2>
                                        <p>Sign into your pages account</p>
                                        <p style={{ color: "red" }}>{error[0]}</p>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-12 col-md-12 col-12">
                                            <label>Email</label>
                                            <input
                                                onChange={(e) => setUser((prev) => ({
                                                    ...prev,
                                                    email: e.target.value,
                                                }))
                                                }
                                                value={user.email}
                                                type="email"
                                                id="email"
                                                name="email"
                                                placeholder="Your Email"
                                                required />
                                        </div>
                                        <div class="col-lg-12 col-md-12 col-12">
                                            <div class="form-group">
                                                <label >Password</label>
                                                <input onChange={(e) => setUser((prev) => ({
                                                    ...prev,
                                                    password: e.target.value,

                                                }))
                                                }
                                                    value={user.password}
                                                    class="pwd6"
                                                    type="password"
                                                    placeholder="Your Password"
                                                    name="password"
                                                    required />
                                                <span class="input-group-btn">
                                                    <button class="btn btn-default reveal6" type="button"><i class="fa fa-eye"></i></button>
                                                </span>
                                            </div>
                                        </div>
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