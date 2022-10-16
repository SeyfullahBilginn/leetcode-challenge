/**
 * @param {number[]} nums
 * @return {number}
 */
 var singleNumber = function(nums) {
    console.log("---");
    return nums.reduce((prev, curr) => {
        console.log("prev: " + prev);
        console.log("curr: " + curr);
        return prev ^ curr;
    });
};

const nums = [1,2,4,1,2];
console.log(singleNumber(nums));

console.log("---");
console.log(3^2);