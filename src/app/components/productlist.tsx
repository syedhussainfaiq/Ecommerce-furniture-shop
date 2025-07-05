import Image from 'next/image';
import React from 'react';

const products = [
  {
    id: 1,
    name: '',
    price:'20',
    originalPrice: '39',
    image: '/assest/hotcatagory3.png',
    status: 'Sale',
    statusColor: 'bg-green-500',
  },
  {
    id: 2,
    name: '',
    price: 20,
    originalPrice: 38,
    image: '/assest/image2.png',
    status: 'Sale',
    statusColor: 'bg-green-500',
  },
  {
    id: 3,
    name: '',
    price: 20,
    originalPrice: 39,
    image: '/assest/image1.png',
    status: 'Sales',
    statusColor: 'bg-orange-500',
  },
  {
    id: 4,
    name: '',
    price: 20,
    originalPrice: 39,
    image: '/assest/image3.png',
    status: 'Sale',
    statusColor: 'bg-green-500',
  },
  {
    id: 5,
    name: '',
    price: 20,
    originalPrice: 39,
    image: '/assest/product2.png',
    status: 'Sale',
    statusColor: 'bg-green-500',
  },
  {
    id: 6,
    name: '',
    price: 20,
    originalPrice: 39,
    image: '/assest/hotcatagory4.png',
    status: 'Sale',
    statusColor: 'bg-green-500',
  },
  {
    id: 7,
    name: '',
    price: 25,
    originalPrice: 39,
    image: '/assest/image7.png',
    status: 'Sale',
    statusColor: 'bg-green-500',
  },
  {
    id: 8,
    name: '',
    price: 40,
    originalPrice: 55,
    image: '/assest/hotcatagory5.png',
    status: 'Sale',
    statusColor: 'bg-green-500',
  },
];

const ProductsSection: React.FC = () => {
  return (
    <section className="relative w-full max-w-[1320px] mx-auto mt-15 px-4">
      <h2 className="text-3xl font-inter capitalize text-gray-900 mb-4 text-center md:text-left md:ml-[150px]">
        Our Products
      </h2>
      <div className="flex justify-center md:justify-start md:ml-[150px] mb-8 gap-2 flex-wrap">
        {['All', 'Chairs', 'Tables', 'Sofas'].map((tab) => (
          <button
            key={tab}
            className="px-4 py-1 text-sm font-inter text-gray-900 capitalize hover:bg-gray-100 rounded"
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="relative w-full max-w-[312px] h-[377px] mx-auto"
          >
            <div className="relative w-full h-[312px]">
              <Image
                src={product.image}

                alt={product.name}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
              {product.status && (
                <span
                  className={`absolute top-5 left-5 ${product.statusColor} text-white text-xs font-inter font-medium px-2.5 py-1.5 rounded capitalize`}
                >
                  {product.status}
                </span>
              )}
            </div>
            <div className="absolute bottom-0 left-0 right-[18%] flex flex-col gap-2.5">
              <h3 className="text-base font-inter font-normal text-gray-900 capitalize line-clamp-1">
                {product.name}
              </h3>
              <div className="flex items-center gap-1">
                <span className="text-lg font-inter text-gray-900 capitalize">
                  ${product.price}
                </span>
                {product.originalPrice && (
                  <span className="text-sm font-inter text-gray-500 line-through capitalize">
                    ${product.originalPrice}
                  </span>
                )}
              </div>
            </div>
            <button
              className="absolute bottom-[3.5%] right-0 w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-teal-500 hover:text-white transition-colors"
              aria-label="Add to cart"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductsSection;