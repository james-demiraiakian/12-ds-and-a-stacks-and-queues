// I hate having code on line 1

class Stack {
  #stack = [];

  push(item) {
    this.#stack = [...this.#stack, item];
    return this.#stack;
  }

  pop() {
    const popped = this.#stack.splice(this.#stack.length - 1);
    return popped;
  }

  peek() {
    const peeked = this.#stack.slice(this.#stack.length - 1);
    return peeked;
  }
}

const stack = new Stack();
stack.push("fox");
stack.push("goose");
stack.push("lizard");
console.log(stack);
console.log(stack.pop()); // 'lizard'
console.log(stack.peek()); // 'goose'
console.log(stack.pop()); // 'goose'
stack.push("llama");
console.log(stack);
console.log(stack.pop()); // 'llama'
console.log(stack.peek()); // 'fox'
console.log(stack.pop()); // 'fox'
console.log(stack.pop()); // null

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

const testStack = new Stack();
console.log(testStack);
