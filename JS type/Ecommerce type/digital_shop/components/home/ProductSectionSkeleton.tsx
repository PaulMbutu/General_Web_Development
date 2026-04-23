import React from 'react'
import ProductCardSkeleton from './ProductCardSkeleton'

const ProductSectionSkeleton = () => {
  return (
    <section className='main-max-width padding-x mx-auto my-16 animate-pulse'>
        {/* Title Skeleton*/}
        <div className='my-9 h-6 w-56 bg-gray-300 mx-auto rounded-md'></div>
        {/* Product Skeleton */}
        <div className='flex-center flex-wrap gap-4'>
            <ProductCardSkeleton />
            <ProductCardSkeleton />
            <ProductCardSkeleton />
            <ProductCardSkeleton />
        </div>
    </section>
  )
}

export default ProductSectionSkeleton
