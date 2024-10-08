import React from 'react';
import './login.css';
import { Link } from "react-router-dom";
import email_icon from '../../assets/email.png'
import password_icon from '../../assets/password.png'
import google from '../../assets/google.png'
import facebook from '../../assets/facebook.png'
import insta from '../../assets/instagram.png'

const Login = () => {
    return(
        <div className='body'>
            <div className='form-container'>
            <div className="logo">
                <h2>MiTranslate</h2>
            </div>
            <div className="login">
                <div className="header">
                    <h2>Account Login</h2>
                    <p>Happy to see you again!</p>
                </div>

                <div className="forgetPwd">
                    <p>No account yet? <Link to="/signup">New subscription</Link></p>
                </div>

                <div className="inputs">
                    <div className="input">
                        <img src={email_icon} alt="" />
                        <input type="eamil" name='email' placeholder='Enter your email' />
                    </div>
                    <div className="input">
                        <img src={password_icon} alt="" />
                        <input type="password" name='password' placeholder='Enter your password' />
                    </div>
                </div>
                
                <div className="forgetPwd">
                    <p>Forget password? <a href="#">Click here!</a></p>
                </div>

                <div className="submit">
                    <button className='btn'>Login</button>
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

export default Login;