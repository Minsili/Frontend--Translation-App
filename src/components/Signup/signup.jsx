import React, { useState } from 'react';
import './signup.css';

import user_icon from '../../assets/person.png'
import email_icon from '../../assets/email.png'
import password_icon from '../../assets/password.png'
import google from '../../assets/google.png'
import facebook from '../../assets/facebook.png'
import insta from '../../assets/instagram.png'

import { Link } from 'react-router-dom';

const SignUp = () => {
    return(
        <div className="body">
            <div className='container'>
            <div className="logo">
                <h2>MiTranslate</h2>
            </div>
            <div className="signup">
                <div className="header">
                    <h2>Registration</h2>
                    <p>Fill the following form to register.</p>
                </div>
                <div className="inputs">
                    <div className="input">
                        <img src={user_icon} alt="" />
                        <input type="text" name='username' placeholder='Enter your username' />
                    </div>
                    <div className="input">
                        <img src={email_icon} alt="" />
                        <input type="eamil" name='email' placeholder='Enter your email' />
                    </div>
                    <div className="input">
                        <img src={password_icon} alt="" />
                        <input type="password" name='password' placeholder='Enter your password' />
                    </div>
                </div>
                
                <div className="account">
                    <p>Already have an account? <Link to="/login">Login here!</Link></p>
                </div>

                <div className="submit">
                    <button className='btn'>Sign Up</button>
                </div>

                <div className="socialMedia">
                    <div className="row">
                       <div className="line"></div>
                       <span>Or continue with</span>
                       <div className="line"></div>
                    </div>
                    <div className="row">
                        <img src={google} alt="" />
                        <img src={insta} alt="" />
                        <img src={facebook} alt="" />
                    </div>
                </div>
                
            </div>
        </div>
        </div>
    )
}

export default SignUp;
