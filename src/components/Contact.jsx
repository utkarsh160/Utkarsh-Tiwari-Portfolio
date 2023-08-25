import { Link } from 'gatsby'
import React from 'react'
import LinkedinLogo from '../images/Linkedin.svg'
import GmailLogo from '../images/Gmail.svg'

const Contact = () => {
  return (
    <>
            <section className="contact-main" id='contact-main-section'>
            <h1 className='portfolio-heading n-font-2'>What's Next?</h1>
            <div className="contact-main-wrapper">
              <p>Thank you for visiting my portfolio! I'm thrilled to connect with you. Whether you have a question, want to collaborate, or just say hello, feel free to reach out to me through any of the following channels:</p>
              <ul>
                  <li>
                    <p>For professional networking and industry discussions, find me on LinkedIn.<br/> I share my experiences, achievements, and insights into the latest trends in the field. Connect with me at:</p>
                    <Link to='https://www.linkedin.com/in/utkarshtiwari160/'>
                    <button>
                      <span>
                        <img src={LinkedinLogo} alt=''/>
                      </span>
                     <p>Linkedin</p>
                      </button>
                    </Link>
                  </li>
                  <li>
                    <p>For more direct communication, feel free to shoot me an email.<br/> I'd love to hear from you, whether it's regarding a potential collaboration or just a friendly chat. Reach out to me at:</p>
                    <Link to='mailto:tutkarsh160@gmail.com'>
                    <button>
                      <span>
                        <img src={GmailLogo} alt="" />
                      </span>
                      <p>Gmail</p>
                      </button>
                    </Link>
                  </li>
              </ul>
              <p>I'm excited to connect with like-minded individuals and potential collaborators. Don't hesitate to reach out, as I'm always open to new opportunities and conversations. Looking forward to hearing from you soon!</p>
            </div>
        </section>
    </>
  )
}

export default Contact