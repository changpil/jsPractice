// In the end, the Typescript language is compiled (a.k.a transpiled) into ECMAScript language before being evaluated by Node.js.
// https://www.typescriptlang.org/


// #######################################################
// Enums are a feature of Typescript
// #######################################################
const step1 = () => {
  enum Direction {
    Up,
    Down,
    Left,
    Right
  }

  function move(direction: Direction) {
    if (direction === Direction.Up) {
      console.log("Up")
    } /* ... */
  }

  move(Direction.Up)
}

// #######################################################
// any type
// #######################################################
// Declaring the type as any disables checking entirely (it literally means any type).
// You will lose all the benefits Typescript provides and be back to Javascript coding.
// Therefore, avoid using any whenever possible.
const step2 = () => {
  let v1: any = "hello"

  v1.toUpperCase()   // allowed
  v1.foo.bar.baz // allowed but exception
  v1?.foo?.bar?.baz
  console.log(v1)
}
// #######################################################
// unknown type
// #######################################################
// “This value could be anything, but you must check its type before using it.”
const step3 = () => {
  let value: unknown

  value = 42
  value = "hello"
  value = true
  console.log(value)

  function checkNumber(input: unknown): number {
    if (typeof input === 'number') {
      return input
    }
    throw Error('Not of type number')
  }


  function someAPI(value: unknown) {
    const checkedNumber = checkNumber(value)
    // Typescript knows value is a number
  }

}
// #######################################################
// never type
// #######################################################
// In TypeScript, the never type represents a value that can never occur.
// TypeScript uses never in situations where:
//      - a function never returns
//      - a function always throws an error (Because the function never returns a value)
//      - all possible cases have been handled in a union type
const step4 = () => {
  function fail(message: string): never {
    throw new Error(message)
  }

  function runForever(): never {
    while (true) { }
  }
  // One of the best real-world uses of never.
  type Role = "admin" | "user" | "guest"

  function getPermissions(role: Role) {
    if (role === "admin") {
      return "full access"
    } else if (role === "user") {
      return "limited access"
    } else if (role === "guest") {
      return "read only"
    } else {
      // TypeScript will produce an error at:
      const exhaustiveCheck: never = role
      return exhaustiveCheck
    }
  }

  // never: function never finishes
  // void: function returns nothing
  function log(): void {
    console.log("hello")
  }

  function crash(): never {
    throw new Error()
  }

}
// #######################################################
// Array<T> generic
// #######################################################
// If you want to have an array where every entry is of type T you can use the generic Array<T> type or T[]
const step5 = () => {
  const numbers: number[] = [1, 2, 3]
  const names: Array<string> = ['John', 'Jane', 'Jack']
}
// #######################################################
// The Promise<T> generic
// #######################################################
// A generic Promise type that resolves to a value of type T
// function type = (milliseconds: number) => Promise<string>
const step6 = async () => {
  const wait: (milliseconds: number) => Promise<string> =
    (milliseconds) => new Promise((resolve, reject) => { setTimeout(() => resolve('The promise resolves to a string'), milliseconds) })
  const res = await wait(1000)
  console.log(res)

  const wait2: (milliseconds: number) => Promise<string> =
    (milliseconds) => new Promise((resolve, reject) => { setTimeout(() => reject('The promise reject to a string'), milliseconds) })
  await wait2(1000).catch(error => console.log(error))
}


// #######################################################
// Partial<T> generic
// #######################################################
// Sometimes, it is handy to only accept an argument which has some, but not necessarily all properties of a defined type.
const step7 = () => {
  type User = {
    name: string,
    age: number,
  }

  function update(input: Partial<User>): User {
    return {
      name: 'John',
      age: 24,
      ...input
    }
  }

  update({ age: 25 }) // returns { name: 'John', age: 25 }
  update({ name: 'Doe' }) // returns { name: 'Doe', age: 24 }
}
// #######################################################
// Pick<T, keyof T> generic
// #######################################################
// In the previous example, if you want to have a concrete subset of properties (not just any subset), use the Pick generic.
const step8 = () => {
  type User = {
    name: string,
    age: number,
    email: string
  }

  type Human = Pick<User, 'name' | 'age'> // { name: string, age: number }
}
// #######################################################
// Interfaces
#######################################################
// In addition to classes, Typescript comes with interfaces.
// A general rule of thumb is to use an interface over a type in case you need to have methods.
// Likewise in other OOP programming languages, classes can implement interfaces.
const step9 = () => {
  interface UserInterface {
    getId(): number
    getName(): string
    setName(name: string): void
  }

  class User implements UserInterface {
    // ...
  }
}
// #######################################################
// Private Instance Fields
// #######################################################
// Even though ECMAScript comes equipped with Private instance fields since Node 16,
// Typescript has its own way of defining private fields using the private keyword.
// The main difference is that Typescript private fields are only checked at compile-time,
// at runtime they are public (in contrast to the #field feature of Node.js) .
const step10 = () => {
  class User {
    private name: string

    constructor(name: string) {
      this.name = name
    }

    getName() {
      return this.name
    }
  }

  const user = new User('John Doe')
  user.getName() // John Doe
  // user.name // TypescriptError: Property 'name' is private and only accessible within class 'User'
}
// #######################################################
// Syntactic sugar for instance field initialization
// #######################################################
// In the class constructor you can skip the assignment of instance fields.
// Typescript will automatically add the constructor arguments as fields implicitly.
// The example works for public and protected fields as well.
const step11 = () => {
  class User1 {
    constructor(private id: number, private name: string) { }
    // ...
  }

  // User1 and User2 are the same
  class User2 {
    private id: number
    private name: string

    constructor(id: number, name: string) {
      this.id = id
      this.name = name
    }

    // ...
  }
}
// #######################################################
// Enums are a feature of Typescript
// #######################################################
const step12 = () => {

}
// #######################################################
// Enums are a feature of Typescript
// #######################################################
const step13 = () => {

}
// #######################################################
// Enums are a feature of Typescript
// #######################################################
const step14 = () => {

}
// #######################################################
// Enums are a feature of Typescript
// #######################################################
const step15 = () => {

}
// #######################################################
// Enums are a feature of Typescript
// #######################################################
const step16 = () => {

}
// #######################################################
// Enums are a feature of Typescript
// #######################################################
const step17 = () => {

}


// #######################################################
// Executions
// #######################################################
// Computed property names
// step1()
// step2()
// step3()
// step4()
// step5()
step6()
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

