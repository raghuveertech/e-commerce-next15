'use client';
import { createContext, ReactNode, useState } from 'react';

let cartData: any = null;

export const CartContext = createContext(cartData);

interface CartContextProviderProps {
  children: ReactNode;
}

const CartContextProvider = ({ children }: CartContextProviderProps) => {
  const [cart, setCart] = useState<any>([]);
  return <CartContext.Provider value={{ cart: cart, setCart: setCart }}>
    {children}
  </CartContext.Provider>
}

export default CartContextProvider;