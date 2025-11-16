
import React from 'react';

interface ProductCardProps {
  category: string;
  description: string;
  imageUrl: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ category, description, imageUrl }) => (
  <div className="group bg-white rounded-lg shadow-soft overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-2">
    <div className="h-56 overflow-hidden">
      <img src={imageUrl} alt={category} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">{category}</h3>
      <p className="text-sm text-[#333333] mb-4 h-10">{description}</p>
      <a href="#" className="font-semibold text-[#FF6A00] inline-flex items-center">
        Explore <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
      </a>
    </div>
  </div>
);

const ProductRange: React.FC = () => {
  const products = [
    { category: 'Motorcycle Tyres', description: 'Performance and durability for two-wheelers.', imageUrl: 'https://picsum.photos/seed/motorcycle-tyre/600/400' },
    { category: '3-Wheeler Tyres', description: 'Robust solutions for commercial and passenger auto-rickshaws.', imageUrl: 'https://picsum.photos/seed/3-wheeler-tyre/600/400' },
    { category: 'EV Tyres (E-Rickshaw)', description: 'Low rolling resistance for enhanced battery life.', imageUrl: 'https://picsum.photos/seed/ev-tyre/600/400' },
    { category: 'LCV Tyres', description: 'Heavy-duty performance for light commercial vehicles.', imageUrl: 'https://picsum.photos/seed/lcv-tyre/600/400' },
    { category: 'Farm / Tiller Tyres', description: 'Superior grip and longevity for agricultural use.', imageUrl: 'https://picsum.photos/seed/farm-tyre/600/400' },
    { category: 'Inner Tubes', description: 'High-quality tubes for various vehicle segments including HCV/LTB.', imageUrl: 'https://picsum.photos/seed/inner-tube/600/400' },
    { category: 'Allied Products', description: 'Including PCT, Bonding Gum, Flaps, and Sole Sheets.', imageUrl: 'https://picsum.photos/seed/allied-products/600/400' },
  ];

  return (
    <section className="bg-[#F5F5F5] py-20 lg:py-28">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#1A1A1A]">Our Product Range</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.slice(0, 4).map(p => <ProductCard key={p.category} {...p} />)}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 justify-center">
            <div className="lg:col-start-1">
                <ProductCard {...products[4]} />
            </div>
            <div>
                 <ProductCard {...products[5]} />
            </div>
            <div>
                 <ProductCard {...products[6]} />
            </div>
        </div>
      </div>
    </section>
  );
};

export default ProductRange;
