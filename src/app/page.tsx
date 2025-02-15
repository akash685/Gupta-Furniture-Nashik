'use client'
import React from 'react';

import InteriorPackages from "@/components/interiorPackages";
import Products from '@/components/Products';
import Testimonials from '@/components/Testimonials';
import Hero from '@/components/Hero';
import MobileContactButtons from '@/components/MobileContactButtons';

export default function Home() {
  return (
    <div className="min-h-screen font-sans text-gray-900 pt-16 md:pt-16">
   
        <Hero />
        <InteriorPackages />
        <Products />
        <Testimonials />
        <MobileContactButtons />
    
    </div>
  );  
}
