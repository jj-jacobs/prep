function swap(arr, left, right){
    var temp = arr[left]
    arr[left] = arr[left]
    arr[right] = temp
}

console.log(findMedian([1,6,6,4]))