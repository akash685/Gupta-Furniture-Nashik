

import React from 'react'
const interiorPackagesData = [
    { title: "1BHK Interior Package", description: "Complete interior solutions for 1BHK homes.", price: "₹1,50,000 - ₹3,00,000", image: "/1bhk.jpg" },
    { title: "2BHK Interior Package", description: "Elegant designs tailored for 2BHK apartments.", price: "₹2,50,000 - ₹5,00,000", image: "/2bhk.jpg" },
    { title: "3BHK Interior Package", description: "Luxury interior solutions for spacious 3BHK homes.", price: "₹4,00,000 - ₹8,00,000", image: "/3bhk.jpg" }
];
    

function interiorPackages() {
  return (
    <div>
        {/* Interior Packages Section */}
              <section className="py-20 px-8 border-b-4 border-gray-200 bg-white">
                <h2 className="text-4xl font-bold text-center mb-12">Best Home Interior Packages</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                  {interiorPackagesData.map((pkg, index) => (
                    <div key={index} className="border rounded-lg p-6 bg-white shadow-lg hover:shadow-xl transition-all border-gray-300">
                      {/* <Image src={pkg.image} alt={pkg.title} width={400} height={300} className="rounded-lg object-cover mb-4" /> */}
                      <h3 className="text-xl font-semibold mb-2">{pkg.title}</h3>
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

export default interiorPackages