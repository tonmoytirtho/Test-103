
import React from 'react';
import { SearchIcon } from './Icons';

const Header: React.FC = () => {
    const navItems = ['Home', 'Products', 'Solutions', 'Quality & Manufacturing', 'Dealer Network', 'Support', 'Company'];

    return (
        <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
            <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
                <div className="flex h-20 items-center justify-between">
                    <div className="flex items-center">
                        <a href="#" className="flex-shrink-0">
                            <h1 className="text-3xl font-bold text-[#1A1A1A]">
                                ZESS<span className="text-[#FF6A00]">.</span>TYRE
                            </h1>
                        </a>
                    </div>
                    <nav className="hidden lg:flex lg:space-x-8 xl:space-x-10">
                        {navItems.map(item => (
                            <a key={item} href="#" className="text-sm font-semibold text-[#333333] hover:text-[#FF6A00] transition-colors">
                                {item}
                            </a>
                        ))}
                         <a href="#" className="text-sm font-semibold text-[#FF6A00] hover:text-opacity-80 transition-colors">
                            Portal (B2B)
                        </a>
                    </nav>
                    <div className="flex items-center space-x-4">
                        <button className="p-2 text-[#333333] hover:text-[#FF6A00]">
                            <SearchIcon className="h-5 w-5" />
                        </button>
                        <div className="text-sm font-semibold">
                            <span className="text-[#1A1A1A] cursor-pointer">EN</span>
                            <span className="text-gray-300 mx-1">/</span>
                            <span className="text-gray-400 hover:text-[#1A1A1A] cursor-pointer">BN</span>
                        </div>
                        <a href="#" className="hidden md:inline-block px-5 py-2.5 text-sm font-semibold text-white bg-[#FF6A00] rounded-md shadow-sm hover:bg-opacity-90 transition-all">
                            Enquire Now
                        </a>
                        <a href="#" className="hidden xl:inline-block px-5 py-2.5 text-sm font-semibold text-[#1A1A1A] bg-transparent border border-[#1A1A1A] rounded-md hover:bg-[#1A1A1A] hover:text-white transition-all">
                            Find a Dealer
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
