class LinkedListNode {
  #list = "";
  #next = null;

  constructor(list) {
    this.#list = list;
  }

  add(node) {
    return !this.#next ? (this.#next = node) : this.#next.add(node);
  }

  getList() {
    return !this.#next
      ? `${this.#list}`
      : `${this.#list} ${this.#next.getList()}`;
  }

  remove(i) {
    if (i === 1) {
      return (this.#next = this.#next.#next);
    } else {
      i--;
      return this.#next.remove(i);
    }
  }
}

const root = new LinkedListNode("A");
const nodeB = new LinkedListNode("B");
root.add(nodeB);
console.log(root);
console.log(root.getList()); // 'A B'
const nodeC = new LinkedListNode("C");
const nodeD = new LinkedListNode("D");
const nodeE = new LinkedListNode("E");
root.add(nodeC);
root.add(nodeD);
root.add(nodeE);
console.log(root);
console.log(root.getList()); // 'A B C D E'
root.remove(1);
console.log(root.getList()); // 'A C D E'
