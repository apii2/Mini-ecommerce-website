import ProductList from "@/components/ProductList";
import Image from "next/image";
import Link from 'next/link';
import RootLayout from "./layout";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <ProductList />
    </>
  );
}
