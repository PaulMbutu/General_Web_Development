import React from 'react'
import Image from "next/image"
import { Category } from '@/lib/type'
import { BASE_URL } from '@/lib/api'
import Link from 'next/link'

const CategoryCard = ({cat}:{cat:Category}) => {
  return (
    // 1. Added 'group' and 'block' to the Link
    <Link href={`/categories/${cat.slug}`} className="block group"> 
      {/* 2. Changed w-55 to w-56 (valid Tailwind class) */}
      <div className="w-56 h-40 bg-white rounded-2xl flex flex-col items-center justify-center p-4 shadow-md 
                      transition-all duration-300 ease-out 
                      hover:scale-105 group-hover:shadow-2xl group-hover:-translate-y-2 cursor-pointer">
        
        {/* 3. Changed scale-250 to group-hover:scale-110 */}
        <div className="bg-gray-100 p-3 rounded-full transition-transform duration-300 group-hover:scale-110">
          <Image 
            src={`${BASE_URL}${cat.image}`} 
            alt={cat.name} 
            width={40} 
            height={40} 
            unoptimized={true} 
          />
        </div>

        {/* Category Name */}
        <p className="font-semibold mt-3 text-gray-800 transition-colors duration-300 group-hover:text-blue-600">
          {cat.name}
        </p>
      </div>
    </Link>
  )
}

export default CategoryCard