/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {

  const mult = (index) => {
      let res = 1;
      for(let i=0; i<index; i++) {
          res = res * nums[i]
      }
      for(let i=index+1; i<nums.length; i++) {
          res = res * nums[i]
      }
      return res;
  }

return nums.map((item,index) => {
    return mult(index)
})  
};

// const nums = [1,2,3,4]
// Output: [24,12,8,6]

const nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]

console.log(productExceptSelf(nums));