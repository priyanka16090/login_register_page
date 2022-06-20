import React, { useState, Alert } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {

    const[showAlert, setShowAlert]=useState(false)
    const onFinish=(e)=>{
        // setTimeout(()=>{
            alert("Successfully registered");
            setShowAlert(true)

        // },);
    }
    const history = useNavigate();
    const reg_id = (e) => {
        console.log(e.target[0].value);
        console.log(e.target[1].value);
        console.log(e.target[2].value);
        console.log(e.target[3].value);
    }
    return (
        <>
            <div className='img'>
                <img src="/LandingPageLogo.svg"></img>
            </div>
            <div className="App">
                {/* <h1 className='login'>Register Here</h1> */}
                <div className="form-container">
                    {showAlert &&
                    <Alert type="Error" message="error" description="There was a error"/>}
        
                    <form className="register-form" onFinish={onFinish} onSubmit={(e) => {
                        reg_id(e);
                        e.preventDefault();
                    }}>
                        <label className='heading'>FirstName</label>

                        <input
                            id="first-name"
                            className="form-field"
                            type="text"
                            placeholder="Firstname"
                            name="firstname"
                        />
                        <label className='heading'>LastName</label>

                        <input
                            id="last-name"
                            className="form-field"
                            type="text"
                            placeholder="Lastname"
                            name="lastname"
                        />
                        <label className='heading'>Email</label>

                        <input
                            id="user-name"
                            className="form-field"
                            type="text"
                            placeholder="Email Id"
                            name="email"
                        />
                        <label className='heading'>Password</label>
                        <input
                            id="password"
                            className="form-field"
                            type="text"
                            placeholder="Password"
                            name="password"
                        />
                        <label>By registering or Continuing, you agree to our <a href="">terms of service & privacy policy</a></label>


                        <button onClick={()=>onFinish()} className="form-field" type="submit">
                            Register
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
                        <label className='btnform'>Already have an Account? <span className='reg' onClick={() => history("/")}>Login</span></label>

                    </form>
                </div>
            </div>
        </>
    )
}



export default Register;