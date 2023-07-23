import React from 'react'

const Experience = () => {
  return (
    <>
        <section className="experience-main">
            <h1 className='portfolio-heading n-font-2'>Experience</h1>
            <div className="experience-main-wrapper">
                <div className="experience-main-card">
                    <div className="experience-main-card-one">
                        <h2>Software Developer <span>@uFaber Edutech</span></h2>
                        <p> January 2022 - Present</p>
                    </div>
                    <div className="experience-main-card-two">
                        <ul>
                            <li>Designed a user-friendly Content Management System (CMS) built with StrapiJS, enabling seamless editing and updating of website content without requiring any coding knowledge and employed GatsbyJS as the frontend framework to create fast, static websites with optimal loading times, enhancing user engagement and satisfaction.</li>
                            <li>Successfully designed and collaborated on a web application using ReactJS, Redux, and Django, Django Rest Framework that allows end users to schedule and join one-on-one sessions with teachers at their desired times. Utilized Zoom APIs to create and manage video conferencing sessions between users and teachers dynamically, providing a seamless experience for users which helps in reducing email traffic significantly by 80%.</li>
                            <li>Spearheaded the development of a Landing Page Management System on Astro, a static site builder and content system, aimed at improving page performance by an impressive 90%.</li>
                            <li>Created APIs using Django and Django Rest Framework to capture leads from various platforms such as Typeform, marketing landing pages and Facebook/Google marketing campaigns, utilizing algorithms to efficiently distribute leads to sales team for follow up.</li>
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
                            <li>Led the development of Icpure, a dynamic and responsive website built using React for frontend development.</li>
                            <li>Utilized Lazy Loading for images and other assets, ensuring that only necessary resources were loaded, further enhancing page load times.</li>
                            <li>Employed modern frontend techniques, such as Code Splitting, to reduce bundle sizes and optimize client-side rendering.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Experience