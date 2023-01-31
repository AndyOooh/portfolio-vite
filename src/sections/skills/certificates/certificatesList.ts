import imgJsComplete from 'assets/certificates/udemy-javascript.png';
import imgFccJsAlgos from 'assets/certificates/fcc_js_algos.png';
import imgReactComplete from 'assets/certificates/udemy-react.png';
import imgFccBackend from 'assets/certificates/fcc_backend.png';
import imgNodeComplete from 'assets/certificates/udemy-node.png';
import imgCloudinaryIntroNode from 'assets/certificates/cloudinary-intro-node.png';
import imgJsWeird from 'assets/certificates/udemy-js_weird.png';
import imgCloudinaryNewUser from 'assets/certificates/cloudinary-new-user.png';
import imgGithub from 'assets/certificates/udemy-github.png';
import imgMongoBasics from 'assets/certificates/mongodb-basics.png';
import imgFacebookClone from 'assets/certificates/udemy-fb_clone.jpg';
import imgCcWebDev from 'assets/certificates/cc-webdev.png';
import imgCcCommandLine from 'assets/certificates/cc-command-line.png';

export type Certificate = {
  title: string;
  subtitle: string;
  year: string;
  organisation: string;
  link: string;
  course: string;
  imageUrl: string;
};

export const certList = [
  {
    title: 'Javascript',
    subtitle: 'The Complete Guide',
    year: '2022',
    organisation: 'Academind',
    link: 'https://www.youracclaim.com/badges/1b1b1b1b-1b1b-1b1b-1b1b-1b1b1b1b1b1b/public_url',
    course: 'https://www.udemy.com/course/javascript-the-complete-guide-2020-beginner-advanced/',
    // imageUrl: 'src/assets/certificates/udemy-javascript.png',
    imageUrl: imgJsComplete,
  },
  {
    title: 'Javascript',
    subtitle: 'Algorithms and Data Structures',
    year: '2022',
    organisation: 'Free Code Camp',
    link: 'https://www.freecodecamp.org/certification/andy_ohhh/javascript-algorithms-and-data-structures',
    course: 'https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures',
    imageUrl: imgFccJsAlgos,
  },
  {
    title: 'React',
    subtitle: 'The Complete Guide',
    year: '2022',
    organisation: 'Academind',
    link: 'https://www.udemy.com/certificate/UC-e6c12401-9179-4420-9be7-f8d8123853c3/',
    course: 'https://www.udemy.com/course/react-the-complete-guide-incl-redux/',
    imageUrl: imgReactComplete,
  },

  {
    title: 'Backend',
    subtitle: 'Development and APIs',
    year: '2022',
    organisation: 'Free Code Camp',
    link: 'https://www.freecodecamp.org/certification/andy_ohhh/back-end-development-and-apis',
    course: 'https://www.freecodecamp.org/learn/back-end-development-and-apis',
    imageUrl: imgFccBackend,
  },
  {
    title: 'Node',
    subtitle: 'The Complete Guide',
    year: '2022',
    organisation: 'Academind',
    link: 'https://www.udemy.com/certificate/UC-76e0d6ab-e024-4f8c-9a08-1ecabd9c6f50/',
    course: 'https://www.udemy.com/course/nodejs-the-complete-guide/',
    imageUrl: imgNodeComplete,
  },

  {
    title: 'Cloudinary',
    subtitle: 'Intro for Node Developers',
    year: '2022',
    organisation: 'Cloudinary Academy',
    link: 'https://ti-user-certificates.s3.amazonaws.com/4338ce4e-f809-4f5a-80f4-1d317c4a390d/8bd81d97-fbaf-4ea8-b1c6-9622a9f9a92e-andreas-oee-7f9369fd-d177-4e0d-9640-caa3545a7fab-certificate.pdf',
    course: 'https://training.cloudinary.com/learn/course/introduction-for-api-users-developers',
    imageUrl: imgCloudinaryIntroNode,
  },
  {
    title: 'Javascript',
    subtitle: 'Understanding the Weird Parts',
    year: '2022',
    organisation: 'Anthony Alicea',
    link: 'https://www.udemy.com/certificate/UC-936a8f82-4c05-46ff-9c5f-7cb27d1aee3e/',
    course: 'https://www.udemy.com/course/git-github-practical-guide/',
    imageUrl: imgJsWeird,
  },
  {
    title: 'Cloudinary',
    subtitle: 'New user',
    year: '2022',
    organisation: 'Cloudinary Academy',
    link: 'https://training.cloudinary.com/learning-paths/certified-cloudinary-new-user',
    course: 'https://training.cloudinary.com/learn/learning-path/certified-cloudinary-new-user',
    imageUrl: imgCloudinaryNewUser,
  },

  {
    title: 'Git & Github',
    subtitle: 'The Practical Guide',
    year: '2022',
    organisation: 'Academind',
    link: 'https://www.udemy.com/certificate/UC-938cc6c6-2d7f-4645-8a5d-6b3400f32b0d/',
    course: 'https://www.udemy.com/course/understand-javascript/',
    imageUrl: imgGithub,
  },
  {
    title: 'MongoDB',
    subtitle: 'Basics',
    year: '2022',
    organisation: 'MongoDB University',
    link: 'https://university.mongodb.com/course_completion/208934ae-3615-4f5b-adf4-815ca7ea40a7',
    course: 'https://learn.mongodb.com/learning-paths/mongodb-nodejs-developer-path',
    imageUrl: imgMongoBasics,
  },
  {
    title: 'MERN Stack',
    subtitle: 'Build A Facebook Clone',
    year: '2022',
    organisation: 'Mohammed Hajji',
    link: 'https://www.udemy.com/certificate/UC-acad6378-b022-4b9b-b6f4-6e5aec282457/',
    course:
      'https://www.udemy.com/course/build-facebook-clone-and-master-react-js-mern-stack-2022/',
    imageUrl: imgFacebookClone,
  },

  {
    title: 'Web Development',
    subtitle: 'Career Path',
    year: '2020',
    organisation: 'Codecademy',
    link: 'https://www.codecademy.com/profiles/pyWhiz00727/certificates/5b32457b646caa5007c30975',
    course: 'https://www.codecademy.com/learn/paths/web-development',
    imageUrl: imgCcWebDev,
  },
  {
    title: 'Command Line',
    subtitle: 'Learn the Command Line',
    year: '2020',
    organisation: 'Codecademy',
    link: 'https://www.codecademy.com/profiles/pyWhiz00727/certificates/c87ba0541f8be78bc2f4ba1128233f6f',
    course: 'https://www.codecademy.com/learn/learn-the-command-line',
    imageUrl: imgCcCommandLine,
  },
] as Certificate[];
