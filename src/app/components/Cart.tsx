
// src/app/components/Cart.tsx
 "use client"
import React, { useState, useEffect } from "react";
import Image from "next/image";

export interface CartItem {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  image: string;
  status: string;
  statusColor: string;
  quantity: number;
}

interface CartProps {
  cart: CartItem[];
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Cart: React.FC<CartProps> = ({ cart, setCart, isOpen, setIsOpen }) => {
  const [isCheckoutComplete, setIsCheckoutComplete] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [notification, setNotification] = useState<string | null>(null);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout | null = null;
    if (notification) {
      timeoutId = setTimeout(() => setNotification(null), 3000);
    }
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [notification]);

  const showNotification = (message: string) => {
    setNotification(message);
  };

  const incrementQuantity = (productId: number): void => {
    setCart((prevCart: CartItem[]) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
    showNotification("Item quantity increased");
  };

  const decrementQuantity = (productId: number): void => {
    setCart((prevCart: CartItem[]) => {
      const updatedCart = prevCart
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0);
      return updatedCart;
    });
    showNotification("Item quantity decreased");
  };

  const removeFromCart = (productId: number): void => {
    setCart((prevCart: CartItem[]) =>
      prevCart.filter((item) => item.id !== productId)
    );
    showNotification("Item removed from cart");
  };

  const clearCart = (): void => {
    setCart([]);
    localStorage.setItem("cart", JSON.stringify([]));
    showNotification("Cart cleared");
  };

