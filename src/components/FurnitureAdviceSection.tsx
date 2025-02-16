'use client';
import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const FurnitureAdviceSection = () => {
  // Total tip cards = 7; each "page" shows 2 cards
  const totalTips = 7;
  const totalPages = Math.ceil(totalTips / 2); // In this case, 4 pages.
  const [activePage, setActivePage] = useState(0);
  const mobileContainerRef = useRef(null);

  useEffect(() => {
    const container = mobileContainerRef.current;
    if (!container) return;
    
    const onScroll = () => {
      const scrollLeft = container.scrollLeft;
      const containerWidth = container.clientWidth;
      // Each "page" is equal to the container's width.
      const page = Math.round(scrollLeft / containerWidth);
      setActivePage(page);
    };

    container.addEventListener('scroll', onScroll);
    return () => container.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4">
        <motion.h2
          className="text-4xl font-extrabold text-gray-800 text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={itemVariants}
        >
          How to Choose the Best Furniture for Your Home
        </motion.h2>
        
        {/* Mobile View: Horizontal scroll container */}
        <div className="md:hidden">
          <motion.div
            ref={mobileContainerRef}
            className="flex space-x-4 overflow-x-auto pb-4 no-scrollbar"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {/* Tip 1 */}
            <motion.div
              className="bg-white rounded-xl p-6 shadow-lg flex-none w-1/2"
              variants={itemVariants}
            >
              <div className="flex items-center mb-4">
                <motion.div
                  className="mr-4 transition-transform hover:scale-110"
                  whileHover={{ scale: 1.1 }}
                >
                  {/* Measuring Tape Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 text-blue-500"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path d="M2 12h20M2 6h20M2 18h20" />
                  </svg>
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-700">
                  Know Your Space
                </h3>
              </div>
              <p className="text-gray-600">
                Measure your rooms accurately to ensure your furniture fits perfectly.
              </p>
            </motion.div>

            {/* Tip 2 */}
            <motion.div
              className="bg-white rounded-xl p-6 shadow-lg flex-none w-1/2"
              variants={itemVariants}
            >
              <div className="flex items-center mb-4">
                <motion.div
                  className="mr-4 transition-transform hover:scale-110"
                  whileHover={{ scale: 1.1 }}
                >
                  {/* Palette Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 text-purple-500"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path d="M12 2a10 10 0 100 20 10 10 0 000-20z" />
                    <circle cx="8" cy="10" r="1" />
                    <circle cx="12" cy="8" r="1" />
                    <circle cx="16" cy="10" r="1" />
                  </svg>
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-700">
                  Define Your Style
                </h3>
              </div>
              <p className="text-gray-600">
                Decide on a theme that reflects your personality.
              </p>
            </motion.div>

            {/* Tip 3 */}
            <motion.div
              className="bg-white rounded-xl p-6 shadow-lg flex-none w-1/2"
              variants={itemVariants}
            >
              <div className="flex items-center mb-4">
                <motion.div
                  className="mr-4 transition-transform hover:scale-110"
                  whileHover={{ scale: 1.1 }}
                >
                  {/* Quality Badge Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 text-green-500"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path d="M12 2l3 7h7l-5.5 4 2 7L12 17l-7.5 3 2-7L2 9h7z" />
                  </svg>
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-700">
                  Quality Over Quantity
                </h3>
              </div>
              <p className="text-gray-600">
                Invest in well-crafted, durable pieces that last.
              </p>
            </motion.div>

            {/* Tip 4 */}
            <motion.div
              className="bg-white rounded-xl p-6 shadow-lg flex-none w-1/2"
              variants={itemVariants}
            >
              <div className="flex items-center mb-4">
                <motion.div
                  className="mr-4 transition-transform hover:scale-110"
                  whileHover={{ scale: 1.1 }}
                >
                  {/* Sofa Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 text-red-500"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <rect x="3" y="9" width="18" height="6" rx="2" ry="2" />
                    <path d="M3 15v4a2 2 0 002 2h3v-6H3zM16 21h3a2 2 0 002-2v-4h-5v6z" />
                  </svg>
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-700">
                  Comfort is Key
                </h3>
              </div>
              <p className="text-gray-600">
                Choose furniture that is comfortable for daily use.
              </p>
            </motion.div>

            {/* Tip 5 */}
            <motion.div
              className="bg-white rounded-xl p-6 shadow-lg flex-none w-1/2"
              variants={itemVariants}
            >
              <div className="flex items-center mb-4">
                <motion.div
                  className="mr-4 transition-transform hover:scale-110"
                  whileHover={{ scale: 1.1 }}
                >
                  {/* Color Palette Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 text-orange-500"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path d="M12 2a10 10 0 100 20 10 10 0 000-20z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-700">
                  Color and Material
                </h3>
              </div>
              <p className="text-gray-600">
                Select colors and materials that complement your décor.
              </p>
            </motion.div>

            {/* Tip 6 */}
            <motion.div
              className="bg-white rounded-xl p-6 shadow-lg flex-none w-1/2"
              variants={itemVariants}
            >
              <div className="flex items-center mb-4">
                <motion.div
                  className="mr-4 transition-transform hover:scale-110"
                  whileHover={{ scale: 1.1 }}
                >
                  {/* Multi-Purpose Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 text-indigo-500"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                    <path d="M3 9h18" />
                    <path d="M9 3v18" />
                  </svg>
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-700">
                  Functionality
                </h3>
              </div>
              <p className="text-gray-600">
                Opt for multi-functional furniture that serves more than one purpose.
              </p>
            </motion.div>

            {/* Tip 7 */}
            <motion.div
              className="bg-white rounded-xl p-6 shadow-lg flex-none w-1/2"
              variants={itemVariants}
            >
              <div className="flex items-center mb-4">
                <motion.div
                  className="mr-4 transition-transform hover:scale-110"
                  whileHover={{ scale: 1.1 }}
                >
                  {/* Wallet Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 text-teal-500"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                    <path d="M2 11h20" />
                    <circle cx="16" cy="14" r="1" />
                  </svg>
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-700">
                  Budget
                </h3>
              </div>
              <p className="text-gray-600">
                Set a realistic budget and prioritize spending on key pieces.
              </p>
            </motion.div>
          </motion.div>
          <style jsx>{`
            .no-scrollbar::-webkit-scrollbar {
              display: none;
            }
          `}</style>
          {/* Dot Navigation */}
          <div className="flex justify-center space-x-2 mt-4">
            {Array.from({ length: totalPages }).map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full ${activePage === index ? 'bg-blue-600' : 'bg-gray-300'}`}
              />
            ))}
          </div>
        </div>
        
        {/* Desktop View: Grid with 3 columns */}
        <div className="hidden md:grid grid-cols-3 gap-8">
          {/* Tip 1: Know Your Space */}
          <motion.div className="bg-white rounded-xl p-6 shadow-lg" variants={itemVariants}>
            <div className="flex items-center mb-4">
              <motion.div className="mr-4 transition-transform hover:scale-110" whileHover={{ scale: 1.1 }}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M2 12h20M2 6h20M2 18h20" />
                </svg>
              </motion.div>
              <h3 className="text-2xl font-bold text-gray-700">Know Your Space</h3>
            </div>
            <p className="text-gray-600">
              Measure your rooms accurately to ensure your furniture fits perfectly without overcrowding.
            </p>
          </motion.div>
          {/* Tip 2: Define Your Style */}
          <motion.div className="bg-white rounded-xl p-6 shadow-lg" variants={itemVariants}>
            <div className="flex items-center mb-4">
              <motion.div className="mr-4 transition-transform hover:scale-110" whileHover={{ scale: 1.1 }}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-purple-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M12 2a10 10 0 100 20 10 10 0 000-20z" />
                  <circle cx="8" cy="10" r="1" />
                  <circle cx="12" cy="8" r="1" />
                  <circle cx="16" cy="10" r="1" />
                </svg>
              </motion.div>
              <h3 className="text-2xl font-bold text-gray-700">Define Your Style</h3>
            </div>
            <p className="text-gray-600">
              Decide on a theme that reflects your personality. Consistency in style creates a harmonious look.
            </p>
          </motion.div>
          {/* Tip 3: Quality Over Quantity */}
          <motion.div className="bg-white rounded-xl p-6 shadow-lg" variants={itemVariants}>
            <div className="flex items-center mb-4">
              <motion.div className="mr-4 transition-transform hover:scale-110" whileHover={{ scale: 1.1 }}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M12 2l3 7h7l-5.5 4 2 7L12 17l-7.5 3 2-7L2 9h7z" />
                </svg>
              </motion.div>
              <h3 className="text-2xl font-bold text-gray-700">Quality Over Quantity</h3>
            </div>
            <p className="text-gray-600">
              Invest in well-crafted, durable pieces that last. Focus on quality materials and craftsmanship.
            </p>
          </motion.div>
          {/* Tip 4: Comfort is Key */}
          <motion.div className="bg-white rounded-xl p-6 shadow-lg" variants={itemVariants}>
            <div className="flex items-center mb-4">
              <motion.div className="mr-4 transition-transform hover:scale-110" whileHover={{ scale: 1.1 }}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <rect x="3" y="9" width="18" height="6" rx="2" ry="2" />
                  <path d="M3 15v4a2 2 0 002 2h3v-6H3zM16 21h3a2 2 0 002-2v-4h-5v6z" />
                </svg>
              </motion.div>
              <h3 className="text-2xl font-bold text-gray-700">Comfort is Key</h3>
            </div>
            <p className="text-gray-600">
              Choose furniture that is comfortable for daily use. Always test pieces for comfort.
            </p>
          </motion.div>
          {/* Tip 5: Color and Material */}
          <motion.div className="bg-white rounded-xl p-6 shadow-lg" variants={itemVariants}>
            <div className="flex items-center mb-4">
              <motion.div className="mr-4 transition-transform hover:scale-110" whileHover={{ scale: 1.1 }}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-orange-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M12 2a10 10 0 100 20 10 10 0 000-20z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </motion.div>
              <h3 className="text-2xl font-bold text-gray-700">Color and Material</h3>
            </div>
            <p className="text-gray-600">
              Select colors and materials that complement your décor. Neutral tones provide a timeless look.
            </p>
          </motion.div>
          {/* Tip 6: Functionality */}
          <motion.div className="bg-white rounded-xl p-6 shadow-lg" variants={itemVariants}>
            <div className="flex items-center mb-4">
              <motion.div className="mr-4 transition-transform hover:scale-110" whileHover={{ scale: 1.1 }}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-indigo-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                  <path d="M3 9h18" />
                  <path d="M9 3v18" />
                </svg>
              </motion.div>
              <h3 className="text-2xl font-bold text-gray-700">Functionality</h3>
            </div>
            <p className="text-gray-600">
              Opt for multi-functional furniture that serves more than one purpose, especially in small spaces.
            </p>
          </motion.div>
          {/* Tip 7: Budget */}
          <motion.div className="bg-white rounded-xl p-6 shadow-lg" variants={itemVariants}>
            <div className="flex items-center mb-4">
              <motion.div className="mr-4 transition-transform hover:scale-110" whileHover={{ scale: 1.1 }}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-teal-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                  <path d="M2 11h20" />
                  <circle cx="16" cy="14" r="1" />
                </svg>
              </motion.div>
              <h3 className="text-2xl font-bold text-gray-700">Budget</h3>
            </div>
            <p className="text-gray-600">
              Set a realistic budget and prioritize spending on key pieces to achieve a stylish look.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FurnitureAdviceSection;
