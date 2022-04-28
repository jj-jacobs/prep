var strStr = function(haystack, needle) {
    var hash = {};
    if(needle.length == 0){
        return 0
    }
    if(needle == haystack){
        return 0
    }
    if(needle.length == haystack.length){
        return -1
    }
    for(let i = 0; i<(haystack.length-(needle.length-1)); i++){
        var current = []
        for(let j = 0; j<needle.length; j++){
            current += haystack[i+j];
            console.log(current)
        }
        hash[current] = i
        if(hash[needle]){
            return i
        }
    }
    return -1
};

console.log('hello',strStr("hello", "ll"))

console.log('aa',strStr("aaaaa", "bba"))