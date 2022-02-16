import './Login.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Chat from './images/chatcom.svg';
import Kuruvi from './images/kuruvi.png';
import GoogleLogin from 'react-google-login';
import { toRenderProps } from 'recompose';
import { Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const initialState = { email: '', password: '' }




const Login = () => {
    const [form, setForm] = useState( initialState );
    const [isSignUp, setIsSignUp] = useState(false);
    const [formData, setFormData] = useState(initialState);
    const handleSubmit = (e) => {
        e.preventDefault();

        // if (isSignup) {
        //     dispatch(signup(from, history));
        // } else {
        //     dispatch(signin(form, history));
        // }
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
    // const googleFailure = (error) => {
    //     console.log(error);
    //     console.log('Google Sign in was unsuccessful. Try again later');
    // };
    const googleError = () => console.log('Google Sign In was unsuccessful. Try again later');

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

    const dispatch = useDispatch();
    const navigate = useNavigate();

return (
    <form action="" onSubmit={handleSubmit}>
        <div id="login-page">
            <div id="login-card">
                <h2 className="-mt-4">Welcome to crime reducer community</h2>
                <p className="text-lg">You are at the right place just login here<br /> we will see the rest of your work</p>
                <p className="-mt-10 mb-2 text-lg font-semibold ml-96 mr-96 pt-2 pb-2 ">{isSignUp ? 'Register here' : 'Login here'}<br/>
                    <i class="far fa-hand-point-down mr-1"></i>
                    <i class="far fa-hand-point-down mr-1"></i>
                    <i class="far fa-hand-point-down mr-1"></i>
                    <i class="far fa-hand-point-down"></i>
                    </p>
                <div>
                <i class="fas fa-address-card absolute mt-2 ml-2 font-red-100 bg-red-100 p-2 rounded-full"></i>
                <input
                type="email"
                placeholder="Email"
                className="placeholder-red-200 border border-purple-400 rounded-full pl-14 pr-10 p-3 mb-10"
                autoFocus
                handleChange={handleChange}
                required
                />
                <br/>
                </div>
                <div>
                <i class="fas fa-lock absolute -mt-1 ml-2 font-red-100 bg-red-100 p-2 rounded-full"></i>
                <input
                 type="password"
                 placeholder="Password"
                 className="placeholder-red-200 border border-purple-400 rounded-full pl-14 pr-10 p-3 -mt-4 mb-5"
                 required
                 handleChange={handleChange}
                //  onChange={() => {setPasswordReg(e.target.value)}}
                 />
                 </div>
                 <div className="btnContainer">
                         <>
                         <div className="buttons col-1 google">
                         <button className="btn-hover color-7"
                         type="submit"
                         onSubmit="handleSubmit"
                         >
                         <div className="icons">
                         <p className="paragoog">Sign in</p>
                         <br/>
                         <br/>
                         </div>
                     </button>
                     <p className="mb-2 -mt-2">Or with</p>
                     <GoogleLogin
                    clientId = "927478434086-c4j3i3e6kl7pdfbb2v47vujd5hue2c8a.apps.googleusercontent.com"
                    render={(renderProps) => (
              <Button className="googel bg-gradient-to-r from-red-500 to-red-900 rounded-full text-white-100" onClick={renderProps.onClick} startIcon={ <i class="fab fa-google "></i>} >
                Google Sign In
              </Button>
            )}
            onSuccess={googleSuccess}
            onFailure={googleError}
            cookiePolicy="single_host_origin"
          />

                </div>
                <p className=" logpara text-center bg-gray-100 rounded-full mt-10 ml-20 -mb-20 pt-2 pb-2 shadow-xl">Not a user ? Sign up now:<a href="/register"><span className="instea">Sign up</span></a></p>
                </>
                </div>

                 {/* Dont delete */}


                {/* <div className="buttons col-1 google">
                <button className="btn-hover color-7">
                <div className="icons">
                     <p className="paragoog">Connect</p>
                     </div>
                     </button>
                </div> */}
                <br/>

                {/* Dont delete */}


            {/* <p className="text-center bg-gray-100 rounded-full ml-80 mr-80 -mb-16 pt-2 pb-2 shadow-xl">Not a user ? Sign up now: <Link to="/register"><a className="instea">Sign up</a></Link></p> */}

            <div className="img-wrapper">
            <img src={Chat} alt="png" className="chatcom"/>
            <img src={Kuruvi} alt="png" className="img-chat"/>
            </div>
            </div>
        </div>
        </form>
);
}
export default Login;
