import React from 'react'
import RightArrow from '../images/RightArrow.svg'

const Experience = () => {
  return (
    <>
        <section className="experience-main" id='experience-main-section'>
            <h1 className='portfolio-heading n-font-2'>Experience</h1>
            <div className="experience-main-wrapper">
                <div className="experience-main-card">
                    <div className="experience-main-card-one">
                        <h2>Software Developer <span>@uFaber Edutech</span></h2>
                        <p> January 2022 - Present</p>
                    </div>
                    <div className="experience-main-card-two">
                        <ul>
                            <div className='experience-main-card-list-item'>
                                <span className='experience-card-pointer-wrapper'><img src={RightArrow} alt=''/></span> <li>Designed a user-friendly Content Management System (CMS) built with <span>StrapiJS</span>, enabling seamless editing and updating of website content without requiring any coding knowledge and employed <span>GatsbyJS</span> as the frontend framework to <span>create fast, static websites with optimal loading times, enhancing user engagement and satisfaction.</span></li>
                            </div>
                            <div className='experience-main-card-list-item'>
                                <span className='experience-card-pointer-wrapper'><img src={RightArrow} alt=''/></span> <li>Successfully designed and collaborated on a web application using <span>ReactJS, Redux, and Django, Django Rest Framework</span> that allows end users to schedule and join one-on-one sessions with teachers at their desired times. Utilized <span>Zoom APIs</span> to create and manage video conferencing sessions between users and teachers dynamically, <span>providing a seamless experience for users which helps in reducing email traffic significantly by 80%.</span></li>
                            </div>
                            <div className='experience-main-card-list-item'>
                                <span className='experience-card-pointer-wrapper'><img src={RightArrow} alt=''/></span> <li>Spearheaded the development of a Landing Page Management System on <span>Astro</span>, a static site builder and content system, aimed at <span>improving page performance by an impressive 90%.</span></li>
                            </div>
                            <div className='experience-main-card-list-item'>
                                <span className='experience-card-pointer-wrapper'><img src={RightArrow} alt=''/></span> <li><span>Created APIs using Django and Django Rest Framework</span> to capture leads from various platforms such as Typeform, marketing landing pages and Facebook/Google marketing campaigns, utilizing algorithms to efficiently distribute leads to sales team for follow up.</li>
                            </div>
                        </ul>
                    </div>
                </div>
                <div className="experience-main-card">
                    <div className="experience-main-card-one">
                        <h2>Assitant Software Trainee <span>@Micro Engineers</span></h2>
                        <p>March 2021 - Aug 2021</p>
                    </div>
                    <div className="experience-main-card-two">
                        <ul>
                            <div className='experience-main-card-list-item'>
                                <span className='experience-card-pointer-wrapper'><img src={RightArrow} alt=''/></span> <li>Led the development of Icpure, a dynamic and responsive website built using <span>ReactJS</span>  for frontend development.</li>
                            </div>
                            <div className='experience-main-card-list-item'>
                                <span className='experience-card-pointer-wrapper'><img src={RightArrow} alt=''/></span> <li>Utilized <span>Lazy Loading</span> for images and other assets, ensuring that only necessary resources were loaded, <span>further enhancing page load times.</span></li>
                            </div>
                            <div className='experience-main-card-list-item'>
                                <span className='experience-card-pointer-wrapper'><img src={RightArrow} alt=''/></span> <li>Employed modern frontend techniques, such as <span>Code Splitting, to reduce bundle sizes and optimize client-side rendering.</span></li>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Experience