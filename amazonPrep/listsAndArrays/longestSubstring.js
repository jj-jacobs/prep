/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  //   var splitString = s.split("");
  var maxLength = 0;
  let current = 0;
  var stringHash = {};
  for (let i = 0; i < s.length; i++) {
    if (stringHash[s[i]] == null) {
      current += 1;
    } else {
      current = Math.min(i - stringHash[s[i]], current + 1);
    }
    maxLength = Math.max(maxLength, current);
    stringHash[s[i]] = i;
  }
  return maxLength;
};

// var lengthOfLongestSubstring = function (s) {
//   var maxLength = 0
//   for(let i = 0; i<s.length; i++){
//     for(let j = i+1; j<s.length; j++){
//       if(s[i] == s[j]){
//         maxLength = Math.max(maxLength, j - i);
//         j = s.length
//       }
//     }
//   }
//   return maxLength
// }

var lengthOfLongestSubstring = function (s) {

}

console.log(lengthOfLongestSubstring("abcabcbb"));