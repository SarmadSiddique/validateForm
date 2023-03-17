import React from 'react'
import Checkbox from '@mui/material/Checkbox';
import Buttons from '../../ReuseComponents/Button'
import "./Terms.css"
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const Terms = () => {

    return (
        <>

            <div className="footer text-start d-flex align-items-center justify-content-center" >

                <div>
                    <Checkbox
                        {...label}
                        defaultChecked
                        sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
                    />
                </div>
                <div>
                    <span className="terms">i  have  read  and accepted <span style={{ color: "red" }}>term of services </span> <br />
                        <span style={{ color: "red" }}>and privacy policy</span></span>

                </div>
            </div>

        </>

    )
}

export default Terms