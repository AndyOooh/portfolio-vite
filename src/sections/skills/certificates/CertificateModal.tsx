import { useRef } from 'react';
import { GiDiploma, GiOpenBook } from 'react-icons/gi';
import { useOnClickOutside } from 'usehooks-ts';

import { Certificate } from './certificatesList';

type Props = {
  certificate: Certificate;
  onClose: () => void;
};

function CertificateModal({ certificate: { imageUrl, title, link, course }, onClose }: Props) {
  const ref = useRef(null);
  useOnClickOutside(ref, () => {
    onClose();
  });
  return (
    <div
      ref={ref}
      onClick={onClose}
      className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 card card-compact gap-2 rounded-none w-11/12 md:w-3/5'>
      <figure className='border-grad-2'>
        <img src={imageUrl} alt={title} className='w-full' />
      </figure>
      <div className='w-full flex justify-center gap-4'>
        <a
          href={link}
          target='_blank'
          rel='noreferrer'
          className='px-6 backdrop-blur bg-white/40 btn-primary btn-outline border-2'>
          <GiDiploma size={'2.2rem'} />
        </a>
        <a
          href={course}
          target='_blank'
          rel='noreferrer'
          className='px-6 backdrop-blur bg-black/20 btn-primary btn-outline border-2'>
          <GiOpenBook size={'2.2rem'} />
        </a>
      </div>
    </div>
  );
}

export default CertificateModal;
