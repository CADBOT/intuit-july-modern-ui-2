import React, { Component } from 'react'

let ShoppingCartPresent = ({shoppingCart, onAddClick}) => (
  <div>
    <ul>
      {shoppingCart.map(item => <li>{item}</li>)}
    </ul>
    <button onClick={onAddClick}>Add Item</button>
  </div>
)

export default ShoppingCartPresent 
