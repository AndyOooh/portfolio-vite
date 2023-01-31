import Section from 'components/Section';
import React from 'react';
import SkillsCloud from './skills/skillsCloud/SkillsCloud';

type Props = {};

function Cloud({}: Props) {
  return (
    <Section title='cloud' id='cloud'>
      <div className='flex-1 w-full'>
        <SkillsCloud />
      </div>
    </Section>
  );
}

export default Cloud;
