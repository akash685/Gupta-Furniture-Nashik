'use client';
import { useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import CustomerReviews from '@/components/CustomerReviews';
import heroSectionImg from '../../public/Interior Design.png';
import LivingRoomImg from '../../public/custom home furniture.png';
import KitchenSolutionsImg from '../../public/Kitchen Solutions.png';
import bedRoom from '../../public/bedRoom.png';
import interiorDesign from '../../public/Interior Design.png';
import oneBhk from '../../public/1 bhk home interior nashik.png';
const stats = [
  { number: '2000', label: 'Established' },
  { number: '1000+', label: 'Projects Completed' },
  { number: '800+', label: 'Happy Customers' },
  { number: '20+', label: 'Years Experience' },
];

const process = [
  {
    step: '01',
    title: 'Consultation',
    description: 'Free consultation with our expert designers to understand your needs',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
      </svg>
    )
  },
  {
    step: '02',
    title: '3D Design',
    description: 'Get detailed 3D designs and visualization of your space',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    step: '03',
    title: 'Execution',
    description: 'Professional execution with quality materials and craftsmanship',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    )
  },
  {
    step: '04',
    title: 'Delivery',
    description: 'On-time delivery and installation with perfect finishing',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
      </svg>
    )
  }
];

const reviews = [
  { source: 'Google', rating: 4.8, count: 180 },
  { source: 'JustDial', rating: 4.7, count: 150 },
  { source: 'WeddingWire', rating: 4.9, count: 75 },
  { source: 'Sulekha', rating: 4.6, count: 120 },
  { source: 'IndiaMART', rating: 4.8, count: 90 }
];

const showcaseItems = [
  {
    title: 'Living Room',
    description: 'Modern and comfortable living room sets',
    image: LivingRoomImg,
    href: '/products/living-room'
  },
  {
    title: 'Kitchen',
    description: 'Custom modular kitchen solutions',
    image: KitchenSolutionsImg,
    href: '/products/kitchen'
  },
  {
    title: 'Bedroom',
    description: 'Elegant bedroom furniture collections',
    image: bedRoom,
    href: '/products/bedroom'
  },
  {
    title: 'Interior Design',
    description: 'Complete interior design services',
    image: interiorDesign,
    href: '/services'
  }
];

const serviceAreas = {
  'Major Areas': [
    'Panchavati',
    'Gangapur Road',
    'College Road',
    'Cidco',
    'Nashik Road',
    'Mahatma Nagar',
    'Dwarka'
  ],
  'Extended Areas': [
    'Deolali Camp',
    'Indira Nagar',
    'Satpur',
    'Pathardi Phata',
    'Meri Colony',
    'Adgaon',
    'Upnagar'
  ],
  'Growing Localities': [
    'Ambad',
    'Trimurti Chowk',
    'Kamatwade',
    'Patharadi',
    'Sharanpur',
    'Rane Nagar',
    'Mhasrul'
  ],
  'Emerging Areas': [
    'Wadala Gaon',
    'Vihitgaon',
    'Pimpalgaon Bahula',
    'Chunchale',
    'Dindori Road',
    'Sinnar Phata',
    'Untwadi'
  ]
};

const categories = [
  { id: 'home', label: 'Complete Home Interior', description: '1/2/3 BHK Homes' },
  { id: 'product', label: 'Individual Products', description: 'Furniture & Solutions' },
];

const requirements = {
  home: ['1 BHK', '2 BHK', '3 BHK', 'Villa'],
  product: ['Living Room', 'Bedroom', 'Kitchen', 'Wardrobe', 'Office Furniture']
};

const interiorPackages = [
  {
    title: "1 BHK Package",
    price: "₹2,49,999",
    description: "Complete 1 BHK interior solution",
    area: "400-600 sq ft",
    includes: [
      "Modular Kitchen",
      "Wardrobe",
      "TV Unit",
      "Sofa Set",
      "Crockery Unit",
      "King Size Bed",
      "Shoe Rack"

    ]
  },
  {
    title: "2 BHK Package",
    price: "₹3,49,999",
    description: "Premium 2 BHK interior package",
    area: "800-1000 sq ft",
    includes: [
      "Modular Kitchen",
      "2 Wardrobes",
      "TV Unit",
      "2 King Size Bed",
      "Shoe Rack",
      "Sofa Set",
      "Crockery Unit",
      "Shoe Rack"
    ]
  },
  {
    title: "3 BHK Package",
    price: "₹4,49,999",
    description: "Luxury 3 BHK interior solution",
    area: "1200-1500 sq ft",
    includes: [
      "Modular Kitchen",
      "3 Wardrobes",
      "TV Unit",
      "Crockery Unit",
      "3 King Size Bed",
      "Sofa Set",
      "Shoe Rack"
    ]
  }
];

