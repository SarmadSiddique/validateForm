import React from 'react'
import "./Header.css";
import Button from '../../ReuseComponents/Button';
import Social_Account from '../../ReuseComponents/Social_Account';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import AppleIcon from '@mui/icons-material/Apple';
import GoogleIcon from '@mui/icons-material/Google';
import InstagramIcon from '@mui/icons-material/Instagram';
import N from "../../assests/n.png"
import MapsUgcIcon from '@mui/icons-material/MapsUgc';

import emoji from "../../../src/assests/emoji.png"

const Header = () => {
    return (
        <div className='header container'>
            <h2>Let's Go</h2>
            <div className="emogi">
                <img src={emoji} height="80" alt="" />
            </div>
            <Button icon={<MapsUgcIcon />} content="Sign In with kakoatalk" />
            <div className="d-flex justify-content-between pt-2">
                <Social_Account icon={<AppleIcon fontSize='medium' />} plateform="Apple" />
                <Social_Account icon={<FacebookRoundedIcon fontSize='medium' />} plateform="facebook" />
                <Social_Account icon={<GoogleIcon fontSize='medium' />} plateform="Google" />
                <Social_Account icon={<InstagramIcon fontSize='medium' />} plateform="Instagram" />



            </div>
            <div className="container">
                <div className="continue">
                    <span> or continue with</span>
                </div>
            </div>


        </div>
    )
}

export default Header