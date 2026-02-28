// Print "Hello World"
// Every second
// And stop after 5 times

// After 5 times. Print "Done" and let Node exit.


function p() {
  numberOfcalls += 1;
  console.log('Hello every seconds ', numberOfcalls)
  if (  numberOfcalls === 5 ) {
      clearInterval(iId)
      console.log('Done ', numberOfcalls)
  }
}
let numberOfcalls = 0;
const iId = setInterval(p,1000);
// for(let i=0; i < 5; i++) {
//   setTimeout(p,i*1000, i+1);
// }

