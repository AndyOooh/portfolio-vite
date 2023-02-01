import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import './List.scss';
import { SkillArea, skillAreas } from './data/listdata';

function List() {
  const [showSkillArea, setshowSkillArea] = useState('Frontend');
  console.log('🚀  file: List.tsx:12  showSkillArea', showSkillArea);

  const isShortScreen = useMediaQuery({ query: '(max-height: 800px)' });
  const isMdScreen = useMediaQuery({ query: '(min-width: 768px)' });

  const handleChangeOption = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    console.log('🚀  file: List.tsx:12  value', value);
    setshowSkillArea(value);
  };
  // const handleChangeSkillArea = (skillArea: string) => {
  //   setshowSkillArea(skillArea);
  // };

  return (
    <>
      <div className='sm:w-5/6 h-full'>
        <div className='z-10 w-full flex justify-end mb-4 md:mb-0 text-primary'>
          <select
            onChange={handleChangeOption}
            className='select select-ghost border border-primary select-xs sm:select-sm max-w-xs'>
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
                  <div key={logo.name}>{logo.logo} </div>
                ))}
              </div>
              {logosSecondary ? (
                <div className='logos'>
                  {logosSecondary.map(logo => (
                    <div key={logo.name}>{logo.logo} </div>
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
// <div className='flex-center gap-4'>
//   <h3>
//     My main expertise lies in the Javascript ecosystem with the MERN stack as my specialty. I also have experience with relational databses such as PostgreSQl as well as GraphQL.
//   </h3>
//   <div className='main-stack'>
//     <SiMongodb color='#4BA13E' className='p-1' />
//     <SiExpress color='#5A8147' className='p-1' />
//     <FaReact color='#00CDF0' />
//     <FaNodeJs color='#5A8147' />
//     <TiPlus />
//     <SiTypescript color='#000' className='bg-[#007ACC]' />
//   </div>
//   <h3>Recently I have worked a lot with</h3>
//   <div className='current-stack'>
//     add storybook
//     <img src='src/assets/logos/turborepo.png' alt='turborepo' className='p-1' />
//     <img src='src/assets/logos/nextjs2.png' alt='typescript' className='bg-white/80' />
//     <FiFramer />
//   </div>
//   <h3>The Javascript ecosystem is my home and my main stack is MERN</h3>
// </div>
