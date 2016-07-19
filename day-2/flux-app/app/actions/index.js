import {INCREMENT} from '../constants/actionTypes.js'
import dispatcher from '../dispatcher'

function incrementCount() {
  var action = { type: INCREMENT }
  dispatcher.dispatch(action)
}

export {incrementCount}
