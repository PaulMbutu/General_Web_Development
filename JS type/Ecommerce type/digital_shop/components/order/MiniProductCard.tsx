import React from 'react'
import Image from "next/image"
import { OrderItemType } from '@/lib/type'
import { BASE_URL } from '@/lib/api'

const MiniProductCard = ({item}:{item: OrderItemType}) => {
  return (
    <div className="w-55 rounded-lg shadow-md bg-white flex flex-col items-center gap-3 px-4 py-5 transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer">
    <div className="w-40 h-40 rounded-md overflow-hidden">
      <Image
        src={item?.product?.image ? `${BASE_URL}${item.product.image}` : "/smart watch.jpg"}
        className="object-cover w-full h-full"
        width={180}
        height={180}
        alt="thumbnail"
      />
    </div>
  
    {/* Product Name */}
    <p className="text-center text-base font-medium text-gray-800">{item?.product.name}</p>
  
    {/* Product Price */}
    <p className="text-[16px] text-center font-bold text-black">Ksh {item?.product.price}</p>
  
  </div>
  
  )
}

export default MiniProductCard