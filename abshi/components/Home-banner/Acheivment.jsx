import React from 'react';
import Aeca from '../assets/AECA-membership.png';
import ISEAA from '../assets/ISEAA-member.png';
import NEAS from '../assets/NEAS.png';
import Image from 'next/image';

const Achievement = () => {
  return (
    <div className='h-auto py-12 px-4 md:px-8 lg:px-16 xl:px-32'>
      <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-center text-green-900 mb-4'>──Our Achievements──</h2>
      <p className='text-lg md:text-xl lg:text-2xl font-semibold text-center mb-8'>
        Our Educational Awards and Achievements claim that we are one of the top education consultancy in Nepal.
      </p>

      <div className='flex flex-col sm:flex-row gap-6 items-center justify-center'>
        <div className='flex-shrink-0'>
          <Image className="w-36 h-36 md:w-48 md:h-48 lg:w-60 lg:h-60 xl:w-72 xl:h-72" src={Aeca} alt="AECA Membership Logo" />
        </div>
        <div className='flex-shrink-0'>
          <Image className="w-36 h-36 md:w-48 md:h-48 lg:w-60 lg:h-60 xl:w-72 xl:h-72" src={ISEAA} alt="ISEAA Membership Logo" />
        </div>
        <div className='flex-shrink-0'>
          <Image className="w-36 h-36 md:w-48 md:h-48 lg:w-60 lg:h-60 xl:w-72 xl:h-72" src={NEAS} alt="NEAS Logo" />
        </div>
      </div>
    </div>
  );
};

export default Achievement;