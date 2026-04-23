import React, { Suspense } from 'react'
import Hero from '@/components/home/Hero'
import CategorySection from '@/components/home/CategorySection'
import ProductSection from '@/components/home/ProductSection'
import CategorySectionSkeleton from '@/components/home/CategorySectionSkeleton'
import ProductSectionSkeleton from '@/components/home/ProductSectionSkeleton'
const HomePage = () => {
  return (
          <>
            <Hero/>

            <Suspense fallback={<CategorySectionSkeleton/>}>
              <CategorySection/>
            </Suspense>

            <Suspense fallback={<ProductSectionSkeleton/>}>
              <ProductSection title='Featured products'/>
            </Suspense>
            
          </>
  )
}

export default HomePage
