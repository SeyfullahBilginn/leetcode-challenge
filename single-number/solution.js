/**
 * @param {number[]} nums
 * @return {number}
 */
 var singleNumber = function(nums) {
    return nums.reduce((prev, curr) => {
        return prev ^ curr;
    });
};

const nums = [1,2,4,1,2];
console.log(singleNumber(nums));
