import React from 'react';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata = {
  title: 'Materials & Quality | Gupta Furniture',
  description: 'Discover the premium materials and quality standards we use at Gupta Furniture. From premium teak wood to high-end hardware, learn about our commitment to excellence.',
  keywords: [
    'teak wood furniture',
    'engineered wood',
    'sheesham wood',
    'modular furniture materials',
    'furniture hardware',
    'Hettich fittings',
    'Hafele accessories',
    'laminate furniture',
    'PU finish',
    'quality furniture materials',
    'premium wood furniture',
    'furniture quality standards'
  ]
};

const materials = [
  {
    category: 'Wood Materials',
    items: [
      {
        name: 'Teak Wood',
        description: 'Premium quality teak wood known for durability and resistance',
        uses: ['Premium Furniture', 'Outdoor Furniture', 'Door Frames'],
        features: ['Naturally resistant to decay', 'Water-resistant', '25+ years lifespan']
      },
      {
        name: 'Engineered Wood',
        description: 'High-grade MDF and Plywood for modern furniture',
        uses: ['Modular Furniture', 'Wardrobes', 'Kitchen Cabinets'],
        features: ['Moisture resistant', 'No warping', 'Uniform texture']
      },
      {
        name: 'Sheesham Wood',
        description: 'Indian Rosewood known for its rich grain patterns',
        uses: ['Living Room Furniture', 'Dining Sets', 'Bed Frames'],
        features: ['Natural finish', 'Termite resistant', 'Long-lasting']
      }
    ]
  },
  {
    category: 'Hardware & Fittings',
    items: [
      {
        name: 'Hettich Fittings',
        description: 'German-engineered premium hardware solutions',
        uses: ['Cabinet Hinges', 'Drawer Slides', 'Kitchen Fittings'],
        features: ['Lifetime warranty', 'Soft-close mechanism', 'Rust-resistant']
      },
      {
        name: 'Hafele Accessories',
        description: 'International standard kitchen and wardrobe accessories',
        uses: ['Kitchen Organization', 'Wardrobe Systems', 'Storage Solutions'],
        features: ['Modern design', 'Easy installation', 'Durable finish']
      }
    ]
  },
  {
    category: 'Finishes & Laminates',
    items: [
      {
        name: 'Merino Laminates',
        description: 'High-pressure decorative laminates',
        uses: ['Furniture Surfaces', 'Wall Panels', 'Cabinet Doors'],
        features: ['Scratch resistant', 'UV resistant', 'Wide color range']
      },
      {
        name: 'PU Finish',
        description: 'Polyurethane coating for premium look',
        uses: ['Kitchen Cabinets', 'Modern Furniture', 'Designer Pieces'],
        features: ['High gloss', 'Stain resistant', 'Easy maintenance']
      }
    ]
  }
];

export default function MaterialsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb
        items={[
          { label: 'Home', href: '/' },
          { label: 'Products', href: '/products' },
          { label: 'Materials & Quality' }
        ]}
      />

      <h1 className="text-4xl font-bold mb-6 text-secondary">Our Materials & Quality Standards</h1>
      <p className="text-amber-950/75 mb-12 max-w-3xl">
        At Gupta Furniture, we carefully select premium materials and partner with leading brands 
        to ensure the highest quality in every piece we create.
      </p>

      {materials.map((category, index) => (
        <div key={index} className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-primary">{category.category}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {category.items.map((item, idx) => (
              <div key={idx} className="border border-amber-100 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-secondary">{item.name}</h3>
                <p className="text-amber-950/75 mb-4">{item.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-medium mb-2 text-secondary">Common Uses:</h4>
                  <ul className="text-sm  space-y-1">
                    {item.uses.map((use, i) => (
                      <li key={i} className="flex items-center">
                        <span className="mr-2 text-primary">•</span>
                        {use}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium mb-2 text-secondary">Key Features:</h4>
                  <ul className="text-sm  space-y-1">
                    {item.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <svg className="w-4 h-4 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      <div className=" p-6 rounded-lg mt-8 border border-amber-100">
        <h2 className="text-xl font-bold mb-4 text-secondary">Quality Assurance</h2>
        <p className="text-amber-950/75">
          Every piece of furniture undergoes rigorous quality checks at various stages of production. 
          We provide warranties on hardware and guarantee our workmanship to ensure your complete satisfaction.
        </p>
      </div>
    </div>
  );
}
