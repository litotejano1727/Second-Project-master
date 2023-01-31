import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Auth.css";
import Head from "./common/header/Head";
import Footer from "./common/footer/Footer";
export default function (props) {
    let [authMode, setAuthMode] = useState("signin");

    const changeAuthMode = () => {
        setAuthMode(authMode === "signin" ? "signup" : "signin");
    };

    if (authMode === "signin") {
        return (
            <>
                <Head />
                <div className="Auth-form-container">
                    <form className="Auth-form">
                        <div className="Auth-form-content">
                            <h3 className="Auth-form-title">Sign In</h3>
                            <div className="text-center">
                                Not registered yet?{" "}
                                <span
                                    className="link-primary"
                                    onClick={changeAuthMode}
                                >
                                    Sign Up
                                </span>
                            </div>
                            <div className="form-group mt-3">
                                <label>Email address</label>
                                <input
                                    type="email"
                                    className="form-control mt-1"
                                    placeholder="Enter Email"
                                />
                            </div>
                            <div className="form-group mt-3">
                                <label>Password</label>
                                <input
                                    type="password"
                                    className="form-control mt-1"
                                    placeholder="Enter password"
                                />
                            </div>
                            <div className="d-grid gap-2 mt-3">
                                <button 
                                    type="submit"
                                    className="btn btn-primary"
                                >
                                    Submit
                                </button>
                            </div>
                            <p className="text-center mt-2">
                                Forgot <a href="#">password?</a>
                            </p>
                        </div>
                    </form>
                </div>
                <Footer />
            </>
        );
    }

    return (
        <>
            <Head />
            <div className="Auth-form-container">
                <form className="Auth-form">
                    <div className="Auth-form-content">
                        <h3 className="Auth-form-title">Sign Up</h3>
                        <div className="text-center">
                            Already registered?{" "}
                            <span
                                className="link-primary"
                                onClick={changeAuthMode}
                            >
                                Sign In
                            </span>
                        </div>
                        <div className="form-group mt-3">
                            <label>Full Name</label>
                            <input
                                type="text"
                                className="form-control mt-1"
                                placeholder="Enter Full Name"
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>Email address</label>
                            <input
                                type="email"
                                className="form-control mt-1"
                                placeholder="Enter Email Address"
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>Password</label>
                            <input
                                type="password"
                                className="form-control mt-1"
                                placeholder="Enter Password"
                            />
                        </div>
                        <div className="d-grid gap-2 mt-3">
                            <button type="submit" className="btn btn-primary">
                                Submit
                            </button>
                        </div>
                        <p className="text-center mt-2">
                            Forgot <a href="#">password?</a>
                        </p>
                    </div>
                </form>
            </div>
            <Footer />
        </>
    );
}
