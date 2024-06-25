import React from 'react'
import './DescriptionBox.css'

export const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-navi-box">Description</div>
        <div className="descriptionbox-navi-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>description description description description description description description description description description </p>
        <p>description description description description description</p>
      </div>
    </div>
  )
}
