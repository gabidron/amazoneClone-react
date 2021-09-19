import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
  };

  const register = (e) => {
    e.preventDefault();
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://logos-download.com/wp-content/uploads/2016/03/Amazon_Logo_2000.png"
          alt="amazon logo"
        />
      </Link>
      <div className="login__container">
        <h1>Sign-in</h1>
        <form>
          <h5>Email</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="login__singInButton"
            onClick={signIn}
          >
            Sign In
          </button>
        </form>
        <p>
          By singning-in you agree to the Best Amazon Fake CLONE Conditions of
          Use & Sale. Please see out Privacy Notice, our Cookies Notice and our
          Internet-Based Ads
        </p>
        <button className="login__registerButton" onClick={register()}>
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
};

export default Login;
