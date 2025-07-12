import { createContext, useContext, useEffect, useState } from 'react';
import { ProductContext } from './product';

const CartContext = createContext();

function CartProvider({ children }) {
  const { products } = useContext(ProductContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const savedCart = localStorage.getItem('cartData');
    if (savedCart) {
      try {
        setCartData(JSON.parse(savedCart));
      } catch (err) {
        console.error("Invalid cartData in localStorage", err);
      }
    }
  }, []);

  useEffect(() => {
    const selectedItems = products.filter((item) => item.selected);
    setCartData(selectedItems);
  }, [products]);

  useEffect(() => {
    localStorage.setItem('cartData', JSON.stringify(cartData));
  }, [cartData]);

  return (
    <CartContext.Provider value={{ cartData, setCartData }}>
      {children}
    </CartContext.Provider>
  );
}

export { CartContext, CartProvider };
