function Person(name, age) {
  this.name = name
  this.age = age
}

Person.prototype.sayName = function() {
  console.log(`My name is ${this.name} ${2+2}`)
}

class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  sayName() {
    console.log(`My name is ${this.name} ${2+2}`)
  }
}

class Student extends Person {
  constructor(name, age, school) {
    super(name, age)
    this.school = school
  }

  saySchool() {
    console.log(`My school is ${this.school}`)
  }
}
