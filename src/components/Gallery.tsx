'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

const images = [
  { src: '/gallery1.jpg', alt: 'Gallery Image 1' },
  { src: '/gallery2.jpg', alt: 'Gallery Image 2' },
  { src: '/gallery3.jpg', alt: 'Gallery Image 3' },
  { src: '/gallery4.jpg', alt: 'Gallery Image 4' },
  { src: '/gallery5.jpg', alt: 'Gallery Image 5' },
  { src: '/gallery6.jpg', alt: 'Gallery Image 6' },
  { src: '/gallery7.jpg', alt: 'Gallery Image 7' },
  { src: '/gallery8.jpg', alt: 'Gallery Image 8' },
];

const Gallery = () => {
  return (
    <section className="py-5 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
          Gallery
        </h2>

        {/* Mobile Layout: Horizontal scroll showing 2 images per "page" */}
        <div className="md:hidden">
          <div className="flex overflow-x-auto space-x-4 snap-x snap-mandatory">
            {images.map((image, index) => (
              <motion.div
                key={index}
                className="flex-none w-1/2 snap-center rounded-lg overflow-hidden shadow-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={500}
                  height={600}
                  className="object-cover w-full h-full"
                />
              </motion.div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/gallery" className="text-blue-600 hover:underline text-lg font-semibold">
            
                View More &rarr;
             
            </Link>
          </div>
        </div>

        {/* Desktop Layout: Grid with 2 rows (6 images) and a "View More" button */}
        <div className="hidden md:block">
          <div className="grid grid-cols-3 gap-4">
            {images.slice(0, 6).map((image, index) => (
              <motion.div
                key={index}
                className="rounded-lg overflow-hidden shadow-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={500}
                  height={500}
                  className="object-cover w-full h-full"
                />
              </motion.div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/gallery " className="text-blue-600 hover:underline text-lg font-semibold">
         
                View More &rarr;
            
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
