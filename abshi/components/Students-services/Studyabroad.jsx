'use client'
import React, { useState } from 'react';
import Visa from '../assets/visaa.jpg';
import CardList from '../Home-banner/CardList';
import Image from 'next/image';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import RollerShadesIcon from '@mui/icons-material/RollerShades';

const StudyAbroad = () => {
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
    // form submission logic
    console.log('Form submitted:', formData);
  };

  return (
    <div className="abc">
      <div className="relative overflow-hidden opacity-40">
        <Image src={Visa} alt="an" layout="fill" objectFit="cover" />
      </div>
      <div className='flex flex-col py-8 md:py-16 lg:py-24 px-4 md:px-8 lg:px-20 relative z-10 '>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-green-900 shadow-sm text-center mb-6">
          Grab Information About Abroad Study
        </h2>
        <p className='text-2xl font-bold text-center cursor-pointer text-green-900 py-1'>🏠 Home/ <span className='text-blue-700'>Study Abroad</span></p>
      </div>
      <div className="flex flex-col py-6 px-4 md:px-8 lg:px-20">
        <h3 className="text-3xl md:text-3xl lg:text-3xl font-bold text-green-900 text-left mt-4 py-1 ">
          About Abroad Study
        </h3>
        <p className="mb-6 mt-4 text-base md:text-2xl font-semibold text-gray-500">
          It all starts from taking that leap of prepping for all requirements
          and getting into your dream university. You may find a long endless
          list of documentation required based on the university of a specific
          country. Needless to say, the entire admissions process can get
          overwhelming.
        </p>
        <h3 className="text-xl text-green-900 md:text-3xl font-bold mb-2">Documents needed for enrollment</h3>
        <p className="text-base font-semibold md:text-lg mb-6">
          The requirements for enrollment differ from university to the country
          you select. However, we’ve enlisted a broad set of documents that you
          can arrange for submissions.
        </p>
        <div>
          <ul className='ml-4 md:ml-8 font-semibold'>
          <li className='py-2 list-decimal'><span className='font-bold'>Photo:</span> passport size, photo ID</li>
                 <li className='py-2 list-decimal'><span className='font-bold'>Application form:</span>for the university you choose to study</li>
                 <li className='py-2 list-decimal'><span className='font-bold'>Academic certificates:</span> passport size, photo ID</li>
                 <li className='py-2 list-decimal'><span className='font-bold'>Work/internship experience</span>documents</li>
                 <li className='py-2 list-decimal'><span className='text-1xl font-bold'>English Language Proficiency certificate:</span>For example – IELTS, PTE, TOEFL etc.</li>
                 <li className='py-2 list-decimal'><span className='font-bold'>Entrance exam scores:</span>For example – GMAT, GRE, ELSAT, etc.</li>
                 <li className='py-2 list-decimal'><span className='font-bold'>Recommendation letters:</span> from the place you worked or interned</li>
                 <li className='py-2 list-decimal'><span className='font-bold'>Travel documents:</span> Valid passport, country-specific visa, international student ID card, college acceptance letter, etc.</li>
                 <li className='py-2 list-decimal'><span className='font-bold'>Financial documents</span>Proof of fund (Student loan or bank balance certificate), scholarship letter, sponsorship proof, income proof of your family, etc. </li>
                 <li className='py-2 list-decimal'><span className='font-bold'>Statement of purpose (SoP)</span>Who you are, your future career plan, your reasons for choosing that particular university and course, and how the degree you have gained will assist you in achieving your career goals. </li>
                 <li className='py-2 list-decimal'><span className='font-bold'>Résumé:</span>Including your places of internship and if you’ve worked at an organisation</li>
                 <li className='py-2 list-decimal'><span className='font-bold'>Health certificates:</span> Latest health check-up reports, health insurance card, vaccination certificates. </li>
          </ul>
        </div>
        <CardList />
        <div>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center mb-4">
            <span className="text-green-900">〡</span> Are you interested to study abroad?
          </h3>
          <p className="text-base md:text-lg text-center mb-6">
            This test is specifically designed to evaluate the English language
            proficiency of candidates who intend to pursue higher education in an
            English-speaking nation.
          </p>
          <div className="flex flex-col gap-4 md:flex-row md:gap-8 lg:gap-16 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 py-5 rounded-md shadow-md">
          <div className="w-full md:w-1/2">
             <h3 className='text-4xl md:text-4xl lg:text-4xl font-semibold text-left mb-4'>Contact Us</h3>
                 <div className='w-16 h-2 rounded-lg bg-green-900'></div>
                 <p className='py-2 mb-4 font-semibold'>This test is specifically designed to evaluate the English<br/>English-speaking nation.</p>

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
                 <p className='mb-3 font-semibold'>Enter your details below and we’ll contact you soon !</p>
                         <label className="block mb-4">
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
      </div>
    </div>
  );
};

export default StudyAbroad;