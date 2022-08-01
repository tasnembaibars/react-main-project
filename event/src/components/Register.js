
import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {

    const navigate = useNavigate();
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
    });
    const [error, setError] = useState([]);
    const handleSubmit = (e) => {
        e.preventDefault();

        axios({
            method: "post",
            url: "http://localhost:8000/api/register",
            data: user,

        }).then(res => {
            console.log(res)
            if (res.data.errors) {
                setError(res.data.errors)
            }
            else {
                // alert('Successfully Regiseration');
                navigate('/login')
            }

        }).catch(error => {
            console.log(error.response.data.message);

        });
    }

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

                                        <NavLink className="wpo-accountBtn" to="/login">
                                            <span class="">Log in</span>
                                        </NavLink>
                                    </div>
                                    <div class="image">
                                        <img src="assets/images/login.svg" alt="" />
                                    </div>
                                    <div class="back-home">
                                    </div>
                                </div>
                                <div class="wpo-accountForm form-style">
                                    <div class="fromTitle">
                                        <h2>Signup</h2>
                                        <p>Sign into your pages account</p>
                                        <div style={{color:'red'}}>{error[0]}</div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-12 col-md-12 col-12">
                                            <label for="name">Name</label>
                                            <input type="text" id="name" name="name" placeholder="Your name here.."
                                                onChange={(e) => setUser((prev)=>({...prev, name: e.target.value }))}
                                                value={user.name}
                                                required />
                                        </div>
                                        <div class="col-lg-12 col-md-12 col-12">
                                            <label>Email</label>
                                            <input type="email" id="email" name="email" placeholder="Your email here.."
                                                onChange={(e) => setUser((prev)=>({...prev, email: e.target.value }))}
                                                value={user.email}
                                                required />
                                        </div>
                                        <div class="col-lg-12 col-md-12 col-12">
                                            <div class="form-group">
                                                <label>Password</label>
                                                <input
                                                onChange={(e) => setUser((prev)=>({...prev, password: e.target.value }))}
                                                value={user.password}
                                                class="pwd2" type="password" placeholder="Your password here.." name="password" required 
                                                />
                                                <span class="input-group-btn">
                                                    <button class="btn btn-default reveal3" type="button"><i class="fa fa-eye"></i></button>
                                                </span>
                                            </div>
                                        </div>
                                        <div class="col-lg-12 col-md-12 col-12">
                                            <button type="submit" class="wpo-accountBtn">Signup</button>
                                        </div>
                                    </div>
                                    <h4 class="or"><span>OR</span></h4>
                                    <ul class="wpo-socialLoginBtn">
                                        <li><button class="facebook" tabindex="0" type="button"><span><i class="fa fa-facebook"></i></span></button></li>
                                        <li><button class="twitter" tabindex="0" type="button"><span><i class="fa fa-twitter"></i></span></button></li>
                                        <li><button class="linkedin" tabindex="0" type="button"><span><i class="fa fa-linkedin"></i></span></button></li>
                                    </ul>

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>


        </>

    );
}


export default Register;