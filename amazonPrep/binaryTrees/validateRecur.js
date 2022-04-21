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
    if(root === null) return []
    var leftRes = depthFirst(root.left)
    var rightRes = depthFirst(root.right)
    return [root.value, ...leftRes, ...rightRes]
}

console.log(depthFirst(a));