var maxProfit = function(prices) {
  minValue = Number.MAX_VALUE;
  max = 0
  for(let price of prices) {
    minValue = Math.min( minValue, price)
    max = Math.max(max, (price - minValue))
  }
  return max
}
  

// const prices = [7,6,4,3,1];
// const prices = [3,2,4,7,2,9,5,1];
const prices = [7,1,5,3,6,4];
console.log(maxProfit(prices));
