
// src/app/Cart/page.tsx
"use client";
import { useState, useEffect } from 'react';
import Cart from '../components/Cart';
import { CartItem } from '../components/Cart';

export default function CartPage() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  return <Cart cart={cart} setCart={setCart} isOpen={isOpen} setIsOpen={setIsOpen} />;
}

