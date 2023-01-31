import Section from 'components/Section';
import { EmblaOptionsType } from 'embla-carousel-react';
import React from 'react';
import EmblaCarousel from './EmblaCarousel';

import './Embla.scss';

type Props = {};

function Embla({}: Props) {
  const OPTIONS: EmblaOptionsType = {
    loop: true,
  };
  const SLIDE_COUNT = 5;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
  return (
    <Section id='embla'>
      <div className='relative border-2 border-white'>
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      </div>
    </Section>
  );
}

export default Embla;
