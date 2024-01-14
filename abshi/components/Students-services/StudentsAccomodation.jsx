import React from 'react';
import Accomodation from '../assets/accomodation.jpg';
import Image from 'next/image';

const StudentsAccomodation = () => {
  return (
    <div>
      <div className='relative'>
        <div className="absolute inset-0 overflow-hidden h-[44vh]">
          <Image src={Accomodation} alt="an" layout="fill" objectFit="cover" />
          <div className="absolute inset-0 bg-red-900 bg-opacity-40"></div>
        </div>
        <div className='flex flex-col py-8 md:py-16 lg:py-20 px-4 md:px-8 lg:px-20 relative z-10 '>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-2 md:mb-4 lg:mb-6">
            Study Abroad Accommodation
          </h2>
          <p className='text-xl md:text-2xl font-bold text-center cursor-pointer text-blue-400 py-1'>
            🏠 Home/ <span className='text-white'>Study Abroad Accommodation</span>
          </p>
        </div>
      </div>
      <div className='py-8 px-4 md:px-8 lg:px-20'>
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-green-900 text-left mt-6 md:mt-10 py-4 md:py-8 ">
          Student Accommodation Services
        </h3>
        <p className='text-lg md:text-xl text-gray-500 font-semibold'>
          Finding the right place to stay overseas after you’ve enrolled at a university can entail several options,
          while also making it difficult to decide. In general, there are three types of study abroad accommodation
          choices, namely: university residence, homestay, and apartment living. If you choose to stay at the university
          residence, then get ready for a myriad of new experiences. You’ll meet foreign students from different parts of
          the world, interact with almost everyone and develop long-lasting friendships.
        </p>
        <p className='text-lg md:text-xl text-gray-500 font-semibold mt-4 mb-4 md:mt-6 md:mb-6'>
          A homestay is another option that an international student can consider. A homestay is arranged for
          international students (usually below 18 years) to live with a local host or relative during their study period
          abroad. You will most probably get your own room while enjoying the family company and being a part of the daily
          routine and meals together. Alternatively, a homestay could also mean living with a host family unknown or
          unrelated to the student. This family has children of their own but would love to meet international students
          and get exposed to different cultures.
        </p>
      </div>
    </div>
  );
};

export default StudentsAccomodation;