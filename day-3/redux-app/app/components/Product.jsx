import React from 'react'

let ProductPresentational = ({name, cost, category}) => (
  <div>
    <h3>{name}</h3>
    <p>Cost: {cost} Category: {category}</p>
  </div>
)

export default ProductPresentational
