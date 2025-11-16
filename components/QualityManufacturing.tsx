
import React from 'react';

const QualityChip: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="flex items-center space-x-2 bg-gray-100 rounded-full px-4 py-2">
        <span className="text-sm font-semibold text-[#333333]">{children}</span>
    </div>
);

const QualityManufacturing: React.FC = () => {
    return (
        <section className="bg-white py-20 lg:py-28">
            <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <div className="rounded-lg shadow-soft overflow-hidden">
                        {/* Image: Tyre testing lab or compound engineering */}
                        <img src="https://picsum.photos/seed/tyre-lab/800/1000" alt="Tyre R&D Lab" className="w-full h-full object-cover" />
                    </div>
                    <div>
                        <h2 className="text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-6">Quality & Manufacturing Excellence</h2>
                        <p className="text-lg text-[#333333] mb-8 leading-relaxed">
                            Our commitment to quality is embedded in every stage of our process. From advanced R&D in compound design to rigorous, multi-point testing protocols, we ensure every tyre meets international standards for safety, durability, and performance. Our state-of-the-art facilities and unwavering focus on reliability are backed by a comprehensive warranty.
                        </p>
                        <div className="flex flex-wrap gap-4 mb-10">
                            <QualityChip>Advanced R&D</QualityChip>
                            <QualityChip>Rigorous Testing</QualityChip>
                            <QualityChip>Global Certifications</QualityChip>
                            <QualityChip>Comprehensive Warranty</QualityChip>
                        </div>
                        <a href="#" className="inline-block px-8 py-4 text-base font-semibold text-[#1A1A1A] bg-transparent border-2 border-[#1A1A1A] rounded-md hover:bg-[#1A1A1A] hover:text-white transition-all">
                            Discover Our Process
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default QualityManufacturing;
