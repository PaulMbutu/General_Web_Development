import React from 'react'

const loading = () => {
  return (
    <div className="main-max-width mx-auto padding-x py-9">
      {/* Placeholder for title*/}
      <div className="w-40 h-6 bg-gray-300 rounded-lg mx-auto mb-4 animate-pulse"></div>

      {/* Category Buttons Skeleton */}
      <div className="flex-center flex-wrap my-6 gap-4">
        <div className="w-62.5 h-12.5 bg-gray-300 rounded-lg animate-pulse"></div>
        <div className="w-62.5 h-12.5 bg-gray-300 rounded-lg animate-pulse"></div>
        <div className="w-62.5 h-12.5 bg-gray-300 rounded-lg animate-pulse"></div>
        <div className="w-62.5 h-12.5 bg-gray-300 rounded-lg animate-pulse"></div>
        <div className="w-62.5 h-12.5 bg-gray-300 rounded-lg animate-pulse"></div>
      </div>

      {/* Product Cards Skeleton*/}
      <div className="flex-center flex-wrap my-6 gap-4">
        <div className="w-65 h-75 bg-gray-300 rounded-lg animate-pulse"></div>
        <div className="w-65 h-75 bg-gray-300 rounded-lg animate-pulse"></div>
        <div className="w-65 h-75 bg-gray-300 rounded-lg animate-pulse"></div>
        <div className="w-65 h-75 bg-gray-300 rounded-lg animate-pulse"></div>
        <div className="w-65 h-75 bg-gray-300 rounded-lg animate-pulse"></div>
      </div>
    </div>
  )
}

export default loading
