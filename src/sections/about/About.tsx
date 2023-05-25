/* eslint-disable react/no-unescaped-entities */
import Section from 'components/Section';

import meImg from 'assets/me/new-profile-crop2.png';

function About() {
  const topic = 'About';
  const title = 'Who I am';
  return (
    <Section id='about' topic={topic} title={title}>
      <div className='flex flex-col md:flex-row justify-center items-center gap-4 md:px-8 h-full'>
        <p className='w-5/6 text-sm md:text-base'>
          {/* <span>Hello!</span> I'm Andreas, or <span>Andy</span> as the domain says. <br />
          <br /> */}
          A <span>Danish</span> national relocated to buzzling <span>Bangkok</span> some years ago.
          I spend my days in the 'big mango' with my girlfriend, playing football and{' '}
          <span>building web</span> things.
          <br />
          <span>My interest</span> in web development began in <span>2020</span> when I couldn't
          find the tools I needed for my crypto projects. After playing around with different{' '}
          <span>APIs</span> in the backend, the frontend quickly caught my interest as well. <br />
          <br />
          <span>Fast-forward</span> to today, I now have +1 year of working experience as a <span>full stack developer</span> and I’ve completed dozens of courses,{' '}
          <span>bootcamps</span>, personal projects and a few collaborations.
        </p>
        <div className='flex gap-4 w-1/2 mx-auto'>
          <div className='inner-shad relative rounded-full flex-1 overflow-hidden h-full aspect-square'>
            <img src={meImg} alt='profile' className='filter grayscale aspect-square w-full' />
          </div>
        </div>
      </div>
    </Section>
  );
}

export default About;
