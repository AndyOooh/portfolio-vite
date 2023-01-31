import { useState } from 'react';

import CertificateModal from './CertificateModal';
import { certList } from './certificatesList';

function Certificates() {
  const [open, setOpen] = useState(0);
  const handleToggle = (idx: number) => {
    console.log('handleToggle');
    setOpen(idx);
  };
  return (
    <div className='h-full flex'>
      <div className='flex-1 relative grid grid-cols-3 sm:grid-cols-4 gap-2 md:w-3/4'>
        {certList.slice(0, 12).map((cert, idx) => (
          <div
            key={cert.subtitle + cert.title}
            role='button'
            onClick={() => handleToggle(idx + 1)}
            className={'border-grad-2 hover:scale-125 cursor-pointer'}>
            <div className='object-cover h-full bg-white'>
              <img src={cert.imageUrl} alt={cert.title} className='object-cover w-full' />
            </div>
          </div>
        ))}
      </div>
      {open ? (
        <CertificateModal certificate={certList[open - 1]} onClose={() => handleToggle(0)} />
      ) : null}
    </div>
  );
}

export default Certificates;
