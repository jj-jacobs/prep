function selectionSort(arr){
    for(let i = 0; i<arr.length; i++){
        var min = i
        for(let j = i; j<arr.length; j++){
            if (arr[j] < arr[min]){
                min = j
            }
        }
        if (min != i) {
            let tmp = arr[i]; 
            arr[i] = arr[min];
            arr[min] = tmp;      
       }
    }
    return arr
}
console.log(selectionSort([23,53,5,3453,432,2]))