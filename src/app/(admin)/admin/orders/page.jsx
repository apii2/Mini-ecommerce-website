'use client'

import { DataTable } from "../data-table";
import { columns } from "../columns";
import { useContext } from "react";
import { CartContext } from "@/context/cart";

export default function page() {
  const {cartData} = useContext(CartContext);

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={cartData} />
    </div>
  )
}
