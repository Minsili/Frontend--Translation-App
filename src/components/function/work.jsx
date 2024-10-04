import React from 'react'
import './work.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';

const Work = () => {
  return (
    <div id='work' className='function-container'>
      <div className="functions">
        <h3>How it works?</h3>
        
        <div className="function">
          <h3>1</h3>
          <p>
            <h4>Exploit</h4>
            Exploit different Cameroonian languages available.
          </p>
        </div>

        <div className="function">
          <h3>2</h3>
          <p>
            <h4>Translate</h4>
            Translate from speech to text or from text to text.
          </p>
        </div>

        <div className="function">
          <h3>3</h3>
          <p>
            <h4>Learn</h4>
            Learn from the dictionary the meaning of a particuler word 
            and the different ways it can be used.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Work
