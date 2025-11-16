
import React from 'react';

interface StatItemProps {
    value: string;
    label: string;
}

const StatItem: React.FC<StatItemProps> = ({ value, label }) => (
    <div className="text-center">
        <p className="text-4xl lg:text-5xl font-bold text-[#FF6A00]">{value}</p>
        <p className="text-sm font-semibold text-gray-300 uppercase tracking-wider mt-2">{label}</p>
    </div>
);

const Stats: React.FC = () => {
    return (
        <section className="bg-[#0F0F0F] text-white py-20 lg:py-24">
            <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold">ZESS At a Glance</h2>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
                    <StatItem value="5000+" label="Dealers" />
                    <StatItem value="1000+" label="Distributors" />
                    <StatItem value="30+" label="Years of Experience" />
                    <StatItem value="Millions" label="Tyres Produced Annually" />
                </div>
                <div className="flex justify-center items-center space-x-6 lg:space-x-10 border-t border-gray-800 pt-8">
                    <a href="#" className="font-semibold text-gray-300 hover:text-[#FF6A00] transition-colors">About Us</a>
                    <a href="#" className="font-semibold text-gray-300 hover:text-[#FF6A00] transition-colors">Leadership</a>
                    <a href="#" className="font-semibold text-gray-300 hover:text-[#FF6A00] transition-colors">Careers</a>
                </div>
            </div>
        </section>
    );
};

export default Stats;
