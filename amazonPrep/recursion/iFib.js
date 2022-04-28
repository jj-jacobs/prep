const fib = (num) => {
    var fibs = [0,1]
    for(let i = 0; i<num; i++){
            fibs.push(fibs[0] + fibs[1])
            fibs.shift()
    }
    return fibs[0]
}

console.log(fib(7))