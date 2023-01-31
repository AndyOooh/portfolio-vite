import Section from 'components/Section';
import { motion } from 'framer-motion';
import { skillsVariants } from 'motion/skills.motion';
import { useState } from 'react';
import Certificates from 'sections/skills/certificates/Certificates';
import List from 'sections/skills/list/List';
// import ReactTagCloud from 'sections/skills/reactTagCloud/reactTagCloud';
// import SkillsCloud from 'sections/skills/skillsCloud/SkillsCloud';
import SkillsCloud from 'sections/skills/skillsCloud/SkillsCloud copy';

function ChatGptSlider() {
  const topic = 'Skills';
  const slideTitles = ['List', 'Certificates', 'Cloud'];
  const [slideIndex, setSlideIndex] = useState(0);

  const handleSlideChange = (newIndex: number) => {
    if (newIndex < 0) {
      setSlideIndex(slides.length - 1);
    } else if (newIndex >= slides.length) {
      setSlideIndex(0);
    } else {
      setSlideIndex(newIndex);
    }
  };

  const slides = [
    { name: 'slide1', component: <SkillsCloud /> },
    { name: 'slide2', component: <Certificates /> },
    { name: 'slide3', component: <List /> },
  ];

  const pagination = (
    <div className='flex justify-center w-full py-2 gap-2'>
      {slideTitles.map((title, index) => {
        return (
          <button
            key={index}
            className={`btn btn-xs btn-circle btn-primary ${
              slideIndex === index ? 'btn-active' : ''
            }`}
            onClick={() => handleSlideChange(index)}>
            {index + 1}
          </button>
        );
      })}
    </div>
  );

  const navigation = (
    <div className='absolute z-30 flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
      <button
        className='btn btn-circle btn-primary '
        onClick={() => handleSlideChange(slideIndex - 1)}>
        ❮
      </button>
      <button
        className='btn btn-circle btn-primary'
        onClick={() => handleSlideChange(slideIndex + 1)}>
        ❯
      </button>
    </div>
  );

  return (
    <Section id='skills' topic={topic} title={slideTitles[slideIndex]}>
      {/* <div className='flex-1 w-full  relative flex-center  border border-blue-400'> */}
      <div className='flex-1 w-full relative flex-center'>
        {/* <div className='relative border border-green-400'> */}
        <motion.h1 variants={skillsVariants} initial='hidden' animate='visible' className='text-5xl'>
          Test
        </motion.h1>
        {slides.map((slide, index) => {
          return (
            <motion.div
              variants={skillsVariants}
              initial='hidden'
              animate='visible'
              key={index}
              className={`${
                slideIndex === index ? 'block' : 'hidden'
                // } border-4 border-red-400 min-h-[30rem] w-full`}>
              }  w-full`}
              
              >
              {slide.component}
            </motion.div>
          );
        })}
        {navigation}
        {pagination}
      </div>
    </Section>
  );
}

export default ChatGptSlider;
