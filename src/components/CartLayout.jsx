'use client';

import { CartProvider } from "@/context/cart";

export default function CartLayout({children}) {
  return (
    <CartProvider>
      {children}
    </CartProvider>
  )
}
