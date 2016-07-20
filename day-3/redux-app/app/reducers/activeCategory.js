export default function activeCategory(state='sports', action) {
  switch (action.type) {
    case 'CHANGE_CATEGORY': 
      return action.category
    default:
      return state
  }
}

