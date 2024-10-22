
import React from 'react'
import { SubHeading } from '../../components'
import { images } from '../../constants'
import './chef.scss'

const Chef = () => {
  return (
    <div className='app__bg app__wrapper section__padding'>
      <div className='app__wrapper_img app__wrapper-reverse'>
       <img src={images.chef} alt="chef" />
      </div>
      
      <div className="app__wrapper_info">
        <SubHeading title="Chef's Word" />
        <h1 className="headtext__cormorant">What We Believe in</h1>

        <div className="app__chef-content">
          <div className="app__chef-content_quote">
            <img src={images.quote} alt="quote" />
            <p className="p__opensans">HIi i'm the best in the world, better than Gordon Ramsey</p>
          </div>
        </div>
        <div className="app__chef-sign">
          <p className='p__opensans'>Saber The Chef</p>
          <p className="p__opensans">Chef & Founder</p>
          <img src={images.sign} alt="signature" />
        </div>
      </div>
    </div>
  )
}

export default Chef
