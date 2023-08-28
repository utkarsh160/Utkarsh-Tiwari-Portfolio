import React from 'react'
import UtkarshImage from '../images/Utkarsh-Image.jpg'
import JavascriptLogo from '../images/Javascript.svg'
import PythonLogo from '../images/Python.svg'
import ReactJsLogo from '../images/ReactJs.svg'
import ReduxLogo from '../images/Redux.svg'
import GatsbyJsLogo from '../images/Gatsby.svg'
import StrapiLogo from '../images/Strapi.svg'
import DjangoLogo from '../images/Django.svg'
import NodeJsLogo from '../images/NodeJs.svg'
import SqlLogo from '../images/MySql.svg'
import MongoDbLogo from '../images/MongoDb.svg'

const About = () => {
  return (
    <>
    <section className="about-main" id='about-main-section'>
        <h1 className='portfolio-heading n-font-2'>About</h1>
        <div className="about-main-wrapper">
            <div className="about-left">
                <p>I am a passionate and skilled Full Stack Developer. I am thrilled to showcase my journey in the world of technology. With a blend of creativity and technical expertise, I strive to build innovative and user-centric web applications that make a positive impact on people's lives.</p>
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
        <div className="about-sub-main-wrapper">
        <p id='about-sub-heading'>Here are a few technologies I’ve been working</p>
        <div className="technology-wrapper">
                <ul>
                    <li>
                        <div className="list-wrapper">
                            <span>
                                <img src={JavascriptLogo} alt=""/>
                            </span>
                            <p>Javascript</p>
                        </div>
                    </li>
                    <li>
                    <div className="list-wrapper">
                            <span>
                                <img src={PythonLogo} alt=""/>
                            </span>
                            <p>Python</p>
                        </div>
                    </li>
                    <li>
                    <div className="list-wrapper">
                            <span>
                                <img src={DjangoLogo} alt=""/>
                            </span>
                            <p>Django</p>
                        </div>
                    </li>
                    <li>
                    <div className="list-wrapper">
                            <span>
                                <img src={NodeJsLogo} alt=""/>
                            </span>
                            <p>Node Js</p>
                        </div>
                    </li>
                    <li>
                    <div className="list-wrapper">
                            <span>
                                <img src={ReactJsLogo} alt=""/>
                            </span>
                            <p>React Js</p>
                        </div>
                    </li>
                </ul>
                <ul>
                <li>
                    <div className="list-wrapper">
                            <span>
                                <img src={SqlLogo} alt=""/>
                            </span>
                            <p>SQL</p>
                        </div>
                    </li>

                    <li>
                    <div className="list-wrapper">
                            <span>
                                <img src={GatsbyJsLogo} alt=""/>
                            </span>
                            <p>Gatsby Js</p>
                        </div>
                    </li>
                    <li>
                    <div className="list-wrapper">
                            <span>
                                <img src={StrapiLogo} alt=""/>
                            </span>
                            <p>Strapi</p>
                        </div>
                    </li>
                    <li>
                    <div className="list-wrapper">
                            <span>
                                <img src={ReduxLogo} alt=""/>
                            </span>
                            <p>Redux</p>
                        </div>
                    </li>
                    <li>
                    <div className="list-wrapper">
                            <span>
                                <img src={MongoDbLogo} alt=""/>
                            </span>
                            <p>MongoDb</p>
                        </div>
                    </li>
                </ul>
        </div>
        </div>
    </section>
    </>
  )
}

export default About