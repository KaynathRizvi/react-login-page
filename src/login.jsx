import React from "react";
import { useState} from "react";
import './login.css';
import './App.css';

const Login = () => {
    const [signupClicked, setSignupClicked] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [number, setNumber] = useState("");
    const [loginMessage, setLoginMessage] = useState("");

    const handleSignupClick = (e) => {
        e.preventDefault();
        setSignupClicked(true);
        if (email.trim() !== "" && password.trim() !== "" && number.trim() !== "") { 
            console.log("Signup successful");
            }
    };

    const handleLoginClick = () => {
        setSignupClicked(false);
        if (email.trim() !== "" && password.trim() !== "") {
        setLoginMessage("Login successful");

        setTimeout(() => {
            setLoginMessage("");
        }, 10000);
        }
    };

    const handleAlreadyClick = () => {
        handleLoginClick();
    };

    return (
    <div className={`square ${signupClicked ? "signup-clicked" : ""}`}>
    <div className="login-signup-container">
    <div className={`text ${!signupClicked ? "" : "active"}`} onClick={handleLoginClick}>
        Login
    </div>
    <div className={`text ${signupClicked ? "" : "active"}`} onClick={handleSignupClick}>
        Sign Up
        </div>
        <div className={`active-line ${signupClicked ? "signup-active" : ""}`}>
        </div>
    </div>
    
    {signupClicked ? (
        <form id="signup-form" className="signup-form">
        <input type="text" placeholder="✉ example@gmail.com" className="textbox" required value={email}
        onChange={(e) => setEmail(e.target.value)} />
        <input type="number" placeholder="☎ +91123456789" className="textbox" required value={number}
        onChange={(e) => setNumber(e.target.value)} />
        <input type="password" placeholder="Enter password" className="textbox" required value={password}
        onChange={(e) => setPassword(e.target.value)} />
        <div className="already-container">
        <span className="already" onClick={handleAlreadyClick}>
        Already have an account?
        </span>
        <button type="submit" className="button" onClick={handleSignupClick}>Sign Up</button>
        </div>
        </form>    
        
    ) : (
        <form id="login-form" className="login-form">
        <input type="text" placeholder="✉ Enter Email" className="textbox" required value={email}
        onChange={(e) => {setEmail(e.target.value); setLoginMessage("");}} />
        <input type="password" placeholder="Enter Password" className="textbox" required value={password}
        onChange={(e) => {setPassword(e.target.value); setLoginMessage("");}} />
        <div className="forgot-container">
        <span className="forgot">Forgot Password ?</span>
        <button type="submit" className="button"  onClick={handleLoginClick}>Login</button>
        </div>
    </form>
    )}
    {signupClicked && <div className="login-message">{console.log}</div>}
    {loginMessage && <div className="login-message">{loginMessage}</div>}

    <div className="half-circle"></div>
    <div className="half-circle-1"></div>
    <div className="half-circle-2"></div>
    </div>
    );
};

export default Login;