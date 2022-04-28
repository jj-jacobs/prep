const rFib = (num) => {
  if (num == 1 || num == 2) {
    return 1;
  } else {
    return rFib(num-1) + rFib(num-2);
  }
};

console.log(rFib(10))