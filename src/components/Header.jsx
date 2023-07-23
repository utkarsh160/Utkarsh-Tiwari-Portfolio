import { Link } from 'gatsby'
import React from 'react'

const Header = () => {
  return (
    <>
        <header className="header-main">
            <div className="portfolio-logo">
                UT
            </div>
            <nav>
                <ul>
                    <li>About</li>
                    <li>Experience</li>
                    <li>Work</li>
                    <li>Contact</li>
                    <li>
                        <Link className='primary-btn'>
                            Resume
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    </>
  )
}

export default Header