import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

//component name
const Login = (e) => {

  //setting value to input and password value
  const [input, setInput] = useState("")
  const [password, setPassword] = useState("")
 
  //for disable the button
  const [disableBtn, setDisable] = useState(true)

  //function for setting the input value
  const inp = (e) => {
    setInput(e.target.value)
    console.log(input);
  }

  //setting the password value
  const pwd = (e) => {
    setPassword(e.target.value)
    console.log(password)
  }


  //condition for button
  const enableBtn = () => {
    if (input !== "" && password ?.length>7) {
      setDisable(false)
    }
    else{
      setDisable(true)
    }
  }

  const history = useNavigate();
  const login_id = (e) => {

    console.log(e);
    console.log(e.target[0].value);
    console.log(e.target[1].value);

    //login validation
    const [username, password] = e.target;
    if (username.value == 'priyankasj120@gmail.com' && password.value == "Diatoz@123") {
      localStorage.setItem('username', username.value);
      localStorage.setItem('password', password.value);
      history('/home');
    } else {
      alert('Invalid Credentials!')
    }
  }

    // localStorage.setItem("password1",e.target[1].value);

    // localStorage.getItem("username");

    // sessionStorage.setItem("username",e.target[0].value);
    // sessionStorage.setItem("password",e.target[1].value);

  
  useEffect(() => {
    if (localStorage.getItem("username") == 'priyankasj120@gmail.com' && localStorage.getItem('password') == 'Diatoz@123') {
      history('home');
    }
  }, []);


  return (
    <>
      <img className='img' src="/LandingPageLogo.svg"></img>
      <div className="App">

        <h1 className='login'>Welcome Back</h1>
        <h4>Login here</h4>
        <div className="form-container">
          <form className="register-form" onSubmit={(e) => {
            login_id(e);
            e.preventDefault();
          }}>
            <label className='heading'>Email</label>
            <input
              id="user-name"
              className="form-field"
              type="text"
              placeholder="Email Id"
              name="email"
              value={input}
              onChange={inp}
              onKeyDown={enableBtn}
            />

            <label className='heading'>Password</label>
            <input
              id="password"
              className="form-field"
              type="passworde"
              placeholder="Password"
              name="password"
              value={password}
              onChange={pwd}
              onKeyDown={enableBtn}
            />

            <a href='' onClick={() => history("/forgot")} className='pwd'>Forgot Password</a>

            <button className="form-field" type="submit" disabled={disableBtn} >
              Login
            </button>

            <label>or Continue With</label>
            <div>
              <div className='text-center'>
                <img className='cursor-pointer' src="/google.svg"></img>
                <img className='cursor-pointer' src="/facebook.svg"></img>
                <img className='cursor-pointer' src="/linked.svg"></img>
                <img className='cursor-pointer' src="/github.svg"></img>
              </div>
            </div>
            <label className='btnform'>Don't have an Account? <span className='reg' onClick={() => history("/register")}>Register</span></label>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login;