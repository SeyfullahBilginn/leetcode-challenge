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
 * @return {number}
 */

var sumNumbers = function (root) {
  const rec = (root, temp) => {
      if (!root.left && !root.right) {
          return parseInt(temp);
      }
      if (root.left && !root.right) {
          let left = temp + "" + root.left.val
          return parseInt(rec(root.left, left))
      }
      if (!root.left && root.right)  {
          let right = temp + "" + root.right.val
          return parseInt(rec(root.right, right) )
      }
      if (root.left && root.right) {
          let right = temp + "" + root.right.val
          let left = temp + "" + root.left.val
          return parseInt(rec(root.right, right) + rec(root.left, left))
      }
  }
  const sum = rec(root, root.val.toString())
  return sum
}