'use client'
import React,{useState} from 'react';
import Image from 'next/image';
import Visa from '../assets/Visa.jpg'
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import RollerShadesIcon from '@mui/icons-material/RollerShades';

const Visaapplicaiton = () => {
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
        //form submission logic
        console.log('Form submitted:', formData);
      };
  return (
    <div>
        <div className="relative">
            <div className="absolute inset-0 overflow-hidden h-[55vh]">
            <Image src={Visa} alt="an" layout="fill" objectFit="cover" />
            <div className="absolute inset-0 bg-red-700 bg-opacity-40"></div>
            </div>
            <div className="flex flex-col py-10 px-5 md:py-20 md:px-10 lg:px-20 relative z-10 ">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white shadow-sm text-center mb-6">
                Visa Application Process
            </h2>
            <p className="text-xl md:text-2xl lg:text-3xl font-bold text-center cursor-pointer text-green-900 py-1">
                🏠 Home/ <span className="text-white">Visa Application</span>
            </p>
            </div>
        </div>
        <div className='px-5 md:px-20 mb-10 md:mb-20'>
            <h2 className='py-10 text-4xl font-bold text-green-900'>About Visa-application Process</h2>
            <p className='py-4 text-semibold text-2xl'><span className='font-bold text-green-900'>Visa application</span> is complex and at times confusing and constantly changing, that may result to the inaccuracies. Incomplete or wrong visa applications and mistakes may lead to delays or unsuccessful results. So, these mistakes are painful and expensive since visa application fee are non-refundable and the Department of Immigration does not take responsibility for the applications that you make. Thus, The Next is very serious about application and ensures a perfect and error free visa lodgement.</p>
            <p className='py-4 text-semibold text-2xl'>You can request for a student visa once you have your selected university’s admission letter in hand and have made arrangements for your financial support while studying abroad. Obtaining a student visa can be difficult because it involves a lot of paperwork. Additionally, each nation has a unique set of criteria, so it’s important to be familiar with the immigration rules of the nation you chose to study in.</p>
            <p className='py-4 text-semibold text-2xl'>You may prepare ahead of time and feel confident that the process will be successfully completed if you have a thorough understanding of the study visa application procedure. From completing the visa application forms to getting the paperwork ready and submitting them on time, our experts of Location Based Counselors will advise you at every step of visa lodgement.</p>
            <ul>
                <li className='list-disc ml-3'>
                  <p className='py-3 text-semibold text-2xl'><span className='font-bold'>Online Visa Application:</span> A visa application form for a specific country will be available online. You can create a student profile online and fill the necessary fields correctly.</p>
                </li>
                <li className='list-disc ml-3'>
                   <p className='py-3 text-semibold text-2xl'><span className='font-bold'>Online Visa Application:</span> A visa application form for a specific country will be available online. You can create a student profile online and fill the necessary fields correctly.</p>
                </li>
            </ul>
            <p className='py-4 text-semibold text-2xl'>Once you fill in all the details, you have to pay the visa application fee and submit it with all the supporting documents.Depending on the country and your nationality, completing visa processing can take a few days to several months. You’ll have to make sure that you leave enough time to get your visa arrangements done.</p>
            <p className='py-4 text-semibold text-2xl'>We suggest that you start your visa application process by applying 3-4 months in advance. If you seek financial aid, scholarships or education loans, consider adding a few more months as these applications take longer to process and complete. Contact our Expert Education team to help with your specific visa application requirements.</p>

        </div>
        <div className="flex flex-col md:flex-row  gap-8 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 py-5  rounded-md shadow-md">
          <div className="w-full md:w-1/2">
            <h3 className='text-4xl md:text-4xl lg:text-4xl font-semibold text-left mb-4'>Contact Us</h3>
                <div className='w-16 h-2 rounded-lg bg-green-900'></div>
                <p className='text-2xl py-2 mb-4 font-semibold'>This test is specifically designed to evaluate the English<br/>English-speaking nation.</p>

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
                <p className='text-2xl mb-3 font-semibold'>Enter your details below and we’ll contact you soon !</p>
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
  );
}

export default Visaapplicaiton;