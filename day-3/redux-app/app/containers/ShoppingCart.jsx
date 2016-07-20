import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addToCart } from '../actions'
import ShoppingCartPresent  from '../components/ShoppingCart.jsx'

function mapStateToProps(state, ownProps) {
  return {
    shoppingCart: state.shoppingCart
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onAddClick: () => {
      let id = 4
      dispatch(addToCart(id))
    }
  }
}


let ShoppingCart = connect(
  mapStateToProps,
  mapDispatchToProps
)(ShoppingCartPresent)

export default ShoppingCart
