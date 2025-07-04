
"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import Cart from "../components/Cart";

// Define interfaces for product and cart item
interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  image: string;
  status: string;
  statusColor: string;
}

interface CartItem extends Product {
  quantity: number;
}

const products: Product[] = [
  {
    id: 1,
    name: "Library Stool Chair",
    price: 20,
    originalPrice: 39,
    image: "/assest/hotcatagory3.png",
    status: "Sale",
    statusColor: "bg-red-500",
  },
  {
    id: 2,
    name: "Library Stool Chair",
    price: 20,
    originalPrice: 39,
    image: "/assest/image2.png",
    status: "Sale",
    statusColor: "bg-red-500",
  },
  {
    id: 3,
    name: "Library Stool Chair",
    price: 20,
    originalPrice: 39,
    image: "/assest/hotcatagory1.png",
    status: "Sale",
    statusColor: "bg-red-500",
  },
  {
    id: 4,
    name: "Library Stool Chair",
    price: 20,
    originalPrice: 39,
    image: "/assest/hotcatagory2.png",
    status: "Sale",
    statusColor: "bg-red-500",
  },
  {
    id: 5,
    name: "Library Stool Chair",
    price: 20,
    originalPrice: 39,
    image: "/assest/hotcatagory5.png",
    status: "Sale",
    statusColor: "bg-red-500",
  },
  {
    id: 6,
    name: "Library Stool Chair",
    price: 20,
    originalPrice: 39,
    image: "/assest/hotcatagory4.png",
    status: "Sale",
    statusColor: "bg-red-500",
  },
  {
    id: 7,
    name: "Library Stool Chair",
    price: 20,
    originalPrice: 39,
    image: "/assest/image7.png",
    status: "Sale",
    statusColor: "bg-red-500",
  },
  {
    id: 8,
    name: "Library Stool Chair",
    price: 20,
    originalPrice: 39,
    image: "/assest/hotcatagory3.png",
    status: "Sale",
    statusColor: "bg-red-500",
  },
  {
    id: 9,
    name: "Library Stool Chair",
    price: 20,
    originalPrice: 39,
    image: "/assest/product2.png",
    status: "Sale",
    statusColor: "bg-red-500",
  },
  {
    id: 10,
    name: "Library Stool Chair",
    price: 20,
    originalPrice: 39,
    image: "/assest/image2.png",
    status: "Sale",
    statusColor: "bg-red-500",
  },
  {
    id: 11,
    name: "Library Stool Chair",
    price: 20,
    originalPrice: 39,
    image: "/assest/hotcatagory1.png",
    status: "Sale",
    statusColor: "bg-red-500",
  },
  {
    id: 12,
    name: "Library Stool Chair",
    price: 20,
    originalPrice: 39,
    image: "/assest/Photo.png",
    status: "Sale",
    statusColor: "bg-red-500",
  },
];

