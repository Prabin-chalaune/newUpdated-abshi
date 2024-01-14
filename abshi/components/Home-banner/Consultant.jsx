import React from 'react';
import Image from 'next/image';
import Scholarship from '../assets/scholarship.png';

const Consultant = () => {
  return (
    <div className='h-auto py-20 bg-black text-white md:rounded-tl-10 md:rounded-br-10'>
      <div className='flex flex-col px-6 sm:px-10 md:px-20 lg:px-32 xl:px-48'>
        <div className='items-center'>
          <h2 className='text-center font-bold text-3xl sm:text-4xl lg:text-5xl py-2 mt-4'> Get ☎ Counselling From Experts</h2>
          <p className='text-center text-lg sm:text-1xl md:text-1xl lg:text-1xl xl:text-1xl py-5'>
            Our education consultants can help you gain genuine and transparent advice. Since 2003, we have 60+ branches in 20 countries. We specialize in providing a wide range of services to students aspiring to study in Australia, the UK, Canada, and the US.
          </p>
          <div className='flex flex-col sm:flex-row justify-around text-center items-center'>
            <p className='text-lg sm:text-xl md:text-2xl lg:text-1xl xl:text-1xl py-2 sm:pr-4 lg:pr-0'>Get expert advice for stepping into your dream universities, scholarship, accommodation, and more.</p>
            <button className='rounded-lg border border-p-2 border-blue-200 justify-center font-bold hover:text-blue-400 transition-all duration-300 py-4 px-8 mb-4 mt-8 sm:mt-0 sm:px-5 sm:py-2'>Get Counselling</button>
          </div>
          <hr className='my-8'></hr>
        </div>
        <div className='flex flex-col sm:flex-row gap-9 items-center justify-around text-center py-8'>
          <div className='flex flex-col'>
            <div className='flex flex-row items-center justify-center text-center py-4'>
              <Image src={Scholarship} className='w-12 h-12 sm:w-16 sm:h-16' alt="" />
              <p className='font-bold text-xl sm:text-2xl lg:text-3xl'>70,000+</p>
            </div>
            <p className='font-semibold text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl'>INTERNATIONAL STUDENTS <br /> ASSISTED</p>
          </div>
          <div className='flex flex-col'>
            <div className='flex flex-row items-center justify-center text-center py-4'>
              <Image src={Scholarship} className='w-12 h-12 sm:w-16 sm:h-16' alt="" />
              <p className='font-bold text-xl sm:text-2xl lg:text-3xl'>15,000+</p>
            </div>
            <p className='font-semibold text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl'>SCHOLARSHIP APPROVED</p>
          </div>
          <div className='flex flex-col'>
            <div className='flex flex-row items-center justify-center text-center py-4'>
              <Image src={Scholarship} className='w-12 h-12 sm:w-16 sm:h-16' alt="" />
              <p className='font-bold text-xl sm:text-2xl lg:text-3xl'>26,000+</p>
            </div>
            <p className='font-semibold text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl'>ENROLLED IN <br /> IELTS/PTE PREPARATION CLASSES</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Consultant;