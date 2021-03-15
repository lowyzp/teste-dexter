import React from 'react';
import Parse from 'parse';

import './Login.css'

function loginUser(e) {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    Parse.User.logIn(username, password, { usePost: true }).then(
        (user) => {
            window.location.href = '/foods';
        },
        (error) => alert("Incorrect username or password.")
    );
}

function showPass() {
    var status = document.getElementById("password");
    if (status.type === "password") {
        status.type = "text";
    } else {
        status.type = "password";
    }
}

function Login() {
    if (Parse.User.current()) {
        Parse.User.logOut().then(
            (data) => {
                console.info("User logged out...", data);
            },
            (error) => {
                console.error("Log out error", error);
            }
        );
    }
    
    return (
        <div className="login-page">
            <div className="login-container">
                <img src="assets/logo.png" className="login-logo" alt="orange logo" />
                <form onSubmit={loginUser}>

                    <label className="login-label-text" htmlFor='username'>Email:</label>
                    <input id="username" className="login-input-text login-input-name" type='text' />

                    <label className="login-label-text" htmlFor='password'>Password:</label>
                    <input id="password" className="login-input-text login-input-password" type='password' />


                    <label htmlFor="showpass" className="login-checkbox">
                        <input id="showpass" onClick={showPass} type="checkbox" />
                        Show password
                    </label>

                    <button href="#" className="login-forgot" onClick={(e) => e.preventDefault()}>Forgot your password?</button>

                    <button type="submit" className="login-login">Log in</button>

                    <div className="login-or-line">
                        <span className="login-or-text">or</span>
                    </div>


                    <button className="login-signup" onClick={(e) => e.preventDefault()}>Sign up</button>
                    <button className="login-terms" onClick={(e) => e.preventDefault()}>Terms of Service </button>
                    <span>&#8226;</span>
                    <button className="login-terms" onClick={(e) => e.preventDefault()}>Privacy Policy</button>
                </form>
            </div>
        </div>
    );

}

export default Login;
