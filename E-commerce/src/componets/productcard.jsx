import React from 'react'

function Productcard({image, name, price}) {
  return (
    <div>
      <img src={image} alt="product" />
      <p>{name}</p>
      <h2>${price}</h2>

      
    </div>
  )
}

export default Productcard
