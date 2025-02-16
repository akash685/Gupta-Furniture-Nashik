import React from 'react'
import Image from 'next/image';
import oneBhkHomeInteriorNashik from "../../public/1 bhk home interior nashik.png"
import twoBhkHomeInteriorNashik from "../../public/2 bhk home interior nashik.png"
import threeBhkHomeInteriorNashik from "../../public/3 bhk home interior nashik.png"

const interiorPackagesData = [
  { title: "1BHK Interior Package", description: "Complete interior solutions for 1BHK homes.", price: "₹1,50,000 - ₹5,00,000", image: oneBhkHomeInteriorNashik },
  { title: "2BHK Interior Package", description: "Elegant designs tailored for 2BHK apartments.", price: "₹2,50,000 - ₹7,00,000", image: twoBhkHomeInteriorNashik },
  { title: "3BHK Interior Package", description: "Luxury interior solutions for spacious 3BHK homes.", price: "₹4,00,000 - ₹9,00,000", image: threeBhkHomeInteriorNashik }
];

function interiorPackages() {
  return (
    <div>
      {/* Interior Packages Section */}
      <section className="py-10 px-3 border-b-4 border-gray-200 bg-white">
        <h2 className="text-xl sm:text-2xl font-bold text-center mb-5">Best Home Interior Packages</h2>
        <div className="flex space-x-4 overflow-x-auto max-w-6xl mx-auto pb-4">
          {interiorPackagesData.map((pkg, index) => (
            <div
              key={index}
              className="min-w-[300px] border rounded-lg p-3 bg-white shadow-lg hover:shadow-xl transition-all border-gray-300"
            >
              <Image
                src={pkg.image}
                alt={pkg.title}
                width={400}
                height={300}
                className="rounded-lg object-cover mb-4"
              />
              <h3 className="text-lg sm:text-xl font-semibold mb-2">{pkg.title}</h3>
              <p className="mb-4">{pkg.description}</p>
              <p className="font-bold text-gray-700">{pkg.price}</p>
              <div className="mt-4 flex flex-col space-y-2">
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
                  Call Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default interiorPackages;
