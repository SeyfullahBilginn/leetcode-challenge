/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */

var findTarget = function (root, k) {
    const arr = [];
    console.log(root);
    console.log(root.val);
    console.log(root.right);
    dfs(root, arr, k)
};

const dfs = (node, arr, k) => {
    console.log(node);
    if (node === undefined) return false;
    if (arr.includes(k - node.val)) return true;
    console.log("val: " + node.val);
    arr.push(node.val)
    return dfs(node.left, arr, k) || dfs(node.right, arr, k)
}

// var findTarget = function(root, k) {
//     if (!root) return false;
//     const set = new Set();
//     const stack = [root];
//     while (stack.length) {
//       const node = stack.pop();
//       console.log(node);
//       if (set.has(k - node.val)) return true;
//       set.add(node.val);
//       if (node.right) stack.push(node.right);
//       if (node.left) stack.push(node.left);
//     }
//     return false;
//   };

const root = [5, 3, 6, 2, 4, null, 7]
const k = 4
// console.log(root.includes(8));
console.log(findTarget(root, k));