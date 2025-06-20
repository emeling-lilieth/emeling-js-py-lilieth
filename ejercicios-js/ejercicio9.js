import java.util.Arrays;

public class MaxMinFinder {
    public static void main(String[] args) {
        int[] numbers = {10, 5, 8, 3, 6};
        int max = findMax(numbers);
        int min = findMin(numbers);
        System.out.println("El mayor es: " + max);
        System.out.println("El menor es: " + min);
    }

    public static int findMax(int[] array) {
        return Arrays.stream(array).max().orElseThrow();
    }

    public static int findMin(int[] array) {
        return Arrays.stream(array).min().orElseThrow();
    }
}