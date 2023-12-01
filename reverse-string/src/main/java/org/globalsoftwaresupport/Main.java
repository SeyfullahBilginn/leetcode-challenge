package org.globalsoftwaresupport;

class Main {


    public static void reverseString(char[] s) {

        for(int i=0;i<Math.floor(s.length/2);i++) {
            int leftPtrIndex = i;
            int rightPtrIndex = s.length-i-1;

            char temp = s[leftPtrIndex];
            s[leftPtrIndex] = s[rightPtrIndex];
            s[rightPtrIndex] = temp;
        }

        System.out.println(s);
    };

    public static void main(String[] args) {

        // test cases
        char[] str = new char[]{'H','a','n','n','a','h'};
        reverseString(str);
    }
}