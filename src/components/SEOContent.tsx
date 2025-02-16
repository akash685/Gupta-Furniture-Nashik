'use client';
import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const SEOContent = () => {
  return (
    <section className="py-16 bg-white">
      <motion.div
        className="max-w-5xl mx-auto px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        {/* Premium Interior Services */}
        <motion.h2
          variants={itemVariants}
          className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
        >
          Premium Interior Services in Nashik
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className="text-base md:text-lg text-gray-700 mb-6"
        >
          Our team in Nashik specializes in transforming your living and work spaces with top-notch interior design services. We blend creativity with functionality to deliver spaces that are stylish, comfortable, and tailored to your needs.
        </motion.p>

        {/* Comprehensive Interior Solutions */}
        <motion.h3
          variants={itemVariants}
          className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4"
        >
          Comprehensive Interior Solutions
        </motion.h3>
        <motion.p
          variants={itemVariants}
          className="text-base md:text-lg text-gray-700 mb-6"
        >
          From conceptualization to execution, our comprehensive interior solutions cover every aspect of your project. Whether you're renovating your home or designing a new office space, we ensure every detail is meticulously planned and executed.
        </motion.p>

        {/* Custom & Modular Furniture Solutions */}
        <motion.h3
          variants={itemVariants}
          className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4"
        >
          Custom & Modular Furniture Solutions
        </motion.h3>
        <motion.p
          variants={itemVariants}
          className="text-base md:text-lg text-gray-700 mb-6"
        >
          We offer bespoke custom furniture and innovative modular solutions designed to maximize your space and reflect your personal style. Our design experts work closely with you to understand your vision, ensuring that every piece is a perfect blend of aesthetics and functionality.
        </motion.p>

        {/* Expert Furniture Repair & Restoration */}
        <motion.h3
          variants={itemVariants}
          className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4"
        >
          Expert Furniture Repair & Restoration
        </motion.h3>
        <motion.p
          variants={itemVariants}
          className="text-base md:text-lg text-gray-700 mb-6"
        >
          In addition to our design and creation services, we provide professional furniture repair and restoration services in Nashik. Our skilled craftsmen restore your cherished pieces, preserving their original charm while enhancing their durability.
        </motion.p>

        {/* Our Commitment to Quality */}
        <motion.h3
          variants={itemVariants}
          className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4"
        >
          Our Commitment to Quality
        </motion.h3>
        <motion.p
          variants={itemVariants}
          className="text-base md:text-lg text-gray-700 mb-6"
        >
          At the heart of our services is an unwavering commitment to quality. We use premium materials and state-of-the-art techniques to ensure that every project not only looks exceptional but also stands the test of time.
        </motion.p>

        {/* Serving Nashik and Beyond */}
        <motion.h3
          variants={itemVariants}
          className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4"
        >
          Serving Nashik and Beyond
        </motion.h3>
        <motion.p
          variants={itemVariants}
          className="text-base md:text-lg text-gray-700 mb-6"
        >
          Based in Nashik, we proudly serve clients across the city and surrounding areas. Our deep understanding of local trends and culture enables us to create spaces that resonate with the community while meeting global standards of design and innovation.
        </motion.p>

        {/* Get in Touch */}
        <motion.h3
          variants={itemVariants}
          className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4"
        >
          Get in Touch for a Free Consultation
        </motion.h3>
        <motion.p
          variants={itemVariants}
          className="text-base md:text-lg text-gray-700"
        >
          Ready to transform your space? Contact us today for a free consultation and let our experts guide you in creating your dream environment. We look forward to partnering with you and bringing your vision to life.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default SEOContent;
