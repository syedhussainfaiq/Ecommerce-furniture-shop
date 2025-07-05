"use client";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  // Features data
  const features = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" fill="#FFFFFF" fillOpacity="0.1" />
          <path
            d="M3 4.5H21V15C21 15.8284 20.3284 16.5 19.5 16.5H4.5C3.67157 16.5 3 15.8284 3 15V4.5Z"
            fill="#007580"
          />
        </svg>
      ),
      title: "Next day as standard",
      description: "Order before 3pm and get your order the next day as standard",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" fill="#FFFFFF" fillOpacity="0.1" />
          <path
            d="M20 6L9 17L4 12"
            stroke="#007580"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Made by true artisans",
      description: "Handmade crafted goods made with real passion and craftsmanship",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" fill="#FFFFFF" fillOpacity="0.1" />
          <path d="M3 6H21V18H3V6ZM12 18V13" fill="#007580" />
        </svg>
      ),
      title: "Unbeatable prices",
      description: "For our materials and quality you won’t find better prices anywhere",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" fill="#FFFFFF" fillOpacity="0.1" />
          <path
            d="M12 4C8.13 4 5 7.13 5 11C5 14.87 8.13 18 12 18C15.87 18 19 14.87 19 11"
            stroke="#007580"
            strokeWidth="2"
          />
        </svg>
      ),
      title: "Recycled packaging",
      description: "We use 100% recycled to ensure our footprint is more manageable",
    },
  ];

  // Products data
  const products = [
    {
      name: "The Poplar suede sofa",
      price: "£980",
      image: "/assest/Large.png",
      width: "630px",
      containerWidth: "630px",
      detailsWidth: "212px",
    },
    {
      name: "The Dandy chair",
      price: "£250",
      image: "/assest/Photo.png",
      width: "305px",
      containerWidth: "305px",
      detailsWidth: "155px",
    },
    {
      name: "The Dandy chair",
      price: "£250",
      image: "/assest/hero.png",
      width: "305px",
      containerWidth: "305px",
      detailsWidth: "155px",
    },
  ];

  return (
    <>
      
      <div className="w-full min-h-screen bg-white">
        {/* Text and Image Block Section */}
        <div className="w-full max-w-[1344px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-8 mt-10 sm:mt-16 lg:mt-[303px]">
          {/* Text Block */}
          <section className="relative w-full max-w-[672px] min-h-[478px] bg-[#007580] rounded-lg">
            <div className="absolute top-8 sm:top-12 lg:top-16 left-4 sm:left-8 lg:left-16 max-w-[495px] flex flex-col items-start gap-4 sm:gap-6">
              <h2 className="max-w-[325px] text-[28px] sm:text-[32px] leading-[34px] sm:leading-[39px] font-['Inter'] font-bold text-white">
                It started with a small idea
              </h2>
              <p className="max-w-[495px] text-base sm:text-lg leading-[20px] sm:leading-[24px] font-['Inter'] font-normal text-white">
                A global brand with local beginnings, our story began in a small studio in South London in early 2014
              </p>
            </div>
            <button className="absolute bottom-6 sm:bottom-8 left-4 sm:left-8 lg:left-16 w-full max-w-[179px] h-14 flex items-center justify-center bg-white/15 text-base leading-6 font-['Inter'] font-normal text-white px-6 sm:px-8 py-4 rounded-md hover:bg-white/20 transition-colors" >
            <Link href="/Product" className="text-white font-inter font-medium text-sm uppercase hover:text-red-500">
           View Collection</Link>
              
            </button>
          </section>

          {/* Image Block */}
          <div className="relative w-full max-w-[672px] min-h-[478px]">
            <Image
              src="/assest/hotcatagory3.png"
              alt="Feature Image"
              fill
              style={{ objectFit: "cover" }}
              className="rounded-lg"
            />
          </div>
        </div>

        {/* Product Cards Section */}
        <div className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 mt-10 sm:mt-16 lg:mt-32">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 justify-items-center">
            {products.map((product, index) => (
              <Link
                key={index}
                href={`/products/${product.name.toLowerCase().replace(/\s+/g, "-")}`}
                className="flex flex-col items-start gap-6 w-full hover:opacity-90 transition-opacity"
                style={{
                  maxWidth: product.containerWidth,
                  height: "462px",
                }}
              >
                <div
                  className="w-full bg-[#F6F6F6] rounded-lg"
                  style={{
                    width: "100%",
                    maxWidth: product.width,
                    height: "375px",
                    backgroundImage: `url(${product.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                <div className="flex flex-col items-start gap-2" style={{ width: product.detailsWidth, height: "63px" }}>
                  <h3 className="font-['Inter'] text-xl font-normal leading-[28px] text-[#2A254B]">{product.name}</h3>
                  <p className="font-['Inter'] text-lg font-normal leading-[27px] text-[#2A254B]">{product.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Features Section */}
        <div className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 mt-10 sm:mt-16 lg:mt-[150px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-[#F9F9F9] p-8 sm:p-10 lg:p-12 flex flex-col items-start gap-3 w-full max-w-[309.45px] h-[244px] mx-auto rounded-lg"
              >
                <div className="flex flex-col items-start gap-3 w-full max-w-[213.45px]">
                  <div className="w-6 h-6 relative">{feature.icon}</div>
                  <h3 className="font-['Inter'] text-xl font-normal leading-[28px] text-[#007580]">{feature.title}</h3>
                  <p className="font-['Inter'] text-base font-normal leading-6 text-[#007580] flex-1">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default About;