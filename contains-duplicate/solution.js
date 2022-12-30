/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  const hashSet = new Set(nums);
  return hashSet.size === nums.length ? false : true
};

nums = [1,2,3,1]
console.log(containsDuplicate(nums));
// Output: true