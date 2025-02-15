import React from 'react'

const testimonials = [
    { name: "Rahul Sharma", quote: "Amazing quality and great service. Highly recommended!" },
    { name: "Priya Mehta", quote: "The best interior solutions in Nashik. Love my new furniture!" },
    { name: "Amit Patel", quote: "Great value for money. The team was professional and efficient." }
  ];

function Testimonials() {
  return (
    <div>
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
    </div>
  )
}

export default Testimonials