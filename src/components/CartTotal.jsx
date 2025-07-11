import { CartContext } from "@/context/cart"
import { useContext } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link";

export default function CartTotal() {
  const {cartData} = useContext(CartContext);

  if (!cartData.length) return null;
  const total = cartData.reduce((sum, item) => {
    const discountedPrice = item.price - (item.price * item.discountPercentage) / 100;
    return sum + discountedPrice * item.quantity;
  }, 0).toFixed(2);

  return (
    <>
      <div className="max-w-3xl mx-auto px-4 py-4 border-t mt-6 flex justify-between items-center">
        <span className="text-lg font-semibold">Total:</span>
        <span className="text-xl font-bold text-primary">Rs. {total}</span>
      </div>

      <div className="flex justify-end max-w-3xl mx-auto px-4 mt-2">
        <Button className="bg-green-600 hover:bg-green-700 text-white">
          <Link href='/checkout'>
            Proceed to Checkout
          </Link>
        </Button>
      </div>
    </>
  )
}
