
import React from 'react'
import './Newsletter.scss';
import Subheading from '../SubHeading/Subheading';

const Newsletter = () => {
  return (
    <div className='app__newsletter'>
      <div className="app__newletter-heading">
        <Subheading title="Newsletter" />
        <h1 className="headtext__cormorant">Subscribe To Our NewsLetter</h1>
        <p className='p__opensans'>And never miss latest Updates</p>
      </div>
      <div className="app__newsletter-input">
        <input type="email" placeholder='pleease enter your email address'/>
        <button type='button' className='custom__button'>Subscribe</button>
      </div>

    </div>
  )
}

export default Newsletter
