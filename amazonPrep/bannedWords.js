var mostCommonWord = function(paragraph, banned) {
    var splitP = paragraph.split(/\s*\b\s*/)
    var map = {}
    for(let i = 0; i<splitP.length; i++){
        var value = splitP[i].toLowerCase()
        if(map[value] == null){
            map[value] = 1
        }
        else if(map[value] != null){
            map[value] += 1
        }
    }
    return map
};

console.log(mostCommonWord("Bob hit a ball, the hit BALL flew far after it was hit.", ["hit"]))