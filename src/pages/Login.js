import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { login } from '../redux/apiCalls.js';
import Navbar from '../components/Navbar.js';
import Ads from '../components/Ads.js';
import Footer from '../components/Footer.js';
import './login.css'

//Access to account after registration is done

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()

    const handleClick = (e) => {
        e.preventDefault()
        login(dispatch, { email, password })
    }
    return (
        <div>
            <Ads />
            <Navbar />
            <div className="login-container">
                <div className="login-wrapper">
                    <h2>GO TO ACCOUNT</h2>
                    <form className='login-form'>
                        <input
                            className='login-input'
                            placeholder="email"
                            type="email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            className='login-input'
                            type="password"
                            placeholder="password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button
                            className='login-btn'
                            onClick={handleClick}
                        >Login</button>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    )
};

export default Login;
