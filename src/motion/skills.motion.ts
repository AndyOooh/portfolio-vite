export const skillsVariants = {
  hidden: {
    opacity: 0,
    scale: 0,
    x: -100,
    color: 'green',
  },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    color: 'red',

    transition: {
      originX: 0,
      originY: 0,
      duration: 3,
      delay: 2,
      //   when: 'beforeChildren',
      //   staggerChildren: 0.25,
    },
  },
};
