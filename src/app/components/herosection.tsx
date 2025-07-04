import Image from 'next/image';
import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative w-full max-w-[1740px] mx-auto h-[clamp(600px,90vh,850px)]">
      {/* Background */}
      <div className="absolute inset-0 bg-[#F0F2F3] rounded-b-[clamp(24px,5vw,48px)]" />

      {/* Discount Badge */}
      <div className="absolute right-[5%] top-[clamp(40px,10%,82px)] w-[clamp(100px,10vw,140px)] h-[clamp(90px,12vw,124px)] bg-white rounded-md shadow-md flex flex-col items-center justify-center sm:right-[10%] md:right-[15%]">
        <div className="text-[#F05C52] text-[clamp(24px,3vw,36px)] font-bold leading-[1.1] sm:text-[30px] md:text-[36px]">
          54%
        </div>
        <div className="text-[#272343] text-[clamp(12px,1.2vw,14px)] font-medium tracking-[0.02em] mt-1">
          Discount
        </div>
      </div>

      {/* Product Image */}
      <div className="absolute w-[clamp(250px,40vw,434px)] h-[clamp(350px,50vw,584px)] right-[5%] top-[clamp(80px,15%,115px)] sm:right-[10%] md:right-[clamp(20%,25vw,777px)]">
        <Image
          src="/assest/hero.png"
          alt="Furniture"
          width={434}
          height={584}
          className="object-contain w-full h-full"
        />
      </div>

      {/* Hero Info */}
      <div className="absolute left-[5%] top-[clamp(100px,20%,229px)] w-[clamp(300px,45%,557px)] sm:left-[clamp(30px,7vw,70px)]">
        <p className="text-[#272343] text-[clamp(12px,1.5vw,14px)] font-normal uppercase tracking-[0.12em] mb-4">
          Welcome to chairy
        </p>
        <h1 className="text-[#272343] text-[clamp(32px,5vw,60px)] font-bold leading-[1.1] capitalize mb-6 sm:mb-10">
          Best Furniture Collection for your interior.
        </h1>

        {/* Button */}
        <button className="flex items-center gap-[clamp(10px,2vw,20px)] bg-[#029FAE] text-white px-[clamp(16px,2vw,24px)] py-[clamp(10px,1.5vw,14px)] rounded-[8px] text-[clamp(14px,1.6vw,16px)] leading-[1.1] capitalize hover:bg-[#027f8c] transition-colors">
          Shop Now
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[clamp(18px,2vw,24px)] h-[clamp(18px,2vw,24px)]"
          >
            <path d="M5 12H19" stroke="white" strokeWidth="1.5" />
            <path d="M13 6L19 12L13 18" stroke="white" strokeWidth="1.5" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;