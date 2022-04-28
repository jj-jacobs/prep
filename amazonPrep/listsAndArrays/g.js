function isValidSubsequence(array, sequence) {
    var map = {}
      var curr = 0
      for(let i = 0; i<array.length; i++){
          map[array[i]] = i
      }
      for(let i = 0; i<sequence.length; i++){
          if(map[sequence[i]] == null){
              return false
          }
          else if(map[sequence[i]] != null && curr>map[sequence[i]]){
              return false
          }
          curr = map[sequence[i]]
          delete map[sequence[i]]
      }
      return true
  }

  console.log(isValidSubsequence([1,1,1,1,1],[1,1,1]))