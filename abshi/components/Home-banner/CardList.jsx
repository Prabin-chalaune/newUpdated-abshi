import React from 'react';
import SomeData from './SomeData';

const Card = ({ data }) => {
  return (
    <div className="max-w-md w-full sm:w-1/2 lg:w-1/3 rounded-xl mt-5 shadow-lg m-4">
      <img className="w-full h-48 sm:h-64" src={data.image} alt={data.title} />
      <img className='w-12 h-12 border border-solid border-gray-300 p-2 rounded-full' src={data.logo} alt="abc" style={{ marginTop: '-3rem', marginLeft: '1.5rem' }} />
      <div className="px-6 py-4">
        <a href="#"><div className="cursor-pointer font-bold text-xl sm:text-2xl lg:text-3xl transition-all duration-300 ease-in-out hover:text-blue-500 mb-2">{data.title}</div></a>
        <p className="text-gray-400 text-base sm:text-xl font-semibold">{data.desc}</p>
      </div>
      <div className="px-6 py-4">
        <a href={data.link} className="text-base sm:text-xl font-semibold cursor-pointer text-blue-500 hover:underline">Learn more {data.icon}</a>
      </div>
    </div>
  );
};

const CardList = () => {
  return (
    <section className="relative">
      <div className="py-10 px-4 sm:px-8 md:px-20 lg:px-32">
        <div className='py-5'>
          <h2 className='text-3xl md:text-5xl text-green-900 py-3 font-bold text-center xs:text-2xl'>──Our Courses & Services──</h2>
          <p className='text-base md:text-lg mt-2 px-5 text-center font-semibold'>We have a range of visa overseas consultant experts who can help you find the perfect university. We’ll ensure that your journey from your native country to wherever you want to study is a smooth path to education and career fulfillment. A range of visa overseas consultant experts who can a range of visa overseas consultant.</p>
        </div>
        <div className="flex flex-wrap gap-5 justify-center py-5">
          {SomeData.map((data) => (
            <Card key={data.id} data={data} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardList;