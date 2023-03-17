import React from 'react'
import "./Button.css"
import Buttons from '@mui/material/Button';
const Button = (prop) => {
    const hello = () => {
        alert("hello")
    }

    return (

        <>

            <button style={{ backgroundColor: prop.bgcolor, color: prop.Color }} type="submit" className='btn '> {prop.icon} {prop.content}</button>

        </>
    )
}

export default Button