import React from 'react';
import Link from 'next/link';

const MobileContactButtons = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0  p-4 flex justify-around items-center md:hidden z-50">
      <Link href="tel:+919511641912"  className="flex flex-col items-center">
       
          {/* Phone Icon */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h2l3.6 7.59a1 1 0 00.9.41h7.19a1 1 0 00.95-.68l3.2-8.01H3z" />
          </svg>
          <span className="text-xs mt-1">Call</span>
        
      </Link>
      <Link href="https://wa.me/9511641912" passHref target="_blank" className="flex flex-col items-center">
       
          {/* WhatsApp Icon */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" viewBox="0 0 24 24" fill="currentColor">
            <path d="M16.7,14.8c-0.3-0.2-1.7-0.8-1.9-0.9c-0.2-0.1-0.3-0.2-0.3,0.2c0,0.4,0.1,0.8,0.4,1.2c0.4,0.5,0.5,0.6,0.9,0.4 c0.3-0.2,1.7-1,2-1.3c0.3-0.3,0.5-0.6,0.5-1C18.3,15.2,17.7,14.9,16.7,14.8z M12,2C6.5,2,2,6.5,2,12c0,2.1,0.6,4.1,1.7,5.9L2,22l4.2-1.7 C7.9,21.4,9.9,22,12,22c5.5,0,10-4.5,10-10S17.5,2,12,2z M12,20c-1.8,0-3.5-0.5-5-1.4l-0.4-0.3l-2.5,1l1-2.7l-0.3-0.4 C5.5,15.5,5,13.8,5,12c0-3.9,3.1-7,7-7s7,3.1,7,7S15.9,20,12,20z" />
          </svg>
          <span className="text-xs mt-1">WhatsApp</span>
      
      </Link>
    </div>
  );
};

export default MobileContactButtons;
