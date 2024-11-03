import { useState } from 'react';

interface AccordionItem {
    title: string;
    description: string;
}

const accordionData: AccordionItem[] = [
    {
        title: 'ÖZELLİKLER',
        description: 'Material Tailwind is a framework that enhances Tailwind CSS with additional styles and components.',
    },
    {
        title: 'BESİN İÇERİĞİ',
        description: 'You can use Material Tailwind by importing its components into your Tailwind CSS project.',
    },
    {
        title: 'KULLANIM ŞEKLİ',
        description: 'Material Tailwind allows you to quickly build modern, responsive websites with a focus on design.',
    },
];

const ProductInfoAccordion = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <>
        <hr className="border-gray-300 mb-4" />
        <p className='text-xs'>Son Kullanma Tarihi: 07.2025</p>
            <div className='mb-12'>
                {accordionData.map((item, index) => (
                    <div key={index} className="border-b border-slate-200">
                        <button
                            onClick={() => toggleAccordion(index)}
                            className="w-full flex justify-between items-center py-5 text-slate-800"
                        >
                            <span className='text-sm font-semibold text-black'>{item.title}</span>
                            <span className="text-slate-800 transition-transform duration-300">
                                {openIndex === index ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
                                        <path fillRule="evenodd" d="M11.78 9.78a.75.75 0 0 1-1.06 0L8 7.06 5.28 9.78a.75.75 0 0 1-1.06-1.06l3.25-3.25a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06Z" clipRule="evenodd" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
                                        <path fillRule="evenodd" d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                                    </svg>
                                )}
                            </span>
                        </button>
                        <div
                            className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-[1000px]' : 'max-h-0'}`}
                        >
                            <div className="pb-5 text-sm text-slate-500">
                                {item.description}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default ProductInfoAccordion