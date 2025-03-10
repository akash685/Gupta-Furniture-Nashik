'use client';
import { useEffect, useState } from 'react';


const reviews = [
  {
    id: 1,
    name: 'Amit Patel',
    avatar: '/avatars/customer1.jpg',
    role: 'Homeowner',
    review: 'Amazing quality and craftsmanship. The modular kitchen they designed for us is both beautiful and functional.',
    rating: 5
  },
  {
    id: 2,
    name: 'Priya Shah',
    avatar: '/avatars/customer2.jpg',
    role: 'Interior Designer',
    review: 'As an interior designer, I regularly work with Gupta Furniture. Their attention to detail is exceptional.',
    rating: 5
  },
  {
    id: 3,
    name: 'Rajesh Kumar',
    avatar: '/avatars/customer3.jpg',
    role: 'Business Owner',
    review: 'They completed our office furniture project on time and within budget. Highly professional team.',
    rating: 4
  },
  {
    id: 4,
    name: 'Sneha Desai',
    avatar: '/avatars/customer4.jpg',
    role: 'Homeowner',
    review: 'The bedroom set we ordered is perfect. Great quality and excellent after-sales service.',
    rating: 5
  },
  {
    id: 5,
    name: 'Vikram Singh',
    avatar: '/avatars/customer5.jpg',
    role: 'Property Developer',
    review: 'We furnished multiple properties with Gupta Furniture. Consistent quality and reliable service.',
    rating: 5
  }
];

export default function CustomerReviews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative overflow-hidden bg-white py-8">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="relative">
          {/* Reviews Slider */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {reviews.map((review) => (
                <div
                  key={review.id}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-white rounded-lg p-8 text-center">
                    <div className="w-20 h-20 mx-auto mb-4 relative rounded-full overflow-hidden">
                      <div className="bg-gray-200 w-full h-full rounded-full">
                        {/* Uncomment when you have actual avatars */}
                        {/* <Image
                          src={review.avatar}
                          alt={review.name}
                          fill
                          className="object-cover"
                        /> */}
                      </div>
                    </div>
                    <div className="flex justify-center mb-4">
                      {[...Array(review.rating)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-gray-600 italic mb-4">"{review.review}"</p>
                    <h3 className="font-semibold text-lg">{review.name}</h3>
                    <p className="text-gray-500">{review.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-4 space-x-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  currentIndex === index ? 'bg-accent-gold-light' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
