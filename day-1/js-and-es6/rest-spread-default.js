// default args
function greet(name, greeting='hello') {
  return `${greeting} to ${name}`
}

console.log(greet('tim', 'hello'))
console.log(greet('zoe', 'hola'))
console.log(greet('bill'))

// rest
function add(x, y, ...numbers) {
  return numbers.reduce((acc, n) => acc + n)
}

add(2, 6, 19, () => {console.log('hello')}, 13)

var args = ['tom', 'sup']
greet(args[0], args[1])
greet(...args) // a spread operator

var nums1 = [1, 5, 10]
var nums2 = [15, ...nums1, 3, ...nums1]
console.log(nums2)
