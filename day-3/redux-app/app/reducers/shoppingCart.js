export default function shoppingCart(state=[], action) {
  switch (action.type) {
    case 'ADD_TO_CART':
      return [...state, action.productId]
    case 'REMOVE_FROM_CART':
      return state.filter(id => id !== action.productId)
    default:
      return state
  }
}
