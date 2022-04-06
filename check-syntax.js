import Stack from "./Stack";

const testA = "if(true) { return; }";
const testB = "if(true( { return; }";
const testC = "if(true) { return;";
const testD = "(if(true) { return; }";
const testE = `( true && { name: 'foo' } )`;
const testF = `( true && { name: 'foo' ) )`;
const testG = `( true && ( name: 'foo' } )`;
const testH = `((2 + 3) * (4 + 11 * (2 - 1)))`;
const testI = `((2 + 3) * (4 + 11 * 2 - 1)))`;
const testJ = `((2 + 3) * (4 + 11 * (2 - 1))`;

const stack = new Stack();
console.log(stack);

// `if(true) { return; }` | `true`
// `if(true( { return; }` | `false`
// `if(true) { return;` | `false`
// `(if(true) { return; }` | `false`
// `( true && { name: 'foo' } )` | `true`
// `( true && { name: 'foo' ) )` | `false`
// `( true && ( name: 'foo' } )` | `false`
// `((2 + 3) * (4 + 11 * (2 - 1)))` | `true`
// `((2 + 3) * (4 + 11 * 2 - 1)))` | `false`
// `((2 + 3) * (4 + 11 * (2 - 1))` | `false`
