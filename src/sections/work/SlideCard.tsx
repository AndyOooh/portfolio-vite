import { BsGithub, BsGlobe2 } from 'react-icons/bs';
import { useElementSize, useWindowSize } from 'usehooks-ts';
import cn from 'classnames';

import { ProjectType } from './projects';

function SlideCard(project: ProjectType) {
  const [cardRef, { width: cardWidth, height: cardHeight }] = useElementSize();
  const { width, height } = useWindowSize();

  // const wide = cardWidth / cardHeight > 1.07;
  const wide = width / height > 1.7;
  console.log('🚀  file: SlideCard copy.tsx:14  wide', wide);

  const cardClass = cn({
    'flex gap-4 my-0 w-full h-full sm:h-auto sm:w-5/6 max-w-3xl p-2': true,
    'rounded-xl border-2 border-primary/50': true,
    'flex-col': !wide,
    'flex-row justify-center align-center': wide,
  });

  const imageButtonClass = cn({
    'flex-center gap-2': true,
    'w-3/5': wide,
  });

  const detailsClass = cn({
    'flex gap-2 ': true,
    'flex-col justify-center w-2/5': wide,
    'flex-col md:flex-row md:items-start md:px-4': !wide,
  });

  const infoClass = cn({
    'flex flex-col md:gap-2': true,
    'flex-1': !wide,
  });

  const tagClass = cn({
    'flex flex-wrap gap-1 w-full': true,
    'flex-1': !wide,
  });

  const dividerClass = cn({
    'divider m-2': wide,
    'divider-horizontal m-2 md:m-4': !wide,
  });

  return (
    <div className='h-full w-full flex-center'>
      <div key={project.title} ref={cardRef} className={cardClass}>
        <div className={imageButtonClass}>
          <div className='w-full overflow-hidden my-0'>
            <img
              src={project.image}
              className='h-full xl:h-auto w-full object-contain'
              alt={project.title}
            />
          </div>

          {/* Buttons ------------------- */}
          <div className='grid grid-cols-2 gap-4'>
            <a
              className='btn btn-sm md:btn-md btn-outline gap-2'
              href={project.gitHub}
              target='_blank'
              rel='noreferrer'>
              <BsGithub />
              Github
            </a>
            <a
              className={`btn btn-sm md:btn-md btn-outline gap-2 ${
                !project.liveDemo ? 'btn-disabled' : ''
              }`}
              href={project.liveDemo}
              target='_blank'
              rel='noreferrer'>
              <BsGlobe2 />
              <span className='whitespace-nowrap'>Live Demo</span>
            </a>
          </div>
        </div>

        <div className={detailsClass}>
          <div className={infoClass}>
            <p className='text-lg font-semibold'>{project.type}</p>
            <p className='text-primary'>
              {project.technologies.map((tech, idx) =>
                idx + 1 === project.technologies.length ? tech : tech + ' ● '
              )}
            </p>
            <p>{project.text}</p>
          </div>
          {/* Tags ------------------------- */}
          {/* {cardHeight > 575 ? ( */}
          {height > 700 ? (
            <>
              <div className={dividerClass} />
              {/* <div className='divider' /> */}
              <div className={tagClass}>
                {project.tags?.map(tag => (
                  <div key={tag} className='badge badge-primary badge-outline'>
                    {tag}
                  </div>
                ))}
              </div>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default SlideCard;
