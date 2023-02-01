import {
  SiExpress,
  SiMocha,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';
import { FaNodeJs, FaReact, FaSass } from 'react-icons/fa';
import { TiPlus } from 'react-icons/ti';
import { FiFramer } from 'react-icons/fi';

const mainLogoSize = '1.5rem';
const secondaryLogoSize = '1rem';

export const logos = {
  intro: {
    main: [
      {
        name: 'mongodb',
        logo: <SiMongodb color='#4BA13E' className='logo-main' />,
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
    ],
    secondary: [
      {
        name: 'typescript',
        logo: <SiTypescript size={mainLogoSize} color='#000' className='logo-main bg-[#007ACC]' />,
      },
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
    ],
  },
  frontend: {
    main: [
      {
        name: 'react',
        logo: <FaReact size={mainLogoSize} color='#00CDF0' className='logo-main' />,
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
        name: 'redux',
        logo: (
          <img
            src='src/assets/logos/redux2-removebg.png'
            alt='typescript'
            className='logo-secondary'
          />
        ),
      },
      {
        name: 'framer',
        logo: <FiFramer className='logo-secondary' />,
      },
      {
        name: 'tailwind',
        logo: <SiTailwindcss color='#35B3EB' className='logo-secondary' />,
      },
      {
        name: 'sass',
        logo: <FaSass color='#BF4080' className='logo-secondary' />,
      },
    ],
    secondary: [],
  },
  backend: {
    main: [
      {
        name: 'bash',
        logo: (
          <img
            src='src/assets/logos/bash-removebg.png'
            alt='typescript'
            className='logo-secondary'
          />
        ),
      },
      {
        name: 'express',
        logo: <SiMocha size={mainLogoSize} color='#866244' className='logo-main' />,
      },
      {
        name: 'Postgres',
        logo: <SiPostgresql size={mainLogoSize} color='#00CDF0' className='logo-main' />,
      },
      {
        name: 'nodejs',
        logo: <FaNodeJs size={mainLogoSize} color='#5A8147' className='logo-main' />,
      },
      {
        name: 'MySQL',
        logo: <SiMysql size={mainLogoSize} className='logo-main' />,
      },
    ],
    secondary: [],
  },
};
