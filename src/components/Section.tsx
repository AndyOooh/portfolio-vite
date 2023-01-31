import { motion, useScroll } from 'framer-motion';

import { styles } from 'styles';
import { sectionVariants } from 'motion/sections.motion';
import { useScrollSpy } from 'hooks/useScrollSpy';

type SectionProps = {
  id: string;
  children: React.ReactNode;
  topic?: string;
  title?: string;
  between?: boolean;
  center?: boolean;
};

function Section({ children, id, topic, title, between, center }: SectionProps) {
  const hash = id === 'landing' ? '/' : `#${id}`;
  useScrollSpy(id, hash);
  // const { scrollYProgress } = useScroll();

  const wrapperClasses = `${styles.sectionWrapper} ${between ? 'justify-between' : ''}`;

  return (
    <section id={id} className={styles.section}>
      <div className={wrapperClasses}>
        {/* <motion.div
        variants={sectionVariants}
        initial='hidden'
        whileInView='visible'
        className={wrapperClasses}> */}
        {topic ? (
          <div className='text-center'>
            <h2 className='text-md sm:text-lg'>{topic}</h2>
            <h1 className='text-2xl sm:text-3xl md:text-4xl'>{title}</h1>
          </div>
        ) : null}
        {/* sould I add a flex box with centering here? as an option? which options o I need? already have center (including title) and between which is only good if have tee elements */}
        {/* {center ? <div className='flex-center'>{children}</div> : children} */}
        {center ? <div className='flex-1'>{children}</div> : children}
        {/* <div className='h-12 w-full'></div> */}
        {/* </motion.div> */}
      </div>
    </section>
  );
}

export default Section;
