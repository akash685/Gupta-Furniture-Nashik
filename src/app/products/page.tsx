import Breadcrumb from '@/components/Breadcrumb';
import React from 'react';

const products = [
  {
    title: 'TV Units',
    description: 'Custom-designed TV units with storage',
    price: 'Starting ₹15,000',
    category: 'Living Room'
  },
  {
    title: 'Sofa Sets',
    description: '3-seater, 2-seater, and single-seater combinations',
    price: 'Starting ₹35,000',
    category: 'Living Room'
  },
  {
    title: 'Dining Tables',
    description: '4-seater, 6-seater, and 8-seater options',
    price: 'Starting ₹25,000',
    category: 'Dining Room'
  },
  {
    title: 'Beds',
    description: 'King size, Queen size with storage options',
    price: 'Starting ₹30,000',
    category: 'Bedroom'
  },
  {
    title: 'Study Tables',
    description: 'Ergonomic design with storage compartments',
    price: 'Starting ₹8,000',
    category: 'Home Office'
  },
  {
    title: 'Kitchen Cabinets',
    description: 'Modern modular kitchen cabinets',
    price: 'Starting ₹45,000',
    category: 'Kitchen'
  }
];

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb
              items={[
                { label: 'Home', href: '/' },
                { label: 'prodcuts' }
              ]}
            />
      <h1 className="text-4xl font-bold mb-8 text-secondary">Our Products</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <div key={index} className="bg-white rounded-lg p-6 hover:shadow-xl transition-all border border-gray-100 hover:border-primary">
            <span className="text-sm bg-primary/10 text-secondary px-3 py-1 rounded-full font-medium">
              {product.category}
            </span>
            <h2 className="text-2xl font-semibold my-3 text-secondary">{product.title}</h2>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <div className="flex items-center justify-between">
              <div className="text-xl font-bold text-primary">{product.price}</div>
              <button className="text-secondary hover:text-primary transition-colors">
                Learn More →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
