import React from 'react';

const kitchenProducts = [
  {
    title: 'Modular Kitchen',
    description: 'Complete modular kitchen solutions',
    price: 'Starting ₹85,000',
    features: ['Custom layouts', 'Premium hardware', 'Multiple finish options']
  },
  {
    title: 'Kitchen Cabinets',
    description: 'Storage cabinets and drawers',
    price: 'Starting ₹25,000',
    features: ['Soft-close mechanisms', 'Water-resistant material', 'Organized storage']
  },
  {
    title: 'Kitchen Islands',
    description: 'Standalone kitchen islands with storage',
    price: 'Starting ₹35,000',
    features: ['Additional counter space', 'Built-in storage', 'Mobile options']
  },
  {
    title: 'Pantry Units',
    description: 'Tall storage solutions for dry goods',
    price: 'Starting ₹40,000',
    features: ['Pull-out shelves', 'Maximum storage', 'Easy access design']
  }
];

export default function KitchenPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4 text-secondary">Kitchen Solutions</h1>
        <p className="text-gray-600">Modern kitchen designs that combine style with functionality</p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {kitchenProducts.map((product, index) => (
          <div key={index} className="border rounded-lg p-6 hover:shadow-lg transition-all hover:border-primary bg-ivory">
            <h2 className="text-2xl font-semibold mb-3 text-secondary">{product.title}</h2>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <ul className="mb-4 space-y-2">
              {product.features.map((feature, idx) => (
                <li key={idx} className="flex items-center text-sm text-gray-600">
                  <svg className="w-4 h-4 mr-2 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
            <div className="text-xl font-bold text-primary">{product.price}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
