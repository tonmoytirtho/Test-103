
import React from 'react';

interface FooterLinkProps {
    href?: string;
    children: React.ReactNode;
}

const FooterColumn: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <div>
        <h4 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-4">{title}</h4>
        <ul className="space-y-3">{children}</ul>
    </div>
);

const FooterLink: React.FC<FooterLinkProps> = ({ href = '#', children }) => (
    <li>
        <a href={href} className="text-gray-300 hover:text-[#FF6A00] transition-colors">{children}</a>
    </li>
);

const Footer: React.FC = () => {
    return (
        <footer className="bg-[#0D0D0D] text-white">
            <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 lg:gap-16">
                    <FooterColumn title="Product Catalogue">
                        <FooterLink>Motorcycle Tyres</FooterLink>
                        <FooterLink>3-Wheeler & EV Tyres</FooterLink>
                        <FooterLink>LCV Tyres</FooterLink>
                        <FooterLink>Farm/Tiller Tyres</FooterLink>
                        <FooterLink>Inner Tubes</FooterLink>
                        <FooterLink>Allied Products</FooterLink>
                    </FooterColumn>

                    <FooterColumn title="Business & Partners">
                        <FooterLink>For Fleets</FooterLink>
                        <FooterLink>Become a Dealer</FooterLink>
                        <FooterLink>Distributors & Export</FooterLink>
                        <FooterLink>OEMs</FooterLink>
                        <FooterLink>B2B Portal</FooterLink>
                    </FooterColumn>

                    <FooterColumn title="Company Hub">
                        <FooterLink>About Us</FooterLink>
                        <FooterLink>Quality & Manufacturing</FooterLink>
                        <FooterLink>News / Blog</FooterLink>
                        <FooterLink>Careers</FooterLink>
                        <FooterLink>Contact Us</FooterLink>
                    </FooterColumn>

                    <FooterColumn title="Help & Resources">
                        <FooterLink>Tyre Care & Safety</FooterLink>
                        <FooterLink>FAQs</FooterLink>
                        <FooterLink>Warranty & Claims</FooterLink>
                        <FooterLink>Download Centre</FooterLink>
                    </FooterColumn>
                </div>
            </div>
            <div className="bg-[#0A0A0A]">
                 <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} ZESS TYRE. All Rights Reserved.</p>
                    <div className="flex space-x-6 mt-4 sm:mt-0">
                        <a href="#" className="hover:text-white">Privacy Policy</a>
                        <a href="#" className="hover:text-white">Terms of Use</a>
                        <a href="#" className="hover:text-white">Cookie Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
