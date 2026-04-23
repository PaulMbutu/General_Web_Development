import React from 'react'
import Image from "next/image"
import { Category } from '@/lib/type'
import { BASE_URL } from '@/lib/api'

const CategoryBtn = ({cat}:{cat: Category}) => {
  return (
    <button className="cat-btn">
      {/* Icon Container */}
      <div className="w-10 h-10 bg-white rounded-full overflow-hidden flex items-center justify-center shadow-sm">
        <Image
          src={`${BASE_URL}${cat.image}`}
          width={30}
          height={30}
          className="object-contain"
          alt="thumbnail"
        />
      </div>

      {/* Category Name */}
      <p className="font-semibold text-gray-800 text-[16px]">{cat.name}</p>
    </button>
  )
}

export default CategoryBtn