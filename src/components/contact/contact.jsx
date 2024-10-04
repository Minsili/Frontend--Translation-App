import React from 'react';
import './contact.css';
import nature from '../../assets/lina-nature.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faSquareInstagram} from '@fortawesome/free-brands-svg-icons';
import {faFacebook} from '@fortawesome/free-brands-svg-icons';
import Navbar from '../navbar/navbar';
import Footer from '../footer/footer';


const Contact = () => {
    return(
        <>
        <Navbar/>

        <div className='contact-container' id='contact'>
            <div className="header">
                <h2>Contact Us</h2>
            </div>

            <div className="contact-body">
            <div className="col1">
                <div className="row1">
                    <div className="photo">
                        <img src={nature} alt="" />
                    </div>
                    <div className="note">
                        <h3>Got a question?</h3>
                        <p>Hi, Minsili here. Before sending me your quetion, please:</p>
                        <ol>
                            <li>Check the <a href="#">FAQ</a> section.</li>
                            <li>Check the <a href="#">About</a> section.</li>
                        </ol>
                        <p>One question per message, please.</p>
                    </div>
                </div>

                <div className="row2">
                    <form action="">
                        <div className="input">
                            <label htmlFor="name">Your Name</label><br/>
                            <input type="text" name='name' required />
                        </div>
                        <div className="input">
                            <label htmlFor="email">Your Email</label><br/>
                            <input type="email" name='email' required />
                        </div>
                        <div className="input">
                            <label htmlFor="message">Your Message</label><br/>
                            <textarea rows={3} cols={8}></textarea>
                        </div>

                        <div className="send-btn">
                            <button type='submit'>Send</button>
                        </div>
                    </form>
                </div>
            </div>

            <div className="col2">
                <div className="row1">
                    <h3>Social Media:</h3>

                    <ul>
                        <li><FontAwesomeIcon icon={faLinkedinIn} className='media' /></li>
                        <li><FontAwesomeIcon icon={faSquareInstagram} className='media'/></li>
                        <li><FontAwesomeIcon icon={faFacebook} className='media'/></li>
                    </ul>

                    <h3>Address:</h3>
                    <p>Yaounde, Center, Cameroon.</p>
                </div>
                <div className="row2">
                    <div className="text">
                        <h3>Regarding Your Question</h3>
                        <p>
                            I got a lot email, so please be brief, patient , and precise.
                        </p>
                        <p>
                            Nevertheless, I'm eager to answer any questions about this website.
                        </p>
                    </div>
                </div>
            </div>
            </div>
        </div>

        <Footer/>
        </>
    )
}

export default Contact;
