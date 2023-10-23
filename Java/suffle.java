
import java.util.Arrays;
import java.util.Random;

class suffle {

    public static void suffle_array(int arr[]) {
        for (int i = arr.length - 1; i >= 1; i--) {
            Random rand = new Random();
            int j = rand.nextInt(i + 1);
            swap(arr, i, j);
        }
    }

    public static void swap(int arr[], int i, int j) {
        int temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    public static void main(String args[]) {
        int arr[] = { 1, 2, 3, 4, 5, 6, 7 };
        System.out.println("Original Array: " + Arrays.toString(arr));
        suffle_array(arr);
        System.out.println("Suffled Array: " + Arrays.toString(arr));
    }
}
