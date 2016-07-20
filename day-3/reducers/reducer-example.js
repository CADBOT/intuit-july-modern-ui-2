var state = 0
var state = {
  count: 0,
  count2: 0
}

// move state to an object. Add a decrement action
function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
    return {count: state.count + 1 }
      return Object.assign({}, state, {
        count: state.count + 1
      })
      return {...state, count: state.count + 1 }
    default:
      return state
  } 
}

var incrementAction = { type: 'INCREMENT' }

state = reducer(state, incrementAction)
console.log(newState) // 1

