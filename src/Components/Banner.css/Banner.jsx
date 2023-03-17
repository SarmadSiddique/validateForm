import React from 'react'
import { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Buttons from 'react-bootstrap/Button';
import Footer from '../Terms.jsx/Terms';
import Checkbox from '@mui/material/Checkbox';
import { useFormik } from "formik";
import "./Banner.css"
import * as Yup from 'yup/index.esm.js';
import { signupSchema } from '../Schema';
const initialvalues = {
    fname: "",
    lname: "",
    email: "",
    password: ""
}
const Banner = () => {
    const [arry, setArry] = useState([]);
    const { values, errors, touched, handleBlur, handleChange } = useFormik({
        initialValues: initialvalues,
        validationSchema: signupSchema,
        onSubmit: (values) => {
            // console.log(values, "valuess")   
        }
    })
    console.log(values)
    const handleSubmit = (event) => {
        event.preventDefault();
        var fname = event.target.fname.value;
        var lname = event.target.lname.value;
        var email = event.target.email.value;
        var password = event.target.password.value;

        if (!fname && !lname && !email && !password) {
            alert("please fill the form first")
        }
        else {
            var data = {
                Firstname: fname,
                Lastname: lname,
                Email: email,
                Password: password
            }
            // setArry([...arry, data]);
            // console.log(arry, "setARRAY")
            console.log(data, "this is my data of the fields")
        }
    }
    return (
        <>

            <div className="form">

                <Form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-md-6">
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <div className="text-start">
                                    <Form.Label >First Name</Form.Label>

                                </div>
                                <Form.Control onChange={handleChange} value={values.fname} className='inputfield' name='fname' type="text" placeholder="Enter First Name" />
                            </Form.Group>
                            {errors.fname && !touched.fname ? <p className='error'>{errors.fname}</p> : null}

                        </div>
                        <div className="col-md-6">
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <div className="text-start">
                                    <Form.Label >Last Name</Form.Label>

                                </div>

                                <Form.Control onChange={handleChange} value={values.lname} name='lname' className='inputfield' type="text" placeholder="Enter Last Name" />

                            </Form.Group>

                            {errors.lname ? (<p className='error'>{errors.lname}</p>) : null}


                        </div>
                    </div>
                    <Form.Group className="npm startmb-3" controlId="formBasicEmail">
                        <div className="text-start">
                            <Form.Label >Email address</Form.Label>

                        </div>
                        <Form.Control onChange={handleChange} value={values.email} className='inputfield' type="email" name='email' placeholder="Enter email" />

                    </Form.Group>
                    {errors.email ? <p className='error'>{errors.email}</p> : null}

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <div className="text-start">
                            <Form.Label>Password</Form.Label>


                        </div>
                        <Form.Control onChange={handleChange} value={values.password} className='inputfield' name='password' type="password" placeholder="Password" />
                        <div className='text-end mt-2 '>
                            <span ><a href="#"> Forget your Password..?</a></span>

                        </div>
                        {errors.password ? < p className='error'>{errors.password}</p> : null}

                    </Form.Group>

                    <Footer />

                    <Buttons variant="primary" style={{ backgroundColor: "red", color: "white" }} type="submit">
                        Sign In
                    </Buttons>
                </Form>
                <div className='mt-2'>
                    <p className='pt-2'>Don't have an account ..? <span style={{ color: "red" }}>
                        <a href='#'>Sign Up</a></span> </p>

                </div>
            </div >
            <div>

            </div>
        </>
    )
}
export default Banner