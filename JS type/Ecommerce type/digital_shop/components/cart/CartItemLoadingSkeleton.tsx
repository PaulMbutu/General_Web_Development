import React from 'react'
import CartItemSkeleton from './CartItemSkeleton'
import CartSummarySkeleton from './CartSummarySkeleton'


const CartItemLoadingSkeleton = () => {
  return (
    <div className='main-max-width padding-x mx-auto py-9'>
        <h1 className='font-semibold text-2xl text-gray-800 mb-6'>
            Cart
        </h1>
        <div className='flex flex-wrap gap-6 lg:gap-8 justify-between w-full'>
            {/* Cartitem */}
            <div className='w-150 max-lg:w-full boarder boarder-gray-200 shadow-sm rounded-lg bg-white overflow-hidden'>
                <div className='max-h-100 overflow-y-auto px-6 py-4'>
                    <CartItemSkeleton />
                    <CartItemSkeleton />
                    <CartItemSkeleton />
                    <CartItemSkeleton />
                </div>
            </div>
            {/* Cart summary*/}
            <CartSummarySkeleton />
        </div>      
    </div>
  )
}

export default CartItemLoadingSkeleton
