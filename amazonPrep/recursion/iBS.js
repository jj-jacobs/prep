

const findNum = (arr, num, min, max) => {
    var midpoint = Math.round((min+max)/2)
    while(min<=max){
        if(num>arr[midpoint]){
            min = midpoint + 1 
        }
        else if(num<arr[midpoint]){
            max = midpoint-1
        }
        else{
            return midpoint
        }
    }
}
var arr = [-90,-19,0,2,12,29,33,190,320]
console.log(findNum(arr, 2, 0, arr.length-1))