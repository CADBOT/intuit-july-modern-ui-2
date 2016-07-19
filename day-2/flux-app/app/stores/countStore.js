import {INCREMENT} from '../constants/actionTypes.js'
import dispatcher from '../dispatcher'
import {EventEmitter} from 'events'

var _count = 0

function getState() {
  return _count
}

function setState() {
  ++_count
  CountStore.emitChange()
}

let CountStore = Object.assign({}, EventEmitter.prototype, {
  getState: getState,
  addEventListener(cb) {
    this.on('CHANGE', cb)
  },
  emitChange() {
    this.emit('CHANGE')
  }
})

export default CountStore

dispatcher.register(action => {
  switch(action.type) {
    case INCREMENT:
      console.log('increment action received')
      setState()
      break
  }
})
