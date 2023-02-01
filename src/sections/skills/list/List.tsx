import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import './List.scss';
import { SkillArea, skillAreas } from './data/listdata';
import cn from 'classnames';
import { useWindowSize } from 'usehooks-ts';

function List() {
  const [showSkillArea, setshowSkillArea] = useState('Frontend');

  const isShortScreen = useMediaQuery({ query: '(max-height: 800px)' });
  const isMdScreen = useMediaQuery({ query: '(min-width: 768px)' });
  const { width, height } = useWindowSize();
  const isSmallScreen = width * height < 375000;
  const isNarrowScreen = width < 415;

  const handleChangeOption = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    console.log('🚀  file: List.tsx:12  value', value);
    setshowSkillArea(value);
  };
  // const handleChangeSkillArea = (skillArea: string) => {
  //   setshowSkillArea(skillArea);
  // };

  const logoClass = cn({
    'logo-wrapper flex-center': true,
    'w-8': isSmallScreen || isNarrowScreen,
    'w-12': !isSmallScreen && !isNarrowScreen,
  });

  return (
    <>
      <div className='sm:w-5/6 h-full mb-10'>
        <div className='z-10 w-full flex justify-end mb-4 md:mb-0 text-primary'>
          <select
            onChange={handleChangeOption}
            className='select select-ghost select-xs sm:select-sm max-w-xs border border-primary'>
            {skillAreas.map(({ area }) => (
              <option key={area} className='bg-transparent'>
                {area}
              </option>
            ))}
          </select>
        </div>
        {skillAreas
          .filter(skillArea => skillArea.area === showSkillArea)
          .map(({ area, textLong, textShort, logosMain, logosSecondary }: SkillArea) => (
            <div key={area} className='flex-center gap-4 h-full'>
              <div className='text-long'>{isShortScreen && !isMdScreen ? textShort : textLong}</div>
              <div className='logos'>
                {logosMain.map(logo => (
                  <div key={logo.name} className={logoClass}>
                    {logo.logo}{' '}
                  </div>
                ))}
              </div>
              {logosSecondary ? (
                <div className='logos'>
                  {logosSecondary.map(logo => (
                    // <div key={logo.name} className={logoClass + logo.name === 'Redux' ? 'p-4' : ''}>
                    <div key={logo.name} className={logoClass}>
                      {logo.logo}{' '}
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
      </div>
    </>
  );
}

export default List;
