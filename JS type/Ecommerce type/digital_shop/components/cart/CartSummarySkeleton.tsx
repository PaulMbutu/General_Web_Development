import React from 'react'

const CartSummarySkeleton = () => {
  return (
    <div className="w-100 max-lg:w-full border border-gray-200 rounded-lg shadow-md bg-white px-8 py-6 animate-pulse">
      {/* Title Skeleton */}
      <div className="h-8 bg-gray-200 rounded w-2/3 mb-6" />

      {/* Subtotal Row Skeleton */}
      <div className="w-full flex items-center justify-between py-2">
        <div className="h-5 bg-gray-200 rounded w-20" />
        <div className="h-5 bg-gray-200 rounded w-16" />
      </div>

      {/* Tax Row Skeleton */}
      <div className="w-full flex items-center justify-between py-2">
        <div className="h-5 bg-gray-200 rounded w-28" />
        <div className="h-5 bg-gray-200 rounded w-16" />
      </div>

      {/* Divider */}
      <hr className="my-4 border-gray-300" />

      {/* Total Row Skeleton */}
      <div className="w-full flex items-center justify-between py-2">
        <div className="h-6 bg-gray-200 rounded w-16" />
        <div className="h-6 bg-gray-200 rounded w-20" />
      </div>

      {/* Checkout Button Skeleton */}
      <div className="h-12 bg-gray-200 rounded-lg w-full mt-6" />
    </div>
  )
}

export default CartSummarySkeleton