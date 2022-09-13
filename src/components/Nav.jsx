import React from 'react'
import { Link } from 'react-router-dom'
import { navData } from '../data/navData'
import '../styles/nav.css'

const Nav = () => {
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
        <div className="menu-holder">
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
      </nav>
  )
}

export default Nav