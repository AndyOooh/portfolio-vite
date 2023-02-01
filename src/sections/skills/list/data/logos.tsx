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

export const logos = {
  intro: {
    main: [
      {
        name: 'mongodb',
        logo: <SiMongodb color='#4BA13E' className='logo-main' />,
      },
      {
        name: 'express',
        logo: <SiExpress color='#5A8147' className='logo-main' />,
      },
      {
        name: 'react',
        logo: <FaReact color='#00CDF0' className='logo-main' />,
      },
      {
        name: 'nodejs',
        logo: <FaNodeJs color='#5A8147' className='logo-main' />,
      },
    ],
    secondary: [
      {
        name: 'typescript',
        logo: <SiTypescript color='#000' className='logo-main bg-[#007ACC]' />,
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
        logo: <FaReact color='#00CDF0' className='logo-main' />,
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
        name: 'firebase',
        logo: (
          <img
            src='src/assets/logos/firebase-removebg.png'
            alt='typescript'
            className='logo-secondary'
          />
        ),
      },
      {
        name: 'storybook',
        logo: (
          <img src='src/assets/logos/storybook.png' alt='typescript' className='logo-secondary' />
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
        name: 'nodejs',
        logo: <FaNodeJs color='#5A8147' className='logo-main' />,
      },
      {
        name: 'mongodb',
        logo: <SiMongodb color='#4BA13E' className='logo-main' />,
      },
      {
        name: 'express',
        logo: <SiExpress color='#5A8147' className='logo-main' />,
      },
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
        name: 'Postgres',
        logo: <SiPostgresql color='#00CDF0' className='logo-main' />,
      },

      {
        name: 'MySQL',
        logo: <SiMysql className='logo-main' />,
      },
    ],
    secondary: [],
  },
};
