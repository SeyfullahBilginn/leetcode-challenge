/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {

  if (s[0] === 0) {
    return 0;
  }

  var a = s[0];

  var x = 1 // number of occurences of last item's length = 1 
  var y = 0 // number of occurences of last item's length = 2 


  for (let i = 1; i < s.length; i++) {
    var k = s[i]

    // look in case of last item's length 1
    if (x !== 0) {
      if (a + k <= 26) {
        if (k === 0) {
          y = y + x
          x = 0
        } else {
          y = y + x
        }
      } else {
        if (k === 0) {
          x = 0
        }
      }
    }
    // look in case of last item's length 2
    if (y !== 0) {
      if (k !== 0) {

        x = x + y
      }
    }
  }
  return x + y;
};

// Input: 
const s = "226"
// Output: 3
// Explanation: "226" could be decoded as "BZ" (2 26), "VF" (22 6), or "BBF" (2 2 6).


console.log(numDecodings(s));
