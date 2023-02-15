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
            <div className="payment">
                <form className="Auth-form">
<div className="box">
Place Order Now
</div>
<div>
<h4 className="method">Select Payment Method</h4>
</div>
<br/>
<div className="payment-holder">
<div className="cash-delivery">
   <h5>Cash In Delivery</h5>
<div className="d-flex align-items-end">   
    <p className="text">Pay when you receive</p>
    <input type="radio" name="check"/>
</div>
    </div>
<br/>
<div className="gcash">
    <h5>Gcash e-Wallet</h5>
    </div>
<div className="gcashTwo">GCASH e-WALLET</div>
</div>
<br/>
<div>
<h4 className="method">Voucher</h4>
</div>
<input
                            id="Voucher"
                            name="Voucher"
                            type="text"
                            placeholder="Enter Voucher Code"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.barangay}
                            className="form-control mt-1"
                        />
                        <div className="d-grid gap-2 mt-3" >
                        <button type="submit" className="btn btn-primary">APPLY</button>
                    </div>
                    <div>
<h5 className="method">Invoice and Contact Info  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <a href="#">Edit</a></h5>
</div>
<div>
<h5 className="method">Order Summary</h5>
<h6>Total:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; php 5000.00</h6>
</div>
<div className="d-grid gap-2 mt-3" >
                        <button type="submit" className="btn btn-primary">PLACE ORDER NOW</button>
                    </div>
                </form>
                </div>
            <div className="checkout-details"><p>PLACE ORDER NOW</p></div>
            
        </div>
  )
}