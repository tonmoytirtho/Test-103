
import React from 'react';

const DealerNetwork: React.FC = () => {
    return (
        <section className="bg-[#F2F2F2] py-20 lg:py-28">
            <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold text-[#1A1A1A]">Dealer Network & Partnerships</h2>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                    <div className="bg-white rounded-lg shadow-soft p-8 lg:p-12 flex flex-col justify-center items-center text-center">
                        <div className="mb-4">
                            <svg className="h-16 w-16 text-[#FF6A00]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-[#111111] mb-2">Find your nearest authorized ZESS TYRE dealer.</h3>
                        <p className="text-[#333333] mb-6 max-w-sm">Access our wide network of trusted partners for genuine products and expert service.</p>
                        <a href="#" className="inline-block px-8 py-4 text-base font-semibold text-white bg-[#FF6A00] rounded-md shadow-lg hover:bg-opacity-90 transition-all">
                            Open Dealer Locator
                        </a>
                    </div>
                    <div className="bg-white rounded-lg shadow-soft p-8 lg:p-12 flex flex-col justify-center">
                         <h3 className="text-2xl font-bold text-[#111111] mb-4">Become a Dealer</h3>
                         <ul className="space-y-3 text-[#333333] mb-6">
                            <li className="flex items-start"><span className="text-[#FF6A00] mr-2 mt-1">&#10003;</span><span>Competitive Margins & Incentives</span></li>
                            <li className="flex items-start"><span className="text-[#FF6A00] mr-2 mt-1">&#10003;</span><span>Comprehensive Product Training & Support</span></li>
                            <li className="flex items-start"><span className="text-[#FF6A00] mr-2 mt-1">&#10003;</span><span>Marketing and Point-of-Sale Materials</span></li>
                            <li className="flex items-start"><span className="text-[#FF6A00] mr-2 mt-1">&#10003;</span><span>Access to a Robust Nationwide Supply Chain</span></li>
                         </ul>
                         <a href="#" className="inline-block w-full sm:w-auto px-8 py-4 text-base font-semibold text-[#1A1A1A] bg-transparent border-2 border-[#1A1A1A] rounded-md hover:bg-[#1A1A1A] hover:text-white transition-all text-center">
                            Become a Dealer
                        </a>
                    </div>
                </div>
                <div className="border-t border-gray-300 pt-8 text-center">
                    <p className="text-lg font-semibold text-[#333333]">
                        <span className="text-[#111111]">5000+</span> Dealers | <span className="text-[#111111]">1000+</span> Distributors | Nationwide Coverage
                    </p>
                </div>
            </div>
        </section>
    );
};

export default DealerNetwork;
