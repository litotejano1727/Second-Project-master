import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "/checkoutfirst.css";



import "bootstrap/dist/css/bootstrap.min.css";

export default function SignUp() {


    const formik = useFormik({
        initialValues: {
            firstName: "",
            email: "",
            password: "",
            address: '',
            province: '',
            city: '',
            barangay: '' 
          
        },
        validationSchema: Yup.object({
            firstName: Yup.string().required("Required"),
           
            email: Yup.string()
                .email("invalid Email Address")
                .required("Required"),
            password: Yup.string()
                .max(12, "Password must be 12 characters")
                .min(12, "Password must have a minimum of 6 characters")
                .required("Required"),
          
        }),

        onSubmit: (values) => {
            fetch("/submit-form", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(values),
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);
                })
                .catch((error) => {
                    console.error(error);
                });
        },
    });
  return (
    
    <div className="Auth-form-container">
        <div className="delivery-info">
            <form onSubmit={formik.handleSubmit} className="Auth-form">
               
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Delivery Information</h3>
                    
                    <div className="input-container mt-3">
                        <label>Full Name</label>
                        <input
                            id="firstName"
                            name="firstName"
                            type="text"
                            placeholder="First Last"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.firstName}
                            className="form-control mt-1"
                        />
                        {formik.touched.firstName && formik.errors.firstName ? (
                            <p>{formik.errors.firstName}</p>
                        ) : null}
                    </div>
                   
                    <div className="input-containerThree mt-3">
                        <label>Email</label>
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
                        {formik.touched.password && formik.errors.password ? (
                            <p>{formik.errors.password}</p>
                        ) : null}
                    </div>
                    <div className="input-containerFour mt-3">
                        <label>Mobile Number</label>
                        <input
                            id="password"
                            name="password"
                            type="text"
                            placeholder="Please enter your mobile number"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.password}
                            className="form-control mt-1"
                        />
                        {formik.touched.email && formik.errors.email ? (
                            <p>{formik.errors.email}</p>
                        ) : null}
                    </div>
                    
                    <div className="input-container mt-3">
                        <label>House Number, Building and Street Name</label>
                        <input
                            id="address"
                            name="address"
                            type="text"
                            placeholder="House Number, Building and Street Name"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.address}
                            className="form-control mt-1"
                        />
                        {formik.touched.address && formik.errors.firstName ? (
                            <p>{formik.errors.address}</p>
                        ) : null}
                    </div>
    
                    <div className="input-container mt-3">
                        <label>Province</label>
                        <input
                            id="province"
                            name="province"
                            type="text"
                            placeholder="province"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.province}
                            className="form-control mt-1"
                        />
                        {formik.touched.province && formik.errors.firstName ? (
                            <p>{formik.errors.province}</p>
                        ) : null}
                    </div>
   
                    <div className="input-container mt-3">
                        <label>Barangay</label>
                        <input
                            id="barangay"
                            name="barangay"
                            type="text"
                            placeholder="barangay"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.barangay}
                            className="form-control mt-1"
                        />
                        {formik.touched.barangay && formik.errors.firstName ? (
                            <p>{formik.errors.barangay}</p>
                        ) : null}
                    </div>
   
                   
                    <div className="d-grid gap-2 mt-3" >
                        <button type="submit" className="btn btn-primary">Save</button>
                    </div>
                </div>
                

            </form>
            </div>
            <div className="payment"><p>mark</p></div>
            <div className="checkout-details"><p>mark</p></div>
            
        </div>
  )
}