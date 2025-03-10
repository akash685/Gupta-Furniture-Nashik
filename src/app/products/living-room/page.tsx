import React from 'react';

const livingRoomProducts = [
  {
    title: 'TV Units',
    description: 'Custom-designed TV units with storage',
    price: 'Starting ₹15,000',
    features: ['Multiple storage compartments', 'Cable management', 'Modern design']
  },
  {
    title: 'Sofa Sets',
    description: '3-seater, 2-seater, and single-seater combinations',
    price: 'Starting ₹35,000',
    features: ['Premium upholstery', 'Comfortable cushioning', 'Durable frame']
  },
  {
    title: 'Center Tables',
    description: 'Elegant center tables for your living room',
    price: 'Starting ₹8,000',
    features: ['Tempered glass top', 'Wooden structure', 'Storage shelf']
  },
  // Add more living room products as needed
];

export default function LivingRoomPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4 text-secondary">Living Room Furniture</h1>
        <p className="text-gray-600">Transform your living space with our premium collection</p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {livingRoomProducts.map((product, index) => (
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
