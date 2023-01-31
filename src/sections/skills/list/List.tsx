import { SiExpress, SiMongodb, SiTypescript } from 'react-icons/si';
import { FaNodeJs, FaReact } from 'react-icons/fa';
import { TiPlus } from 'react-icons/ti';
import { FiFramer } from 'react-icons/fi';

import './List.scss';

type Props = {};

function List({}: Props) {
  return (
    <div className='flex-center gap-4'>
      <h3>
        My main expertise lies in the Javascript ecosystem with the MERN stack as my specialty
      </h3>
      <div className='main-stack'>
        <SiMongodb color='#4BA13E' className='p-1' />
        <SiExpress color='#5A8147' className='p-1' />
        <FaReact color='#00CDF0' />
        <FaNodeJs color='#5A8147' />
        <TiPlus />
        <SiTypescript color='#000' className='bg-[#007ACC]' />
      </div>
      <h3>Recently I have worked a lot with</h3>
      <div className='current-stack'>
        <img src='src/assets/logos/turborepo.png' alt='turborepo' className='p-1' />
        <img src='src/assets/logos/nextjs2.png' alt='typescript' className='bg-white/80' />
        <FiFramer />
      </div>
      <h3>The Javascript ecosystem is my home and my main stack is MERN</h3>
    </div>
  );
}

export default List;
