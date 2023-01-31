import React from 'react';

function Slide2() {
  const imgUrl =
    'https://www.byrdie.com/thmb/BtiluF41pcTTarJmY69nz2Z-ajI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/emmawatsonlonghair-858e7e7d270d4eb3b642df722ed36580.jpg';
  return (
    <div className='card w-full bg-base-100 shadow-xl'>
      <div className='card-body'>
        <h2 className='card-title'>Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
      </div>
      <figure className='
      object-contain
       h-full 
       w-full'
       >
        <img src={imgUrl} alt='Shoes'
        
        />
      </figure>
    </div>
  );
}

export default Slide2;


// h-auto max-w-full