import Section from 'components/Section'
import {
  ButtonBack,
  ButtonNext,
  CarouselProvider,
  Slide,
  Slider,
} from 'pure-react-carousel'
import React from 'react'
import Certificates from 'sections/skills/certificates/Certificates'
import List from 'sections/skills/list/List'
import SkillsCloud from 'sections/skills/skillsCloud/SkillsCloud'

import 'pure-react-carousel/dist/react-carousel.es.css'

function ReactPureCarousel() {
  const slides = [
    { name: 'slide1', component: <SkillsCloud /> },
    { name: 'slide2', component: <Certificates /> },
    { name: 'slide3', component: <List /> },
  ]
  return (
    <Section id="rpc" title="RPC" topic="Does it work">
      {/* <CarouselProvider naturalSlideWidth={500} naturalSlideHeight={500} totalSlides={3} className='w-full bg-purple/10'> */}
      <CarouselProvider
        infinite={true}
        naturalSlideWidth={500}
        naturalSlideHeight={500}
        totalSlides={3}
        className="w-full flex-center"
      >
        {/* <div className='w-full border-2 border-green-500'> */}
        <Slider className="w-full border-2 border-yellow-500 bg-white/10">
          {slides.map((slide, index) => {
            return (
              <Slide index={index} key={slide.name}>
                {slide.component}
              </Slide>
            )
          })}
        </Slider>
        <div className="flex gap-4">
          <ButtonBack>Back</ButtonBack>
          <ButtonNext>Next</ButtonNext>
        </div>
        {/* </div> */}
      </CarouselProvider>
    </Section>
  )
}

export default ReactPureCarousel
