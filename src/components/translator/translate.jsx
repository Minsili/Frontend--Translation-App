import React from 'react'
import './translate.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faFile, faCamera, faArrowRightArrowLeft, faMicrophone } from '@fortawesome/free-solid-svg-icons';
import { faVolumeHigh, faThumbsUp, faThumbsDown, faCopy, faShareNodes } from '@fortawesome/free-solid-svg-icons';

const Translate = () => {
  return (
    <div className='translator-container'>
      <div className="translate-options">
        <div className="option" id='active'>
            <div className="option-icon">
                <i><FontAwesomeIcon icon={faGlobe} className='icon' /></i>
            </div>
            <div className="option-text">
                <h4>Translate text</h4>
                <p>03 Languages</p>
            </div>
        </div>

        <div className="option">
            <div className="option-icon">
                <i><FontAwesomeIcon icon={faFile} className='icon'/></i>
            </div>
            <div className="option-text">
                <h4>Translate files</h4>
                <p>.pdf, .docx, .pptx</p>
            </div>
        </div>

        <div className="option">
            <div className="option-icon">
                <i><FontAwesomeIcon icon={faCamera} className='icon'/></i>
            </div>
            <div className="option-text">
                <h4>Upload an image</h4>
            </div>
        </div>
      </div>

      <div className="translation-container">
        <div className="language-option">
            <select name="" id="">
                <option value="bulu">Bulu</option>
                <option value="fr">French</option>
                <option value="en">English</option>
            </select>
            <i><FontAwesomeIcon icon={faArrowRightArrowLeft} className='icon'/></i>
            <select name="" id="">
                <option value="en">English</option>
                <option value="bulu">Bulu</option>
                <option value="fr">French</option>
            </select>
        </div>

        <div className="inputs-container">
            <div className="input">
                <textarea name="" id="" placeholder='Type to translate'></textarea>
                <div className="input-details">
                    <i><FontAwesomeIcon icon={faMicrophone} /></i>
                </div>
            </div>

            <div className="input">
                <textarea name="" id="" placeholder='Traduction here..'></textarea>
                <div className="input-details">
                    <ul>
                        <li><FontAwesomeIcon icon={faVolumeHigh} /></li>
                        <li><FontAwesomeIcon icon={faThumbsUp} /></li>
                        <li><FontAwesomeIcon icon={faThumbsDown} /></li>
                        <li><FontAwesomeIcon icon={faCopy} /></li>
                        <li><FontAwesomeIcon icon={faShareNodes} /></li>
                    </ul>
                </div>
            </div>
        </div>
      </div>

      <div className="dictionary-container">
        <h3>Dictionary</h3>
        <div className="text-meaning">
            <p>Click on a word to see its meaning</p>
        </div>
      </div>
    </div>
  )
}

export default Translate
