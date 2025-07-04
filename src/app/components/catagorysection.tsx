import Image from 'next/image';
import Link from 'next/link';

const CategoriesSection = () => {
  const categories = [
    { src: '/assest/catagory1.png', alt: 'Wing Chair', title: 'Wing Chair', count: '3,584 Products' },
    { src: '/assest/catagory2.png', alt: 'Wooden Chair', title: 'Wooden Chair', count: '157 Products' },
    { src: '/assest/catagory3.png', alt: 'Desk Chair', title: 'Desk Chair', count: '154 Products' },
  ];

  return (
    <section className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Heading Section */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
        <h2 className="text-2xl sm:text-3xl font-['Inter'] font-semibold capitalize text-[#272343] mb-4 sm:mb-0">
          Top categories
        </h2>
        <button className="w-24 h-10 bg-gray-200 rounded-md flex items-center justify-center text-sm font-medium text-gray-600 hover:bg-gray-300 transition">
          View All
        </button>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category, index) => (
          <Link href="#" key={index} className="group relative block">
            <div className="relative w-full aspect-square rounded-lg overflow-hidden">
              <Image
                src={category.src}
                alt={category.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 bg-black/70 rounded-b-lg p-4">
                <h3 className="text-lg font-['Inter'] font-medium capitalize text-white">
                  {category.title}
                </h3>
                <p className="text-sm font-['Inter'] capitalize text-white/70">
                  {category.count}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoriesSection;