import React from "react";
import "./App.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

function Login() {
  const history = useNavigate();
  const doSomething = (e) => {
    console.log(e.target[0].value);
    console.log(e.target[1].value);
  };
  return (
    <>
      <Form
        className="input_email"
        onSubmit={(e) => {
          doSomething(e);
          e.preventDefault();
        }}
      >
        <Form.Group className="mb-3 email" controlId="email">
          <Form.Label className="Label">Email</Form.Label>
          <Form.Control type="email" placeholder="Email ID" />
        </Form.Group>

        <Form.Group className="mb-3 passcode" controlId="password">
          <Form.Label>Password</Form.Label>
          <div className="eye">
            <Form.Control type="password" placeholder="Password" />
            <i class="bi bi-eye-slash" id="togglePassword"></i>
          </div>
        </Form.Group>
        <div className="Forgot">Forgot Password?</div>
        <Button className="btn" onClick variant="primary" type="submit">
          Login
        </Button>
        <div className="continue">or continue with</div>
        <div className="account">
          Don't have an account?
          <span
            className="register"
            onClick={() => {
              history("/register");
            }}
          >
            Register
          </span>
        </div>
      </Form>
    </>
  );
}

export default Login;