import React from 'react';
import Link from 'next/link';

const interiorServices = [
  {
    title: '1 BHK Interior Design',
    price: 'Starting ₹2,99,999',
    duration: '25-30 days',
    includes: [
      'Complete False Ceiling',
      'TV Unit Design',
      'Modern Kitchen Design',
      'Wardrobe Design',
      'Basic Electrical Work',
      'Basic Plumbing Work'
    ]
  },
  {
    title: '2 BHK Interior Design',
    price: 'Starting ₹4,99,999',
    duration: '35-40 days',
    includes: [
      'Complete False Ceiling',
      'TV Unit with Storage',
      'Modular Kitchen',
      'Master Bedroom Design',
      'Kids Room Design',
      'Complete Electrical Work',
      'Complete Plumbing Work'
    ]
  },
  {
    title: '3 BHK Interior Design',
    price: 'Starting ₹7,99,999',
    duration: '45-50 days',
    includes: [
      'Premium False Ceiling',
      'Custom TV Unit Design',
      'Premium Modular Kitchen',
      'All Bedroom Designs',
      'Study Room Design',
      'Premium Electrical Work',
      'Complete Plumbing Solutions'
    ]
  }
];

export default function InteriorServicesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Home Interior Services</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Transform your home with our comprehensive interior design solutions
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {interiorServices.map((service, index) => (
          <div 
            key={index} 
            className="border rounded-lg overflow-hidden hover:shadow-xl transition-shadow"
          >
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {service.price}
              </div>
              <p className="text-gray-600 mb-6">Duration: {service.duration}</p>
              <h3 className="font-semibold mb-3">Package Includes:</h3>
              <ul className="space-y-2 mb-6">
                {service.includes.map((item, idx) => (
                  <li key={idx} className="flex items-center text-gray-600">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="px-6 pb-6">
              <Link
                href="/services#contact"
                className="block w-full text-center bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get Free Quote
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-gray-600 mb-4">
          All packages include free consultation and 3D design visualization
        </p>
        <Link
          href="/services"
          className="text-blue-600 hover:text-blue-800 font-medium"
        >
          View All Services →
        </Link>
      </div>
    </div>
  );
}
