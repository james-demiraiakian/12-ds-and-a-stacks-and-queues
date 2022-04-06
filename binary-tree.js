class BinaryTreeNode {
  value = "";
  left = null;
  right = null;

  constructor(value) {
    this.value = value;
  }

  add(node) {
    return this.value > node.value
      ? !this.left
        ? (this.left = node)
        : this.left.add(node)
      : !this.right
      ? (this.right = node)
      : this.right.add(node);
  }

  findPerson() {}
}

const B = new BinaryTreeNode("B");
const A = new BinaryTreeNode("A");
const C = new BinaryTreeNode("C");
const D = new BinaryTreeNode("D");

// B will be the root of the tree:
B.add(A);
B.add(D);
B.add(C);
console.log(B);

class PersonTreeNode {
  constructor(person) {
    this.value = person.name;
    this.person = person;
    this.left = null;
    this.right = null;
  }

  addPerson(node) {
    return this.value > node.value
      ? !this.left
        ? (this.left = node)
        : this.left.add(node)
      : !this.right
      ? (this.right = node)
      : this.right.add(node);
  }

  find(name) {
    return this.value === name
      ? this.person
      : name < this.value
      ? this.left
        ? this.left.findPerson(name)
        : null
      : this.right
      ? this.right.findPerson(name)
      : null;
  }
}

const aPerson = {
  name: "Nelson",
  phone: "555-1212",
  address: "123 Main St",
};

const root = new PersonTreeNode(aPerson);

let person = root.find("Nelson");
console.log(person);
// person looks like

let person2 = root.find("Foo");
console.log(person2);
// person2 is null
