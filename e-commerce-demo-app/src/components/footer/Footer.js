import React, { useState } from 'react';
import './Footer.css'
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import NearMeIcon from '@mui/icons-material/NearMe';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

const Footer = (props) => {

    const [email,setEmail] = useState("");
    const [valid, setValid] = useState(false);

    const emailHandle = (event) => {
        setEmail(event.target.value);
    }

    const submitHandle = () => {
        if (email.length > 0) {
            const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g
            if (regEx.test(email)) {
                axios.post(process.env.REACT_APP_POST_CUSTOMER, {
                    email
                })
                    .then(res => {
                        console.log("Posting data", res)
                    })
                    .catch(err => {
                        console.log(err)
                    })
                    setEmail("");
                    setValid(false);
                    window.alert("Your data sent successfully we will reach you soon 😁")
                
            }
            else {
                setValid(true);
                window.alert("Please fill info before submit 😁")
            }

        }

    }

    return (
        <>
            <div className='primary-footer'>
                <div className='div1'>
                    <div className='div1-1'>
                        <div>
                            <h2>No Credit Card Required</h2>
                        </div>
                        <div>
                            <h1>Start Using E-commerce today</h1>
                        </div>
                        <div>
                            <TextField
                                className='textfield'
                                id="standard-basic"
                                label="Your email"
                                variant="standard"
                                color='info'
                                fullWidth
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <button className='send-mail' onClick={submitHandle}><NearMeIcon color='info' /></button>
                                        </InputAdornment>
                                    )
                                }}
                                value={email}
                                onChange={emailHandle}
                                error={valid}
                                helperText={valid && "please enter valid email"}
                            />
                        </div>
                    </div>
                    <div className='div1-2'>
                    </div>
                </div>
                <div className='div2'>
                    <div className='div2-1'>
                        <div className='div2-1-1'>
                            <h1>E-Commerce</h1>
                            <h2>Make the right Decision that move your business</h2>
                        </div>
                    </div>
                    <div className='div2-2'>
                        <div className='div2-2-1'>
                            <ul>
                                <li>About</li>
                                <li>Jobs</li>
                                <li>Docs</li>
                            </ul>
                        </div>
                        <div className='div2-2-2'>
                            <ul>
                                <li>Terms and Conditions</li>
                                <li>Privacy Policy</li>
                                <li>Cookie Policy</li>
                            </ul>
                        </div>
                        <div className='div2-2-3'>
                            <ul>
                                <li><NavLink to="/contactUs">let's Chat</NavLink></li>
                                <li>hi@ecommerce.com</li>
                                <div className='icons'>
                                    <div>
                                        <li><a href='https://www.instagram.com/' target='_new'><InstagramIcon /></a></li>
                                    </div>
                                    <div>
                                        <li><a href='https://twitter.com/explore' target='_new'><TwitterIcon /></a></li>
                                    </div>
                                    <div>
                                        <li><a href='https://www.linkedin.com/' target='_new'><LinkedInIcon /></a></li>
                                    </div>
                                    <div>
                                        <li><a href='https://www.facebook.com/' target='_new'><FacebookIcon /></a></li>
                                    </div>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;