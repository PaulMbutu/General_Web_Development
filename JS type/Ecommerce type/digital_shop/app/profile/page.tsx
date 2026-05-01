import ProductSectionSkeleton from '@/components/home/ProductSectionSkeleton'
import AddressForm from '@/components/order/AddressForm'
import AddressFormContainer from '@/components/order/AddressFormContainer'
import MiniProductCard from '@/components/order/MiniProductCard'
import OrderContainer from '@/components/order/OrderContainer'
import WishlistSection from '@/components/order/WishlistSection'
import Modal from '@/components/uiComponents/Modal'
import { Button } from '@base-ui/react'
import React, { Suspense } from 'react'

const ProfilePage = () => {
  return (
    <>
      <div className='main-max-width padding-x py-6 flex-center mx-auto'>
          <AddressFormContainer/>
      </div>
      <Suspense fallback={<ProductSectionSkeleton/>}>
        <OrderContainer />
      </Suspense>
          
          <WishlistSection />
    </>
  )
}

export default ProfilePage