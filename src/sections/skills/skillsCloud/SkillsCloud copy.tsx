import { useCallback, useEffect, useRef, useState } from 'react';
import { TagCloudOptions } from 'TagCloud';
import { TagCloud } from '@frank-mayer/react-tag-cloud';
import { useMediaQuery } from 'react-responsive';

import './SkillsCloud.scss';
import { cloudList } from './cloudList';
import React from 'react';

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
    <TagCloud
      options={optionsCb}
      onClick={(tag: string, ev: MouseEvent) => alert(tag)}
      onClickOptions={{ passive: true }}
      // className='flex items-center'
      >
      {cloudList}
    </TagCloud>
  );
}

export default React.memo(SkillsCloud);

// TODO:
// toggle/dropddown: web3, standard, concepts, (maybe backend, frontend)
// Search: search anything and it will light up on cloud and/or will have a small text
// onhover: show text as tooltip
