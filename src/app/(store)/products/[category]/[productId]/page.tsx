'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Category, Product, productsList, categories } from '@/app/data/products';

const ProductDetails = (props: { params: Promise<{ category: string, productId: string }> }) => {

  const [product, setProduct] = useState<Product | null>(null);
  const [category, setCategory] = useState<Category | null>(null);
  const [quantity, setQuantity] = useState<number>(2);

  const incrementQuantity = () => {
    setQuantity((prevQuantity) => {
      return prevQuantity + 1;
    });
  }

  const decrementQuantity = () => {
    setQuantity((prevQuantity) => {
      return prevQuantity - 1;
    });
  }

  useEffect(() => {
    const getProductDetails = async () => {
      const resolvedParams = await props.params;
      const { productId } = resolvedParams;
      const requiredProduct = productsList.find((product) => {
        return productId.toLowerCase() === product.id
      });
      setProduct(requiredProduct || null);
    };
    const getCategoryDetails = async () => {
      const resolvedParams = await props.params;
      const { category } = resolvedParams;
      const requiredCategory = categories.find((cat) => {
        return category.toLowerCase() === cat.slug;
      });
      setCategory(requiredCategory || null);
    };
    getProductDetails();
    getCategoryDetails();
  }, [props.params]);

  const categoryColor = category ? category.color : '#ccc';

  return (
    <div className='max-w-7xl mx-auto px-4 py-12'>
      <div className='border-b border-gray-200 mb-12 pb-6'>
        <Link href={`/products/${category?.slug}`} className="inline-flex items-center text-[#00798c] hover:text-[#003d5b] transition-colors">
          <i className="bx bx-left-arrow-alt mr-2 text-xl"></i> Back to Category Page
        </Link>
      </div>
      <div className='flex flex-col md:flex-row bg-white rounded-2xl overflow-hidden shadow-lg'>
        <div className='md:w-1/2 bg-gray-50 p-8 flex items-center justify-center relative'>
          <div className='relative w-full h-[300px] md:[400px]'>
            <Image
              src={product ? product.image : '/images/placeholder.png'}
              alt={product ? product.name : 'Product Image'}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className='object-contain'
            />
          </div>
        </div>
        <div className='md:w-1/2 p-8 md:p-12 space-y-6'>
          <div>
            <h1 className='text-3xl font-bold text-[#003d5b] mb-2'>{product ? product.name : null}</h1>
            <p className='text-xl font-semibold mb-4' style={{ color: categoryColor }}>${product ? product.price : null}</p>
            <p className='leading-relaxed text-[#30638e]'>
              {product ? product.description : null}
            </p>
          </div>
          <div className='pt-6 border-t border-gray-100'>
            <div className='mb-6'>
              <label className='block text-[#003d5b] font-medium mb-2'>Quantity</label>
              <div className='flex items-center'>
                <button className='size-10 rounded-l-lg border border-gray-300 flex items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors disabled:opacity-[0.3]' onClick={decrementQuantity} disabled={quantity <= 1}>
                  <i className='bx bx-minus text-gray-600 text-lg'></i>
                </button>
                <input type='text' value={quantity} readOnly className='w-14 h-10 border-t border-b border-gray-300 text-center text-[#003d5b] font-medium outline-none' />
                <button className='size-10 rounded-r-lg border border-gray-300 flex items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors' onClick={incrementQuantity}>
                  <i className='bx bx-plus text-gray-600 text-lg'></i>
                </button>
              </div>
            </div>
          </div>
          <div className='flex flex-col sm:flex-row gap-4'>
            <button className='flex-1 px-8 py-3 rounded-full flex items-center justify-center font-medium text-white cursor-pointer transition-colors' style={{ backgroundColor: categoryColor }}>
              <i className='bx bx-cart text-2xl mr-2'></i>
              Add to Cart
            </button>
            <Link href="/cart" className='flex-1 px-8 py-3 bg-gray-100 hover:bg-gray-200 text-[#003d5b] font-medium rounded-full flex items-center justify-center'>
              Go to Cart
            </Link>
          </div>
        </div>
      </div>

    </div>
  )
}

export default ProductDetails;