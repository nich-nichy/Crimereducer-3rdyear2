import React from 'react';
import './Otp.css';
import firebase from './server/firebase';
import one from './images/otp1.svg';
import two from './images/otp2.svg';

class Otp extends React.Component {
  handleChange = (e) =>{
    const {name, value } = e.target
    this.setState({
        [name]: value
      })
  }
  configureCaptcha = () =>{
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
      'size': 'invisible',
      'callback': (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        this.onSignInSubmit();
        console.log("Recaptca varified")
      },
      defaultCountry: "IN"
    });
  }
  onSignInSubmit = (e) => {
    e.preventDefault()
    this.configureCaptcha()
    const phoneNumber = "+91" + this.state.mobile
    console.log(phoneNumber)
    const appVerifier = window.recaptchaVerifier;
    firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
        .then((confirmationResult) => {
          // SMS sent. Prompt user to type the code from the message, then sign the
          // user in with confirmationResult.confirm(code).
          window.confirmationResult = confirmationResult;
          console.log("OTP has been sent")
          // ...
        }).catch((error) => {
          // Error; SMS not sent
          // ...
          console.log("SMS not sent")
        });
  }
  onSubmitOTP = (e) =>{
    e.preventDefault()
    const code = this.state.otp
    console.log(code)
    window.confirmationResult.confirm(code).then((result) => {
      // User signed in successfully.
      const user = result.user;
      console.log(JSON.stringify(user))
      alert("User is verified")
      window.open('/', '_self')
      // ...
    }).catch((error) => {
      // User couldn't sign in (bad verification code?)
      // ...
    });
  }
    render() {
      return (
        <div id="login-page">
        <div id="login-card" >
        <div>
        <h2 className="-mt-4">Welcome to crime reducer community</h2>
                <p className="text-lg">You are at the right place just login here<br /> we will see the rest of your work</p>
                <p className="-mt-10 mb-2 text-lg font-semibold ml-96 mr-96 pt-2 pb-2 ">Otp here<br/>
                    <i class="far fa-hand-point-down mr-1"></i>
                    <i class="far fa-hand-point-down mr-1"></i>
                    <i class="far fa-hand-point-down mr-1"></i>
                    <i class="far fa-hand-point-down"></i>
                    </p>
        <h2>Login Form</h2>
        <form onSubmit={this.onSignInSubmit}>
          <div id="sign-in-button"
          className=""
          ></div>
          <i class="fas fa-address-card absolute mt-6 ml-3 font-red-100 bg-red-100 p-2 rounded-full"></i>
          <input type="number"
           name="mobile"
            placeholder="Mobile number"
            className="placeholder-red-200 border border-purple-400 rounded-full pl-14 pr-10 p-3 mt-4 mb-5"
             required 
             onChange={this.handleChange}/>
          <button type="submit"
          className="ml-2 pt-2 pl-3 pr-3 pb-2 bg-red-400 text-white rounded-full">Submit</button>
        </form>
        <h2>Enter OTP</h2>
        <form onSubmit={this.onSubmitOTP}>
        <i class="fas fa-lock absolute mt-6 ml-3 font-red-100 bg-red-100 p-2 rounded-full"></i>
          <input 
          type="number" 
          name="otp" 
          placeholder="OTP Number" 
          required 
          className="placeholder-red-200 border border-purple-400 rounded-full pl-14 pr-10 p-3 mt-4 mb-5"
          onChange={this.handleChange}/>
          <button type="submit"
          className="ml-2 pt-2 pl-3 pr-3 pb-2 mb-10 bg-red-400 text-white rounded-full"
          >Submit</button>
        </form>
      </div>
          <div className="img-wrapper -mt-7 -mb-8">
            <img src={one} alt="png" className="chatcom ml-10 mb-10"/>
            <img src={two} alt="png" className="img-chat ml-5 -mr-5 pl-14"/>
            </div>
        </div>
        </div>
      )
    }
  }
  export default Otp;