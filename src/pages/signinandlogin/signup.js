import React from 'react';
import {useFormik} from "formik";
import * as Yup from "yup";

export default function SignUp() {

const formik = useFormik(
{
initialValues:{
    firstName: "",
    lastName: "",
    email:"",
    password:"",
},
validationSchema: Yup.object({
firstName: Yup.string().required("Required"),
lastName: Yup.string().required("Required"),
email: Yup.string().email("invalid Email Address").required("Required"),
password: Yup.string().password.max(12, "must be 12 characters or less").min(6, "minimum of 6 characters").required("Required")

}),


// onSubmit: (value) => {
// console.log(value)

//Onsubmit going to backend

}

})
   return (
    <div className='Auth-form-container'>
        <form onSubmit={formik.handleSubmit} className="Auth-form">
        <div>Sign-Up</div>
        <div className='input-container'>
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
<div>
<button type='submit'>Submit</button>
</div>
</form>
</div>       
  )
}


//try