'use client';
import React from 'react';
import { motion } from 'framer-motion';

const AboutUs = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12"
        >
          About Us
        </motion.h2>
        <div className="space-y-12">
          {/* Your Story */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col md:flex-row items-center gap-6"
          >
            <div className="flex-shrink-0">
              {/* Icon representing "Your Story" */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-blue-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 20l9-5-9-5-9 5 9 5z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 12l9-5-9-5-9 5 9 5z" />
              </svg>
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-700 mb-2">
                Your Story
              </h3>
              <p className="text-base md:text-lg text-gray-600">
                Our journey began with a passion for transforming spaces into personalized havens. With years of experience and deep expertise in interior design, we take pride in turning visions into reality. Our story is one of creativity, dedication, and commitment to excellence.
              </p>
            </div>
          </motion.div>

          {/* Mission & Values */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col md:flex-row items-center gap-6"
          >
            <div className="flex-shrink-0">
              {/* Icon representing Mission & Values */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-green-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3" />
                <circle cx="12" cy="12" r="10" />
              </svg>
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-700 mb-2">
                Mission & Values
              </h3>
              <p className="text-base md:text-lg text-gray-600">
                Our mission is to deliver premium quality interiors that combine affordability with superior craftsmanship. We value customer satisfaction, innovation, and integrity. Every project we undertake is a promise of quality, trust, and lasting beauty.
              </p>
            </div>
          </motion.div>

          {/* Why Choose Us? */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col md:flex-row items-center gap-6"
          >
            <div className="flex-shrink-0">
              {/* Icon representing "Why Choose Us" */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-purple-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
                <circle cx="12" cy="12" r="10" />
              </svg>
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-700 mb-2">
                Why Choose Us?
              </h3>
              <p className="text-base md:text-lg text-gray-600">
                We stand out for our use of premium materials, custom designs tailored to your needs, and our commitment to on-time delivery. Our expertise, attention to detail, and passion for excellence make us the trusted choice for your interior design and furniture solutions.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
