'use client';
import { useState } from 'react';

const testimonials = [
  {
    name: 'Rahul Sharma',
    role: 'Homeowner',
    content: 'Gupta Furniture transformed our living room completely. Their attention to detail and quality of work is exceptional.',
    image: '/testimonials/person1.jpg'
  },
  {
    name: 'Priya Patel',
    role: 'Interior Designer',
    content: 'As an interior designer, I regularly recommend Gupta Furniture to my clients. Their craftsmanship is unmatched.',
    image: '/testimonials/person2.jpg'
  },
  {
    name: 'Amit Kumar',
    role: 'Business Owner',
    content: 'They designed and executed our office interior perfectly. Professional team and excellent service.',
    image: '/testimonials/person3.jpg'
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative overflow-hidden bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
        
        <div className="relative max-w-3xl mx-auto">
          <div className="text-center px-4 md:px-8">
            <div className="w-20 h-20 rounded-full mx-auto mb-6 bg-gray-200">
              {/* Add actual image here */}
            </div>
            <blockquote className="text-xl italic text-gray-700 mb-6">
              "{testimonials[currentIndex].content}"
            </blockquote>
            <div className="font-semibold text-lg">{testimonials[currentIndex].name}</div>
            <div className="text-gray-500">{testimonials[currentIndex].role}</div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-50"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-50"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full ${
                  currentIndex === index ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
