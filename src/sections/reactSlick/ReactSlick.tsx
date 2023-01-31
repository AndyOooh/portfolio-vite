import Section from 'components/Section';
import { useRef, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import Slider from 'react-slick';
import Certificates from 'sections/skills/certificates/CertificatesSlick';
import List from 'sections/skills/list/List';
import SkillsCloud from 'sections/skills/skillsCloud/SkillsCloud';

import './ReactSlick.scss';

// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

function ReactSlick() {
  const sliderRef = useRef<Slider>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const isMdScreen = useMediaQuery({ query: '(min-width: 768px)' });
  const slides = [
    { name: 'slide1', component: <SkillsCloud /> },
    { name: 'slide2', component: <Certificates /> },
    { name: 'slide3', component: <List /> },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    // beforeChange: (current: any, next: any) => setCurrentSlide(next),
  };

  const handleClickNavigation = (direction: string) => {
    if (direction === 'prev') {
      sliderRef.current?.slickPrev();
      currentSlide === 0 ? setCurrentSlide(slides.length - 1) : setCurrentSlide(currentSlide - 1);
    } else {
      sliderRef.current?.slickNext();
      currentSlide === slides.length - 1 ? setCurrentSlide(0) : setCurrentSlide(currentSlide + 1);
    }
    return;
  };

  const navigation = (
    <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
      <button className='text-5xl text-primary' onClick={() => handleClickNavigation('prev')}>
        ❮
      </button>
      <button className='btn btn-circle btn-primary' onClick={() => handleClickNavigation('next')}>
        ❯
      </button>
    </div>
  );

  const handleClickPagination = (e: any) => {
    const index = e.target.value;
    sliderRef.current?.slickGoTo(index);
    setCurrentSlide(index);
  };

  const pagination = (
    <div className='flex justify-center w-full py-2 gap-[2px] mt-8'>
      {slides.map((title, index) => {
        console.log('🚀  file: ReactSlick.tsx:71  index', index);
        return (
          <button
            key={index}
            value={index}
            className={`w-3 h-3 mx-1 rounded-full ${
              currentSlide === index ? 'bg-primary' : 'bg-gray-300/25'
            }`}
            onClick={handleClickPagination}></button>
        );
      })}
    </div>
  );

  return (
    <Section id='rpc' title='React Slick' topic='Does it work'>
      <div className='w-full flex-center h-full'>
        <div className='relative w-full md:w-5/6'>
          <Slider
            ref={sliderRef}
            {...settings}
            // className='relative'
          >
            {slides.map((slide, index) => {
              return <div key={slide.name}>{slide.component}</div>;
            })}
          </Slider>
        </div>
      </div>
      {pagination}
      {isMdScreen ? navigation : null}
    </Section>
  );
}

export default ReactSlick;
