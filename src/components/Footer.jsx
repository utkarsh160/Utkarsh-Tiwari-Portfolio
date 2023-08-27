import React from 'react'
import Github from '../images/Github.svg'
import Linkedin from '../images/Linkedin.svg'
import Instagram from '../images/Instagram.svg'
import Gmail from '../images/Gmail.svg'
import { Link } from 'gatsby'

const Footer = () => {
  return (
    <>
    <footer>
        <nav id='footer-nav'>
            <ul>
                <li>
                <Link to='https://github.com/utkarsh160'>
                    <img src={Github} alt="Github" />
                </Link>
                </li>
                <li>
                <Link to='https://www.linkedin.com/in/utkarshtiwari160/'>
                    <img src={Linkedin} alt="Linkedin" />
                </Link>
                </li>
                <li>
                <Link to="mailto:tutkarsh@gmail.com">
                    <img src={Gmail} alt="Gmail" />
                </Link>
                </li>
                <li>
                <Link to='https://www.instagram.com/utkarsh14.vashisht/'>
                    <img src={Instagram} alt="Instagram" />
                </Link>
                </li>
            </ul>
        </nav>
        <p>Designed by Utkarsh Tiwari</p>
    </footer>
    </>
  )
}

export default Footer