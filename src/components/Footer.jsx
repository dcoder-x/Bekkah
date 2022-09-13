import React from 'react'
import { Link } from 'react-router-dom'
// import { images } from '../assets/assets'
import { navData } from '../data/navData'
import { socialData } from '../data/socials'
import '../styles/footer.css'
import { Icon } from '@iconify/react';

const Footer = () => {
  return (
    <footer id="footer">
        <section className='logo-holder' >
        <div className="logo">
          <p>
            Bekkah
          </p>
          <p style={{color:'rgba(85, 204, 255, 1)'}}>
            AI
          </p>
        </div>
            <p className="copyright">
                © 2022 Bekkah Ai All rights reserved
            </p>
            <div className="socials">
              {
                socialData.map(social=>{
                  return(
                    <div className="social">
                      <Icon icon={social.icon}/>
                    </div>
                  )
                })
              }
            </div>
        </section>
        <section className="footer-links">
            {
                navData.map((link)=>{
                    return(
                        <Link to={link.link}>
                            {link.name}
                        </Link>
                    )
                })
            }
        </section>
    </footer>
  )
}

export default Footer