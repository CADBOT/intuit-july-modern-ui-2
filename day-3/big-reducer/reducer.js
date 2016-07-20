let createStore = require('redux').createStore

function addToCart(productId) {
  return {
    type: 'ADD_TO_CART',
    productId
  }
}

function removeFromCart(productId) {
  return {
    type: 'REMOVE_FROM_CART',
    productId
  }
}

function setCategory(category) {
  return {
    type: 'CHANGE_CATEGORY',
    category
  }
}

initialState = {
  products: [
    {id: 4, name: 'football', cost: 20, category: 'sports'},
    {id: 12, name: 'baseball', cost: 10, category: 'sports'},
    {id: 0, name: 'dog food', cost: 10, category: 'grocery'},
    {id: 5, name: 'soda', cost: 5, category: 'grocery'},
  ],
  activeCategory: 'sports',
  shoppingCart: []
}
function shoppingCart(state=[], action) {
  switch (action.type) {
    case 'ADD_TO_CART':
      return [...state, action.productId]
    case 'REMOVE_FROM_CART':
      return state.filter(id => id !== action.productId)
    default:
      return state
  }
}

function activeCategory(state='sports', action) {
  switch (action.type) {
    case 'CHANGE_CATEGORY': 
      return action.category
    default:
      return state
  }
}

var productInitialState = [
  {id: 4, name: 'football', cost: 20, category: 'sports'},
  {id: 12, name: 'baseball', cost: 10, category: 'sports'},
  {id: 0, name: 'dog food', cost: 10, category: 'grocery'},
  {id: 5, name: 'soda', cost: 5, category: 'grocery'},
]

function products(state=productInitialState, action) {
  switch (action.type) {
    default:
      return state
  }
}

function reducer(state={}, action) {
  return {
    products: products(state.prodcuts, action),
    activeCategory: activeCategory(state.activeCategory, action),
    shoppingCart: shoppingCart(state.shoppingCart, action) 
  }
}

let store = createStore(reducer)
store.dispatch(addToCart(4))
console.log(store.getState())

/*
function reducer(state={}, action={type: null}) {
  switch (action.type) {
    case 'ADD_TO_CART':
      return Object.assign({}, state, {
          shoppingCart: [...state.shoppingCart, 
                         action.productId]
      })
    case 'REMOVE_FROM_CART':
      return Object.assign({}, state, {
          shoppingCart: state.shoppingCart.filter(id => id !== action.productId)
      })
    case 'CHANGE_CATEGORY':
      return Object.assign({}, state, {
        activeCategory: action.category
      })
    default: 
      return state
  }
}
*/

/*
function reducer(state=initialState, action={type: null}) {
  switch (action.type) {
    case 'ADD_TO_CART':
      return Object.assign({}, state, {
          shoppingCart: [...state.shoppingCart, 
                         action.productId]
      })
    case 'REMOVE_FROM_CART':
      return Object.assign({}, state, {
          shoppingCart: state.shoppingCart.filter(id => id !== action.productId)
      })
    case 'CHANGE_CATEGORY':
      return Object.assign({}, state, {
        activeCategory: action.category
      })
    default: 
      return state
  }
}
*/

