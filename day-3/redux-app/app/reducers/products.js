var productInitialState = [
  {id: 4, name: 'football', cost: 20, category: 'sports'},
  {id: 12, name: 'baseball', cost: 10, category: 'sports'},
  {id: 0, name: 'dog food', cost: 10, category: 'grocery'},
  {id: 5, name: 'soda', cost: 5, category: 'grocery'},
]

export default function products(state=productInitialState, action) {
  switch (action.type) {
    default:
      return state
  }
}
