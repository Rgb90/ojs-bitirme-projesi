import React, { useState } from 'react';

const FooterMobil = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className='block sm:hidden'>
      {/* Accordion Item 1 */}
      <div className="border-b border-slate-200">
        <button onClick={() => toggleAccordion(1)} className="w-full flex justify-between items-center py-5 text-slate-800">
          <span>What is Material Tailwind?</span>
          <span className={`text-slate-800 transition-transform duration-300 ${activeIndex === 1 ? 'rotate-180' : ''}`}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
              <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
            </svg>
          </span>
        </button>
        <div className={`max-h-0 overflow-hidden transition-all duration-300 ease-in-out ${activeIndex === 1 ? 'max-h-[100px]' : ''}`}>
          <div className="pb-5 text-sm text-slate-500">
            Material Tailwind is a framework that enhances Tailwind CSS with additional styles and components.
          </div>
        </div>
      </div>

      {/* Accordion Item 2 */}
      <div className="border-b border-slate-200">
        <button onClick={() => toggleAccordion(2)} className="w-full flex justify-between items-center py-5 text-slate-800">
          <span>How to use Material Tailwind?</span>
          <span className={`text-slate-800 transition-transform duration-300 ${activeIndex === 2 ? 'rotate-180' : ''}`}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
              <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
            </svg>
          </span>
        </button>
        <div className={`max-h-0 overflow-hidden transition-all duration-300 ease-in-out ${activeIndex === 2 ? 'max-h-[100px]' : ''}`}>
          <div className="pb-5 text-sm text-slate-500">
            You can use Material Tailwind by importing its components into your Tailwind CSS project.
          </div>
        </div>
      </div>

      {/* Accordion Item 3 */}
      <div className="border-b border-slate-200">
        <button onClick={() => toggleAccordion(3)} className="w-full flex justify-between items-center py-5 text-slate-800">
          <span>What can I do with Material Tailwind?</span>
          <span className={`text-slate-800 transition-transform duration-300 ${activeIndex === 3 ? 'rotate-180' : ''}`}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
              <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
            </svg>
          </span>
        </button>
        <div className={`max-h-0 overflow-hidden transition-all duration-300 ease-in-out ${activeIndex === 3 ? 'max-h-[100px]' : ''}`}>
          <div className="pb-5 text-sm text-slate-500">
            Material Tailwind allows you to quickly build modern, responsive websites with a focus on design.
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterMobil;
