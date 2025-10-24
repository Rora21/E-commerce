import React from 'react'

function Productcard({image, name, price}) {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transform hover:-translate-y-4 transition-all duration-300 p-2 flex flex-col items-center gap-4">
    
      <img src={image} alt="product" className='w-full h-100'/>
      <p className='font-bold text-gray-800 text-xl'>{name}</p>
      <h2 className='text-[#83723A] text-2xl font-semibold'>${price}</h2>
      <button className='bg-[#83723A] px-4 py-2 rounded-2xl text-white hover:opacity-80'>Add to cart</button>
 

      

      
    </div>
  )
}

export default Productcard
