'use strict'
function doStuff() {
  console.log('do stuff')
}

doStuff.someProp = 4

function Person(name, age) {
  /*
   * this = {}
   * setup the proptype on this
   */
  this.name = name
  this.age = age
  /*
   * return this
   */
  this.sayName = function() {
    console.log("my name is: " + this.name)
  }
}

var p1 = new Person('tim', 40)
console.log(p1)
p1.sayName()
var sayName = p1.sayName
sayName()
var person = {
  name: 'person literal',
  sayName: sayName
}

person.sayName()

var person2 = { name: 'bob' }
sayName.call(person2)










