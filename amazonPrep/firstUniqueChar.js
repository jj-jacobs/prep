function firstUniqueChar(string) {
    var indexOfLetter = -1
    var letters = {}
    for(let i = 0; i<string.length; i++){
        var current = string[i]
        if(!letters[current]){
            letters[current] = 1
        }
        else{
            letters[current]++
            }
    }
    for(key of Object.keys(letters)){
        if(letters[key] == 1){
            return string.indexOf(key)
        }
    }
    return -1
}

console.log(firstUniqueChar("lleetcode"));
// var v = 0
// for(let i = 0; i<string.length; i++){
//     stringNoMatch = true
//     var s = string[i]
//     for(let j = 0; j<string.length; j++){
//         if(j != i && string[i] == string[j]){
//             stringNoMatch = false
//         }
//     }
//     if(stringNoMatch == true){
//         return i
//     }
// }
// return -1
