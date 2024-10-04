import React from 'react'
import './feature.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faGraduationCap, faComments } from '@fortawesome/free-solid-svg-icons';

const Features = () => {
  return (
    <div id='feature' className='feature-container'>
      <div className="feature-header">
        <h3>Our features</h3>
        <p style={{color: "grey",}}>
          By choosing us you will learn in a new way.
          You will see how the same word can be used in different context.
          Just enjoy our features.
        </p>
      </div>

      <div className="feature-details">
        <div className="part1">
            <div className="box">
                <i><FontAwesomeIcon icon={faComments} style={{color: "#FFD43B", fontSize: "4rem"}} /></i>
                <h3 style={{color: "#FFD43B",}}>Traduction</h3>
                <p>Translate text up to 500 words faster!</p>
            </div>
        </div>
        <div className="part2">
            <div className="box">
                <i><FontAwesomeIcon icon={faGlobe} style={{color: "#63E6BE", fontSize: "4rem"}}/></i>
                <h3 style={{color: "#63E6BE",}}>Exploration</h3>
                <p>Discover Cameroon languages and their cultures.</p>
            </div>
            <div className="box">
                <i><FontAwesomeIcon icon={faGraduationCap} style={{color: "#74C0FC", fontSize: "4rem"}} /></i>
                <h3 style={{color: "#74C0FC",}}>Learn</h3>
                <p>Learn wiser with the language dictionary.</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Features
