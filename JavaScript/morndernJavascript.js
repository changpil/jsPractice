import { add, divide, multiply, subtract } from './math.js'
import User from './user.js'

// #######################################################
// Object Const
// #######################################################
// declare constant (object)
const step1 = () => {
  const user = {
    name: 'John Doe',
    age: 42
  }
  // update property
  user.age = 43

  // reassign throws TypeError: Assignment to constant variable
  true || (user = { name: 'Jane Doe', age: 24 })
}
// #######################################################
// ARRAY Const
// #######################################################
// declare constant (array)

const step2 = () => {
  const users = []

  // add item
  users.push({ name: 'John Doe', age: 42 })
  users.push({ name: 'Chang Lee', age: 22 })
  // reassign throws TypeError: Assignment to constant variable
  true || (users = [{ name: 'x', age: 24 }])
  users[0].name = "x"

  console.log({ users })
}
// #######################################################
// Variable Scope
// #######################################################
const step3 = () => {
  {
    const x = 2
    let y = 3
  }
  // x and y can NOT be used here (block scope)

  true || console.log(x)

  {
    var z = 1
  }
  // z CAN be used here (global scope)
  console.log(z)
}

// #######################################################
// Object Shorthands
// #######################################################
const step4 = () => {
  const cat = '🐈'
  const dog = '🐕'
  const rabbit = '🐇'
  const horse = '🐴'

  const animals = {
    cat,
    dog,
    rabbit,
    horse,
    sayHello() {
      return 'Hello there!'
    }
  }
  console.log(animals)
  console.log(animals.sayHello())
  // animals = { cat: '🐈', dog: '🐕', rabbit: '🐇', horse: '🐴' }
}

// #######################################################
// Computed property names
// #######################################################
const step5 = () => {
  const key = 'dog'

  const animals = {
    [key]: '🐕',
    ['c' + 'a' + 't']: '🐈'
  }

  console.log(animals)
  // { dog: '🐕', cat: '🐈' }

}

// #######################################################
// Arrow Functions
// #######################################################
const step6 = () => {
  const numbers = [1, 2, 3, 4, 5]
  const squareNumbers = numbers.map(number => number * number)
  const sum = numbers.reduce((accumulator, number) => accumulator + number, 0)

  console.log(squareNumbers)
  console.log(sum)


  // ARROW FUNCTION IMPLICITLY RETURNING AN OBJECT
  const getUser = () => ({ name: 'John Doe', age: 42 })
  const user = getUser()
  console.log(user)
}

// #######################################################
// Without the arrow function, the parent this context will be overwritten by the function's this context and has to be preserved.
// #######################################################

const step7 = () => {
  class App {
    loadUsers() {
      database.query('SELECT * from users', function (users) {
        this.users = users
      })
    }
  }

  // Solution 1: const that = this
  // preserve the 'this' context
  // const that = this

  // database.query('SELECT * from users', function (users) {
  //   that.users = users
  // })

  // Solution 2: .bind(this)
  // database.query('SELECT * from users', function (users) {
  //   this.users = users
  // }.bind(this))

  // Modern Solution (Best Practice)
  // database.query('SELECT * from users', (users) => {
  //   this.users = users
  // })

}

// #######################################################
// Default Parameters
// #######################################################
const step8 = () => {
  const add = (a, b = 0) => a + b // b defaults to 0
  add(2) // 2 (2 + 0)
  add(2, 3) // 5 (2 + 3)

  const multiply = (a, b = 1) => a * b // b defaults to 1
  multiply(2) // 2 (2 * 1)
  multiply(2, 3) // 6 (2 * 3)

  console.log(add(2))
  console.log(multiply(2))
}

// #######################################################
// Rest Parameters as Array
// #######################################################
const step9 = () => {
  function race(first, second, third, ...last) {
    console.log({
      first,
      second,
      third,
      last
    })
  }
  race('Mario', 'Luigi', 'Donkey Kong', 'Bowser', 'Koopa Troopa', 'Wario')
  /*
  {
    first: 'Mario',
    second: 'Luigi'
    third: 'Donkey Kong',
    last: [
      'Bowser',
      'Koopa Troopa',
      'Wario'
    ]
  }
  */

  const calcSquareNumbers = (...numbers) => numbers.map(n => n * n)
  const squareNumbers = calcSquareNumbers(1, 2, 3, 4, 5)
  // [1, 4, 9, 16, 25]
  console.log(squareNumbers)
}

// #######################################################
// Spread Syntax
// #######################################################
const step10 = () => {
  const some = [2, 3, 4, 5]
  const more = [6, 7]
  const morethan = { nine: 9, ten: 10 }

  // combine arrays by inserting all elements into a new array
  const numbers = [
    1,
    ...some,
    4,
    ...more,
    ...Object.keys(morethan),
    ...Object.values(morethan),
  ]
  console.log(numbers)
  // [1, 2, 3, 4, 5, 6, 7]

  const numbers2 = {
    one: 1,
    ...some,
    four: 4,
    ...more,
    ...morethan
  }
  console.log(numbers2)
}

