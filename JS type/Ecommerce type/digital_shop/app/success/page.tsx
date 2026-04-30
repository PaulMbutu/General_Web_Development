import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    
    <section className='bg-linear-to-br from-green-50 to-green-100 px-6 py-20 text-center'>
      <div className='max-w-3xl mx-auto space-y-8'>
        <h1 className='text-4xl md:text-5xl font-semibold text-green-900 leading-snug'>
          Thak you for your purchase!
        </h1>
        <p className='text-lg md:text-xl text-green-800 max-w-2xl mx-auto'>
          Your order was placed successfully. We truly appreciate your business and will send you updates regarding your order.
        </p>
        <div className='flex flex-col sm:flex-row justify-center gap-4 pt-4'>
          <Link href="/profile" className='inlline-block px-6 py-3 rounded-full bg-green-700 text-white text-base font-medium'>
            View Order
          </Link>
          <Link href="/" className='inlline-block px-6 py-3 rounded-full bg-black text-white text-base font-medium hover:bg-red'>
            Continue Shopping
          </Link>   
        </div>
      </div>

    </section>
  )
}

export default page
