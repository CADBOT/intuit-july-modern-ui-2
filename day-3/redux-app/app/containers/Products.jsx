import React, { Component } from 'react'
import { connect } from 'react-redux'
import ProductsPresent from '../components/Products.jsx'

                         /*redux state*/
function mapStateToProps(state, ownProps) {
  return {
    products: state.products
  }
}

function mapDispatchToProps(dispatch, ownProps) {

}
let Products = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsPresent)

export default Products
