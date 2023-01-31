import { useEffect } from 'react';
import TagCloud from 'TagCloud';

import './SkillsCloud.css';

export const myTags = [
  // html5,
  'JavaScript',
  'CSS3',
  'HTML5',
  'SASS',
  'MongoDB',
  'ReactJS',
  'MySQL',
  'ExpressJS',
  'git',
  'Redux',
  'NodeJS',
  'authentication',
  'Mocha',
  'GraphQL',
  'jsonwebtoken',
  'Mongoose',
  'multer',
  'Material UI',
  'WebPack',
  'S3',
  'Firebase',
  'Accessibily',
  'REST API',
  'GitHub',
  'cookies',
  'AWS',
  'Route 53',
  'CloudFront',
  'Stripe',
  'Axios',
  'Enzyme',
  'hooks',
  'Context API',
  'sessions',
  'prop-types',
  'CORS',
  'Font Awesome',
  'Sqlite',
  'DENO',
  'NextJS',
  'TypeScript',
  'localStorage',
  'MVC',
  'Webflow',
  'JSON',
  'YAML',
  'GitHub Actions',
  'EC2',
  'NGINX',
  'SSL',
  'GPG',
  'Google Oauth2',
  'Nodemailer',
  'Solidity',
  'Hardhat',
  'Ethers',
  'OpenZeppelin',
  'Framer-motion',
];

const SkillsCloudOld = () => {
  const container = '.tagcloud';

  const options = {
    radius: 300,
    maxSpeed: 'normal',
    initSpeed: 'normal',
    keep: true,
  };

  useEffect(() => {
    return () => {
      const container = '.tagcloud';
      const texts = [
        'HTML',
        'CSS',
        'SASS',
        'JavaScript',
        'React',
        'Vue',
        'Nuxt',
        'NodeJS',
        'Babel',
        'Jquery',
        'ES6',
        'GIT',
        'GITHUB',
      ];

      // const options = {
      //   radius: 300,
      //   maxSpeed: 'normal',
      //   initSpeed: 'normal',
      //   keep: true,
      // };

      TagCloud(container, texts, {
        radius: 300,
        maxSpeed: 'normal',
        initSpeed: 'normal',
        keep: true,
      });
    };
  }, []);

  return (
    <>
      <div className='text-shpere'>
        {/* span tag className must be "tagcloud"  */}
        <span className='tagcloud'></span>
      </div>
    </>
  );
};

export default SkillsCloudOld;
