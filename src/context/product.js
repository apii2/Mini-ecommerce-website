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
        const newData = data.data.data.map(dat=>(
          {...dat, quantity: 1, selected: false}
        ))
        console.log(newData);
        setProducts(newData);
      } catch (error) {
        console.error(error);
      }
    }
    load();
  },[])

  return (
    <ProductContext.Provider value={{products, setProducts}}>
      {children}
    </ProductContext.Provider>
  )
}

export {ProductContext, ProductProvider};