// #######################################################
// Optional chaining
// #######################################################
const step11 = () => {
  const pokemon = {
    name: 'Pikachu',
    stats: {
      health: 40,
      attack: 60,
      defense: 45
    }
  }
  const foo = pokemon.stats.health.some.invalid.deep.property
  // TypeError: Cannot read properties of undefined (reading 'invalid')

  const bar = pokemon?.stats?.health?.some?.invalid?.deep?.property
  // bar = undefined
}

// #######################################################
// ***** Destructuring Assignment ****
// #######################################################
const step12 = () => {
  // 1. Array destructuring
  const [a, b] = [1, 2]
  // a = 1, b = 2

  // 2. VARIABLE ASSIGNMENT WITH DEFAULT VALUES
  const [c, d = 3] = [1]
  // c = 1, d = 3

  // 3. PARSING AN ARRAY RETURNED FROM A FUNCTION CALL
  const getNumbers = () => [1, 2, 3, 4]
  const [e, f, g] = getNumbers()
  // e = 1, f = 2, g = 3
  console.log(e, f, g)

  // 4. PARSING AN OBJECT ENTRY
  const animals = {
    dog: '🐕',
    cat: '🐈',
    cow: '🐮'
  }
  for (const [name, emoji] of Object.entries(animals)) {
    console.log(name, emoji)
  }

  // 5. ASSIGNING THE REST OF AN ARRAY TO A VARIABLE
  const [one, two, ...rest] = [1, 2, 3, 4, 5]
  // one = 1, two = 2, rest = [3, 4, 5]
  console.log(rest)

}


// #######################################################
// **** Object destructuring ****
// #######################################################
const step13 = () => {

  const user = {
    id: 42,
    name: 'John Doe',
    role: 'developer'
  }

  // 1. BASIC VARIABLE ASSIGNMENT
  // const { id, role, age } = user
  // id = 42, role = 'developer', age = undefined
  // console.log(age)

  // 2. ASSIGNING TO NEW VARIABLE NAMES
  const { id: newId, role: newRole } = user
  // newId = 42, newRole = 'developer'
  console.log(newId, newRole)

  // 3. ASSIGNING TO DEFAULT VALUES
  const { a = 10, b = 5 } = { a: 3 }
  // a = 3, b = 5

  // 4. ASSIGNING TO NEW VARIABLES NAMES AND PROVIDING DEFAULT VALUES
  const { a: newA = 10, b: newB = 5 } = { a: 3 }
  // newA = 3, newB = 5

  // 5. UNPACKING FIELDS FROM OBJECTS PASSED AS A FUNCTION PARAMETER
  const newUser = {
    uuid: 44,
    name: 'John Doe',
    role: 'developer'
  }
  const getUserId = ({ uuid }) => uuid
  const userId = getUserId(newUser)
  // userId = 44
  console.log(userId)

  // 6. NESTED DESTRUCTURING
  const company = {
    name: 'SAP SE',
    address: {
      street: 'Dietmar-Hopp-Allee 16',
      city: 'Walldorf',
      postalCode: '69190'
    }
  }
  const { address: { street, postalCode } } = company
  // street = 'Dietmar-Hopp-Allee 16', postalCode = '69190'
  // ReferenceError: address is not defined. you need do with new line const { address } = company
  console.log(street, postalCode)
}


// #######################################################
// Classes
// #######################################################

const step14 = () => {
  class User {
    constructor(id, name, role) {
      this.id = id
      this.name = name
      this.role = role
    }

    getId() {
      return this.id
    }

    setId(id) {
      this.id = id
    }

    getName() {
      return this.name
    }

    setName(name) {
      this.name = name
    }

    getRole() {
      return this.role
    }

    setRole(role) {
      this.role = role
    }
  }
}
// #######################################################
// Private Instance Fields
// #######################################################
const step15 = () => {
  class User {
    #id = null
    #name = null
    #role = null

    constructor(id, name, role) {
      this.#id = id
      this.#name = name
      this.#role = role
    }

    getId() {
      return this.#id
    }

    setId(id) {
      this.#id = id
    }

    getName() {
      return this.#name
    }

    setName(name) {
      this.#name = name
    }

    getRole() {
      return this.#role
    }

    setRole(role) {
      this.#role = role
    }
  }

  const user = new User(1, 'John Doe', 'developer')
  // user.#id // SyntaxError: Private field '#id' must be declared in an enclosing class
}

// #######################################################
// Template Strings
// #######################################################
const step16 = () => {
  const name = 'John Doe'
  const age = 42
  const message = `Hello ${name}, you are ${age} years old. Next year you will be ${age + 1} years old.`
  // Hello John Doe, you are 42 years old. Next year you will be 43 years old.
  console.log(message)
}



