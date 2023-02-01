import React, { useCallback, useState } from 'react';
import { TagCloudOptions } from 'TagCloud';
import { TagCloud } from '@frank-mayer/react-tag-cloud';
import { useMediaQuery } from 'react-responsive';

import './SkillsCloud.scss';
import { cloudList } from './cloudList';
import DropDown from '../DropDown';
import { skillAreas } from '../list/data/listdata';

function SkillsCloud() {
  const [showSkillArea, setshowSkillArea] = useState('Full Stack');
  const isLgScreen = useMediaQuery({ query: '(min-width: 1024px)' });
  const isMdScreen = useMediaQuery({ query: '(min-width: 768px)' });

  const factor = isLgScreen ? 1.8 : isMdScreen ? 2.4 : 3;

  const optionsCb = useCallback(
    (w: Window & typeof globalThis): TagCloudOptions => ({
      radius: Math.min(500, w.innerWidth, w.innerHeight) / factor,
      maxSpeed: 'fast',
    }),
    [factor]
  );

  return (
    <div
      className='h-full w-full sm:w-5/6 max-w-3xl' // this is not tested on all screen sizes
    >
      {/* <DropDown setCurrentOption={setshowSkillArea} options={skillAreas.map(({ area }) => area)} /> */}
      <div className='h-full flex-center'>
        <TagCloud
          options={optionsCb}
          onClick={(tag: string, ev: MouseEvent) => console.log(tag)}
          onClickOptions={{ passive: true }}
          className=' ' // seems to disappear if no className with a space
        >
          {cloudList}
        </TagCloud>
      </div>
    </div>
  );
}

export default React.memo(SkillsCloud);
