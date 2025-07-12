'use client'

import { DataTable } from "../data-table";
import { columns } from "../columns";
import { useContext } from "react";
import { ProductContext } from "@/context/product";

export default function page() {
  const {products} = useContext(ProductContext);

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={products} />
    </div>
  )
}
