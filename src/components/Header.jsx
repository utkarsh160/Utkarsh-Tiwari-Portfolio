import { Link } from 'gatsby'
import { AnchorLink } from 'gatsby-plugin-anchor-links'
import React from 'react'
import Resume from '../assets/Utkarsh_Tiwari.pdf'

const Header = () => {
      
  return (
    <>
        <header className="header-main">
            <div className="portfolio-logo">
                UT
            </div>
            <nav>
                <ul>
                    <AnchorLink to='#about-main-section'>
                    <li>About</li>
                    </AnchorLink>
                    <AnchorLink to='#experience-main-section'>
                    <li>Experience</li>
                    </AnchorLink>
                    <AnchorLink to='#work-main-section'>
                    <li>Work</li>
                    </AnchorLink>
                    <AnchorLink to='#contact-main-section'>
                    <li>Contact</li>
                    </AnchorLink>
                    <li>
                        <a className='primary-btn' href={Resume} download>
                            Resume
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    </>
  )
}

export default Header