'use client';

import { ProductContext } from '@/context/product';
import { useParams } from 'next/navigation';
import { useContext } from 'react';
import { Button } from "@/components/ui/button"
import { CartContext } from '@/context/cart';

export default function ProductPage() {
  const {id} = useParams();
  const products = useContext(ProductContext);
  const {cartData, setCartData} = useContext(CartContext);

  const product = products.find(p => p.id.toString() === id);

  if (!product) return <p>Product not found</p>;

  function handleCart(){
    if(!cartData.find(item=>item.id === product.id)){
      setCartData(prev=>(
        [...prev, product]
      ))
    }
  }
  
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{product.title}</h1>
      <p>{product.description}</p>
      <p className="mt-2 font-semibold">Price: ${product.price}</p>
      {/* <img src={product.images[0]} alt={product.title} width={300} height={300} /> */}
      <Button onClick={handleCart}>Add to cart</Button>
    </div>
  );
}
