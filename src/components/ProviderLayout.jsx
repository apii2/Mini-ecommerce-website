'use client'

import { ProductContext, ProductProvider } from "@/context/product"

export default function ProviderLayout({children}) {
  return (
    <ProductProvider>
      {children}
    </ProductProvider>
  )
}
