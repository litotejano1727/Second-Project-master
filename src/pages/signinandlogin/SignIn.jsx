import React from "react";
import "./style.css";
import Card from "../signinandlogin/card/card";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {database} from "../signinandlogin/Utils/database";
import { Link } from "react-router-dom";




const SignIn = ({ setIsSignIN }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessages, setErrorMessages] = useState({});

  const errors = {
    username: "Invalid Email",
    password: "Invalid password",
    noUsername: "Please enter your Email",
    noPassword: "Please enter your password",
  };

  const handleSubmit = (e) => {
    // Prevent page from reloading
    e.preventDefault();

    if (!username) {
      // Username input is empty
      setErrorMessages({ name: "noUsername", message: errors.noUsername });
      return;
    }

    if (!password) {
      // Password input is empty
      setErrorMessages({ name: "noPassword", message: errors.noPassword });
      return;
    }

    // Search for user credentials
    const currentUser = database.find((user) => user.username === username);

    if (currentUser) {
      if (currentUser.password !== password) {
        // Wrong password
        setErrorMessages({ name: "password", message: errors.password });
      } else {
        // Correct password, log in user
        setErrorMessages({});
        setIsSignIN(true);
      }
    } else {
      // Username doens't exist in the database
      setErrorMessages({ name: "username", message: errors.username });
    }
  };

  // Render error messages
  const renderErrorMsg = (name) =>
    name === errorMessages.name && (
      <p className="error_msg">{errorMessages.message}</p>
    );


return (
<Card>

<div className="Auth-form-container">
                <form onSubmit={handleSubmit} className="Auth-form">
                    <div className="Auth-form-content">
                        <h3 className="Auth-form-title">Sign-In</h3>
                        <div className="text-center">
                            Not registered yet?{" "}
                                <Link to="/SignUp">Sign-Up</Link>
                        </div>
                        <div className="input-containerThree mt-3">
                            <label>Email address</label>
                            <input type="text" placeholder="Email" className="inputOne" value={username} onChange={(e) => setUsername(e.target.value) }/>
                            {renderErrorMsg("username")}
{renderErrorMsg("noUsername")}
                        </div>
                        <div className="input-containerFour mt-3" >
                            <label>Password</label>
                            <input type="password" placeholder="Password" className="inputTwo" value={password} onChange={(e) => setPassword(e.target.value) }/>

{renderErrorMsg("password")}
{renderErrorMsg("noPassword")}
                        </div>

                        <div className="d-grid gap-2 mt-3">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                        <p className="text-center mt-2">
                            <Link to="/ForgotPassword">Forgot password?</Link>
                        </p>
                    </div>
                </form>
            </div>

            </Card>);













};



export default SignIn;