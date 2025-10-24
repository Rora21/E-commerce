import React from 'react'
import Productcard from './productcard'
import image1 from '../assets/image/background.jpg'
import image2 from '../assets/image/pillow.jpg'
import image3 from '../assets/image/rora.jpg'
import image4 from '../assets/image/image.jpg'
import image5 from '../assets/image/cushion.jpg'
import { CartContext } from './CartContext'

function Products () {
  
  
  
  const products=[
 {id:1,img:image1,name:'pillow',price:200},
 {id:2,img:image2,name:'cushion',price:300},
 {id:3,img:image3,name:'rora',price:400},
 {id:4,img:image4,name:'ali',price:500},
 {id:5,img:image5,name:'nadi',price:600},
  ];

  return (
    <>
    <h1 className='text-3xl font-bold text-center text-[#83723A] my-8'>Our Products</h1>
    <p className='text-center text-gray-600 mb-12 max-w-2xl mx-auto'>Each piece in our collection is thoughtfully designed to combine beauty and comfort.
From handcrafted cushions and plush pillows to stylish sofa sets, every detail reflects our commitment to quality and design.

Our fabrics are carefully chosen for their texture and durability, ensuring your home not only looks elegant but feels inviting.

Whether you want to refresh your living space or find the perfect accent for your interior, Flamingo Designs brings you timeless comfort — made with passion, inspired by home. </p>
    <div className='grid grid-cols-1 md:grid-cols-3 sm:grid-cols-3 gap-4 p-2 auto-cols-auto'>
     
    { products.map((p,id) =>(
      <Productcard
      key={id}
      image={p.img}
      name={p.name}
      price={p.price}

      
      />

     ))}
    </div>
    </>
  )
}

export default Products
