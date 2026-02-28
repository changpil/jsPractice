// const PI = Math.PI;
// const E = Math.E;
// const SQRT2 = Math.SQRT2;

const { PI, E, SQRT2 }  = Math;

// With require
// const { readFile } = require('fs');


const circle = {
  label: 'circleX',
  radius: 2,
};

const circleArea = ({ radius }) =>
  (PI * radius * radius).toFixed(2);

const circleArea2 = ({ radius }, {precision =2 } = {}) =>
  (PI * radius * radius).toFixed(precision);

console.log(
  circleArea(circle)
);
console.log(
  circleArea2(circle)
);

const [f1, f2,,f4] = [1,2,3,4,5]
console.log(f1);
console.log(f4);


const [s1, s2,,...s4] = [1,2,3,4,5]
console.log(s1);
console.log(s4);
