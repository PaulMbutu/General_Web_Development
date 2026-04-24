import React from 'react'

export default function Loading() {
  return (
    <div className='bg-gray-50 padding-x py-10 flex items-start flex-wrap gap-12 main-max-width mx-auto animate-pulse'>
      {/* Image Skeleton */}
      <div className='w-87.5 h-100 relative overflow-hidden rounded-lg shadow-sm border border-gray-200' />

      {/* Info Skeleton */}
      <div className='flex flex-1 flex-col gap-6 max-w-125 max-md:w-full'>
        {/* Title and Price Skeleton */}
        <div className='flex flex-col gap-3'>
          <div className='h-8 w-3/4 bg-gray-200 rounded-md' />
          <div className='h-6 w-1/4 bg-gray-200 rounded-md' />
        </div>

        {/* Description Skeleton */}
        <div>
          <div className='h-5 w-1/3 bg-gray-200 rounded mb-3' />
          <div className='space-y-2'>
            <div className='h-4 w-full bg-gray-200 rounded' />
            <div className='h-4 w-[90%] bg-gray-200 rounded' />
            <div className='h-4 w-[85%] bg-gray-200 rounded' />
            <div className='h-4 w-[95%] bg-gray-200 rounded' />
          </div>
        </div>

        {/* Button Skeleton */}
        <div className='flex py-3 items-center gap-4 flex-wrap'>
          <div className='w-50 max-md:w-full h-10.5 bg-gray-200 rounded-md' />
          <div className='w-50 max-md:w-full h-10.5 bg-gray-200 rounded-md' />
        </div>
      </div>
    </div>
  )
}

