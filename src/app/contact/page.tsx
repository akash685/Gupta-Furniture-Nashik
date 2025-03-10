'use client';
import { useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import Breadcrumb from '@/components/Breadcrumb';

const categories = [
  { id: 'home', label: 'Complete Home Interior', description: '1/2/3 BHK Homes' },
  { id: 'product', label: 'Individual Products', description: 'Furniture & Solutions' },
];

const requirements = {
  home: ['1 BHK', '2 BHK', '3 BHK', 'Villa'],
  product: ['Living Room', 'Bedroom', 'Kitchen', 'Wardrobe', 'Office Furniture']
};

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    category: '',
    requirements: [] as string[]
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await toast.promise(
        fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        }),
        {
          loading: 'Sending message...',
          success: 'Message sent successfully!',
          error: 'Failed to send message.'
        }
      );

      if (response.ok) {
        setFormData({ name: '', email: '', phone: '', message: '', category: '', requirements: [] });
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
      <Toaster position="top-center" />
      <div className="container mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: 'Home', href: '/' },
            { label: 'Contact Us' }
          ]}
        />

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h1 className="text-4xl font-bold text-secondary mb-6">Contact Us</h1>
            <p className="text-gray-600 mb-8">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Category Selection */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setFormData({ ...formData, category: cat.id, requirements: [] })}
                    className={`p-4 border rounded-lg text-left transition-colors ${
                      formData.category === cat.id
                        ? 'border-primary bg-primary/5'
                        : 'border-gray-200 hover:border-primary/50'
                    }`}
                  >
                    <h3 className="font-medium text-secondary">{cat.label}</h3>
                    <p className="text-sm text-gray-500">{cat.description}</p>
                  </button>
                ))}
              </div>

              {/* Requirements Selection */}
              {formData.category && (
                <div className="space-y-3">
                  <label className="block text-sm font-medium text-gray-700">
                    Select Requirements:
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {requirements[formData.category as keyof typeof requirements].map((req) => (
                      <label
                        key={req}
                        className="flex items-center space-x-2 text-gray-600 hover:text-secondary cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          checked={formData.requirements.includes(req)}
                          onChange={(e) => {
                            const newReqs = e.target.checked
                              ? [...formData.requirements, req]
                              : formData.requirements.filter(r => r !== req);
                            setFormData({ ...formData, requirements: newReqs });
                          }}
                          className="rounded border-gray-300 text-primary focus:ring-primary"
                        />
                        <span className="text-sm">{req}</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-secondary py-3 rounded-lg hover:bg-accent-gold-light transition-colors font-medium"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info & Map */}
          <div>
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h2 className="text-2xl font-semibold text-secondary mb-4">Visit Our Store</h2>
              <div className="space-y-4 text-gray-600">
                <p className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Kewal Park Rd, Kewal Park, Nashik, Maharashtra 422010
                </p>
                <p className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +91 95116 41912
                </p>
                <p className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  info@guptafurniture.com
                </p>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="h-[400px] rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3749.848194665542!2d73.73641057474231!3d19.972885423205955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdded30ccb8bbc9%3A0xad404570c7cf3afb!2sGupta%20Furniture%20Nashik!5e0!3m2!1sen!2sin!4v1741580426837!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
