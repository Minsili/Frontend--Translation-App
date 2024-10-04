import React from 'react'
import './participate.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandHoldingHeart } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

const Participate = () => {
  return (
    <div className='participate-container'>
      <div className="part-container">
        <i><FontAwesomeIcon icon={faHandHoldingHeart} style={{color: "#ff3d5a", fontSize: "3rem"}}/></i>
        <p>
          Do you want to participate by helping us to add a new Cameroonian language?
          Just <Link to="/contact">Contact Us</Link> here!
        </p>
      </div>
    </div>
  )
}

export default Participate
