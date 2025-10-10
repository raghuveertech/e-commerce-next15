'use client';

import React, { useContext, useState } from 'react';
import './cart.scss'
import Image from 'next/image';
import Link from 'next/link';
import { CartContext } from '@/app/CartContextProvider';

const CartPage = () => {

  const { cart, setCart } = useContext(CartContext);


  const incrementQty = (productId: string) => {
    const cartItems = cart.map((item: any) => {
      if (productId === item.productId) {
        item.qty = item.qty + 1
      }
      return item;
    });
    setCart(cartItems);
  }

  let subTotal = 0;

  cart.forEach((item: any) => {
    subTotal += (item.qty * item.price)
  })

  return (
    <div className='cart-container'>
      <div className='border-b border-gray-200 mb-12 pb-6'>
        <Link href="/products" className="inline-flex items-center text-[#00798c] hover:text-[#003d5b] transition-colors">
          <i className="bx bx-left-arrow-alt mr-2 text-xl"></i> Back to All Categories
        </Link>
      </div>
      <div className='cart-list'>
        {
          cart.map((item: any) => {
            return <div className='cart-item' key={item.productId}>
              <div className='product-image'>
                <Link href={`/products/${item.category}/${item.productId}`}>
                  <Image src={item.image ? item.image : '/images/placeholder.png'} alt={item.name} width={200} height={100} />
                </Link>
              </div>
              <div className='product-details'>
                <p className='product-title'>
                  <Link href={`/products/${item.category}/${item.productId}`}>{item.name} {item.category}</Link></p>
                <label className='block text-[#003d5b] font-medium mb-2'>Quantity</label>
                <div className='flex items-center'>
                  <button className='size-10 rounded-l-lg border border-gray-300 flex items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors disabled:opacity-[0.3]'>
                    <i className='bx bx-minus text-gray-600 text-lg'></i>
                  </button>
                  <input type='text' value={item.qty} readOnly className='w-14 h-10 border-t border-b border-gray-300 text-center text-[#003d5b] font-medium outline-none' />
                  <button className='size-10 rounded-r-lg border border-gray-300 flex items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors' onClick={() => incrementQty(item.productId)}>
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
        <p className='sub-total'><label>Subtotal:</label> <span className='price'>${subTotal}</span></p>
        <Link href={'/checkout'} className='button'>Proceed to Checkout</Link>
      </div>

    </div>
  )
}

export default CartPage;