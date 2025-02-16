'use client';
import React, { useRef, useEffect } from 'react';

const testimonials = [
  { name: "Rahul Sharma", quote: "Amazing quality and great service. Highly recommended!" },
  { name: "Priya Mehta", quote: "The best interior solutions in Nashik. Love my new furniture!" },
  { name: "Amit Patel", quote: "Great value for money. The team was professional and efficient." }
];

function Testimonials() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Auto-scroll only on mobile view (width < 768px)
    if (window.innerWidth < 768) {
      const scrollInterval = setInterval(() => {
        // If reached end, reset to start
        if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
          container.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          container.scrollBy({ left: 1, behavior: 'smooth' });
        }
      }, 20); // Adjust the interval (speed) as needed

      return () => clearInterval(scrollInterval);
    }
  }, []);

  return (
    <section className="py-5 px-8 bg-gray-100">
      <h2 className="text-xl font-bold text-center ">What Our Customers Say</h2>
      <div
        ref={containerRef}
        className="max-w-6xl mx-auto overflow-x-scroll flex space-x-6 p-4"
        style={{
          scrollbarWidth: 'none', // Firefox
          msOverflowStyle: 'none' // IE 10+
        }}
      >
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all min-w-[300px] border border-gray-300"
          >
            <p className="italic text-gray-700 overflow-hidden text-ellipsis">
              "{testimonial.quote}"
            </p>
            <h4 className="font-bold mt-4 text-gray-900">- {testimonial.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
