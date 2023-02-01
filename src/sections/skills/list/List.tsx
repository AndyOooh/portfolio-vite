import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import './List.scss';
import { SkillArea, skillAreas } from './data/listdata';
import cn from 'classnames';
import { useWindowSize } from 'usehooks-ts';
import DropDown from '../DropDown';

function List() {
  const [showSkillArea, setshowSkillArea] = useState('Full Stack');

  const { width, height } = useWindowSize();
  const isSmallScreen = width * height < 300000;
  const isMediumScreen = width * height < 400000;
  const isNarrowScreen = width < 415;
  const isShortScreen = height < 775;

  const logoClass = cn({
    'logo-wrapper flex-center': true,
    'w-8': isMediumScreen || isNarrowScreen,
    'w-10': isShortScreen && !isNarrowScreen,
    'w-14': !isMediumScreen && !isNarrowScreen && !isShortScreen,
  });

  return (
    <>
      <div className='sm:w-5/6 max-w-3xl h-full mb-10'>
        <DropDown
          setCurrentOption={setshowSkillArea}
          options={skillAreas.map(({ area }) => area)}
        />
        {skillAreas
          .filter(skillArea => skillArea.area === showSkillArea)
          .map(
            ({ area, textLong, textmedium, textShort, logosMain, logosSecondary }: SkillArea) => (
              <div key={area} className='flex-center h-full'>
                <div className='text-long'>
                  {isSmallScreen ? textShort : isMediumScreen ? textmedium : textLong}
                </div>
                <div className='logos mt-4 md:mt-6 lg:mt-8'>
                  {logosMain.map(logo => (
                    <div key={logo.name} className={logoClass}>
                      {logo.logo}{' '}
                    </div>
                  ))}
                </div>
                {logosSecondary ? (
                  <div className='logos mt-4'>
                    {logosSecondary.map(logo => (
                      <div key={logo.name} className={logoClass}>
                        {logo.logo}{' '}
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>
            )
          )}
      </div>
    </>
  );
}

export default List;
