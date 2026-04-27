import React from 'react'

const CartItemSkeleton = () => {
  return (
    <div className="flex items-center justify-between gap-6 border-b border-gray-200 py-4 mb-6 w-full flex-wrap bg-white px-4 rounded-lg shadow-sm animate-pulse">
    
      {/* Product Image Skeleton */}
      <div className="w-17.5 h-17.5 rounded-lg bg-gray-200" />
    
      {/* Product Details Skeleton - Name and Price */}
      <div className="flex-1 min-w-30 space-y-2">
        <div className="h-5 bg-gray-200 rounded w-3/4" />
        <div className="h-4 bg-gray-200 rounded w-1/4" />
      </div>
    
      {/* Quantity Selector Skeleton */}
      <div className="flex items-center justify-center gap-2 bg-gray-100 px-2 py-1 rounded-md">
        <div className="w-10 h-10 bg-gray-200 rounded-md" />
        <div className="w-12.5 h-10 bg-gray-200 rounded-md" />
        <div className="w-10 h-10 bg-gray-200 rounded-md" />
      </div>
    
      {/* Subtotal Price Skeleton */}
      <div className="h-6 bg-gray-200 rounded w-20" />
    
      {/* Remove Item Button Skeleton */}
      <div className="w-10 h-10 bg-gray-200 rounded-md" />
    
      {/* Update Cart Button Skeleton */}
      <div className="h-10 bg-gray-200 rounded w-32" />
   
    </div>
  )
}

export default CartItemSkeleton