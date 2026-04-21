import React from 'react'
import Hero from '@/components/home/Hero'
import CategorySection from '@/components/home/CategorySection'
import ProductSection from '@/components/home/ProductSection'
const HomePage = () => {
  return (
          <>
            <Hero/>
            <CategorySection/>
            <ProductSection title='Featured products'/>
          </>
  )
}

export default HomePage
