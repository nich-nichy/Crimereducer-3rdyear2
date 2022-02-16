import React from 'react';
import './Login.css';
import one from './images/chatcom.svg';
import two from './images/kuruvi.png';

function Adminlog() {
    return (
        <div id="login-page">
            <div id="login-card">
                <h2 className="-mt-4">Welcome again crime reducer community</h2>
                <p className="text-lg">Just check for new instances<br /> and new complains</p>
                <p className="-mt-7 mb-2 text-lg font-semibold ml-96 mr-96 pt-2 pb-2 ">Only admins can login here<br/>
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
                className="placeholder-red-200 border border-purple-400 rounded-full pl-14 pr-10 p-3 -mb-10" 
                autoFocus
                required
                />
                <br/>
                </div>
                <div>
                <i class="fas fa-lock absolute mt-10 ml-2 font-red-100 bg-red-100 p-2 rounded-full"></i>
                <input
                 type="password"
                 placeholder="Password"
                 className="placeholder-red-200 border border-purple-400 rounded-full pl-14 pr-10 p-3 mt-8 -mb-2"
                 required
                 />
                 </div>
                <br/>
            <div className="img-wrapper">
            <img src={one} alt="png" className="chatcom"/>
            <img src={two} alt="png" className="img-chat"/>
            </div>
            </div>
        </div>
);
}
export default Adminlog;
