import Image from 'next/image';

export default function HotegorySection() {
  return (
    <section className="relative w-full max-w-[1320px] mx-auto mt-16 md:mt-24 lg:mt-32 px-4 sm:px-6 lg:px-8">
      {/* Rotated Title */}
      <div className="hidden lg:block absolute w-[52px] h-[648px] left-[-60px] top-0 transform -rotate-90">
        <h2 className="font-roboto font-normal text-2xl md:text-3xl lg:text-[34px] leading-tight text-center uppercase text-black whitespace-nowrap">
          Explore new and popular styles
        </h2>
      </div>
      {/* Mobile/Tablet Title */}
      <div className="lg:hidden mb-6 text-center">
        <h2 className="font-roboto font-normal text-xl sm:text-2xl md:text-3xl leading-tight uppercase text-black">
          Explore new and popular styles
        </h2>
      </div>

      {/* Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {/* Large Image */}
        <div className="relative w-full h-[300px] sm:h-[400px] md:h-[648px] md:col-span-2">
          <Image
            src="/assest/hotcatagory1.png"
            alt="Large Category"
            fill
            className="object-cover rounded-lg"
            sizes="(max-width: 768px) 100vw, 66vw"
          />
        </div>

        {/* Smaller Cards */}
        <div className="grid grid-cols-2 gap-4 md:gap-6">
          {[
            { src: "/assest/hotcatagory1.png", alt: "Category 1" },
            { src: "/assest/hotcatagory2.png", alt: "Category 2" },
            { src: "/assest/hotcatagory3.png", alt: "Category 3" },
            { src: "/assest/hotcatagory5.png", alt: "Category 4" },
          ].map((card, index) => (
            <div key={index} className="relative w-full h-[150px] sm:h-[200px] md:h-[312px]">
              <Image
                src={card.src}
                alt={card.alt}
                fill
                className="object-cover rounded-lg"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              {/* Hidden Ribbon and Bottom Category */}
              <div className="absolute invisible w-[52px] h-[24px] left-0 top-[22px]" />
              <div className="absolute invisible w-full h-[52px] left-0 bottom-0 flex flex-row justify-between items-center px-[14px] bg-[#1E2832] border border-[#1E2832] box-border" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}