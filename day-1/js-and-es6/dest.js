let foods = ['pizza', 'apple', 'rice']
let [food1, , food3] = foods
console.log(food1)
let x = 4
let y = 10
/* will work later
[x, y] = [y, x]
console.log(x)
*/

let person  = { name: 'bill', age: 20 }
let {name: localName} = person
console.log(localName)
