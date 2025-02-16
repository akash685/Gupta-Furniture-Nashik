import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import ContactForm from '@/components/ContactForm';
import heroFurniture from '../../public/home interior nashik.png';

function Hero() {
  return (
    <div>
      <section className="relative h-[90vh] flex items-center bg-gray-900 ">
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
          <div className="text-white md:w-1/2 text-center md:text-left md:mb-0">
            <h1 className=" text-3xl pb-5 md:text-5xl font-bold  ">
              Best Furniture & Interior Design in Nashik
            </h1>
            <p className="text-lg md:text-xl mb-6 leading-relaxed hidden ">
              Premium furniture and interior design solutions in Nashik
            </p>
            <Link
              href="#packages"
              className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition "
            >
              View Packages
            </Link>
          </div>
          <div className="w-full md:w-[400px] bg-white p-8 rounded-lg shadow-2xl mt-8 md:mt-0">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Get a Quote</h3>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
