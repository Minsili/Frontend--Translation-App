import React, { useState } from 'react';
import './navbar.css';
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faComment } from '@fortawesome/free-solid-svg-icons';
import { FaBars } from "react-icons/fa6"

const Navbar = () => {
  const [productsDropdown, setProductsDropdown] = useState(false);
  const [appsDropdown, setAppsDropdown] = useState(false);

  const [menuOpen, setOpenMenu] = useState(false);
  const toggleMenu = () => {
    setOpenMenu(!menuOpen);
  };

  return (
    <div className='navBar-container'>
      <nav>
        <div className="logo">
          <i><FontAwesomeIcon icon={faComment} className='icon' /></i>
          <h2>MiTranslate</h2>
        </div>
        <ul className={menuOpen ? 'nav-links open' : 'nav-links'}>
          <li className='active'>
            <Link to="/">Translator</Link>
          </li>
          <li className='section'><a href="#feature">Features</a></li>

          {/* Products Dropdown */}
          <li
            className='section'
            onMouseEnter={() => setProductsDropdown(true)}
            onMouseLeave={() => setProductsDropdown(false)}
          >
            Products
            {productsDropdown && (
              <div className="dropdown-menu">
                <Link to="/product1"><h4>MiTranslator</h4><p>Translate securely, efficiently, and accurately</p></Link>
                <Link to="/product2"><h4>MiTranslate API</h4><p>Build multilingual experience into your products</p></Link>
              </div>
            )}
          </li>

          {/* Apps Dropdown */}
          <li
            className='section'
            onMouseEnter={() => setAppsDropdown(true)}
            onMouseLeave={() => setAppsDropdown(false)}
          >
            Apps
            {appsDropdown && (
              <div className="dropdown-menu">
                <Link to="/app1">Desktop app</Link>
                <Link to="/app2">Mobile app</Link>
              </div>
            )}
          </li>

          <li className='section'><a href="#work">How it works?</a></li>
          <li className='section'><a href="#pricing">Pricing</a></li>
        </ul>
        <div className="bottons">
          <i><FontAwesomeIcon icon={faLightbulb} className='icon' /></i>
          <button id='login'><Link to="/login">Login</Link></button>
          <button id='trial'>Start free trial</button>
        </div>
        {/* Menu option */}
        <div className='nav-icon' onClick={toggleMenu}>
          <FaBars/>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
