import React from 'react'
import Image from 'next/image';
import sofa from '../../public/sofa set nashik.png';
import diningTableSet from '../../public/dining table set.png';
import modularKitchen from '../../public/Modular Kitchen.png';
import wardrobe from '../../public/Wardrobe.png';
const products = [
  { title: "Custom Sofa Set", description: "Premium handcrafted sofa sets.", price: "₹20,000 - ₹80,000", image: sofa },
  { title: "Dining Table Set", description: "Elegant dining tables with chairs.", price: "₹30,000 - ₹1,00,000", image: diningTableSet},
  { title: "Modular Kitchen", description: "Stylish and functional modular kitchens.", price: "₹80,000 - ₹2,50,000", image: modularKitchen },
  { title: "Wardrobe", description: "Spacious and modern wardrobes.", price: "₹25,000 - ₹1,50,000", image: wardrobe },
  
];

function Products() {
  return (
    <div>
      <section className="py-10 px-3 border-b-4 border-gray-200 bg-white">
        <h2 className="text-4xl font-bold text-center mb-12">Our Furniture Products</h2>
        <div className="flex space-x-4 overflow-x-auto max-w-6xl mx-auto pb-4 no-scrollbar">
          {products.map((product, index) => (
            <div
              key={index}
              className="min-w-[300px] border rounded-lg p-6 bg-white shadow-lg hover:shadow-xl transition-all border-gray-300"
            >
              <Image
                src={product.image}
                alt={product.title}
                width={400}
                height={300}
                className="rounded-lg object-cover mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
              <p className="mb-4">{product.description}</p>
              <p className="font-bold text-gray-700">{product.price}</p>
              <div className="mt-4 flex flex-col space-y-2">
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
                  Call Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
      <style jsx>{`
        @media (min-width: 768px) {
          .no-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .no-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        }
      `}</style>
    </div>
  );
}

export default Products;
