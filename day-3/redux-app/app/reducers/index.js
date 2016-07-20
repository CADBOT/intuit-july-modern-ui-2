import {combineReducers} from 'redux'
import shoppingCart from './shoppingCart.js'
import activeCategory from './activeCategory.js'
import products from './products.js'

let reducer = combineReducers({
  products, activeCategory, shoppingCart
})

export default reducer
