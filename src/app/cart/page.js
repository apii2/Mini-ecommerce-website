'use client'
import {
  Card,
  CardDescription,
  CardTitle,
} from "@/components/ui/card"
import { useContext } from "react"
import Link from "next/link"
import { CartContext } from "@/context/cart"
import { useCartQuantityHandlers } from '@/methods/quantity';
import { Button } from "@/components/ui/button"
import { ProductContext } from "@/context/product"
import CartTotal from "@/components/CartTotal"

export default function page() {
  const {cartData} = useContext(CartContext);
  const {setProducts} = useContext(ProductContext);
  const { handleDecrease, handleIncrease } = useCartQuantityHandlers();

  function removeItemFromCart(id){
    setProducts(prev=>(
      prev.map(item=>{
        return item.id === id ? {
          ...item,
          selected: false
        }: item
      })
    ))
  }

  return (
    <div className="space-y-4 max-w-3xl mx-auto px-4 py-6">
      {cartData.length === 0 ? (
        <p className="text-center text-muted-foreground text-lg">Your cart is empty.</p>
      ) : 
      (cartData.map(item => (
        <Card key={item.id} className="flex flex-col md:flex-row gap-4 p-4">
          <img src={item.thumbnail} alt={`${item.title} image`} className="w-24 h-24 object-cover rounded-md"/>

          <div className="flex-1 flex flex-col justify-between">
            <div>
              <Link href={`/product/${item.id}`}>
                <CardTitle className="text-lg hover:underline">{item.title}</CardTitle>
              </Link>
              <CardDescription className="line-clamp-2 text-sm text-muted-foreground mb-1">
                {item.description}
              </CardDescription>

              <div className="flex items-center gap-4">
                <span className="text-gray-500 line-through text-base">
                  Rs. {item.price}
                </span>
                <span className="text-base font-bold text-green-600">
                  Rs. {(item.price - (item.price * item.discountPercentage / 100)).toFixed(2)}
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between mt-3 flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <span className="text-sm">Quantity:</span>
                <div className="flex items-center border rounded px-2 py-1">
                  <Button size="sm" variant="ghost" onClick={() => handleDecrease(item.id)} disabled={item.quantity <= 1}>
                    -
                  </Button>
                  <span className="px-2 min-w-[2rem] text-center">{item.quantity}</span>
                  <Button size="sm" variant="ghost" onClick={() => handleIncrease(item.id)} disabled={item.quantity >= item.stock}>
                    +
                  </Button>
                </div>
              </div>

              <Button variant="outline" size="sm" onClick={() => removeItemFromCart(item.id)} 
                className="text-red-600 border-red-200 hover:bg-red-50">
                Remove
              </Button>
            </div>
          </div>
        </Card>
        ))
      )}

      <CartTotal />
    </div>

  )
}
