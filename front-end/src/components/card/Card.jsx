/*
This code creates a card component to show the image of the cover album and extra ifnormacion
*/
import React, { useEffect } from 'react'
import './card.css'


const Card = ({title,description,url}) => {
  
  return (
    <div className="display__card">
        <img 
        src={url} 
        alt="image" className="display__card-img" />
        <div className="display__card-content">
          <p>{title}</p>
          <div className="display__card-content-p">
            <p>{description}</p>
          </div>
          
        </div>
      </div>
  )
}

export default Card