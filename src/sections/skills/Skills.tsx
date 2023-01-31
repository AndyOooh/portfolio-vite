import React, { useEffect, useState } from 'react';
// Import Swiper
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './Skills.scss';
import Section from 'components/Section';
// import SkillsCloud from './skillsCloud/SkillsCloud';
import SkillsCloud from './skillsCloud/SkillsCloud copy';
// import Certificates from './certificates/Certificates copy';
import Certificates from './certificates/Certificates';
import { useMediaQuery } from 'react-responsive';
import List from './list/List';

const slideNames = ['sphere', 'list', 'certificates'];

function Skills() {
  const topic = 'Skills';
  const slideTitles = ['List', 'Certificates', 'Cloud'];
  // const [domLoaded, setDomLoaded] = useState(false);
  const [slideIndex, setSlideIndex] = useState<number>(0);
  const pagination = {
    clickable: true,
    // renderBullet: function (index: number, className: string) {
    //   return '<span class="' + className + '">' + slideNames[index] + '</span>';
    // },
  };

  const isMdScreen = useMediaQuery({ query: '(min-width: 768px)' });

  // useEffect(() => {
  //   setDomLoaded(true);
  // }, []);

  return (
    <Section id='skills' topic={topic} title={slideTitles[slideIndex]}>
      <Swiper
        onSlideChange={({ realIndex }) => setSlideIndex(realIndex)}
        // slidesPerView={1}
        spaceBetween={30}
        loop={true}
        modules={[Pagination, Navigation]}
        navigation={isMdScreen}
        pagination={{ clickable: true }}
        className='flex-1 w-full'>
        <SwiperSlide className='w-full flex-center'>
          <SkillsCloud />
        </SwiperSlide>
        <SwiperSlide className='flex-center'>
          <Certificates />
        </SwiperSlide>
        <SwiperSlide className='w-full flex-center'>
          <List />
        </SwiperSlide>
      </Swiper>
    </Section>
  );
}

export default Skills;
