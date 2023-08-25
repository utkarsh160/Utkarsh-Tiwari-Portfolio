import React from 'react'
import AnimatedCursor from "react-animated-cursor"
import Homepage from '../components/Homepage'

const Index = () => {
  return (
    <>
      <AnimatedCursor
      innerSize={8}
      outerSize={8}
      color='100,255,218'
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={5}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link',
        '.list-wrapper',
        '.portfolio-logo'
      ]}
    />
     <Homepage/>
    </>
  )
}

export default Index
