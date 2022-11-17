import React, { useState } from 'react';
import "./ContactUs.css";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';


const styles = {
    border: "2px solid white",
    color: "white",
    transition: "0.1s ease-in",
    fontFamily: "'Abel', 'sans-serif'",
    fontSize: '15px',
    fontWeight: 'bold'
}

const TextFieldStyles = {
    color: 'white !important',
    '& .css-1c2i806-MuiFormLabel-root-MuiInputLabel-root': { color: 'White !important' },
    '& .MuiInput-underline:after': { borderBottomColor: 'white !important' },
    '& .css-1x51dt5-MuiInputBase-input-MuiInput-input': { color: 'White' }
}


const ContactUs = (props) => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState(false);
    const [valid, setValid] = useState(false);

    const nameHandle = (event) => {
        setName(event.target.value)
    }

    const emailHandle = (event) => {
        setEmail(event.target.value);
    }

    const submitHandle = () => {
        if ((name.length > 0) && (email.length > 0)) {
            const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g
            if (regEx.test(email)) {
                axios.post(process.env.REACT_APP_POST_CUSTOMER, {
                    name,
                    email
                })
                    .then(res => {
                        console.log("Posting data", res)
                    })
                    .catch(err => {
                        console.log(err)
                    })

                    setName("");
                    setEmail("");
                    setValid(false);
                    window.alert("Your data sent successfully we will reach you soon 😁")
                
            }
            else {
                setValid(true);
            }

        }
        else {
            setError(true);
            window.alert("Please fill info before submit 😁")

        }

    }

    return (
        <>
            <div className='main-contact-container'>
                <div className='contact-container'>
                    <div className='text-container'>
                        <h2>Hi 👋 there, What's your name</h2>
                    </div>
                    <div className='field-container'>
                        <div>
                            <TextField
                                autoFocus={true}
                                id="standard-basic"
                                label="Name"
                                type="text"
                                variant="standard"
                                sx={{ ...TextFieldStyles }}
                                value={name}
                                onChange={nameHandle}
                                error={error}
                                required />
                        </div>
                        <div>
                            <TextField
                                id="standard-basic"
                                label="Email"
                                type='email'
                                variant="standard"
                                sx={{ ...TextFieldStyles }}
                                value={email}
                                onChange={emailHandle}
                                error={valid}
                                helperText={valid && "please enter valid email"}
                                required />
                        </div>
                    </div>
                    <div className='btn-container'>
                        <Button
                            variant="outlined"
                            sx={{ ...styles,"&:hover": { border: "2px solid white", transform: "scale(1.2)" } }}
                            onClick={() => submitHandle()}
                        >Submit</Button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ContactUs;