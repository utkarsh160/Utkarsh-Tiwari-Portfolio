import { AnchorLink } from 'gatsby-plugin-anchor-links'
import React, { useState } from 'react'
import Hamburger from '../images/Hamburger.svg'
import Close from '../images/Close.svg'
import Resume from '../assets/Utkarsh_Tiwari.pdf'

const Header = () => {

    const [sidebarToggle,setSidebarToggle] = useState(true);

    const handleSidebarToggle = () => {
        setSidebarToggle(!sidebarToggle)
    }
      
  return (
    <>
        <header className="header-main">
            <div className="portfolio-logo">
                UT
            </div>
            <nav className='header-nav'>
                <ul>
                    <AnchorLink to='#about-main-section'>
                    <li>About</li>
                    </AnchorLink>
                    <AnchorLink to='#experience-main-section'>
                    <li>Experience</li>
                    </AnchorLink>
                    {/* <AnchorLink to='#work-main-section'>
                    <li>Work</li>
                    </AnchorLink> */}
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
            {sidebarToggle ? <span id="hamburger-icon" onClick={handleSidebarToggle}>
                <img src={Hamburger} alt="Hamburger Icon" />
            </span> : <span id="close-icon" onClick={handleSidebarToggle}>
                <img src={Close} alt="Close Icon" />
            </span>}
            <aside className={sidebarToggle ? 'sidebar-main sidebar-main-hide' : 'sidebar-main sidebar-main-show'}>
            <nav className='sidebar-nav'>
                <ul>
                    <AnchorLink to='#about-main-section'>
                    <li onClick={handleSidebarToggle}>About</li>
                    </AnchorLink>
                    <AnchorLink to='#experience-main-section'>
                    <li onClick={handleSidebarToggle}>Experience</li>
                    </AnchorLink>
                    {/* <AnchorLink to='#work-main-section'>
                    <li onClick={handleSidebarToggle}>Work</li>
                    </AnchorLink> */}
                    <AnchorLink to='#contact-main-section'>
                    <li onClick={handleSidebarToggle}>Contact</li>
                    </AnchorLink>
                    <li>
                        <a className='primary-btn' href={Resume} download>
                            Resume
                        </a>
                    </li>
                </ul>
            </nav>
            </aside>
        </header>
    </>
  )
}

export default Header