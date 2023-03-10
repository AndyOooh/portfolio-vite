import { useState } from 'react';

import CertificateModal from './CertificateModal';
import { certList } from './certificatesList';

function Certificates() {
  const [modalIndex, setModalIndex] = useState(0);
  const handleToggle = (idx: number) => {
    setModalIndex(idx);
  };
  return (
    <>
      <div className='relative grid grid-cols-3 sm:grid-cols-4 gap-2 md:w-3/4'>
        {certList.slice(0, 12).map((cert, idx) => (
          <div
            key={cert.subtitle + cert.title}
            role='button'
            onClick={() => handleToggle(idx + 1)}
            className={'border-grad-2 hover:scale-110 cursor-pointer'}>
            <div className='object-cover h-full bg-white'>
              <img src={cert.imageUrl} alt={cert.title} className='object-cover w-full' />
            </div>
          </div>
        ))}
      </div>
      {modalIndex ? (
        <CertificateModal certificate={certList[modalIndex - 1]} onClose={() => handleToggle(0)} />
      ) : null}
    </>
  );
}

export default Certificates;
