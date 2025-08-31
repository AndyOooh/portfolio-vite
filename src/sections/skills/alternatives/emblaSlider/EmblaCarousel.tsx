import React, { useState, useEffect, useCallback } from 'react'
import useEmblaCarousel, { EmblaOptionsType } from 'embla-carousel-react'
import { DotButton, PrevButton, NextButton } from './EmblaCarouselArrowsDotsButtons'
import imageByIndex from './ImageByIndex'
import Certificates from 'sections/skills/certificates/Certificates'

type PropType = {
  slides: number[]
  options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])
  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  )

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi, setSelectedIndex])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    setScrollSnaps(emblaApi.scrollSnapList())
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)
  }, [emblaApi, setScrollSnaps, onSelect])

  return (
    <>
      <div className=" border-4 border-red-300">
        <div className="border-2 border-blue-300" ref={emblaRef}>
          <div className="flex overflow-hidden border-2 border-green-300">
            {slides.map((index) => (
              <div className="" key={index}>
                <div className="">
                  <Certificates />
                </div>
                {/* <img className='embla__slide__img' src={imageByIndex(index)} alt='Your alt text' /> */}
              </div>
            ))}
          </div>
        </div>

        <PrevButton onClick={scrollPrev} />
        <NextButton onClick={scrollNext} />
      </div>

      <div className="embla__dots">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            selected={index === selectedIndex}
            onClick={() => scrollTo(index)}
          />
        ))}
      </div>
    </>
  )
}

export default EmblaCarousel
