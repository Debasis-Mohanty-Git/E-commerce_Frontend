import React from 'react'

function HomeCard({product}) {
  return (
    
    <div className="cursor-pointer flex flex-col items-center bg-white rounded-lg 
    overflow-hidden w-[14rem] mx-4 shadow-md hover:shadow-lg transition-shadow duration-300">

      <div className="h-[14rem] w-full">
        <img
          src={product.imageUrl}
          alt=""
          className="object-cover object-top w-full h-full"
        />
      </div>

      <div className="p-4 text-center">
        <h3 className='text-lg font-semibold text-gray-800'>{product.brand}</h3>
        <p className='mt-2 text-sm text-gray-500'>{product.title}</p>
      </div>
    </div>
  )
}

export default HomeCard
