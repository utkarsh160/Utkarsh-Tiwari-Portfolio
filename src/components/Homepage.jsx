import React from 'react'
import Header from './Header'
import Introduction from './Introduction'
import Github from '../images/Github.svg'
import Linkedin from '../images/Linkedin.svg'
import Twitter from '../images/Twitter.svg'
import Instagram from '../images/Instagram.svg'
import { Link } from 'gatsby'
import About from './About'
import Experience from './Experience'
import Work from './Work'
import Contact from './Contact'

const Homepage = () => {
  return (
    <>
        <div className="layout">
        <Header/>
        <div className="contact-details">
            <div className="contact-details-one">
            <ul>
                <li><img src={Github} alt=''/></li>
                <li><img src={Linkedin} alt=''/></li>
                <li><img src={Twitter} alt=''/></li>
                <li><img src={Instagram} alt=''/></li>
            </ul>
            </div>

        </div>
        <div className="email-details">
            <div className="email-details-one">
            <Link className='email' to="/">tutkarsh160@gmail.com</Link>
            </div>
        </div>
        <div className="homepage-main">
            <Introduction/>
            <About/>
            <Experience/>
            <Work/>
            <Contact/>
        </div>
        </div>
    </>
  )
}

export default Homepage