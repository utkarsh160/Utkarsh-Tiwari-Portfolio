import React from 'react'
import UtkarshImage from '../images/Utkarsh-Image.jpg'

const About = () => {
  return (
    <>
    <section className="about-main">
        <h1 className='portfolio-heading n-font-2'>About</h1>
        <div className="about-main-wrapper">
            <div className="about-left">
                <p>I am a passionate and skilled Full Stack Developer, and I am thrilled to showcase my journey in the world of technology. With a blend of creativity and technical expertise, I strive to build innovative and user-centric web applications that make a positive impact on people's lives.</p>
                <p>My fascination with coding began at an early age, and it has been a remarkable journey ever since. Over the years, I have honed my skills in front-end and back-end development, making me adept at crafting seamless and robust web experiences. From crafting elegant user interfaces to architecting scalable server systems, I take pride in my ability to bring ideas to life.</p>
                <p>As a technology enthusiast, I am constantly exploring new tools, frameworks, and languages to stay on the cutting edge of the ever-evolving tech landscape. My dedication to learning and growing in this rapidly changing field drives me to push the boundaries of what is possible with each project I undertake.</p>
            </div>
            <div className="about-right">
                <div className="about-image-wrapper">
                    <div className="about-image">
                        <img src={UtkarshImage} alt=''/>
                    </div>
                    <div className="about-box">
                        
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default About