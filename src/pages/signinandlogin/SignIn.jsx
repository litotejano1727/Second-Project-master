import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";


function SignIn() {
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
            confirmPassword: "",
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email("invalid Email Address")
                .required("Required"),
            password: Yup.string()
                .matches(
                    /^[a-zA-Z0-9]+$/,
                    "Password can only contain letters and numbers"
                )
                .max(12, "must be 12 characters or less")
                .min(6, "minimum of 6 characters")
                .required("Required"),
            confirmPassword: Yup.string()
                .oneOf([Yup.ref("password"), null], "Password must match")
                .required("Required"),
        }),

        onSubmit: (values) => {
            fetch("/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(values),
            })
                .then((response) => response.json())
                .then((data) => {
                    if (data.success) {
                        window.location.href = "/home";
                    } else {
                        console.error(data.message);
                    }
                })
                .catch((error) => {
                    console.error(error);
                });
        },
    });
  return (
    <>
            <div className="Auth-form-container">
                <form onSubmit={formik.handleSubmit} className="Auth-form">
                    <div className="Auth-form-content">
                        <h3 className="Auth-form-title">Sign-In</h3>
                        <div className="text-center">
                            Not registered yet?{" "}
                            <Link className="link-primary" to="/signup">
                                Sign-Up
                            </Link>
                        </div>
                        <div className="input-containerThree mt-3">
                            <label>Email address</label>
                            <input
                                id="email"
                                name="email"
                                type="text"
                                placeholder="Email"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.email}
                                className="form-control mt-1"
                            />
                            {formik.touched.email && formik.errors.email ? (
                                <p>{formik.errors.email}</p>
                            ) : null}
                        </div>
                        <div className="input-containerFour mt-3" >
                            <label>Password</label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                placeholder="Password"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.password}
                                className="form-control mt-1"
                            />
                            {formik.touched.password &&
                            formik.errors.password ? (
                                <p>{formik.errors.password}</p>
                            ) : null}
                        </div>

                        <div className="d-grid gap-2 mt-3">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                        <p className="text-center mt-2">
                            Forgot <Link to="/Forgotpassword">password?</Link>
                        </p>
                    </div>
                </form>
            </div>
        </>
  )
}

export default SignIn