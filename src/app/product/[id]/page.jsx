'use client';

import { ProductContext } from '@/context/product';
import { useParams } from 'next/navigation';
import { useContext } from 'react';
import { Button } from "@/components/ui/button"
import ProductImage from '@/asset/images/download.jpeg';
import ProductImage2 from '@/asset/images/lilo.jpg';
import ProductImage3 from '@/asset/images/react.png';
import { CartContext } from '@/context/cart';
import { useCartQuantityHandlers } from '@/methods/quantity';
import ImageSwiper from '@/components/ImageSwiper';

export default function ProductPage() {
  const {id} = useParams();
  const {products, setProducts} = useContext(ProductContext);
  const {cartData} = useContext(CartContext);

  const { handleDecrease, handleIncrease } = useCartQuantityHandlers();

  const product = products.find(p => p.id.toString() === id);

  if (!product) return <p>Product not found</p>;

  const images = [ProductImage, ProductImage2, ProductImage3];

  async function handleCart(){      
    const {default: Swal} = await import('sweetalert2');
    if(!cartData.find(item=>item.id === product.id)){
      setProducts(prev=>(
        prev.map(item=>{
          return item.id === product.id?
          {...item, selected: true}: item
        })
      ))
      Swal.fire({
        title: 'Item added to cart successfully!',
        icon: 'success',
        confirmButtonText: 'Ok'
      })
      return;
    }
    Swal.fire({
      title: 'Item already added to cart successfully!',
      icon: 'success',
      confirmButtonText: 'Ok'
    })
  }
  
  return (
    <div className="grid grid-cols-[40%_1fr] gap-8">
      <ImageSwiper images={images} />

      <div className="flex flex-col justify-center gap-4 p-4 max-w-xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900">{product.title}</h1>

        <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
          <span className="bg-gray-100 px-2 py-1 rounded-full">Brand: {product.brand}</span>
          <span className="bg-gray-100 px-2 py-1 rounded-full capitalize">Category: {product.category.replace('-', ' ')}</span>
          <span className="bg-gray-100 px-2 py-1 rounded-full">Rating: ⭐ {product.rating}</span>
          <span className="bg-gray-100 px-2 py-1 rounded-full">{product.stock > 0 ? 'In Stock' : 'Out of Stock'}</span>
        </div>

        <p className="text-base text-gray-700 leading-relaxed">
          {product.description}
        </p>

        <div className="flex items-center gap-4">
          <span className="text-gray-500 line-through text-xl">
            Rs. {product.price}
          </span>

          <span className="text-2xl font-bold text-green-600">
            Rs. {(product.price - (product.price * product.discountPercentage / 100)).toFixed(2)}
          </span>

          {product.discountPercentage > 0 && (
            <span className="text-sm text-red-500 font-medium">
              ({product.discountPercentage}% OFF)
            </span>
          )}
        </div>

        <div className="flex items-center gap-4">
          <span className="text-sm font-medium">Quantity:</span>
          <div className="flex items-center gap-2 border rounded px-2 py-1">
            <Button size="sm" variant="ghost" onClick={()=>handleDecrease(product.id)} disabled={product.quantity <= 1}>–</Button>
            <span className="min-w-[2rem] text-center">{product.quantity}</span>
            <Button size="sm" variant="ghost" onClick={()=>handleIncrease(product.id)} disabled={product.quantity >= product.stock}>+</Button>
          </div>
        </div>

        <Button onClick={handleCart} disabled={product.stock === 0}>
          {product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
        </Button>
      </div>
    </div>
  );
}
