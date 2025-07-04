import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative w-full bg-white shadow-[inset_0_1px_0_0_#E1E3E6] mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Chairy Section (Logo + Description + Social Links) */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              {/* Placeholder Logo */}
              <div />
              <Image
              src="/assest/header icon.png"
              alt="Header icon"
              width={40}
              height={40}
              className="object-contain"
            />
              <span className="font-inter text-2xl font-semibold text-[#272343]">
                Comforty
              </span>
            </div>
            <p className="text-base font-inter text-[#272343]/60 leading-relaxed max-w-[350px]">
              Vivamus tristique odio sit amet velit semper, eu posuere turpis interdum. Cras egestas purus.
            </p>
            <div className="flex gap-1">
              {['facebook', 'twitter', 'instagram', 'pinterest', 'youtube'].map((icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-[#007580] hover:bg-[#007580] hover:text-white transition-colors"
                >
                  {/* Placeholder SVG */}
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill={idx === 0 ? '#007580' : '#636270'}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="16" height="16" fill="currentColor" />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Category Section */}
          <div className="flex flex-col gap-5">
            <h3 className="font-inter text-sm font-medium uppercase text-[#9A9CAA] tracking-wider">
              Category
            </h3>
            <ul className="flex flex-col gap-3">
              {['Sofa', 'Armchair', 'Wing Chair', 'Desk Chair', 'Wooden Chair', 'Park Bench'].map(
                (item, idx) => (
                  <li key={idx}>
                    <a
                      href="#"
                      className={`font-inter text-base text-[#272343] hover:text-[#007580] ${
                        item === 'Desk Chair' ? 'underline text-[#007580]' : ''
                      }`}
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Support Section */}
          <div className="flex flex-col gap-5">
            <h3 className="font-inter text-sm font-medium uppercase text-[#9A9CAA] tracking-wider">
              Support
            </h3>
            <ul className="flex flex-col gap-3">
              {['Help & Support', 'Terms & Conditions', 'Privacy Policy', 'Help'].map((item, idx) => (
                <li key={idx}>
                  <a href="#" className="font-inter text-base text-[#272343] hover:text-[#007580]">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="flex flex-col gap-5">
            <h3 className="font-inter text-sm font-medium uppercase text-[#9A9CAA] tracking-wider">
              Newsletter
            </h3>
            <p className="text-sm font-inter text-[#272343]/60 leading-relaxed max-w-[424px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim.
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="w-full sm:w-[285px] h-12 px-4 text-base font-inter text-[#9A9CAA] bg-white border border-[#E1E3E6] rounded-lg focus:outline-none focus:border-[#029FAE]"
              />
              <button className="w-full sm:w-auto h-12 px-6 bg-[#029FAE] text-white font-inter text-base capitalize rounded-lg hover:bg-[#007580] transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-[#E1E3E6] flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-poppins text-sm text-[#9A9CAA] text-center">
            @ 2025 - Blogy - Designed & Developed by Hussain
          </p>
          <div className="flex gap-2 opacity-50">
            {[
              { color: '#EB001B', width: 36, height: 22 },
              { color: '#253B80', width: 56, height: 15 },
              { color: '#9A9CAA', width: 50, height: 27 },
              { color: '#E6A540', width: 55, height: 18 },
            ].map((logo, idx) => (
              <div
                key={idx}
                className="relative"
                style={{ width: logo.width, height: logo.height }}
              >
                {/* Placeholder for payment logos */}
                <div
                  className="w-full h-full"
                  style={{ backgroundColor: logo.color }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}