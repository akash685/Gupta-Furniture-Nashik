import React from 'react';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata = {
  title: 'Interior Design Services | Gupta Furniture',
  description: 'Professional interior design services in Nashik. Get expert consultation, modular kitchen design, wardrobe solutions, and complete home interior services.',
  keywords: [
    'interior design nashik',
    'home interior services',
    'modular kitchen design',
    'wardrobe design',
    'office interior',
    'interior consultation',
    'home renovation',
    'furniture design',
    '3D interior design',
    'commercial interior',
    'space planning',
    'interior solutions'
  ]
};

const services = [
  {
    title: 'Interior Design Consultation',
    description: 'Professional consultation for your space planning',
    price: '₹2,500',
    duration: 'per session',
    href: '/services/interior'
  },
  {
    title: 'Complete Home Interior',
    description: 'End-to-end interior design and execution',
    price: 'Starting ₹1,499',
    duration: 'per sq ft'
  },
  {
    title: 'Modular Kitchen',
    description: 'Custom designed modular kitchen solutions',
    price: 'Starting ₹85,000',
    duration: 'per unit'
  },
  {
    title: 'Wardrobe Design',
    description: 'Custom wardrobe designs and installation',
    price: 'Starting ₹25,000',
    duration: 'per unit'
  }
];

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb
        items={[
          { label: 'Home', href: '/' },
          { label: 'Services' }
        ]}
      />
      <h1 className="text-4xl font-bold mb-8">Our Services</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <Link 
            href={service.href || '#'} 
            key={index} 
            className="border rounded-lg p-6 hover:shadow-lg transition-all hover:border-primary"
          >
            <h2 className="text-2xl font-semibold mb-3">{service.title}</h2>
            <p className="text-gray-600 mb-4">{service.description}</p>
            <div className="text-xl font-bold text-primary">{service.price}</div>
            <div className="text-sm text-gray-500">{service.duration}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
