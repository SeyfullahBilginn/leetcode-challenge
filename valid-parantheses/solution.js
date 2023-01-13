/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  let stack = [];

  for(let i of s) {
      switch(i) {
          case "(": 
              stack.push(i)
              break;
          case "[": 
              stack.push(i)
              break;
          case "{": 
              stack.push(i)
              break;
          case ")": {
              if(stack.slice(-1) != "(") return false;
              stack.pop()
              break;
          }
          case "}": {
              if(stack.slice(-1) != "{") return false;
              stack.pop()
              break;
          }
          case "]": {
              if(stack.slice(-1) != "[") return false;
              stack.pop()
              break;
          }
      }
  }
  if(stack.length == 0) return true
  return false
};


const testCases = [
  {s: "()", expected: "valid"},
  {s: "()[]{", expected: "not valid"},
  {s: "(]", expected: "not valid"},
  {s: "(({)})", expected: "not valid"},
]

testCases.forEach((test) => {
  console.log("---------");
  console.log("Algorithm: " + (isValid(test.s) ? "valid" : "not valid"))
  console.log("Expected: " + test.expected);
})