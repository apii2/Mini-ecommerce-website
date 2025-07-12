'use client'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ProductContext } from "@/context/product"
import { useContext } from "react"
import Link from "next/link"
import { Button } from "./ui/button"

export default function ProductList() {
  const {products} = useContext(ProductContext);

  return (
    <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
      {products.map(item=>(
        <Card key={item.id}>
          <Link href={`/product/${item.id}`}>
            <CardContent>
              <img src={item.thumbnail} alt={item.title+'image'} className="w-full aspect-square object-cover rounded-xl mb-4" />
              <CardTitle className="truncate max-w-[200px] sm:max-w-[250px] md:max-w-[300px] lg:max-w-[400px] mb-2">
                {item.title}
              </CardTitle>
              <CardDescription className="line-clamp-2">{item.description}</CardDescription>
              <div className="flex items-center justify-between mt-3">
                <span className="text-gray-500 line-through text-base">
                  Rs. {item.price}
                </span>
                <span className="text-base font-bold text-green-600">
                  Rs. {(item.price - (item.price * item.discountPercentage / 100)).toFixed(2)}
                </span>

                <Button variant="outline" size="sm">View</Button>
              </div>
            </CardContent>
          </Link>
        </Card>
      ))}
    </div>
  )
}
