import React from 'react'

const CategoryCardSkeleton = () => {
  return (
    // Updated to w-56 h-40 to match the real card
    <div className='w-56 h-40 bg-white rounded-2xl flex flex-col items-center justify-center p-4 shadow-sm border border-gray-100'>
        {/* Icon Skeleton */}
        <div className='w-12 h-12 bg-gray-300 rounded-full animate-pulse'></div>

        {/* Category Name Skeleton */}
        <div className='w-24 h-4 mt-3 bg-gray-300 rounded-md animate-pulse'></div>
    </div>
  )
}

export default CategoryCardSkeleton