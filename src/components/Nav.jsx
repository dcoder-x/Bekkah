import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { navData } from '../data/navData'
import '../styles/nav.css'

const Nav = () => {
  const [clicked, setClicked] = useState()
  return (
      <nav id="nav">
        <div className="logo">
          <p>
            Bekkah
          </p>
          <p style={{color:'rgba(85, 204, 255, 1)'}}>
            AI
          </p>
        </div>
        <div className={`menu-holder ${clicked?'show':'closed'}`}>
          {
            navData.map(menu=>{
              return(
                <Link to={menu.link}>
                  <p className='menu-link'>
                    {
                      menu.name
                    }
                  </p>
                </Link>
              )
            })
          }
        </div>
        <div 
        className={`menuButtons ${clicked?'menu-clicked':null}`}
        onClick={e=>{setClicked(!clicked);!clicked?e.target.classList.remove('menu-clicked'):null}}
        >
          <div className="menuLines"></div>
          <div className="menuLines"></div>
          <div className="menuLines"></div>
        </div>
      </nav>
  )
}

export default Nav