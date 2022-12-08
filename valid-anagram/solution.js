/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if(s.length != t.length) return false;
  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < t.length; j++) {
      if(s[i] == t[j]) {
        t = t.slice(0,j) + t.slice(j+1, t.length)
        break;
      }
    }
  }
  if(!t.length) {
    return true;
  }
  return false
};


// Input: 
s = "anagram", t = "nagaram"
console.log(isAnagram(s, t));
// Output: true