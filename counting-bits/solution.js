/**
 * @param {number} n
 * @return {number[]}
 */
const countBits = (n) => {
  let result = Array(n + 1).fill(0);
  let offset = 1;
  for (let i = 1; i < n + 1; i++) {
    if (offset * 2 === i) {
      offset = i;
    }
    result[i] = 1 + result[i - offset];
  }
  return result;
};

const n = 8;
// Output: [0,1,1,2,1,2,2,3,1]
countBits(n);
