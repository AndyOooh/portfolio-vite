import CertificateModal from './CertificateModal Copy';

import { certList } from './certificatesList';

function Certificates() {
  return (
    <>
      <div className='grid grid-cols-3 sm:grid-cols-4 gap-2 md:w-3/4'>
        {certList.slice(0, 12).map((cert, idx) => (
          <>
            <label
              key={cert.subtitle + cert.title}
              htmlFor={`modal-${idx}`}
              className='border-grad-2 hover:scale-125 cursor-pointer'>
              <div className='h-full'>
                <div className='object-cover h-full bg-white'>
                  <img src={cert.imageUrl} alt={cert.title} className='object-cover w-full' />
                </div>
              </div>
            </label>
            <CertificateModal certificate={cert} id={idx} />
          </>
        ))}
      </div>
    </>
  );
}

export default Certificates;
