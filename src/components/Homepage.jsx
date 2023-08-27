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
import Footer from './Footer'

const Homepage = () => {
  return (
    <>
        <div className="layout">
            <Header/>
            <div className="contact-details">
                <div className="contact-details-one">
                <ul>
                    <Link to='https://github.com/utkarsh160'>
                    <li><img src={Github} alt='Github'/></li>
                    </Link>
                    <Link to='https://www.linkedin.com/in/utkarshtiwari160/'>
                    <li><img src={Linkedin} alt='Linkedin'/></li>
                    </Link>
                    <Link to='https://www.instagram.com/utkarsh14.vashisht/'>
                    <li><img src={Instagram} alt='Instagram'/></li>
                    </Link>
                </ul>
                </div>

            </div>
            <div className="email-details">
                <div className="email-details-one">
                <Link className='email' to="mailto:tutkarsh@gmail.com">tutkarsh160@gmail.com</Link>
                </div>
            </div>
            <div className="homepage-main">
                <Introduction/>
                <About/>
                <Experience/>
                {/* <Work/> */}
                <Contact/>
            </div>
            <Footer/>
        </div>
    </>
  )
}

export default Homepage