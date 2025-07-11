import ProductList from "@/components/ProductList";
import Image from "next/image";
import Link from 'next/link';
import RootLayout from "./layout";

export default function Home() {
  return (
    <>
      <ProductList />
    </>
  );
}
