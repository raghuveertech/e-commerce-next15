import { categories, productsList } from '@/app/data/products';
import Image from 'next/image';
import Link from 'next/link';

export default function ProductsPage() {
  const getCategoryImage = (slug: string) => {
    const firstProduct = productsList.find((product) => {
      return product.category === slug;
    });
    return firstProduct?.image || '/images/placeholder.png';
  }
  return (
    <div className='max-w-7xl mx-auto px-4 pt-24 mb-16'>
      {/* Categories Grid*/}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
        {categories.map((category) => (
          <Link key={category.slug} href="/products" className='group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg hover:translate-y-[-5px] border-b-4 relative transition-all' style={{borderColor: category.color }}>            
            <div className='h-48 relative overflow-hidden bg-gray-100'>
              <Image 
                src={getCategoryImage(category.slug)}
                alt={category.name}
                fill
                sizes="(max-width: 786px) 100vw, (max-width: 1200px) 50vw, 25vw"
                className='object-contain p-4 group-hover:scale-105 transition-transform duration-300'
              />
              <div className='absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent'></div>
            </div>
            <div className='p-6'>
              <h3 className='text-xl font-bold mb-2 text-[#003d5b] group-hover:text-[#00798c] transition-colors' style={{color: category.color}}>{category.name}</h3>
              <p className='text-sm text-[#30638e] mb-4'>{category.description}</p>
              <div className='flex justify-end items-center text-sm font-medium transition-colors' style={{color: category.color}}>
                <span className='mr-1'>View Products</span>
                <i className='bx bx-chevron-right text-xl transform group-hover:translate-x-1 transition-transform'></i>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className='mt-12 pt-6 border-t border-gray-200'>
        <Link href="/" className='inline-flex items-center text-[#00798c] hover:text-[#003d5b] font-medium transition-colors'>
          <i className='bx bx-arrow-back mr-2'></i> Back to Home
        </Link>
      </div>
    </div>
  );
}
