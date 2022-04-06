const D = {
  value: "D",
  children: [],
};

const B = {
  value: "B",
  children: [D],
};

const C = {
  value: "C",
  children: [],
};

const F = {
  value: "F",
  children: [],
};

const E = {
  value: "E",
  children: [F],
};

const A = {
  value: "A",
  children: [B, C, E],
};

function traverse(node) {
  if (node.children) {
    console.log(node.value);
    for (let i = 0; i < node.children.length; i++) {
      traverse(node.children[i]);
    }
  } else {
    console.log(node.value);
  }
}

traverse(A);
