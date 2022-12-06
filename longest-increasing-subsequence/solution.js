
const lengthOfLIS = (nums) => {
  const dp = Array(nums.length).fill(1);
  dp[0] = 1;
  for (let i = 1; i <= nums.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(
          dp[i],
          dp[j] + 1,
        )
      }
    }
  }
  return Math.max(...dp)
};


// Input: 
// nums = [10, 9, 2, 5, 3, 7, 101, 18]
nums = [0,1,0,3,2,3]
console.log(lengthOfLIS(nums));
// Output: 4
// Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.