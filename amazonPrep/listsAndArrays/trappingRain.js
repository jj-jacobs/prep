var trap = function (height) {
  var total = 0;
  var start = false;
  for (let i = 0; i < height.length; i++) {
    var leftMax = 0;
    var rightMax = 0;
    for (let k = 0; k < height.length; k++) {
      if (k <= i) {
        leftMax = Math.max(leftMax, height[k]);
      }
      if (k >= i) {
        rightMax = Math.max(rightMax, height[k]);
      }
    }
    total += Math.min(leftMax, rightMax) - height[i];
    console.log(total);
  }
  return total;
};

var trap2 = function (height) {
  var maxLeft = [];
  var ml = 0;
  var maxRight = [];
  var mr = 0;
  var total = 0;
  var min = [];
  for (let i = 0; i < height.length; i++) {
    ml = Math.max(height[i], ml);
    maxLeft.push(ml);
    mr = Math.max(height[height.length - (i + 1)], mr);
    maxRight.unshift(mr);
  }
  console.log(maxLeft, maxRight);
  for (let i = 0; i < height.length; i++) {
    if (Math.min(maxLeft[i], maxRight[i]) - height[i] >= 0) {
      total += Math.min(maxLeft[i], maxRight[i]) - height[i];
    }
  }
  return total;
};

var trap3 = (height) => {
  var left = 0;
  var right = height.length - 1;
  var leftMax = height[left];
  var rightMax = height[right];
  var total = 0;
  while (left < right) {
    if (leftMax < rightMax) {
      left++;
      leftMax = Math.max(leftMax, height[left]);
      total += leftMax - height[left];
    } else {
      right--;
      rightMax = Math.max(rightMax, height[right]);
      total += rightMax - height[right];
    }
  }
  return total;
};
console.log(trap3([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
