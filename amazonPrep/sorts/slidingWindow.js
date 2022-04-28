const fixedWindow = (arr,limit) => {
    var current = 0
    var max = -Infinity
    for(let i = 0; i<arr.length; i++){
        current+=arr[i]
        if(i>=limit-1){
            max = Math.max(current, max)
            current-=arr[i-(limit-1)]
        }
    }
    return max
}

const dynamic = (targetSum, arr) => {
    var current = 0
    var left = 0
    var minSize = arr.length
    for(let i = 0; i<arr.length; i++){
        current+=arr[i]
        while(current>=targetSum){
            minSize = Math.min(minSize, i-(left-1))
            current-=arr[left]
            left++
        }
    }
    return minSize
}
// console.log(fixedWindow([5,1,3,2,11,5,7,8], 3))
console.log(dynamic(8, [5,1,3,2,7,0,3,1]))
// console.log(bruteForce([5,1,3,2,11,5,7,8], 3))