const productPricing = [
  {
    category: "Living Room",
    items: [
      { name: "TV Unit", price: "₹35,000" },
      { name: "Sofa Set (3+1+1)", price: "₹45,000" },
      { name: "Center Table", price: "₹12,000" }
    ]
  },
  {
    category: "Bedroom",
    items: [
      { name: "King Size Bed", price: "₹45,000" },
      { name: "Wardrobe (8ft)", price: "₹65,000" },
      { name: "Dressing Unit", price: "₹25,000" }
    ]
  },
  {
    category: "Kitchen",
    items: [
      { name: "Modular Kitchen", price: "₹85,000" },
      { name: "Tall Unit", price: "₹35,000" },
      { name: "Crockery Unit", price: "₹45,000" }
    ]
  }
];

export default function HomePage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    requirement: '',
    category: '',
    requirements: [] as string[]
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await toast.promise(
        fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        }),
        {
          loading: 'Submitting your request...',
          success: 'Thank you! We will contact you soon.',
          error: 'Something went wrong. Please try again.',
        }
      );

      if (response.ok) {
        setFormData({ name: '', phone: '', requirement: '', category: '', requirements: [] });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="min-h-screen">
      <Toaster 
        position="top-center"
        toastOptions={{
          success: {
            style: {
              background: '#4F6F52',
              color: 'white',
            },
          },
          error: {
            style: {
              background: '#DC2626',
              color: 'white',
            },
          },
          loading: {
            style: {
              background: '#739072',
              color: 'white',
            },
          },
        }}
      />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-ivory overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroSectionImg}
            alt="Interior Design Background"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 to-secondary/50"></div>
        </div>

        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Hero Content */}
            <div className="max-w-2xl">
              <h1 className="text-5xl font-bold mb-6 text-white">
                Transform Your Space with Premium Furniture
              </h1>
              <p className="text-xl text-ivory/80 mb-8">
                Discover exquisite furniture and interior solutions crafted for your home in Nashik
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <Link 
                  href="/products" 
                  className="bg-primary text-secondary px-6 py-3 rounded-lg hover:bg-accent-gold-light transition-all inline-flex items-center group"
                >
                  Explore Collection
                  <svg 
                    className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
                <a
                  href="tel:+919511641912"
                  className="bg-ivory/10 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white/20 transition-all inline-flex items-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                  +91 9511641912
                </a>
              </div>

              {/* Reviews Grid */}
              <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                {reviews.map((review, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2 hover:bg-white/20 transition-colors">
                    <div className="flex items-center gap-1">
                      <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="font-bold text-sm text-white">{review.rating}</span>
                    </div>
                    <div className="mt-1">
                      <span className="text-xs text-ivory/60">on</span>
                      <span className="text-xs font-medium ml-1 text-ivory">{review.source}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg border border-white/20 md:ml-auto max-w-md w-full">
              <h2 className="text-2xl font-semibold text-white mb-6">Get Free Consultation</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Category Selection */}
                <div className="grid grid-cols-2 gap-4">
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => setFormData({ ...formData, category: cat.id, requirements: [] })}
                      className={`p-4 border rounded-lg text-left transition-colors ${
                        formData.category === cat.id
                          ? 'border-primary bg-white/20'
                          : 'border-white/20 hover:border-white/40 bg-white/10'
                      }`}
                    >
                      <h3 className="font-medium text-white">{cat.label}</h3>
                      <p className="text-sm text-white/60">{cat.description}</p>
                    </button>
                  ))}
                </div>

                {/* Requirements Selection */}
                {formData.category && (
                  <div className="space-y-3">
                    <p className="text-white text-sm font-medium">Select Requirements:</p>
                    <div className="grid grid-cols-2 gap-2">
                      {requirements[formData.category as keyof typeof requirements].map((req) => (
                        <label
                          key={req}
                          className="flex items-center space-x-2 text-white/80 hover:text-white cursor-pointer"
                        >
                          <input
                            type="checkbox"
                            checked={formData.requirements.includes(req)}
                            onChange={(e) => {
                              const newReqs = e.target.checked
                                ? [...formData.requirements, req]
                                : formData.requirements.filter(r => r !== req);
                              setFormData({ ...formData, requirements: newReqs });
                            }}
                            className="rounded border-white/30 bg-white/20 text-primary focus:ring-primary"
                          />
                          <span className="text-sm">{req}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                )}

                {/* Existing form fields */}
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-2 rounded bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-4 py-2 rounded bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>

                <div>
                  <textarea
                    placeholder="Additional requirements..."
                    value={formData.requirement}
                    onChange={(e) => setFormData({...formData, requirement: e.target.value})}
                    className="w-full px-4 py-2 rounded bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-primary h-24 resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-secondary py-3 rounded-lg hover:bg-accent-gold-light transition-colors font-medium"
                >
                  Get Free Quote
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-16 ">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interior Packages */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-center text-secondary">Interior Packages</h2>
          <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Choose from our carefully curated interior packages designed to transform your space
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {interiorPackages.map((pkg, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow p-6 border border-gray-100">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-secondary mb-2">{pkg.title}</h3>
                  <div className="text-3xl font-bold text-primary mb-2">{pkg.price}</div>
                  <p className="text-gray-600">{pkg.description}</p>
                  <div className="text-sm text-gray-500 mt-1">For {pkg.area}</div>
                </div>
                
                <div className="space-y-3">
                  {pkg.includes.map((item, i) => (
                    <div key={i} className="flex items-center text-gray-700">
                      <svg className="w-5 h-5 text-primary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </div>
                  ))}
                </div>
                <Link href="/contact">
                <button className="w-full mt-8 bg-primary text-secondary py-3 rounded-lg hover:bg-accent-gold-light transition-colors">
                  Get Quote
                </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Pricing */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-center text-secondary">Product Pricing</h2>
          <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Explore our range of premium furniture with transparent pricing
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {productPricing.map((category, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-secondary mb-4">{category.category}</h3>
                <div className="space-y-3">
                  {category.items.map((item, i) => (
                    <div key={i} className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="text-gray-700">{item.name}</span>
                      <span className="font-semibold text-primary">{item.price}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 text-center">
                  <Link 
                    href={`/products/${category.category.toLowerCase().replace(' ', '-')}`}
                    className="text-primary hover:text-secondary transition-colors font-medium inline-flex items-center"
                  >
                    View More
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products & Services Showcase */}
      <section className="py-16 bg-ivory">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-secondary">Our Products & Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {showcaseItems.map((item, index) => (
              <Link 
                key={index} 
                href={item.href}
                className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all"
              >
                <div className="relative h-64">
                  <Image
                    src= {item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent  transition-opacity">
                    <div className="absolute bottom-4 left-4">
                      <h3 className="text-xl font-semibold text-white mb-1">{item.title}</h3>
                      <p className="text-white/90 text-sm">{item.description}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-secondary">How We Work</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our proven process ensures a smooth journey from concept to completion
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 relative">
            {process.map((step, index) => (
              <div key={index} className="relative">
                {/* Process Card */}
                <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow relative z-10">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-6 bg-secondary text-white text-sm font-bold px-3 py-1 rounded">
                    Step {step.step}
                  </div>
                  
                  {/* Icon */}
                  <div className="text-primary mb-4 mt-2">
                    {step.icon}
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-semibold mb-2 text-secondary">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>

                {/* Connector Line */}
                {index < process.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 border-t-2 border-dashed border-primary/30" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us */}
      <section className="py-16 bg-ivory">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-secondary">About Gupta Furniture</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Since 2000, Gupta Furniture has been transforming spaces into beautiful, functional 
                environments. Our commitment to quality and customer satisfaction has made us one 
                of Nashik's most trusted furniture and interior solution providers.
              </p>
              <ul className="space-y-4">
                {[
                  'Premium Quality Materials',
                  'Expert Craftsmanship',
                  'Custom Design Solutions',
                  'Professional Installation',
                  'After-sales Support'
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <svg className="w-5 h-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <Link 
                href="/about" 
                className="inline-flex items-center mt-8 text-secondary hover:text-primary transition-colors font-semibold group"
              >
                Learn More About Us
                <svg 
                  className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-r from-secondary/10 to-secondary/5"></div>
              <Image
                src={oneBhk}
                alt="About Us"
                className='object-cover w-full h-full'
                
                />
              <div className="bg-gray-200 w-full h-full rounded-lg transform hover:scale-105 transition-transform duration-500"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-secondary py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-ivory">Why Choose Gupta Furniture</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { title: 'Expert Design', desc: 'Professional interior designers' },
              { title: 'Quality Materials', desc: 'Premium quality materials' },
              { title: 'Custom Solutions', desc: 'Tailored to your needs' },
              { title: 'Timely Delivery', desc: 'On-time project completion' },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-primary text-2xl">✓</span>
                </div>
                <h3 className="font-semibold mb-2 text-primary">{item.title}</h3>
                <p className="text-ivory/80">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Customer Reviews Section */}
      <CustomerReviews />

      {/* Service Coverage Area */}
      <section className="py-16 bg-ivory">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-secondary">Our Service Coverage in Nashik</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            We provide our premium furniture and interior solutions across Nashik city and surrounding areas
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(serviceAreas).map(([category, areas]) => (
              <div key={category} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <h3 className="text-lg font-semibold mb-4 text-primary">{category}</h3>
                <ul className="space-y-2">
                  {areas.map((area) => (
                    <li key={area} className="flex items-center text-gray-600">
                      <svg className="w-4 h-4 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      {area}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center justify-center space-x-4">
              <a
                href="tel:+919876543210"
                className="flex items-center text-secondary hover:text-primary transition-colors font-semibold"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                Call for Service
              </a>
              <span className="text-gray-300">|</span>
              <a
                href="https://wa.me/919511641912"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-secondary hover:text-primary transition-colors font-semibold"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                </svg>
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Space?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Book a consultation with our design experts today
          </p>
          <Link 
            href="/contact" 
            className="bg-secondary text-white px-8 py-4 rounded-lg hover:bg-primary transition-colors"
          >
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
}