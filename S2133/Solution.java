package S2133;

import java.util.HashSet;

class Solution {
    public static boolean checkValid(int[][] matrix) {
        HashSet<String> unique = new HashSet<>() {};
        for(int row=0;row< matrix.length;row++){
            for(int col=0; col<matrix.length;col++) {
                if(!unique.add("row:" + row + " num:" + matrix[row][col]) || !unique.add("col:" + col + " num:" + matrix[row][col])) {
                    return false;
                }
            }
        }
        return true;
    }

    public static void main(String[] args) {
        int[][] matrix = new int[][] {
                {1,2,3},
                {3,3,2},
                {2,3,1}
        };
        System.out.println(checkValid(matrix));
    }
}