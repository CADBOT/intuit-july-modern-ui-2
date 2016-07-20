function add(x, y) {
  return x + y
}

var timesCalled = 0
function addWithCount(x, y) {
  return `Times called ${++timeCalled} ${x + y}`
}

addWithCount(2, 4)
addWithCount(2, 4)

// impure
function append(array, ele) {
  array[array.length] = ele
  return array
}

function pureAppend(array, ele) {
  var newArray = array.concat(ele)
  return newArray
}

function es6PureAppend(array, ele) {
  return [...array, ele]
}

// write a pure and impure add to object
function impure(obj, propName, ele) {
  obj[propName] = ele
}

function pureAdd(obj, propName, ele) {
  var obj2 = {}
  obj2[propName] = ele
  return Object.assign({}, obj, obj2)
}



