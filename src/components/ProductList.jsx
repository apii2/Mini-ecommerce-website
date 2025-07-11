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
import ProductThumbnail from '@/asset/images/download.jpeg'
import Image from "next/image"
import Link from "next/link"

export default function ProductList() {
  const products = useContext(ProductContext);

  return (
    <div>
      {products.map(item=>(
        <Card key={item.id}>
          <Link href={`/product/${item.id}`}>
            <CardContent>
              <Image src={ProductThumbnail} alt={item.title+'image'} width='40' height='40' />
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
              <CardFooter>Rs. {item.price}</CardFooter>
            </CardContent>
          </Link>
        </Card>
      ))}
    </div>
  )
}
