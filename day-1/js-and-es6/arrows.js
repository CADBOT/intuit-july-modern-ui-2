function add(x, y) {
  return x + y
}

var addExp = function(x, y) {
  return x + y
}

var addArrow = (x, y) => {
  return x + y
}

var numbers = [1, 10, 4, 3]
numbers.forEach((number) => {
  console.log(number)
})

// standard form of an arrow function
var newNumbers = numbers.map((number) => {
  return number + 100
})

// Drop parens iff one parameter
newNumbers = numbers.map(number => {
  return number + 100
})

// one liner implicit return if function body is 1 expression
newNumbers = numbers.map(number => number + 100)
var evenNumbers = numbers.filter(number => number % 2 === 0)
var sum = numbers.reduce((accl, number) => {
  return accl + number // 18
}, 0)

var result = numbers.filter(n => n < 100)
                   .map(n => n - 50)
                   .reduce((accl, n) => accl * n)


/*
 * take an array of numbers.
 * take the evens
 * multiply by 2
 * add the remaining numbers
 */
result = numbers.filter(number => number % 2 ===  0)
                .map(number => number * 2)
                .reduce((accl, number) => {return accl + number}, 0)

