'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Ilets from '../assets/ilets.jpg';
//import Ieltsprocess from '../assets/Ielts.png';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import RollerShadesIcon from '@mui/icons-material/RollerShades';

const ILETS = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    mobileNumber: '',
    email: '',
    country: '',
    currentLocation: '',
    studyDestinationCountry: '',
    educationLevel: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic
    console.log('Form submitted:', formData);
  };

  return (
    <div>
      <div className='relative'>
        <div className="absolute inset-0 overflow-hidden h-[40vh]">
          <Image src={Ilets} alt="an" layout="fill" objectFit="cover" />
          <div className="absolute inset-0 bg-red-900 bg-opacity-40"></div>
        </div>
        <div className='flex flex-col py-8 md:py-16 lg:py-20 px-4 md:px-8 lg:px-20 relative z-10 '>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-2 md:mb-4 lg:mb-6">
            IELTS Training Centre
          </h2>
          <p className='text-xl md:text-2xl font-bold text-center cursor-pointer text-blue-400 py-1'>
            🏠 Home/ <span className='text-white'>IELTS Preparation Classes</span>
          </p>
        </div>
      </div>
      <div className='py-10 px-4 md:px-8 lg:px-20'>
        <h2 className='text-2xl  md:text-3xl lg:text-4xl font-bold text-green-900 text-left mt-8 py-4 '>IELTS Overview</h2>
        <p className='text-2xl text-gray-500 font-semibold'>
          The International English Language Testing System (IELTS) is a widely recognized English proficiency test.
          It was first introduced in 1980 and has since become one of the most popular English language tests worldwide.
          The test is designed to assess an individual’s ability to understand and use the English language in academic
          and general contexts.
        </p>
        <h3 className='py-6 text-3xl mt-5 font-bold'>How many types of IELTS tests are there?</h3>
        <div className='flex flex-col md:flex-row gap-6 sm:flex-col '>
          <div>
            <h3 className='text-3xl font-bold py-4'>1. IELTS Academic</h3>
            <p className='text-2xl text-gray-500 font-semibold sm:text-1xl'>
              The IELTS Academic Test is suitable for individuals planning to enroll in international universities for
              undergraduate or postgraduate programs or those aiming to begin their professional journey in a foreign
              country. This test is specifically designed to evaluate the English language proficiency of candidates who
              intend to pursue higher education in an English-speaking nation.
            </p>
          </div>
          <div>
            <h3 className='text-3xl font-bold py-4'>2. IELTS Academic</h3>
            <p className='text-2xl text-gray-500 font-semibold'>
              The IELTS Academic Test is suitable for individuals planning to enroll in international universities for
              undergraduate or postgraduate programs or those aiming to begin their professional journey in a foreign
              country. This test is specifically designed to evaluate the English language proficiency of candidates who
              intend to pursue higher education in an English-speaking nation.
            </p>
          </div>
        </div>
        <p className='text-2xl text-gray-500 font-semibold py-6'>
          Both types of tests include four sections: Listening, Speaking, Reading, and Writing. The Listening and
          Speaking sections are the same for both tests, while there are slight variations in the Reading and Writing
          sections based on the test type.
        </p>
        <h3 className='text-3xl font-bold py-2 mt-5 mb-6'>Why study for the IELTS preparation courses with Abshiedu Education?</h3>
        <div>
          <Image className='h-[50vh] w-[90vh]' src={Ilets} alt="" />
        </div>
        <p className='text-2xl text-gray-500 font-semibold py-4 mt-4'>
          Clearing the IELTS exam with a high score is a crucial step to getting accepted into prestigious
          universities. Expert Education has provided education and migration consultancy services in 20 countries. We’ve
          helped international students accomplish their academic goals since 2003. Know more about how we can help you
          achieve the best IELTS band score.
        </p>
        <p className='text-2xl text-gray-500 font-semibold py-4'>Our experienced faculty members are set to help you study and ace your English language test. We hold smaller IELTS coaching classes so that every student gets the undivided attention they need to achieve the perfect score.</p>
        <p className='text-2xl text-gray-500 font-semibold py-4'>With over 100,000 international students who’ve reached their academic goals through Expert Education, we hope to turn your dream into a reality as well. Our IELTS training centre is equipped with intelligent technology to allow every student to learn to their full potential.</p>
        <p className='text-2xl text-gray-500 font-semibold py-4'>During the IELTS preparation class, we provide study materials and conduct weekly mock tests. We also offer a flexible schedule for students, providing offline and online support. We hold IELTS coaching classes from morning to afternoon so that students can join at a time suitable to them.</p>

      </div>
      <div className="flex flex-col md:flex-row  gap-8 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 py-5  rounded-md shadow-md">
        <div className="w-full md:w-1/2">
          <h3 className='text-4xl md:text-4xl lg:text-4xl font-semibold text-left mb-4'>Contact Us</h3>
                <div className='w-16 h-2 rounded-lg bg-green-900'></div>
                <p className='py-2 mb-4 text-2xl font-semibold'>This test is specifically designed to evaluate the English<br/>English-speaking nation.</p>
            <div className='flex flex-row items-center border-b py-2 mb-6'>
                <MarkEmailReadIcon/>
                <p className='ml-3 font-semibold'>abshiedu@gmail.com</p>
            </div>
            <div className=' flex flex-row items-center border-b py-2 mb-6'>
                <FmdGoodIcon/>
                <p className='ml-3 font-semibold'>Bagbazar Kathmandu</p>
            </div>
            <div className=' flex flex-row items-center border-b py-2 mb-6'>
                <PhoneInTalkIcon/>
                <p className='ml-3 font-semibold'>0825800000</p>
            </div>
            <div className=' flex flex-row items-center border-b py-2 mb-6'>
                <RollerShadesIcon/>
                <p className='ml-3 font-semibold'>Open (Sunday-Friday)</p>
            </div>
        </div>
        <div className='w-full px-6 py-6 bg-gray-100'>
          <form onSubmit={handleSubmit} className="w-full md:w-1/2">
            <p className='mb-3 text-2xl font-semibold'>Enter your details below and we’ll contact you soon !</p>
                        <label className="block mb-4 ">
                            <span className="text-gray-700 font-semibold">Full Name<span className='text-red-500'>*</span></span>
                            <input
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            placeholder='e.g. Jhon Donard '
                            className="form-input px-4 py-2 mt-1 block w-full"
                            required
                            />
                        </label>

                        <label className="block mb-4">
                            <span className="text-gray-700 font-semibold ">Mobile Number<span className='text-red-500'>*</span></span>
                            <input
                            type="tel"
                            name="mobileNumber"
                            value={formData.mobileNumber}
                            onChange={handleChange}
                            placeholder='e.g. 9800000000'
                            className="form-input mt-1 px-4 py-2 block w-full"
                            required
                            />
                        </label>

                        <label className="block mb-4">
                            <span className="text-gray-700 font-semibold">Email<span className='text-red-500'>*</span></span>
                            <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder='e.g.Jhondonard@gmail.com'
                            className="form-input mt-1 px-4 py-2 block w-full"
                            required
                            />
                        </label>

                        <label className="block mb-4">
                            <span className="text-gray-700 font-semibold">Country<span className='text-red-500'>*</span></span>
                            <input
                            type="text"
                            name="country"
                            value={formData.country}
                            onChange={handleChange}
                            placeholder='e.g. Nepal'
                            className="form-input mt-1 px-4 py-2 block w-full"
                            required
                            />
                        </label>

                        <label className="block mb-4">
                            <span className="text-gray-700 font-semibold">Current Location<span className='text-red-500'>*</span></span>
                            <input
                            type="text"
                            name="currentLocation"
                            value={formData.currentLocation}
                            onChange={handleChange}
                            placeholder='e.g. Butwal'
                            className="form-input mt-1 px-4 py-2 block w-full"
                            required
                            />
                        </label>

                        <label className="block mb-4">
                            <span className="text-gray-700 font-semibold">Study Destination Country<span className='text-red-500'>*</span></span>
                            <select
                            name="studyDestinationCountry"
                            value={formData.studyDestinationCountry}
                            onChange={handleChange}
                            placeholder='e.g. Canada'
                            className="form-select mt-1 px-4 py-2 block w-full"
                            required
                            >
                            <option value="">Select Country</option>
                            <option value="usa">USA</option>
                            <option value="canada">Canada</option>
                            <option value="canada">UK</option>
                            <option value="canada">Germany</option>
                            <option value="canada">Thailand</option>
                            <option value="canada">Australia</option>
                            <option value="canada">New Zealand</option>
                            </select>
                        </label>

                        <label className="block mb-4">
                            <span className="text-gray-700 font-semibold">Education Level<span className='text-red-500 '>*</span></span>
                            <input
                            type="text"
                            name="educationLevel"
                            value={formData.educationLevel}
                            onChange={handleChange}
                            placeholder='Enter your last education.'
                            className="form-input mt-1 px-4 py-2 block w-full"
                            required
                            />
                        </label>
                <button
                type="submit"
                className="bg-blue-500 text-white px-12 py-4 rounded font-semibold hover:bg-blue-700"
                >
                Submit
                </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ILETS;