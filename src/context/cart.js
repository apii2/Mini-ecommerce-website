import { createContext, useContext, useEffect, useState } from 'react';
import { ProductContext } from './product';


const CartContext = createContext();

function CartProvider({children}){
  const {products} = useContext(ProductContext)
  const [cartData, setCartData] = useState([]);

  useEffect(()=>{
    const selectedItems = products.filter(item => item.selected);
    setCartData(selectedItems);
  }, [products]);

  return (
    <CartContext.Provider value={{cartData, setCartData}}>
      {children}
    </CartContext.Provider>
  )
}

export {CartContext, CartProvider};