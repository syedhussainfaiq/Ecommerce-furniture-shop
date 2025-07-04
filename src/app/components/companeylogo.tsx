import Image from 'next/image';
import React from 'react';

const logos = [
  { src: '/assest/Logo 1.png', width: 85, height: 87 },
  { src: '/assest/Logo 2.png', width: 107, height: 109 },
  { src: '/assest/Logo 3.png', width: 135, height: 139 },
  { src: '/assest/Logo 4.png', width: 63, height: 65 },
  { src: '/assest/Logo 5.png', width: 98, height: 101 },
  { src: '/assest/Logo 6.png', width: 113, height: 115 },
  { src: '/assest/Logo 7.png', width: 84, height: 87 },
];

const CompanyLogos = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 lg:gap-16">
        {logos.map((logo, index) => (
          <div key={index} className="flex-shrink-0">
            <Image
              src={logo.src}
              alt={`Logo ${index + 1}`}
              width={logo.width}
              height={logo.height}
              className="w-auto h-12 sm:h-16 lg:h-20 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyLogos;