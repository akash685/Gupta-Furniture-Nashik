'use client'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import InteriorPackages from "../components/interiorPackages";
import heroFurniture from '../../public/home interior nashik.png';



const products = [
  { title: "Custom Sofa Set", description: "Premium handcrafted sofa sets.", price: "₹20,000 - ₹80,000", image: "/sofa.jpg" },
  { title: "Dining Table Set", description: "Elegant dining tables with chairs.", price: "₹30,000 - ₹1,00,000", image: "/dining.jpg" },
  { title: "Modular Kitchen", description: "Stylish and functional modular kitchens.", price: "₹80,000 - ₹2,50,000", image: "/kitchen.jpg" },
  { title: "Bed", description: "Comfortable and stylish beds.", price: "₹15,000 - ₹70,000", image: "/bed.jpg" },
  { title: "Wardrobe", description: "Spacious and modern wardrobes.", price: "₹25,000 - ₹1,50,000", image: "/wardrobe.jpg" },
  { title: "TV Unit", description: "Modern and stylish TV units for your home.", price: "₹10,000 - ₹50,000", image: "/tvunit.jpg" }
];

const testimonials = [
  { name: "Rahul Sharma", quote: "Amazing quality and great service. Highly recommended!" },
  { name: "Priya Mehta", quote: "The best interior solutions in Nashik. Love my new furniture!" },
  { name: "Amit Patel", quote: "Great value for money. The team was professional and efficient." }
];


export default function Home() {
  return (
    <div className="min-h-screen font-sans text-gray-900 bg-white">
      {/* Hero Section with Contact Form */}
      <section className="relative h-[90vh] flex items-center bg-gray-900">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroFurniture}
            alt="Modern Furniture in Nashik"
            fill
            className="object-cover brightness-75"
            priority
          />
        </div>
        <div className="container mx-auto px-6 z-10 flex flex-col md:flex-row items-center justify-between">
          <div className="text-white md:w-1/2 text-center md:text-left mb-8 md:mb-0">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">Best Furniture & Interior Design in Nashik</h1>
            <p className="text-lg md:text-xl mb-6 leading-relaxed">Premium furniture and interior design solutions in Nashik</p>
            <Link
              href="#packages"
              className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
            >
              View Packages
            </Link>
          </div>
          <div className="md:w-[400px] bg-white p-8 rounded-lg shadow-2xl">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Get a Quote</h3>
            <ContactForm />
          </div>
        </div>
      </section>
      <InteriorPackages />

      {/* Products Section */}
      {/* Products Section */}
      <section className="py-20 px-8 border-b-4 border-gray-200 bg-white">
        <h2 className="text-4xl font-bold text-center mb-12">Our Furniture Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <div key={index} className="border rounded-lg p-6 bg-white shadow-lg hover:shadow-xl transition-all border-gray-300">
              <Image src={product.image} alt={product.title} width={400} height={300} className="rounded-lg object-cover mb-4" />
              <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
              <p className="mb-4">{product.description}</p>
              <p className="font-bold text-gray-700">{product.price}</p>
              <div className="mt-4 flex flex-col space-y-2">
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
                  Call Now
                </button>

              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-8 bg-gray-100">
        <h2 className="text-4xl font-bold text-center mb-12">What Our Customers Say</h2>
        <div className="max-w-6xl mx-auto overflow-x-scroll no-scrollbar flex space-x-6 p-4">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all min-w-[300px] border border-gray-300">
              <p className="italic text-gray-700 overflow-hidden text-ellipsis">"{testimonial.quote}"</p>
              <h4 className="font-bold mt-4 text-gray-900">- {testimonial.name}</h4>
            </div>
          ))}
        </div>
        <style jsx>{`
          .no-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .no-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}</style>
      </section>

      ADD

      {/* Footer */}
      <Footer />
    </div>
  );
}