// #######################################################
// The Numeric Separator ("_") enables developers to make their numeric literals more readable by creating a visual separation between groups of digits. Actual values stay the same!
// #######################################################
const step17 = () => {
  const notReadableCount = 1000000000  // Is this a billion? a hundred millions? Ten millions?
  const readableCount = 1_000_000_000 // Ah, so it's a billion!

  const notReadablePrice = 101475938.38 // What scale is this? What power of 10?
  const readablePrice = 101_475_938.38  // Ah, this is hundreds of millions!

  const oneMillionth = 0.000_001 // This works on fractional numbers too!

}

// #######################################################
// Nullish Coalescing Operator
// #######################################################
// The nullish coalescing operator (??) is a logical operator that
// returns its right-hand side operand when its left-hand side operand is null or undefined,
// and otherwise returns its left-hand side operand.

const step18 = () => {
  null ?? 'default value'
  // 'default value'

  undefined ?? 'default value'
  // 'default value'

  0 ?? 42
  // 0

  "" ?? 'default string'
  // ""

}
// #######################################################
// Logical assignment operators: x ||= y <===> x || (x = y)
// #######################################################
const step19 = () => {
  let truthy = 1
  let falsy = 0

  truthy ||= 2
  // truthy = 1

  falsy ||= 2
  // falsy = 2
}
// #######################################################
// Logical AND assignment operator: x &&= y  <===> x && (x = y)
// #######################################################
const step20 = () => {
  let truthy = 1
  let falsy = 0

  truthy &&= 2
  // truthy = 2

  falsy &&= 2
  // falsy = 0
}

// #######################################################
// Logical nullish assignment operator (??=)
// #######################################################
// The logical nullish assignment (x ??= y) operator only assigns a value y to a variable x, if x is nullish (null or undefined).
const step21 = () => {
  let truthy = 1
  let falsy = 1
  let nullish = null
  let undef = undefined

  truthy ??= 2
  // truthy = 1

  falsy ??= 2
  // falsy = 1

  nullish ??= 2
  // nullish = 2

  undef ??= 2
  // nundef = 2

}

// #######################################################
// Object methods
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object#static_methods
// #######################################################
const step22 = () => {
  Object.keys
  Object.entries
  Object.values
  Object.fromEntries
  Object.assign


}


// #######################################################
// String methods
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#instance_methods
// #######################################################
const step23 = () => {
  String.trim
  String.includes
  String.matchAll
  String.replaceAll

}


// #######################################################
// Array methods
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#constructor
// #######################################################
const step24 = () => {
  Array.isArray
  Array.sort
  Array.reverse
  Array.includes
  Array.find
  Array.filter
  Array.map
  Array.reduce
  Array.flat

}

// #######################################################
// Promise methods
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
// https://pages.github.tools.sap/cloud-curriculum/materials/cndj/async/nodejs/#2-promises
// #######################################################
const step25 = () => {
  Promise.resolve
  Promise.reject
  Promise.all
  Promise.finally
  Promise.race
  Promise.any
  Promise.allSettled
}

// #######################################################
// async / await
// https://pages.github.tools.sap/cloud-curriculum/materials/cndj/async/nodejs/#3-async-await
// #######################################################
// The async / await syntax enable asynchronous, Promise-based behavior to be written in a cleaner style, avoiding the need to explicitly configure Promise chains.
const step26 = () => {
  const fetchMovies = async () => {
    try {
      const response = await fetch('/movies')
      const movies = await response.json()
      return movies
    } catch ({ message }) {
      console.error(`Error fetching movies: ${message}`)
      throw new Error('Failed to fetch movies')
    }
  }

}

// #######################################################
// ECMAScript modules
// https://nodejs.org/api/esm.html#modules-ecmascript-modules
// https://nodejs.org/api/modules.html#modules-commonjs-modules
// #######################################################
////////////////////////////////////////////////////////////////
// 1. CommonJS
////////////////////////////////////////////////////////////////
// file: user.js
module.exports = class User {
  // ...
}

// file: other.js
const User = require('./user.js')

////////////////////////////////////////////////////////////////
// 2. ES Modules
////////////////////////////////////////////////////////////////
// file: user.js (or user.mjs)
export default class User {
  // ...
}

// file: other.js
const user = new User('John Doe')
console.log(user.greet())

////////////////////////////////////////////////////////////////
// 3. ES Modules NAMED EXPORTS
////////////////////////////////////////////////////////////////
console.log({
  add: add(2, 3),
  subtract: subtract(10, 4),
  multiply: multiply(6, 7),
  divide: divide(8, 2)
})

////////////////////////////////////////////////////////////////
// 4. ES Modules DYNAMIC IMPORTS
////////////////////////////////////////////////////////////////
const module = await import('./module.js')
module.doSomething()


// #######################################################
// Executions
// #######################################################
// Computed property names
// step1()
// step2()
// step3()
// step4()
// step5()
// step6()
// step7()
// step8()
// step9()
// step10()
// step11()
// step12()
// step13()
// step14()
// step15()
// step16()
// step17()
// step18()
// step19()
// step20()
// step21()
// step22()
// step23()
// step24()
// step25()
// step26()
