import React, { useState } from 'react';
import {  Link } from 'react-router-dom';
import './ChatLogin.css';
import './Register.css'; 
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import GoogleLogin from 'react-google-login';
import Group from './images/group.svg';
import Kuruvi from './images/kuruvi.png';
import { Button } from '@material-ui/core';
import { signin, signup } from '../src/actions/auth';
// import { facebookProvider } from "../config/authMethod";
// import { googleProvider } from "../config/authMethod";
// import socialMediaAuth from "../service/auth";
const initialState = { email: '', password: '', confirmPassword: '' }

const Register = () => {
    const [isSignup, setIsSignup] = useState(false);
    const [formData, setFormData] = useState(initialState);
    const handleChange = (e) => {
        setFormData({ ...formData, [ e.target.name ] : e.target.value }); 
    };
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if(isSignup) {
            dispatch(signup(formData, navigate)) 

        } else {
            dispatch(signin(formData, navigate))
        }
    };
    const googleSuccess = async (res) => {
        const result = res?.profileObj;
        const token = res?.tokenId;
        try {
            dispatch({ type: 'AUTH', data: { result, token } });
            navigate('/');
        } catch ( error ) {
            console.log(error);
        }
      };
    const googleFailure = (error) => {
        console.log(error);
        console.log('Google Sign in was unsuccessful. Try again later');
    };
    const googleError = () => console.log('Google Sign In was unsuccessful. Try again later');
        //    const {hasAccount, setHasAccount} = props;
        return (
            <form action="" onSubmit={handleSubmit}>
            <div id="login-page">
                <div id="login-card">
                    <h2 className="mt-5">Welcome to crime reducer community</h2>
                    <p className="text-lg">You are at the right place just connect<br /> with your details same in adhaar</p>
                    <p className="-mt-10 mb-2 text-lg font-semibold ml-96 mr-96 pt-2 pb-2 ">Connect with Otp<br/>
                    <i class="far fa-hand-point-down mr-1"></i>
                    <i class="far fa-hand-point-down mr-1"></i>
                    <i class="far fa-hand-point-down mr-1"></i>
                    <i class="far fa-hand-point-down"></i>
                    </p>
                    <div>
                    {/* <i class="fas fa-address-card absolute mt-2 ml-2 font-red-100 bg-red-100 p-2 rounded-full"></i>
                    <input
                    type="email"
                    placeholder="Name"
                    className="placeholder-red-200 border border-purple-400 rounded-full pl-14 pr-10 p-3 mb-4" 
                    placeholder="Email"
                    required
                    handleChange={handleChange}
                     /><br/>
                    </div>
                    <i class="fas fa-lock absolute mt-2 ml-2 font-red-100 bg-red-100 p-2 rounded-full"></i>
                    <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="placeholder-red-200 border border-purple-400 rounded-full pl-14 pr-10 p-3 mb-4" 
                    required
                    handleChange={handleChange}
                    /><br />
                    <i class="fas fa-lock absolute mt-2 ml-2 font-red-100 bg-red-100 p-2 rounded-full"></i>
                     <input
                    type="password"
                    placeholder="Confirm password"
                    name="confirmpassword"
                    className="placeholder-red-200 border border-purple-400 rounded-full pl-14 pr-10 p-3 mb-4" 
                    required
                    handleChange={handleChange}
                     /><br/>
                    <div className="buttons col-1 google">
                    <button 
                    className="btn-hover color-7"
                    type="submit"
                    onSubmit={handleSubmit}
                    >
                    <div className="icons mb-4 pb-4">
                         <p className="paragoog">Connect</p> 
                         </div>
                         </button> */}

                    
                    <div className="buttons col-1 google">
                    <button
                    className="btn-hover color-7"
                    >
                    <div className="icons mb-4 pb-4">
                    <a className="paragoog" href="otp">Connect</a> 
                    </div>
                    </button>
                    </div>
                </div><br /><br />
                <p className="-mt-10 mb-2 text-lg font-semibold ml-96 mr-96 pt-2 pb-2 ">Connect with Google<br/>
                    <i class="far fa-hand-point-down mr-1"></i>
                    <i class="far fa-hand-point-down mr-1"></i>
                    <i class="far fa-hand-point-down mr-1"></i>
                    <i class="far fa-hand-point-down"></i>
                    </p>
                <GoogleLogin
                    clientId = "927478434086-c4j3i3e6kl7pdfbb2v47vujd5hue2c8a.apps.googleusercontent.com"
                    render={(renderProps) => (
              <Button className="googel bg-gradient-to-r from-red-500 to-red-900 rounded-full text-white-100 mt-5" onClick={renderProps.onClick} startIcon={ <i class="fab fa-google "></i>} >
                Google Sign In
              </Button>
            )}
            onSuccess={googleSuccess}
            onFailure={googleError}
            cookiePolicy="single_host_origin"
          />
                <br/><br/>

                
                {/* <p className="text-center bg-gray-100 rounded-full ml-80 mr-96 -mb-16 pt-2 pb-2 shadow-xl">Already a user ? Sign in now: <a href="login"><span className="instea">Sign in</span></a></p> */}
                <div className="img-wrapper">
                <img src={Group} alt="png" className="chatcom"/>
                <img src={Kuruvi} alt="png" className="img-chat"/>
                </div>
                </div>
            </div>
            </form>
        );
}


export default Register;
