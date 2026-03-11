// In the end, the Typescript language is compiled (a.k.a transpiled) into ECMAScript language before being evaluated by Node.js.
// https://www.typescriptlang.org/


// #######################################################
// Enums are a feature of Typescript
// #######################################################
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
