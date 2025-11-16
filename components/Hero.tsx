
import React from 'react';
import { MotorcycleIcon, ThreeWheelerIcon, TruckIcon, TractorIcon } from './Icons';

const Hero: React.FC = () => {
    const industryTags = [
        { Icon: MotorcycleIcon, label: "Motorcycle" },
        { Icon: ThreeWheelerIcon, label: "3-Wheeler & EV" },
        { Icon: TruckIcon, label: "LCV" },
        { Icon: TractorIcon, label: "Farm/Tiller" },
    ];

    return (
        <section className="relative bg-[#0D0D0D] text-white overflow-hidden">
            <div className="absolute inset-0 z-0">
                {/* Image: Tyre manufacturing line */}
                <img 
                    src="https://picsum.photos/seed/tyre-factory-line/2560/1080" 
                    alt="Tyre manufacturing line" 
                    className="object-cover w-full h-full opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D0D] via-[#0D0D0D] to-transparent"></div>
            </div>

            <div className="relative z-10 mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
                <div className="flex items-center min-h-[calc(100vh-80px)] max-h-[800px] py-20 lg:py-0">
                    <div className="w-full lg:w-1/2 xl:w-2/3">
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-tight mb-6">
                            Tyres Engineered for the Roads That Matter.
                        </h1>
                        <p className="max-w-xl text-lg md:text-xl text-gray-300 mb-10">
                            Delivering unparalleled reliability and performance across our entire range. From Motorcycle and 3-Wheeler to EV, LCV, and Farm/Tiller applications, ZESS is your partner in motion.
                        </p>
                        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-16">
                            <a href="#" className="inline-block px-8 py-4 text-base font-semibold text-white bg-[#FF6A00] rounded-md shadow-lg hover:bg-opacity-90 transition-all text-center">
                                Enquire Now
                            </a>
                            <a href="#" className="inline-block px-8 py-4 text-base font-semibold text-white bg-transparent border-2 border-white rounded-md hover:bg-white hover:text-[#1A1A1A] transition-all text-center">
                                Explore Products
                            </a>
                        </div>
                        <div className="w-full border-t border-gray-700 pt-6">
                             <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {industryTags.map(({ Icon, label }) => (
                                    <div key={label} className="flex items-center space-x-3 text-sm font-semibold text-gray-300">
                                        <Icon className="h-7 w-7 text-[#FF6A00]" />
                                        <span>{label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
             <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/4 h-3/4 bg-[#FF6A00] opacity-10 transform -skew-x-12 hidden xl:block"></div>
        </section>
    );
};

export default Hero;
