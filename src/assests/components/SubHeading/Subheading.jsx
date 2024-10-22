
import React from 'react'
import { images } from '../../constants'


const Subheading = ({ title }) => {
  return (
    <div>
      <p className="p_cormorant">{title}</p>
      <img src={images.spoon} alt="spoon" className='spoon__img' />
    </div>
  )
}

export default Subheading
