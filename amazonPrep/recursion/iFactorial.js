const iFactorial = (num) => {
    if(num == 1){
        return 1
    }
    else{
        return iFactorial(num-1)*num
    }
}

console.log(iFactorial(5))