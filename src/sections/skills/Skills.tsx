import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import Section from 'components/Section';
import SkillsCloud from './skillsCloud/SkillsCloud';
import Certificates from './certificates/Certificates';
import List from './list/List';

function Skills() {
  const topic = 'Skills';
  const slideTitles = ['List', 'Certificates', 'Cloud'];
  const [slideIndex, setSlideIndex] = useState<number>(0);

  const isMdScreen = useMediaQuery({ query: '(min-width: 768px)' });

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
          <List />
        </SwiperSlide>
        <SwiperSlide className='w-full flex-center'>
          <SkillsCloud />
        </SwiperSlide>
        <SwiperSlide className='flex-center'>
          <Certificates />
        </SwiperSlide>
      </Swiper>
    </Section>
  );
}

export default Skills;
