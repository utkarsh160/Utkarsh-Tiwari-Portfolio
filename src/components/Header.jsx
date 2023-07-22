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
                    <li className='n-red'>About</li>
                    <li className='n-uppercase'>Experience</li>
                    <li className='n-font-one'>Work</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    </>
  )
}

export default Header