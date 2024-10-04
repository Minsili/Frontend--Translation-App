import React from 'react'
import './footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebook, faSquareGithub, faSquareInstagram, faXTwitter} from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className="section-one">
        <i><FontAwesomeIcon icon={faGlobe} className='icon'/></i>
        <select name="" id="">
            <option value="en">English</option>
            <option value="fr">French</option>
        </select>
      </div>

      <div className="section-two">
        <div className="links">
            <h3>Resources</h3>
            <ul>
                <li>Help Center</li>
                <li>Blog</li>
                <li>API Documentation</li>
            </ul>
        </div>
        <div className="links">
            <h3>Product</h3>
            <ul>
                <li>Free Translation</li>
                <li>Files Translation</li>
                <li>Translation API</li>
            </ul>
        </div>
        <div className="links">
            <h3>Download Apps</h3>
            <ul>
                <li>For Android</li>
                <li>For iOS</li>
                <li>For Desktops</li>
            </ul>
        </div>
        <div className="links">
            <h3>Company</h3>
            <ul>
                <li>Policy & Privacy</li>
                <li>Terms & Confidentiality</li>
                <li>About Us</li>
            </ul>
        </div>
      </div>

      <div className="section-three">
        <div className="copyright">
            <p>Made by Minsili.</p>
            <p>&copy; 2024 MiTech Enterprise. All rights reserved.</p>
        </div>
        <div className="social-links">
            <i><FontAwesomeIcon icon={faFacebook} className='icon'/></i>
            <i><FontAwesomeIcon icon={faSquareInstagram} className='icon'/></i>
            <i><FontAwesomeIcon icon={faSquareGithub} className='icon'/></i>
            <i><FontAwesomeIcon icon={faXTwitter} className='icon'/></i>
        </div>
      </div>
    </div>
  )
}

export default Footer
