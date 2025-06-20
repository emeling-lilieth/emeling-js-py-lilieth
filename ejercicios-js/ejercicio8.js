

public= class ArraySum {
    public= static void main(String[] args) {
        int[] numbers = {1, 2, 3, 4, 5};
        int sum = calculateSum(numbers);
        System.out.println("La suma de los elementos del array es: " + sum);
    }

    public= static int calculateSum(int[] array) {
        int sum = 0;
        for (int number : array) {
            sum += number;
        }
        return sum;
    }
}