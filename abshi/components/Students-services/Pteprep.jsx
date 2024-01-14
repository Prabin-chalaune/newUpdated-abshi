import React from 'react';
import Image from 'next/image';
import PTE from '../assets/pte.jpg'
const Pteprep = () => {
  return (
    <div>
        <div className="relative">
            <div className="absolute inset-0 overflow-hidden h-[40vh]">
                <Image src={PTE} alt="an" layout="fill" objectFit="cover" />
                <div className="absolute inset-0 bg-red-700 bg-opacity-40"></div>
            </div>
            <div className='flex flex-col py-10 px-10 md:py-20 md:px-20 relative z-10'>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white shadow-sm text-center mb-6">
                PTE Preparation Classes
              </h2>
              <p className='text-2xl md:text-2xl font-bold text-center cursor-pointer text-green-900 py-1'>
                🏠 Home/ <span className='text-white'>PTE Preparation</span>
              </p>
            </div>
        </div>
        {/* <div className='px-40 mb-10 md:px-sm sm:px-10'> */}
        <div className='px-6 sm:px-10 md:px-20 lg:px-40 mb-10'>
            {/* <h2 className='py-10 mt-8 text-4xl font-bold text-green-900'>About PTE Preparation Classes</h2> */}
            <h2 className='py-6 mt-6 text-4xl md:text-5xl lg:text-6xl font-bold text-green-900'>
              About PTE Preparation Classes
            </h2>
            <p className='py-4 text-semibold text-2xl'><span className='font-bold text-green-900'>The Pearson Test of English (PTE)</span> is a computer-based English language proficiency exam that assesses the reading, writing, speaking, and listening skills of non-native English speakers. It is widely recognized and accepted by universities and colleges around the world as a reliable measure of English language proficiency.</p>
            <p className='py-4 text-semibold text-2xl'>Pearson Test of English (Academic) is an English language proficiency test that is designed to assess the competence or the language ability level of non-native English speakers. It assesses all skills of the English language: Speaking, Writing, Reading, and Listening. PTE is one of the internationally recognized tests which is accepted by several universities, colleges, and academic institutions including government agencies. It is a computer-based test that is valid for 2 years.</p>
            <h2 className='py-10 mt-8 text-4xl font-bold text-green-900'>What to expect on the PTE exam day</h2>
            <p className='py-4 text-semibold text-2xl'>The exam includes testing two skills together, like reading and speaking or listening and writing. It is taken on a computer at PTE’s designated test centres. Each exam will include not more than 10-15 candidates. It is advised that you arrive at least 30 minutes before the test begins so that you can check-in securely.</p>
            <ul>
                <li className='list-disc ml-3'>
                  <p className='py-3 text-semibold text-2xl'>When you arrive at the Pearson test centre, the exam administrator will guide you through the check-in process. You will receive a brief understanding of the test rules and procedures.</p>
                </li>
                <li className='list-disc ml-3'>
                   <p className='py-3 text-semibold text-2xl'>The administrator will also need to verify your identity. They will request to see your ID (passport or any other valid ID card stated on PTE’s website). They will also take a digital photograph, your digital signature, and scan your palm.</p>
                </li>
                <li className='list-disc ml-3'>
                   <p className='py-3 text-semibold text-2xl'>You will be provided with a locker for storing your personal belongings and ensure that you are all set to take the exam.</p>
                </li>
                <li className='list-disc ml-3'>
                   <p className='py-3 text-semibold text-2xl'>You will be assigned a seat with a computer, keyboard, and an audio headset during the test. Your preparation method for this test will define your speed and accuracy in delivering answers to each question. </p>
                </li>

            </ul>
            <p className='py-4 text-semibold text-2xl mb-4'>With a comprehensive study strategy, persistent motivation and committed effort, you can secure a good score in the PTE exam. It would prove a worthwhile feather in your cap. If you’re planning to take this exam, allow Expert Education to help you prepare and bring your study abroad dream to fruition.<span className='text-blue-600'>Get in touch today!</span></p>
        </div>

    </div>
  );
}

export default Pteprep;