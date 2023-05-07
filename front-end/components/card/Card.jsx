import React, { useEffect } from 'react'
import './card.css'


const Card = () => {
  

  return (
    <div className="display__card">
        <img 
        src="https://images.unsplash.com/photo-1661956600654-edac218fea67?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1636&q=80" 
        alt="" className="display__card-img" />
        <div className="display__card-content">
          <p>Album</p>
          <div className="display__card-content-p">
            <p>Name heredddddd ddd dddddddd dddd ddddddddd ddddddddddddddddddddddd</p>
          </div>
          
        </div>
      </div>
  )
}

export default Card