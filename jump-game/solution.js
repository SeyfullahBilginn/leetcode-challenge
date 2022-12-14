/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  // if (nums.length < 1) {
  //   return false
  // }
  if (nums.length === 1) {
    return true
  }

  var n = nums[0]; // current index

  while (n <= nums.length - 1) {
    if (nums[n] == 0) {
      return false
    }
    if (n == nums.length - 1) {
      return true
    }
    n = n + nums[n]
  }
  return false
};


// Input: 
nums = [0,1]
// nums = [2, 3, 1, 1, 4]
// nums = [3, 2, 1, 0, 4]
// Output: true
// Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
console.log(canJump(nums));
