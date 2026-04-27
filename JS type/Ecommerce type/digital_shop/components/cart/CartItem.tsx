import React from 'react'
import Image from "next/image"
import { Minus, Plus, X } from 'lucide-react'
import Button from '../uiComponents/Button'
import { CartitemType } from '@/lib/type'
import { BASE_URL } from '@/lib/api'

const CartItem = ({cartitem}:{cartitem: CartitemType}) => {

  const sub_total = Number(cartitem.sub_total)
  const formettedSubtotal = sub_total.toFixed(2)

  return (
    <div className="flex items-center justify-between gap-6 border-b border-gray-200 py-4 mb-6 w-full flex-wrap bg-white px-4 rounded-lg shadow-sm">
    
        {/* Product Image */}
        <div className="relative overflow-hidden w-17.5 h-17.5 rounded-lg border border-gray-200">
          <Image
            src={`${BASE_URL}${cartitem.product.image}`}
            alt="cartitem-img"
            className="object-cover"
            fill
            priority
            unoptimized={true}
          />
        </div>
    
        {/* Product Details - Name and Price */}
        <div className="flex-1 min-w-30">
          <p className="font-semibold text-gray-800">{cartitem.product.name}</p>
          <p className="text-gray-600 text-sm mt-1">${cartitem.product.price}</p>
        </div>
    
        {/* Quantity Selector */}
        <div className="flex items-center justify-center gap-2 bg-gray-100 px-2 py-1 rounded-md">
          {/* Decrease Quantity Button */}
          <button 
            className="p-2 rounded-md bg-white border hover:bg-gray-200 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Minus className="w-5 h-5 text-gray-700" />
          </button>
    
          {/* Quantity Display */}
          <div className="w-12.5 h-10 flex items-center justify-center font-medium bg-white border border-gray-300 rounded-md shadow-sm">
            {cartitem.quantity}
          </div>
    
          {/* Increase Quantity Button */}
          <button 
            className="p-2 rounded-md bg-white border hover:bg-gray-200 transition"
          >
            <Plus className="w-5 h-5 text-gray-700" />
          </button>
        </div>
    
        {/* Subtotal Price */}
        <p className="text-lg font-semibold text-gray-800">${formettedSubtotal}</p>
    
        {/* Remove Item Button */}
        <button 
          className="p-2 rounded-md bg-red-50 hover:bg-red-100 transition text-red-500 border border-red-300"
        >
          <X className="w-5 h-5" />
        </button>
    
        {/* Update Cart Button */}
        <Button className='update-item-btn'>
          Update Cart
        </Button>
     
      </div>
  )
}

export default CartItem