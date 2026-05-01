import MiniProductCard from '@/components/order/MiniProductCard'
import PurchasedOrder from '@/components/order/PurchasedOrder'
import WishlistSection from '@/components/order/WishlistSection'
import React from 'react'

const ProfilePage = () => {
  return (
    <>

      <PurchasedOrder />

      <h2 className="text-center text-2xl font-bold text-gray-800 mt-2 mb-4 max-sm:text-[16px]">
          Products added to Wishlist
      </h2>
      <section className="main-max-width padding-x mx-auto my-10">
        <div className="flex items-center w-[full] gap-4 px-6 py-6 custom-overflow border border-gray-200 bg-white rounded-lg shadow-sm">

          <WishlistSection />

        </div>
      </section>
    </>
  )
}

export default ProfilePage