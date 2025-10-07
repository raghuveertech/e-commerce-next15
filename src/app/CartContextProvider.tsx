'use client';
import { createContext, ReactNode, useState } from 'react';

let cartData: any = null;

export const CartContext = createContext(cartData);

interface CartContextProviderProps {
  children: ReactNode;
}

const CartContextProvider = ({ children }: CartContextProviderProps) => {
  const [cart, setCart] = useState<any>([{
    name: 'Smartphone Pro X',
    qty: 2,
    price: 999,
    image: '/images/product001.png'
  }, {
    name: 'Ultra HD 4K TV',
    qty: 3,
    price: 1299,
    image: '/images/product004.png',
  },
  {
    name: 'Smart OLED TV',
    qty: 3,
    price: 1599,
    image: '/images/product005.png',
  }]);
  return <CartContext.Provider value={{ cart: cart, setCart: setCart }}>
    {children}
  </CartContext.Provider>
}

export default CartContextProvider;