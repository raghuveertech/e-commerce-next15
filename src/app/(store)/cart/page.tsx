'use client';

import React, { useContext } from 'react';
import './cart.scss'
import Image from 'next/image';
import Link from 'next/link';
import { CartContext } from '@/app/CartContextProvider';

const CartPage = () => {

  const { cart, setCart } = useContext(CartContext);

  return (
    <div className='cart-container'>
      <div className='cart-list'>
        {
          cart.map((item: any) => {
            return <div className='cart-item'>
              <div className='product-image'>
                <Image src={item.image ? item.image : '/images/placeholder.png'} alt={item.name} width={200} height={100} />
              </div>
              <div className='product-details'>
                <p className='product-title'>{item.name}</p>
                <label className='block text-[#003d5b] font-medium mb-2'>Quantity</label>
                <div className='flex items-center'>
                  <button className='size-10 rounded-l-lg border border-gray-300 flex items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors disabled:opacity-[0.3]'>
                    <i className='bx bx-minus text-gray-600 text-lg'></i>
                  </button>
                  <input type='text' value={item.qty} readOnly className='w-14 h-10 border-t border-b border-gray-300 text-center text-[#003d5b] font-medium outline-none' />
                  <button className='size-10 rounded-r-lg border border-gray-300 flex items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors'>
                    <i className='bx bx-plus text-gray-600 text-lg'></i>
                  </button>
                </div>
              </div>
              <div className='product-price'>
                <p>${item.price * item.qty}</p>
              </div>
            </div>
          })
        }
      </div>

      <div className='cart-footer'>
        <p className='sub-total'><label>Subtotal:</label> <span className='price'>$200</span></p>
        <Link href={'/checkout'} className='button'>Proceed to Checkout</Link>
      </div>

    </div>
  )
}

export default CartPage;