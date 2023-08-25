import React from 'react'
import Typewriter from 'typewriter-effect';


const Introduction = () => {
  return (
    <>
    <section className="introduction-main">
        <div className="introduction-left">
            <p>Hey! My Name is</p>
            <p className='introduction-name n-font-3'>Utkarsh Tiwari</p>
            <p className='introduction-position n-font-3'> 
            <Typewriter
            options={{
              strings: ['Transforming Ideas into Code !', 'Elevating Experiences with Code !'],
              autoStart: true,
              loop: true,
            }}
          /></p>
            <p>Software Developer at uFaber</p>
        </div>
    </section>
    </>
  )
}

export default Introduction