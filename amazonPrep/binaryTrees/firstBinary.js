class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

function depthFirst(root) {
  var result = [];
  var stack = [root];
//   if (root == null) {
//     return [];
//   }
  while (stack.length > 0) {
    const current = stack.pop();
    result.push(current.value);
    if (current.right) {
      stack.push(current.right);
    }
    if (current.left) {
      stack.push(current.left);
    }
  }
  return result;
}

console.log(depthFirst(a));