const FeaturedProducts: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart) as CartItem[]);
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product: Product): void => {
    setCart((prevCart: CartItem[]) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  return (
    <>
     
      <section className="relative w-full max-w-[1920px] mx-auto h-auto min-h-[461px] pt-20">
        {/* Cart Toggle Button */}
        <div className="fixed top-4 right-4 z-50">
          <button
            onClick={() => setIsCartOpen(!isCartOpen)}
            className="bg-[#272343] text-white px-4 py-2 rounded-lg flex items-center gap-2"
          >
            <span>Cart ({cart.reduce((total, item) => total + item.quantity, 0)})</span>
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49A1.003 1.003 0 0 0 20 4H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
            </svg>
          </button>
        </div>



        {/* Cart Component */}
        <Cart
          cart={cart}
          setCart={setCart}
          isOpen={isCartOpen}
          setIsOpen={setIsCartOpen}
        />

        {/* Products Heading */}
        <div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-[300px] mb-10">
          <h2 className="font-['Inter'] font-semibold text-2xl md:text-3xl leading-tight text-[#272343] capitalize">
            All Products
          </h2>
          <Link
            href="/products"
            className="flex items-center text-[#272343] hover:text-[#007580] transition-colors"
          >
            <BsArrowRight className="w-6 h-6 md:w-8 md:h-8" />
          </Link>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 px-4 md:px-[300px] mt-10 md:mt-[84px]">
          {products.map((product) => (
            <div
              key={product.id}
              className="relative w-full max-w-[312px] h-[377px] mx-auto"
            >
              {/* Image */}
              <div className="relative w-full h-[82.76%] rounded-lg overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
                {product.status && (
                  <div
                    className={`absolute top-5 left-5 ${product.statusColor} text-white text-xs font-['Inter'] font-medium capitalize px-2.5 py-1.5 rounded`}
                  >
                    {product.status}
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="absolute bottom-0 left-0 right-[17.95%] flex flex-col gap-2.5">
                <h3 className="font-['Inter'] font-normal text-base leading-[130%] text-[#272343] capitalize truncate">
                  {product.name}
                </h3>
                <div className="flex items-center gap-1">
                  <span className="font-['Inter'] text-lg leading-[110%] text-[#272343] capitalize">
                    ${product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="font-['Inter'] text-sm leading-[110%] text-[#9A9CAA] line-through capitalize">
                      ${product.originalPrice}
                    </span>
                  )}
                </div>
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={() => addToCart(product)}
                className={`absolute bottom-[0.93%] right-0 w-[14.1%] h-[12.6%] rounded-lg ${
                  product.status === "New" ? "bg-[#029FAE]" : "bg-[#F0F2F3]"
                } flex items-center justify-center`}
              >
                <svg
                  className="w-[50%] h-[50%]"
                  fill={product.status === "New" ? "#FFFFFF" : "#272343"}
                  viewBox="0 0 24 24"
                >
                  <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                </svg>
              </button>
              
            </div>
          ))}
        </div>

        {/* Newsletter & Instagram Section */}
        <div className="w-full max-w-[1924px] bg-gray-100/50 py-24 px-4 sm:px-12 md:px-24 lg:px-48 xl:px-72 flex flex-col items-center gap-16 mt-20">
          {/* Newsletter Section */}
          <div className="w-full max-w-[760px] flex flex-col items-center gap-8">
            <h2 className="text-4xl md:text-5xl font-['Roboto'] font-medium text-center text-black capitalize">
              Or subscribe to the newsletter
            </h2>
            <div className="w-full max-w-[760px] flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Email address..."
                className="w-full sm:w-[643px] h-8 px-4 text-base font-['Roboto'] font-semibold text-gray-500 capitalize border-b-2 border-black outline-none bg-transparent"
              />
              <button className="w-full sm:w-[91px] h-8 flex items-center justify-center gap-1 text-base font-['Open_Sans'] font-normal text-center text-[#1E2832] capitalize border-b-2 border-[#1E2832]">
                <span>SUBMIT</span>
              </button>
            </div>
          </div>

          {/* Instagram Section */}
          <div className="w-full max-w-[1324px] flex flex-col items-center gap-8">
            <h2 className="text-4xl md:text-5xl font-['Roboto'] font-medium text-center text-black capitalize">
              Follow us on Instagram
            </h2>
            <div className="w-full flex flex-wrap justify-center gap-6">
              {products.slice(0, 6).map((product, index) => (
                <div
                  key={index}
                  className={`${
                    index === 0
                      ? "w-[186px] h-[186px] rounded-md"
                      : index === 4
                      ? "w-[196px] h-[196px] rounded-lg"
                      : "w-[200px] h-[200px] rounded-md"
                  } bg-gray-200 relative overflow-hidden group`}
                >
                  <div className="absolute inset-0 bg-black/50 hidden group-hover:block" />
                  <Image
                    src={product.image}
                    alt={`Instagram post ${index + 1}`}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-[inherit]"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturedProducts;
