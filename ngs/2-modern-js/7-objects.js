// 1. Standard property:
//   const obj = { key: value };

// 2. Shorthand property (when variable name matches property name):
//   const a = 1;
//   const obj = { a };

// 3. Method definition shorthand:
//   const obj = { foo() { ... } };

// 4. Arrow function as property:
//   const obj = { bar: () => { ... } };

// 5. Computed property name:
//   const key = "dynamic";
//   const obj = { [key]: 123 };

// 6. String or number as property:
//   const obj = { "str": 1, 42: "answer" };

// 7. Symbol as property:
//   const sym = Symbol("id");
//   const obj = { [sym]: "value" };

const ss = "what";
const a = 1;

const key = "some"

const obj = {
  p1: 10,
  p2: 20,
  f1() {console.log("obj f1")},
  f2: () => {console.log("obj f2");},
  [ss]: 45,
  a,
  key
};

function f1() {
  console.log("f1");
}

const f2 = () => console.log("f2");

f1();
f2();
obj.f1();
obj.f2();
console.log(obj.what);
console.log(obj.p1);
console.log(obj.a);
