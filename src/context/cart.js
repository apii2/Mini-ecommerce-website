import { createContext, useState } from 'react';


const CartContext = createContext();

function CartProvider({children}){
  const [cartData, setCartData] = useState([]);

  return (
    <CartContext.Provider value={{cartData, setCartData}}>
      {children}
    </CartContext.Provider>
  )
}

export {CartContext, CartProvider};