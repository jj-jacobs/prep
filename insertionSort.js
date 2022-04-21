function insertionSort(arr){
    for(let i = 1; i < arr.length; i++){
        var current = arr[i]
        var j = i - 1
        while(j >= 0 && arr[j] > current){
            arr[j+1] = arr[j]
            j--
        } 
        arr[j+1] = current
    }
    return arr
}
arr = [56716575,56756756,7665567,657657,2,3,4,76,4,6,776,76754]
console.log(insertionSort(arr))