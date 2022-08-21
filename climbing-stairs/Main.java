public class Main {
    public static void main(String[] args) {
        int n = 35;
        int numOfTwos = n / 2;
        int numOfOnes = n % 2;
        int counter = 0;
        System.out.println(factorial(5, 0));

        while (numOfTwos > -1) {
            int increment = 0;
            System.out.println(numOfTwos + " " + numOfOnes);
            int first = factorial(numOfTwos + numOfOnes, numOfOnes);
            increment = first / factorial(numOfTwos, 0);
            // int increment = factorial(numOfTwos + numOfOnes) / (factorial(numOfTwos) *
            // factorial(numOfOnes));
            System.out.println(numOfTwos + " " + numOfOnes);

            counter = counter + increment;
            numOfTwos--;
            numOfOnes += 2;
        }

        System.out.println(counter);

    }

    public static int factorial(int n, int k) {
        if (n == k) {
            return 1;
        } else {
            return (n * factorial(n - 1, k));
        }
    }
}
