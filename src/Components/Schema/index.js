import React from "react"
import * as Yup from "yup"
export const signupSchema = Yup.object({
    fname: Yup.string().min(4).max(25).required("required *"),
    lname: Yup.string().min(6).required("required *"),
    email: Yup.string().email().required("required *"),
    password: Yup.string().min(6).required("required *")

})