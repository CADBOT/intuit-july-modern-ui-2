import React from 'react'
import Product from './Product.jsx'

let Products = ({products}) => (
  <section>
    <h2>Our products</h2>
    {products.map(product => <Product key={product.id} {...product} />)}
  </section>
)

export default Products
