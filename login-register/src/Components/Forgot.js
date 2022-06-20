import React from "react";
import { useNavigate } from "react-router-dom";
const Password=()=>{
    const history = useNavigate();
  const loginpage=(e)=>{
   console.log(e.target[0].value);
   console.log(e.target[1].value);
  }
   
    return(
    <>
    <form className="register-form" onSubmit={(e) => {
              loginpage(e);
              e.preventDefault();
            }}>
    <div className="logo">
    <a href="" onClick={() => history("/")}><img src="/back_otp-register.svg"></img></a><br/>
    <img src="/LandingPageLogo.svg"></img>
    </div>
    <h2>Forgot Password</h2>
    <label className='heading'>Email ID</label>
            <input
              id="email"
              className="form-field"
              type="email"
              placeholder="Enter Email Id"
              name="email"
            />
            <button className="form-field" type="submit">
              Send Email OTP
            </button>

    </form>
    
    </>
    )
}
export default Password