import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";


function ForgotPassword() {
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
           
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
            <p>Please Check your Email for Password Reset Link</p>
        },
    });
  return (
    <>
            <div className="Auth-form-container">
                <form onSubmit={formik.handleSubmit} className="Auth-form">
                    <div className="Auth-form-content">
                        <h3 className="Auth-form-title"> Forgot Password </h3>
                        <div className="text-center">
                                    Link will be send to your registered Email          </div>
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
                            <label>Last Password Remember</label>
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
                            Try to <Link to="/signin">LogIn</Link>
                        </p>
                    </div>
                </form>
            </div>
        </>
  )
}

export default ForgotPassword