const findNum = (arr, num, min, max) => {
  if (min >= max) {
    return false;
  }
  var midpoint = Math.floor((min + max) / 2);
  if (num > arr[midpoint]) {
      return findNum(arr,num,midpoint+1, max)
  } 
  else if (num < arr[midpoint]) {
    return findNum(arr,num,min, midpoint-1)
  }
  else{
      return midpoint
  }
};

var arr = [-90, -19, 0, 2, 12, 29, 33, 190, 320];
console.log(findNum(arr, 5, 0, arr.length - 1));
