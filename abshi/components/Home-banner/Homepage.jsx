import React from 'react';
import MouseIcon from '@mui/icons-material/Mouse';
import Image from 'next/image';
import Background from '../assets/bgone.jpg';

const Homepage = () => {
  return (
    <div className="relative">
        <div className="w-full h-[100vh]  relative">
          <Image
            className="w-full h-[100vh]  object-cover object-right md:object-left-bottom"
            src={Background}
            alt="banner"
          />
        </div>
        <div className='absolute inset-0 flex-grow'>
          <div className="flex flex-col justify-left items-center text-white text-center mt-40">
            <h1 className="text-2xl text-center md:text-6xl sm:text-4xl font-bold ">
            <span className='text-center'>Countless </span> <br /> Achievement Of Students
            </h1>
            <p className="text-lg text-center md:text-xl mt-8 py-6 mb-5">
              We work with your company to identify position requirements implement programs
              <br /> implement recruitment programs
            </p>
          </div>
          <div className="flex flex-row justify-center items-center text-white text-center space-x-5 ">
            <button className="mr-5 text-xl font-semibold py-4 px-14 rounded-lg bg-white text-green-700">
              READ MORE
            </button>
            <button className="border border-solid border-blue-500 py-3.5 hover:border-green-500 transition-all duration-300 ease-in-out rounded-md px-3">
              <MouseIcon className="text-white rounded-full  " style={{ fontSize: 24 }} />
            </button>
          </div>
        </div>
    </div>

  );
};

export default Homepage;