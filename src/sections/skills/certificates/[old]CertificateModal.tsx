'use client'

import { GiDiploma, GiOpenBook } from 'react-icons/gi'

import { Certificate } from './certificatesList'

type Props = {
  certificate: Certificate
  id: number
}

function CertificateModal({ certificate: { imageUrl, title, link, course }, id }: Props) {
  return (
    <>
      <input type="checkbox" id={`modal-${id}`} className="modal-toggle" />
      <label htmlFor={`modal-${id}`} className="modal flex-col gap-2 cursor-pointer">
        <label
          className="p-0 relative card card-compact rounded-none w-11/12 shadow-xl border-grad-2"
          htmlFor=""
        >
          <figure>
            <img src={imageUrl} alt={title} className="w-full" />
          </figure>
        </label>
        <div className="w-full flex justify-center gap-4">
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="px-6 backdrop-blur bg-black/20 btn-primary btn-outline border-2"
          >
            <GiDiploma size={'2.2rem'} />
          </a>
          <a
            href={course}
            target="_blank"
            rel="noreferrer"
            className="px-6 backdrop-blur bg-black/20 btn-primary btn-outline border-2"
          >
            <GiOpenBook size={'2.2rem'} />
          </a>
        </div>
      </label>
    </>
  )
}

export default CertificateModal
