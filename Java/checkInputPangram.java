import java.util.*;

class checkInputPangram {
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        String str = sc.nextLine();
        pangram(str);
    }

    public static void pangram(String str) {
        str = str.toUpperCase();
        boolean letter = true;
        str = str.replaceAll("\\s", "");
        for (char i = 'A'; i <= 'Z'; i++) {
            if (!str.contains(String.valueOf(i))) {
                letter = false;
                break;
            }
        }
        if (letter == true) {
            System.out.println("The input is Pangram");
        } else {
            System.out.println("The input is not Pangram");
        }
    }
}