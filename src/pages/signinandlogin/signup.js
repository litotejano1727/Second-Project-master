import React from 'react';
import {useFormik} from "formik";
import * as Yup from "yup";
import {Link} from "react-router-dom";
import "./style.css";

export default function SignUp() {

const formik = useFormik(
{
initialValues:{
    firstName: "",
    lastName: "",
    email:"",
    password:"",
    confirmPassword: "",
},
validationSchema: Yup.object({
firstName: Yup.string().required("Required"),
lastName: Yup.string().required("Required"),
email: Yup.string().email("invalid Email Address").required("Required"),
password: Yup.string().password.max(12, "must be 12 characters or less").min(6, "minimum of 6 characters").required("Required"),
confirmPassword:Yup.string().oneOf([Yup.ref('password'),null], 'Password must match').required('Required')
}

),


 onSubmit: (value) => {
 console.log(value)


}

})
   return (
    <div className='Auth-form-container'>
        <form onSubmit={formik.handleSubmit} className="Auth-form">
        <div className="Auth-form-content">
        <h3 className="Auth-form-title">Sign-Up</h3>
        <div className="text-center">
                                already registered? {" "}
                                <Link
                                    className="link-primary"
                                    to="./signin.js"
                                >
                                    Sign-In
                                </Link>
                            </div>
        <div className='input-container'>
            <label>Fist Name</label>
            <input
            id="firstName"
            name="firstName"
            type="text"
placeholder="First Name"
onChange={formik.handleChange}
onBlur={formik.handleBlur}
value={formik.values.firstName}
/>
{formik.touched.firstName && formik.errors.firstName ? <p>{formik.errors.firstName}</p> : null}
        </div>
        <div className='input-containerTwo'>
        <label>last Name</label>
            <input
            id="lastName"
            name="lastName"
            type="text"
placeholder="Last Name"
onChange={formik.handleChange}
onBlur={formik.handleBlur}
value={formik.values.lastName}
/>
{formik.touched.lastName && formik.errors.lastName ? <p>{formik.errors.lastName}</p> : null}
        </div>
        <div className='input-containerThree'>
        <label>Email</label>
            <input
            id="email"
            name="email"
            type="text"
placeholder="Email"
onChange={formik.handleChange}
onBlur={formik.handleBlur}
value={formik.values.email}
/>
{formik.touched.email && formik.errors.email ? <p>{formik.errors.email}</p> : null}
        </div>
        <div className='input-containerFour'>
        <label>Password</label>
            <input
            id="Password"
            name="Password"
            type="text"
placeholder="Password"
onChange={formik.handleChange}
onBlur={formik.handleBlur}
value={formik.values.password}
/>
{formik.touched.email && formik.errors.email ? <p>{formik.errors.email}</p> : null}
</div>
<div className='input-containerFour'>
        <label>Confirm Password</label>
            <input
            id="Password"
            name="Password"
            type="text"
placeholder="confirmPassword"
onChange={formik.handleChange}
onBlur={formik.handleBlur}
value={formik.values.password}
/>
{formik.touched.email && formik.errors.email ? <p>{formik.errors.email}</p> : null}
</div>
<div>
<button type='submit'>Submit</button>
</div>
</div>
</form>
</div>       
  )
}


//try