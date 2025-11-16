
import React from 'react';

interface SolutionCardProps {
    title: string;
    description: string;
    imageUrl: string;
    className?: string;
}

const SolutionCard: React.FC<SolutionCardProps> = ({ title, description, imageUrl, className = '' }) => (
    <div className={`group relative bg-white rounded-lg shadow-soft overflow-hidden ${className}`}>
        <img src={imageUrl} alt={title} className="w-full h-80 object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-20 transition-all duration-300"></div>
        <div className="absolute bottom-0 left-0 p-8 text-white">
            <h3 className="text-2xl font-bold mb-2">{title}</h3>
            <p className="max-w-md mb-4">{description}</p>
            <a href="#" className="inline-block px-6 py-3 text-sm font-semibold bg-white text-[#1A1A1A] rounded-md shadow-sm hover:bg-gray-200 transition-all">
                Learn More
            </a>
        </div>
    </div>
);

const BusinessSolutions: React.FC = () => {
    return (
        <section className="bg-white py-20 lg:py-28">
            <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
                <div className="text-left mb-16 max-w-2xl">
                    <h2 className="text-4xl lg:text-5xl font-bold text-[#1A1A1A]">Solutions for Business Partners</h2>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                    {/* Image: Tyre retail store */}
                    <SolutionCard 
                        title="Dealers"
                        description="Partner with us to bring world-class tyres to your customers. Benefit from our extensive support, marketing, and robust supply chain."
                        imageUrl="https://picsum.photos/seed/tyre-store/800/600"
                        className="lg:col-span-1"
                    />
                     {/* Image: Palletized tyres in warehouse */}
                    <SolutionCard 
                        title="Distributors & Export"
                        description="Expand your portfolio with ZESS. We offer attractive margins and logistics support for regional distributors and international export partners."
                        imageUrl="https://picsum.photos/seed/tyre-warehouse/800/600"
                        className="lg:col-span-1 lg:mt-12"
                    />
                    {/* Image: OEM assembly line */}
                    <SolutionCard 
                        title="OEM Partnerships"
                        description="We collaborate with vehicle manufacturers to provide factory-fitted tyres that meet the highest standards of performance and safety."
                        imageUrl="https://picsum.photos/seed/oem-line/800/600"
                        className="lg:col-span-1"
                    />
                </div>
            </div>
        </section>
    );
};

export default BusinessSolutions;
