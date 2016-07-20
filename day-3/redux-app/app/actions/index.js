import {
  ADD_TO_CART, 
  REMOVE_FROM_CART, 
  CHANGE_CATEGORY} from '../constants/actionTypes.js'

function addToCart(productId) {
  return {
    type: ADD_TO_CART,
    productId
  }
}

function removeFromCart(productId) {
  return {
    type: REMOVE_FROM_CART,
    productId
  }
}

function setCategory(category) {
  return {
    type: CHANGE_CATEGORY,
    category
  }
}

export {addToCart, removeFromCart, setCategory}
