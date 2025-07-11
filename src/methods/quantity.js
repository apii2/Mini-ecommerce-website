import { ProductContext } from "@/context/product";
import { useContext } from "react";

export function useCartQuantityHandlers() {
  const {products, setProducts} = useContext(ProductContext);

  const handleDecrease=(id)=>{
    setProducts(prev=>(
      prev.map(item=>{
        return item.id === id ?
          {
            ...item,
            quantity: item.quantity-1
          }:
          item
      })
    ))
  }

  const handleIncrease=(id)=>{
    setProducts(prev=>(
      prev.map(item=>{
        return item.id === id ?
          {
            ...item,
            quantity: item.quantity+1
          }:
          item
      })
    ))
  }

  return {handleDecrease, handleIncrease};
}