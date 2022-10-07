var combinationSum = function(candidates, target) {
    let index = 0
    let tempArray = []
    let result = []

    function backtracking(index, target, tempArray) {
        if(sum(tempArray) == target) {
            result.push([...tempArray])
            return
        }
    
        if(sum(tempArray) > target) return;
    
        for(let i=index; i<candidates.length; i++) {
            tempArray.push(candidates[i])
            //Sending i as a paramaters, provides backtracking
            backtracking(i, target, tempArray)
            tempArray.pop()
        }
    }

    var sum = function (arr) {
        return arr.reduce((partialSum, a) => partialSum + a, 0)
    };
    
    backtracking(index, target, tempArray)
    return result;
};

candidates = [2, 3, 6, 7]
target = 7
console.log(combinationSum(candidates, target));;