  const getTotalPrice = (): string => {
    return cart
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  const getTotalItems = (): number => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const handleCheckout = async (): Promise<void> => {
    if (cart.length === 0) {
      showNotification("Your cart is empty!");
      return;
    }

    setIsLoading(true);
    try {
      console.log("Processing checkout with items:", cart);
      console.log("Total:", getTotalPrice());
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setCart([]);
      localStorage.setItem("cart", JSON.stringify([]));
      setIsCheckoutComplete(true);
      showNotification("Checkout successful!");
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : "Please try again.";
      console.error("Checkout error:", error);
      showNotification(`Checkout failed: ${errorMessage}`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleContinueShopping = (): void => {
    setIsCheckoutComplete(false);
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <div className="fixed top-16 inset-x-0 mx-auto bg-white p-4 sm:p-6 rounded-lg shadow-xl w-[95%] sm:w-[90%] lg:w-[80%] max-w-[1458px] h-auto min-h-[400px] max-h-[80vh] z-50 flex flex-col lg:flex-row overflow-y-auto">
          {notification && (
            <div className="fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-md animate-fade-in-out">
              {notification}
            </div>
          )}
          {isCheckoutComplete ? (
            <div className="flex flex-col items-center justify-center w-full p-6 sm:p-8">
              <h3 className="font-['Inter'] font-semibold text-xl sm:text-2xl text-[#111111] mb-4">
                Order Confirmed!
              </h3>
              <p className="font-['Inter'] font-normal text-base sm:text-lg text-[#272343] text-center mb-6">
                Thank you for your purchase. Your order has been successfully processed.
              </p>
              <button
                onClick={handleContinueShopping}
                className="w-full max-w-[300px] h-12 bg-[#029FAE] rounded-full flex items-center justify-center hover:bg-[#028a96] transition-colors"
                aria-label="Continue Shopping"
              >
                <span className="font-['Inter'] font-medium text-sm sm:text-base text-white">
                  Continue Shopping
                </span>
              </button>
            </div>
          ) : (
            <>
              <div className="flex flex-col w-full lg:w-2/3 pr-0 lg:pr-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-['Inter'] font-semibold text-xl sm:text-2xl text-[#111111]">
                    Bag ({getTotalItems()} items)
                  </h3>
                  <div className="flex gap-4">
                    {cart.length > 0 && (
                      <button
                        onClick={clearCart}
                        className="text-red-500 hover:text-red-700 font-['Inter'] text-sm sm:text-base"
                        aria-label="Clear Cart"
                      >
                        Clear Cart
                      </button>
                    )}
                    <button
                      onClick={() => setIsOpen(false)}
                      className="text-gray-500 hover:text-gray-700 font-['Inter'] text-sm sm:text-base"
                      aria-label="Close Cart"
                    >
                      Close
                    </button>
                  </div>
                </div>
                {cart.length === 0 ? (
                  <p className="text-gray-500 text-center font-['Inter'] text-base sm:text-lg py-12">
                    Your cart is empty
                  </p>
                ) : (
                  <div className="flex flex-col gap-4">
                    {cart.map((item, index) => (
                      <div
                        key={item.id}
                        className="flex flex-col sm:flex-row items-start py-4 border-b border-[#E5E5E5]"
                        style={{ marginTop: index === 0 ? "24px" : "0px" }}
                      >
                        <div className="w-32 h-32 sm:w-40 sm:h-40 bg-[#F5F5F5] flex-shrink-0 rounded-md overflow-hidden">
                          <Image
                            src={item.image}
                            alt={item.name}
                            width={160}
                            height={160}
                            className="object-cover w-full h-full"
                          />
                        </div>
                        <div className="flex flex-col w-full sm:ml-6 mt-4 sm:mt-0">
                          <div className="flex flex-col sm:flex-row sm:justify-between">
                            <div className="flex flex-col gap-2">
                              <h4 className="font-['Inter'] font-medium text-base sm:text-lg text-[#272343] capitalize">
                                {item.name}
                              </h4>
                              <p className="font-['Inter'] font-normal text-sm text-[#757575]">
                                Ashen Slate/Cobalt Bliss
                              </p>
                              <div className="flex items-center gap-4">
                                <span className="font-['Inter'] font-normal text-sm text-[#757575]">
                                  Quantity
                                </span>
                                <div className="flex items-center bg-white w-24 h-8 border border-gray-300 rounded-md">
                                  <button
                                    onClick={() => decrementQuantity(item.id)}
                                    className="w-8 h-full flex items-center justify-center text-[#757575] hover:bg-gray-100"
                                    aria-label={`Decrease quantity of ${item.name}`}
                                  >
                                    <svg
                                      className="w-4 h-4"
                                      fill="none"
                                      stroke="#111111"
                                      strokeWidth="1.5"
                                      viewBox="0 0 24 24"
                                    >
                                      <path
                                        d="M5 12h14"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                    </svg>
                                  </button>
                                  <span className="font-['Inter'] font-normal text-sm text-[#757575] w-8 text-center">
                                    {item.quantity}
                                  </span>
                                  <button
                                    onClick={() => incrementQuantity(item.id)}
                                    className="w-8 h-full flex items-center justify-center text-[#757575] hover:bg-gray-100"
                                    aria-label={`Increase quantity of ${item.name}`}
                                  >
                                    <svg
                                      className="w-4 h-4"
                                      fill="none"
                                      stroke="#111111"
                                      strokeWidth="1.5"
                                      viewBox="0 0 24 24"
                                    >
                                      <path
                                        d="M12 5v14m7-7H5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                    </svg>
                                  </button>
                                </div>
                              </div>
                            </div>
                            <span className="font-['Inter'] font-medium text-sm sm:text-base text-[#111111] mt-2 sm:mt-0">
                              ${item.price * item.quantity}
                            </span>
                          </div>
                          <div className="flex flex-row items-center gap-2 mt-4">
                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="flex items-center justify-center px-3 py-1 border border-[#111111] rounded-md hover:bg-gray-100"
                              aria-label={`Remove ${item.name} from cart`}
                            >
                              <svg
                                className="w-4 h-4"
                                fill="none"
                                stroke="#111111"
                                strokeWidth="1.5"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  d="M6 18L18 6M6 6l12 12"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                              <span className="ml-2 text-sm font-['Inter']">
                                Remove
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              {cart.length > 0 && (
                <div className="flex flex-col w-full lg:w-1/3 mt-6 lg:mt-0 lg:ml-6 bg-gray-50 p-4 sm:p-6 rounded-lg">
                  <h3 className="font-['Inter'] font-semibold text-lg sm:text-xl text-[#111111] mb-4">
                    Summary
                  </h3>
                  <div className="flex flex-col gap-3">
                    <div className="flex justify-between items-center">
                      <span className="font-['Inter'] font-normal text-sm sm:text-base text-[#111111]">
                        Subtotal ({getTotalItems()} items)
                      </span>
                      <span className="font-['Inter'] font-medium text-sm sm:text-base text-[#111111]">
                        ${getTotalPrice()}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-['Inter'] font-normal text-sm sm:text-base text-[#111111]">
                        Estimated Delivery
                      </span>
                      <span className="font-['Inter'] font-normal text-sm sm:text-base text-[#111111]">
                        Free
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-y border-[#E5E5E5]">
                      <span className="font-['Inter'] font-medium text-sm sm:text-base text-[#111111]">
                        Total
                      </span>
                      <span className="font-['Inter'] font-bold text-base sm:text-lg text-[#111111]">
                        ${getTotalPrice()}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={handleCheckout}
                    disabled={isLoading}
                    className={`w-full h-12 mt-4 rounded-full flex items-center justify-center transition-colors ${
                      isLoading
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-[#029FAE] hover:bg-[#028a96]"
                    }`}
                    aria-label="Proceed to Checkout"
                  >
                    <span className="font-['Inter'] font-medium text-sm sm:text-base text-white">
                      {isLoading ? "Processing..." : "Checkout"}
                    </span>
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      )}
    </>
  );
};

export default Cart;
