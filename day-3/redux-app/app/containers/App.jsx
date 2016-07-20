import React, { Component } from 'react'
import Products from './Products.jsx'
import ShoppingCart from './ShoppingCart.jsx'

export default class App extends Component {
  render() {
    return (
      <div>
        <Products/>
        <ShoppingCart/>
      </div>
    )
  }
}
