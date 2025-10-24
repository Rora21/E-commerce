import React from 'react'
import Productcard from './productcard'
import image1 from '../assets/image/background.jpg'
import image2 from '../assets/image/pillow.jpg'
import image3 from '../assets/image/rora.jpg'
import image4 from '../assets/image/image.jpg'
import image5 from '../assets/image/cushion.jpg'

function Products() {
  const products=[
 {id:1,img:image1,name:'pillow',price:200},
 {id:2,img:image2,name:'cushion',price:300},
 {id:3,img:image3,name:'rora',price:400},
 {id:4,img:image4,name:'ali',price:500},
 {id:5,img:image5,name:'nadi',price:600},
  ];

  return (
    <div>
     
    { products.map(function(p,id) =>(
      <Productcard
      key={id}
      image={p.img}
      name={p.name}
      price={p.price}

      
      />

     ))}
    </div>
  )
}

export default Products
