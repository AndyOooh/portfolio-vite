import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'
// import 'swiper/scss/effect-fade';
import { EffectFade, Navigation, Pagination } from 'swiper'

import { projects } from './projects'
// import SlideCard from './SlideCard';
import SlideCard from './SlideCard'
import Section from 'components/Section'

import { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'

function Work() {
  const topic = 'Work'
  const slideTitles = projects.map((project) => project.title)
  const [domLoaded, setDomLoaded] = useState(false)
  const [slideIndex, setSlideIndex] = useState<number>(0)

  const isMdScreen = useMediaQuery({ query: '(min-width: 768px)' })

  useEffect(() => {
    setDomLoaded(true)
  }, [])

  return (
    <Section id="work" topic={topic} title={slideTitles[slideIndex]}>
      {domLoaded && (
        // <div className='flex-center flex-1 bg-orange-400/10 my-0'
        // <div className='flex-center h-full w-full sm:w-5/6 max-w-3xl'>
        <Swiper
          onSlideChange={({ realIndex }) => setSlideIndex(realIndex)}
          spaceBetween={30}
          // effect={'fade'}
          loop={true}
          // modules={[EffectFade, Navigation, Pagination]}
          modules={[Navigation, Pagination]}
          navigation={isMdScreen}
          pagination={{
            clickable: true,
            // el: '.swiper-pagination',
          }}
          className="flex-1 flex-center w-full "
        >
          {projects.map((project) => (
            <SwiperSlide key={project.title}>
              <SlideCard {...project} key={project.title} />
            </SwiperSlide>
          ))}
        </Swiper>
        // </div>
      )}
    </Section>
  )
}

export default Work
