import {
  SiExpress,
  // SiMocha,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiPostman,
  // SiRedux,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si'
import { FaNodeJs, FaReact, FaSass } from 'react-icons/fa'
// import { TiPlus } from 'react-icons/ti';
import { FiFramer } from 'react-icons/fi'

import turboRepo from 'assets/logos/turborepo.png'
import nextJs from 'assets/logos/nextjs2.png'
import redux from 'assets/logos/redux2-removebg.png'
import firebase from 'assets/logos/firebase-removebg.png'
import storybook from 'assets/logos/storybook.png'
import bash from 'assets/logos/bash-removebg.png'
import postman from 'assets/logos/postman.png'

export const logos = {
  fullStack: {
    main: [
      {
        name: 'mongodb',
        logo: <SiMongodb color="#4BA13E" className="logo-main" />,
      },
      {
        name: 'express',
        logo: <SiExpress color="#5A8147" className="logo-main" />,
      },
      {
        name: 'react',
        logo: <FaReact color="#00CDF0" className="logo-main" />,
      },
      {
        name: 'nodejs',
        logo: <FaNodeJs color="#5A8147" className="logo-main" />,
      },
    ],
    secondary: [
      {
        name: 'typescript',
        logo: <SiTypescript color="#000" className="logo-main bg-[#007ACC]" />,
      },
      {
        name: 'turborepo',
        logo: <img src={turboRepo} alt="turborepo" className="logo-secondary" />,
      },
      {
        name: 'nextjs',
        logo: <img src={nextJs} alt="nextjs" className="logo-secondary bg-white/80" />,
      },
    ],
  },
  frontend: {
    main: [
      {
        name: 'react',
        logo: <FaReact color="#00CDF0" className="logo-main" />,
      },
      {
        name: 'nextjs',
        logo: <img src={nextJs} alt="nextjs" className="logo-secondary bg-white/80" />,
      },
      {
        name: 'redux',
        logo: <img src={redux} alt="redux" className="logo-secondary" />,
      },
      {
        name: 'firebase',
        logo: <img src={firebase} alt="firebase" className="logo-secondary" />,
      },
      {
        name: 'storybook',
        logo: <img src={storybook} alt="storybook" className="logo-secondary" />,
      },
      {
        name: 'framer',
        logo: <FiFramer className="logo-secondary" />,
      },
      {
        name: 'tailwind',
        logo: <SiTailwindcss color="#35B3EB" className="logo-secondary" />,
      },
      {
        name: 'sass',
        logo: <FaSass color="#BF4080" className="logo-secondary" />,
      },
    ],
    secondary: [],
  },
  backend: {
    main: [
      {
        name: 'nodejs',
        logo: <FaNodeJs color="#5A8147" className="logo-main" />,
      },
      {
        name: 'mongodb',
        logo: <SiMongodb color="#4BA13E" className="logo-main" />,
      },
      {
        name: 'express',
        logo: <SiExpress color="#5A8147" className="logo-main" />,
      },
      {
        name: 'bash',
        logo: <img src={bash} alt="bash" className="logo-secondary" />,
      },
      {
        name: 'Postgres',
        logo: <SiPostgresql color="#00CDF0" className="logo-main" />,
      },
      {
        name: 'Postman',
        logo: <SiPostman color="black" className="logo-main bg-[#E1683C]" />,
      },
      // {
      //   name: 'postman',
      //   logo: <img src={postman} alt='postman' className='logo-secondary bg-white/80' />,
      // },

      {
        name: 'MySQLRI',
        logo: <SiMysql color="#F19222" className="logo-main" />,
      },
    ],
    secondary: [],
  },
}
