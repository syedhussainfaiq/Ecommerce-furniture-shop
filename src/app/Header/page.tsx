import React from 'react';
import Image from 'next/image';
const Header= () => {
  return (
    <div className="flex flex-row justify-between items-center px-6 sm:px-20 lg:px-75 py-5 bg-[#F0F2F3] w-full h-[84px]">
      {/* Logo Section */}
      <div className="flex flex-row items-center gap-2">
        <div className="relative w-10 h-10">
          {/* Logo Icon - Using SVG paths based on provided vector positions */}
         
        </div>
      <Image
                    src="/assest/header icon.png"
                    alt="Header icon"
                    width={40}
                    height={40}
                    className="object-contain"
                  />
      
        <span className="font-['Inter'] font-medium text-[26px] leading-[31px] text-[#272343]">
          Comforty
        </span>
      </div>
      
       </div>
      
    
          
          
        
      
    
  );
};

export default Header;