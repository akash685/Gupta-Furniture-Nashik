import Link from 'next/link';

const sitemapLinks = {
  'Products': [
    { name: 'Living Room', url: '/products/living-room' },
    { name: 'Bedroom', url: '/products/bedroom' },
    { name: 'Kitchen', url: '/products/kitchen' },
    { name: 'Materials', url: '/products/materials' },
  ],
  'Services': [
    { name: 'Interior Design', url: '/services' },
    { name: 'Modular Kitchen', url: '/services' },
    { name: 'Wardrobe Design', url: '/services' },
    { name: 'Custom Furniture', url: '/services' },
  ],
  'Company': [
    // { name: 'About Us', url: '/about' },
    { name: 'Projects', url: '/projects' },
    { name: 'Contact', url: '/contact' },
  ]
};

export default function Footer() {
  return (
    <footer className="bg-secondary text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Company Info */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-primary text-lg font-semibold mb-4">Gupta Furniture</h3>
            <p className="text-sm mb-4">
              Premium furniture and interior solutions in Nashik since 1990.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 3.75c2.347 0 2.625.01 3.546.051.864.04 1.333.184 1.645.305.413.16.708.352 1.018.661.31.31.502.604.661 1.018.121.312.265.781.305 1.645.041.921.051 1.199.051 3.546s-.01 2.625-.051 3.546c-.04.864-.184 1.333-.305 1.645-.16.413-.352.708-.661 1.018-.31.31-.604.502-1.018.661-.312.121-.781.265-1.645.305-.921.041-1.199.051-3.546.051s-2.625-.01-3.546-.051c-.864-.04-1.333-.184-1.645-.305-.413-.16-.708-.352-1.018-.661-.31-.31-.502-.604-.661-1.018-.121-.312-.265-.781-.305-1.645-.041-.921-.051-1.199-.051-3.546s.01-2.625.051-3.546c.04-.864.184-1.333.305-1.645.16-.413.352-.708.661-1.018.31-.31.604-.502 1.018-.661.312-.121.781-.265 1.645-.305.921-.041 1.199-.051 3.546-.051z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Sitemap Links */}
          {Object.entries(sitemapLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-primary text-lg font-semibold mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.url}
                      className="text-gray-300 hover:text-primary transition-colors flex items-center gap-2"
                    >
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Info */}
          <div>
            <h3 className="text-primary text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <a href="tel:+919876543210" className="flex items-center gap-2 hover:text-primary transition-colors rounded-lg">
                  <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="hover:text-primary transition-colors">+91 9511641912</span>
                </a>
              </li>
              <li className="flex items-center gap-2">
                <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>info@guptafurniture.com</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span> Kewal Park Rd, Kewal Park, Nashik, Maharashtra 422010</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} Gupta Furniture Nashik. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
