import React from 'react'
import AppleIcon from '@mui/icons-material/Apple';
import "./Social_Account.css"
const Social_Account = (prop) => {
    return (
        <>
            <div className='d-flex align-items-center '>
                <div style={{ color: "#8B8B8B" }}>{prop.icon}</div>
                <div className='plateform'> {prop.plateform}</div>
            </div>

        </>
    )

}

export default Social_Account;