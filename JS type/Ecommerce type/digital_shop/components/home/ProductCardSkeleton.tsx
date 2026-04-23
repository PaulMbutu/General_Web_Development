import React from 'react'

const ProductCardSkeleton = () => {
  return (
    <div className="w-65 rounded-lg shadow-md bg-white flex flex-col items-center gap-4 px-5 py-6 animate-pulse">
        {/* Image Skeleton*/}
        <div className="w-50 h-50 bg-gray-300 rounded-md"></div>

        {/* Product Name Skeleton*/}
        <div className='w-36 h-4 bg-gray-300 rounded-md'></div>

        {/* Product Price Skeleton*/}
        <div className='w-20 h-5 bg-gray-300 rounded-md'></div>   
      
    </div>
  )
}

export default ProductCardSkeleton
