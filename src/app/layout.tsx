import { Tenor_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";
import { Suspense } from "react";
import Loading from "./loading";

export const metadata = {
  metadataBase: new URL('https://gupta-furniture.vercel.app'),
  title: {
    default: 'Gupta Furniture Nashik | Premium Furniture Store in Nashik',
    template: '%s | Gupta Furniture'
  },
  description: 'Premium furniture and interior solutions in Nashik. Custom furniture, modular kitchen, bedroom sets, and complete home interiors.',
  keywords: [
    'furniture store nashik',
    'modular kitchen nashik',
    'interior designer nashik',
    'custom furniture nashik',
    'bedroom furniture',
    'living room furniture',
    'home interior',
    'wardrobe design',
    'office furniture',
    'wooden furniture',
    'furniture manufacturer',
    'Gupta Furniture',
    'furniture showroom nashik',
    'Nashik Furniture',
    'Best Furniture',
    'Furniture Shop',
    'Furniture Store',
    'Furniture Store Nashik',
    'Furniture Showroom',
    'Furniture Showroom Nashik',
    'Furniture Manufacturer',
    'Furniture Manufacturer Nashik',
    'Furniture Dealer',
    'Furniture Dealer Nashik',
    'Sofa Sets',
    'Sofa Sets Nashik',
    'Sofa Set',
    'Sofa Set Nashik',
    'Living Room Furniture',
    'Living Room Furniture Nashik',
    'Bedroom Furniture',
    'Bedroom Furniture Nashik',
    'Dining Sets',
    'Dining Sets Nashik',
    'Dining Set',
    'Dining Set Nashik',
    'Modular Kitchen',
    'Modular Kitchen Nashik',
    'Modular Kitchen Design',
    'Modular Kitchen Design Nashik',
    'Modular Kitchen Solutions',
    'Modular Kitchen Solutions Nashik',
    'Modular Kitchen Price',
    'Modular Kitchen Price Nashik',
    'Modular Kitchen Cost',
    'Modular Kitchen Cost Nashik',
    'Modular Kitchen Dealer',

  ],
  authors: [{ name: 'Gupta Furniture' }],
  creator: 'Gupta Furniture',
  publisher: 'Gupta Furniture',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  }
};

const tenorSans = Tenor_Sans({ 
  weight: '400',
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-tenor-sans',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${tenorSans.variable} font-sans antialiased`}>
        <Navbar />
        <main className="pt-16 pb-20 md:pb-0">
          <Suspense fallback={<Loading />}>
            {children}
          </Suspense>
        </main>
        <Footer />
        {/* Mobile Contact Buttons */}
        <div className="fixed bottom-0 left-0 right-0  md:hidden z-50">
          <div className="container mx-auto px-4 py-3">
            <div className="flex gap-4">
              <a
                href="tel:+919511641912"
                className="flex-1 flex items-center justify-center gap-2 bg-black text-white px-4 py-3 rounded-full hover:bg-accent-gold-light transition-colors font-medium"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3 5a2 2 0 0 1 2-2h3.28a1 1 0 0 1 .948.684l1.498 4.493a1 1 0 0 1-.502 1.21l-2.257 1.13a11.042 11.042 0 0 0 5.516 5.516l1.13-2.257a1 1 0 0 1 1.21-.502l4.493 1.498a1 1 0 0 1 .684.949V19a2 2 0 0 1-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                Call Now
              </a>
              <a
                href="https://wa.me/919511641912"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-primary text-secondary px-4 py-3 rounded-full hover:bg-accent-gold-light transition-colors font-medium"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                </svg>
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
