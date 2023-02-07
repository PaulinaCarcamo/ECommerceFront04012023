import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import axios from 'axios';

import Ads from '../components/Ads.js';
import Footer from '../components/Footer.js';
import Navbar from '../components/Navbar.js';
import './register.css';

//THIS PAGE SHOWS FORM TO REGISTER NEW USER'S INFORMATION.

export default function Register() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [register, setRegister] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();

        const configuration = {
            method: "post",
            url: "http://localhost:5000/api/auth/register",
            data: {
                email,
                password,
            },
        };

        axios(configuration)
            .then((result) => { setRegister(true) })
            .catch((error) => { error = new Error() })
    };

    return (
        <div>
            <Ads />
            <Navbar />
            <div className="reg-container">
                <div className="reg-wrapper">
                    <h2>CREATE YOUR ACCOUNT</h2>
                    <form className='reg-form' onSubmit={(e) => handleSubmit(e)}>

                        <div >
                            <div>Email</div>
                            <input
                                className='reg-input'
                                placeholder="email"
                                type="email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div >
                            <div>Password</div>
                            <input
                                className='reg-input'
                                placeholder="password"
                                type="password"
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        <button
                            variant="primary"
                            type="submit"
                            onClick={(e) => handleSubmit(e)}
                        >Register
                        </button>

                        {register ? (
                            <div>
                                <p className="txt-reg">You Are Registered Successfully</p>
                                <Link to='/login'>GO TO LOGIN</Link>
                            </div>
                        ) : (
                            <p>You Are Not Registered</p>
                        )}
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
};