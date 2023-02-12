import React from 'react';
import {useFormik} from "formik";
import * as Yup from "yup";

export default function SignUp() {

const formik = useFormik(
{
initialValues:{
    email:"",
    password:"",
    confirmPassword: "",
},
validationSchema: Yup.object({
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
        <div>Sign-In</div>
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
</form>
</div>       
  )
}


//try