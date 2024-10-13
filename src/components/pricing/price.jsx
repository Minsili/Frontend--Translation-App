import React from 'react'
import './price.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

const Prices = () => {
  return (
    <div id='pricing' className='pricing-container'>
      <h3>MiTranslate is available at fair prices</h3>
      <div className="prices-container">
        <div className="price">
            <h3 id='free'>Free</h3>
            <h4>Limited PLan</h4>
            <div className="amount">
                <p>
                  <sup>CFA</sup><span>0</span><sub>/month</sub>
                </p>
            </div>
            <div className="plan-details">
                <p>Test plan for all users.</p>
                <ul>
                    <li>
                        <i><FontAwesomeIcon icon={faCircleCheck} className='check-icon free'/></i>
                        Translate up to 500 words per day.
                    </li>
                </ul>
            </div>

            <div className="choose-btn">
                <input id='free-Btn' type="submit" value={'Get Free plan'} />
            </div>
        </div>

        <div className="price starter-container">
            <h3 id='starter'>Recommended</h3>
            <h4>Starter PLan</h4>
            <div className="amount">
                <p>
                  <sup>CFA</sup><span>500</span><sub>/week</sub>
                </p>
            </div>
            <div className="plan-details">
                <p>Free plan plus,</p>
                <ul>
                    <li>
                        <i><FontAwesomeIcon icon={faCircleCheck} className='check-icon starter'/></i>
                        Unlimited words translation.
                    </li>
                    <li>
                        <i><FontAwesomeIcon icon={faCircleCheck} className='check-icon starter'/></i>
                        Upload files for translation.
                    </li>
                    <li>
                        <i><FontAwesomeIcon icon={faCircleCheck} className='check-icon starter'/></i>
                        Speech-to-text translation, etc.
                    </li>
                </ul>
            </div>

            <div className="choose-btn">
                <input id='starter-Btn' type="submit" value={'Get Starter plan'} />
            </div>
        </div>

        <div className="price">
            <h3 id='team'>Team</h3>
            <h4>Enterprise PLan</h4>
            <div className="amount">
                <p>
                  We are here to meet your specific company and project requirement.
                </p>
            </div>
            <div className="plan-details">
                <p>Starter plan plus,</p>
                
            </div>

            <div className="choose-btn">
               <input id='team-Btn' type="submit" value={'Contact sales'} />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Prices
