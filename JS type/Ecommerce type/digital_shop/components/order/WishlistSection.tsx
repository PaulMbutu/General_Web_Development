import { auth } from '@/auth'
import { getWishlist } from '@/lib/api'
import { HeartOff } from 'lucide-react'
import React from 'react'
import MiniProductCard from './MiniProductCard'
import { WishlistType } from '@/lib/type'

const WishlistSection = async () => {

    const session = await auth()
    const loggedInUserEmail = session?.user?.email
    const wishlists = await getWishlist(loggedInUserEmail)
    console.log("my_wishlists", wishlists)
  if(!wishlists || wishlists.length==0){
  return (
    <section className='main-max-width padding-x mx-auto my-16 text-center bg-white rounded-xl shadow-md'>
      <div className='flex flex-col items-center space-y-4'>
        <div className='bg-red-100 p-4 rounded-full shadow'>
          <HeartOff className='w-8 h-8 text-red-600'/>
        </div>
        <h2 className='text-xl font-semibold text-gray-800'>
          Your wishlist is empty
        </h2>
        <p className='text-gray-500 max-w-md'>
          Looks like you haven't added any items to your wishlist yet. When you do, they will appear here.
        </p>
      </div>
    </section>
  )    
  }
  return (
    <section className='main-max-width mx-auto padding-x my-10'>

        <h2 className='text-center text-3xl font-bold text-gray-800 mb-8 max-sm:text-xl'>
          Your Wishlist
        </h2>

      <div className='flex items-center w-[full] gap-4 px-6 py-6 custom-overflow border border-gray-200 bg-white rounded-lg shadow-sm'>
        {wishlists.map((wishlist: WishlistType) => <MiniProductCard key={wishlist.id} item={wishlist}/>)}
      </div>
    </section>
  )
}

export default WishlistSection
