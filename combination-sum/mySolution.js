/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    recursion(candidates, target, [], [])
};

var sum = function (arr) {
    return arr.reduce((partialSum, a) => partialSum + a, 0)
};

var result = [];

var recursion = function (candidates, target, temp) {
    if (sum(temp) === target) {
        result.push(temp);
        console.log(result);
        return;
    }
    if (sum(temp) > target) {
        return;
    }
    if (sum(temp) < target) {
        var x = 0;
        for (let candidate of candidates) {
            const newTemp = JSON.parse(JSON.stringify(temp))
            newTemp.push(candidate)
            recursion(candidates, target, newTemp);
        }
    }
}

candidates = [2, 3, 6, 7]
target = 7
combinationSum(candidates, target);
