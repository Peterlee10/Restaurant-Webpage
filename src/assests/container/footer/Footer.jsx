
import React from 'react'
import { FooterOverlay, Newsletter } from '../../components';
import  './footer.scss'
import { images } from '../../constants'
// import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

const Footer = () => {
  return (
    <div className='app__footer section__padding'>
      <FooterOverlay />
      <Newsletter />

      <div className="app__footer-links">
        <div className="app__footer-links_contact">
        <h1 className='app__footer-headtext'>Contact Us</h1>
        <p className='p__opensans'>6f washington DC</p>
        <p>+23497558943</p>
        </div>

        <div className="app__footer-links_work">
        <img src={images.gericht} alt="" />
        <p className='p__opensans'>The Best Way to Eat is too Eat at Geticht!</p>
        <img src={images.spoon} alt="spoon" className='spoon__img' style={{ marginTop: '15px' }}/>
        <div className="app__footer-links">

        </div>
        //social icons//
        </div>

        <div className="app__footer-links_contact">
        <h1 className='app__footer-headtext'>Working Hours</h1>
        <p className='p__opensans'>Monday-Friday</p>
        <p className="p__opensans">08-00am-12-00am</p>
        <p>+23497558943</p>
        <p className='p__opensans'>sunday-Saturday</p>
        <p className="p__opensans">09-00am-10-00am</p>
      
        </div>
      <div className="footer__copyright">
        <p className='p__opensans'>2023 All Rights Reserved </p>
      </div>
      </div>
    </div>
  )
}

export default Footer
