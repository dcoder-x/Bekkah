import React from 'react'
import '../styles/header.css'

const Header = ({pageTitle,desc,bgImage}) => {
  return (
    <div className="header" style={{background:`linear-gradient(20deg,rgba(41, 108, 153, 0.218),rgba(34, 34, 34, 0.349)),url(${bgImage})`}}>
        <div className="header-text">
        <p>
            {pageTitle}
        </p>
        </div>
        <div className="header-image">
        <p>
            {desc}
        </p>
        </div>
    </div>
  )
}

export default Header