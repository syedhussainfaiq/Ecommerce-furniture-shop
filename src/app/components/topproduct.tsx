import Image from 'next/image';
import { CgChevronRight } from 'react-icons/cg';

const products = [
  {
    id: 1,
    name: 'Library Stool Chair',
    price: 20,
    originalPrice: 39,
    image: '/assest/hotcatagory3.png',
    status: 'New',
    statusColor: 'bg-green-500',
  },
  {
    id: 2,
    name: 'Library Stool Chair',
    price: 20,
    originalPrice: 39,
    image: '/assest/image2.png',
    status: 'Sales',
    statusColor: 'bg-orange-500',
  },
  {
    id: 3,
    name: 'Library Stool Chair',
    price: 20,
    originalPrice: null,
    image: '/assest/image1.png',
    status: null,
  },
  {
    id: 4,
    name: 'Library Stool Chair',
    price: 20,
    originalPrice: null,
    image: '/assest/image3.png',
    status: null,
  },
];

export default function FeaturedProducts() {
  return (
    <section className="relative w-full max-w-[1920px] mx-auto mt-16 md:mt-32 lg:mt-48 px-4 sm:px-6 lg:px-8">
      {/* Heading */}
      <div className="flex justify-between items-center w-full mb-6 md:mb-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-inter font-semibold leading-tight capitalize text-[#272343]">
          Featured Products
        </h2>
        <div className="flex items-center">
          <CgChevronRight className="w-6 h-6 md:w-8 md:h-8 text-[#272343]" />
        </div>
      </div>

      {/* Products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="relative w-full h-[350px] sm:h-[377px] bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
          >
            {/* Image */}
            <div className="relative w-full h-[65%] sm:h-[70%]">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover rounded-t-lg"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              {product.status && (
                <span
                  className={`absolute top-3 left-3 ${product.statusColor} text-white text-xs sm:text-sm font-inter font-medium capitalize px-2 py-1 rounded`}
                >
                  {product.status}
                </span>
              )}
            </div>

            {/* Info */}
            <div className="absolute bottom-0 left-0 w-full px-4 pb-4">
              <div className="flex flex-col gap-2">
                <h3 className="text-sm sm:text-base font-inter font-medium leading-tight capitalize text-[#272343] truncate">
                  {product.name}
                </h3>
                <div className="flex items-center gap-2">
                  <span className="text-base sm:text-lg font-inter font-semibold leading-tight capitalize text-[#272343]">
                    ${product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="text-xs sm:text-sm font-inter leading-tight line-through capitalize text-[#9A9CAA]">
                      ${product.originalPrice}
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              className="absolute bottom-3 right-3 w-10 h-10 sm:w-11 sm:h-11 rounded-lg flex items-center justify-center transition-colors hover:bg-[#029FAE] hover:text-white"
              style={{
                backgroundColor: product.id === 1 ? '#029FAE' : '#F0F2F3',
                color: product.id === 1 ? '#FFFFFF' : '#272343',
              }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 5V19"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M5 12H19"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}