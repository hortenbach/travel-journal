import React from 'react'
import { PositionIcon, GlobeIcon } from '../icons'

function Entry({title, location, height, content, image, googleMapsUrl}) {
  return (
    <div className='entry-container' style={{
      backgroundImage: `url(${image})`,
      }}>
        <a href={googleMapsUrl}>
          <PositionIcon />
        </a>
        <div className='content'>
            <h2>{title} - {height}</h2>
            <p><span>{location}</span></p>
            <span>
              {content || "No Entry yet"}
            </span>
        </div>
    </div>
  )
}

export default Entry