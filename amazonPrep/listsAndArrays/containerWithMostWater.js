function containerWithMostWater(heigths){
    var left = 0
    var right = heigths.length-1
    var max = 0
    for(let i = 0; i<heigths.length; i++){
        if(heigths[left]>heigths[right]){
            max = Math.max(max, heigths[right]*(right-left))
            right--
        }
        else if(heigths[left]<heigths[right]){
            max = Math.max(max, heigths[left]*(right-left))
            left++
        }
    }
    return max
}

console.log(containerWithMostWater([1,8,6,2,5,4,8,3,7]))