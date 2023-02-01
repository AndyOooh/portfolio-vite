import { SiExpress, SiMongodb, SiTypescript } from 'react-icons/si';
import { FaNodeJs, FaReact } from 'react-icons/fa';
import { TiPlus } from 'react-icons/ti';
import { FiFramer } from 'react-icons/fi';

const mainLogoSize = '1.5rem';
const secondaryLogoSize = '1rem';

export const logos = {
  intro: {
    main: [
      {
        name: 'mongodb',
        logo: <SiMongodb size={mainLogoSize} color='#4BA13E' className='logo-main' />,
      },
      {
        name: 'express',
        logo: <SiExpress size={mainLogoSize} color='#5A8147' className='logo-main' />,
      },
      {
        name: 'react',
        logo: <FaReact size={mainLogoSize} color='#00CDF0' className='logo-main' />,
      },
      {
        name: 'nodejs',
        logo: <FaNodeJs size={mainLogoSize} color='#5A8147' className='logo-main' />,
      },
      {
        name: 'plus',
        logo: <TiPlus size={mainLogoSize} className='logo-main' />,
      },
      {
        name: 'typescript',
        logo: <SiTypescript size={mainLogoSize} color='#000' className='logo-main bg-[#007ACC]' />,
      },
    ],
    secondary: [
      {
        name: 'turborepo',
        logo: (
          <img src='src/assets/logos/turborepo.png' alt='turborepo' className='logo-secondary' />
        ),
      },
      {
        name: 'nextjs',
        logo: (
          <img
            src='src/assets/logos/nextjs2.png'
            alt='typescript'
            className='logo-secondary bg-white/80'
          />
        ),
      },
      {
        name: 'framer',
        logo: <FiFramer className='logo-secondary' />,
      },
    ],
  },
  frontend: {
    main: [
      {
        name: 'mongodb',
        logo: <SiMongodb size={mainLogoSize} color='#4BA13E' className='logo-main' />,
      },
      {
        name: 'express',
        logo: <SiExpress size={mainLogoSize} color='#5A8147' className='logo-main' />,
      },
      {
        name: 'react',
        logo: <FaReact size={mainLogoSize} color='#00CDF0' className='logo-main' />,
      },
      {
        name: 'nodejs',
        logo: <FaNodeJs size={mainLogoSize} color='#5A8147' className='logo-main' />,
      },
      {
        name: 'plus',
        logo: <TiPlus size={mainLogoSize} className='logo-main' />,
      },
      {
        name: 'typescript',
        logo: <SiTypescript size={mainLogoSize} color='#000' className='logo-main bg-[#007ACC]' />,
      },
    ],
    secondary: [
      {
        name: 'turborepo',
        logo: (
          <img src='src/assets/logos/turborepo.png' alt='turborepo' className='logo-secondary' />
        ),
      },
      {
        name: 'nextjs',
        logo: (
          <img
            src='src/assets/logos/nextjs2.png'
            alt='typescript'
            className='logo-secondary bg-white/80'
          />
        ),
      },
      {
        name: 'framer',
        logo: <FiFramer className='logo-secondary' />,
      },
    ],
  },
};
