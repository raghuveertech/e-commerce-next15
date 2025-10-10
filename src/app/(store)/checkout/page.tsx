'use client';

import React, { useContext, useState } from 'react';
import './cart.scss'
import Image from 'next/image';
import Link from 'next/link';
import { CartContext } from '@/app/CartContextProvider';

const CheckoutPage = () => {

  const { cart } = useContext(CartContext);

  let subTotal = 0;
  let deliveryCharges = 0;

  cart.forEach((item: any) => {
    subTotal += (item.qty * item.price)
  });

  if (subTotal < 500) {
    deliveryCharges = 50;
  }

  return (
    <div className='cart-container'>
      <div className='border-b border-gray-200 mb-12 pb-6'>
        <Link href="/cart" className="inline-flex items-center text-[#00798c] hover:text-[#003d5b] transition-colors">
          <i className="bx bx-left-arrow-alt mr-2 text-xl"></i> Back to Cart
        </Link>
      </div>

      <div className='cart-footer'>
        <p className='sub-total'><label>Subtotal:</label> <span className='price'>${subTotal}</span></p>
        <p className='sub-total'><label>Delivery Charges:</label> <span className='price'>${deliveryCharges}</span></p>
        <p className='sub-total'><label>Total:</label> <span className='price'>${subTotal + deliveryCharges}</span></p>
        <Link href={'/payment'} className='button'>Proceed to Payment</Link>
      </div>

    </div>
  )
}
export default CheckoutPage;