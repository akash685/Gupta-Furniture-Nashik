'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

const projects = [
  {
    id: 1,
    title: 'Modern Living Room',
    description: 'Complete living room makeover with custom TV unit and sofa',
    category: 'Living Room',
    images: ['/1_bhk_home_interior_nashik.jpg'],
    completion: 'August 2023',
    location: 'Nashik, Maharashtra',
    area: '400 sq ft',
    scope: [
      'Custom TV Unit',
      'Sofa Set',
      'Center Table',
      'Wall Paneling'
    ]
  },
  {
    id: 2,
    title: 'Contemporary Kitchen',
    description: 'Modular kitchen with island and premium fittings',
    category: 'Kitchen',
    images: ['/1_bhk_home_interior_nashik.jpg'],
    completion: 'July 2023',
    location: 'Nashik, Maharashtra',
    area: '120 sq ft',
    scope: [
      'Modular Kitchen',
      'Island Counter',
      'Backsplash',
      'Storage Solutions'
    ]
  },
  {
    id: 3,
    title: 'Master Bedroom Suite',
    description: 'Luxurious bedroom with walk-in wardrobe',
    category: 'Bedroom',
    images: ['/1_bhk_home_interior_nashik.jpg'],
    completion: 'June 2023',
    location: 'Nashik, Maharashtra',
    area: '250 sq ft',
    scope: [
      'Custom Bed',
      'Walk-in Wardrobe',
      'Study Area',
      'Dressing Area'
    ]
  }
];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const categories = ['All', ...new Set(projects.map(project => project.category))];
  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb
        items={[
          { label: 'Home', href: '/' },
          { label: 'Projects' }
        ]}
      />

      {/* Page Title */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-secondary">Our Projects</h1>
        <p className="mt-4 text-amber-950/75 max-w-3xl">
          Explore our portfolio of completed projects, showcasing our commitment to quality 
          and attention to detail in every space we transform.
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-4 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-2 rounded-full transition-colors ${
              selectedCategory === category
                ? 'bg-primary text-white'
                : 'bg-amber-50 text-amber-950/75 hover:bg-primary/10'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div 
            key={project.id}
            className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow"
          >
            <div className="relative h-64 overflow-hidden">
              <Image
                src={project.images[0]}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-4 left-4 right-4">
                  <Link
                    href={`/projects/${project.id}`}
                    className="inline-flex items-center text-white font-medium"
                  >
                    View Details
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center mb-2">
                <span className="text-sm font-medium text-primary px-3 py-1 bg-primary/10 rounded-full">
                  {project.category}
                </span>
                <span className="ml-auto text-sm text-amber-950/75">
                  {project.completion}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-secondary mb-2">{project.title}</h3>
              <p className="text-amber-950/75 mb-4">{project.description}</p>
              <div className="flex items-center text-sm text-amber-950/75">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {project.location}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
