import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Company Info */}
        <div>
          <h3 className="text-xl font-bold mb-2">Gupta Furniture & Interior</h3>
          <p>Premium furniture and interior solutions in Nashik.</p>
          <p className="mt-2">📍 Nashik, Maharashtra</p>
          <p>📞 +91 98765 43210</p>
          <p>✉️ info@guptafurniture.com</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-2">Quick Links</h3>
          <ul>
            <li><Link href="/" className="hover:underline">Home</Link></li>
            <li><Link href="/about" className="hover:underline">About Us</Link></li>
            <li><Link href="/services" className="hover:underline">Services</Link></li>
            <li><Link href="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-bold mb-2">Follow Us</h3>
          <div className="flex justify-center md:justify-start space-x-4">
            <Link href="https://facebook.com/guptafurniture" className="hover:underline">Facebook</Link>
            <Link href="https://instagram.com/guptafurniture" className="hover:underline">Instagram</Link>
            <Link href="https://wa.me/919876543210" className="hover:underline">WhatsApp</Link>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-8 text-sm border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} Gupta Furniture & Interior. All Rights Reserved.
      </div>
    </footer>
  );
}
