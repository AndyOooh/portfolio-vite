import React, { useCallback } from 'react';
import { TagCloudOptions } from 'TagCloud';
import { TagCloud } from '@frank-mayer/react-tag-cloud';
import { useMediaQuery } from 'react-responsive';

import './SkillsCloud.scss';
import { cloudList } from './cloudList';

function SkillsCloud() {
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
    // className='  '
    >
      <TagCloud
        options={optionsCb}
        onClick={(tag: string, ev: MouseEvent) => alert(tag)}
        onClickOptions={{ passive: true }}
        className=' ' // seems to disappear if no className with a space
      >
        {cloudList}
      </TagCloud>
    </div>
  );
}

export default React.memo(SkillsCloud);
