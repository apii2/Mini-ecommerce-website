'use client'
import React, { createContext, useEffect, useState } from 'react';

const ProductContext = createContext();

function ProductProvider({children}){
  const [products, setProducts] = useState([]);

  useEffect(()=>{
    async function load(){
      const url = 'https://api.freeapi.app/api/v1/public/randomproducts?page=1&limit=10&inc=category%252Cprice%252Cthumbnail%252Cimages%252Ctitle%252Cid&query=mens-watches';
      const options = {method: 'GET', headers: {accept: 'application/json'}};

      try {
        const response = await fetch(url, options);
        const data = await response.json();
        console.log(data.data.data);
        setProducts(data.data.data);
      } catch (error) {
        console.error(error);
      }
    }
    load();
  },[])

  return (
    <ProductContext.Provider value={products}>
      {children}
    </ProductContext.Provider>
  )
}

export {ProductContext, ProductProvider};