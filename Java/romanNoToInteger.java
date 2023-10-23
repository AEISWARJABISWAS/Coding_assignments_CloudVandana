import java.util.*;

class romanNoToInteger {
    public static void main(String args[]) {
        romanNoToInteger obj = new romanNoToInteger();
        Scanner sc = new Scanner(System.in);
        String s = sc.next();
        System.out.println("The Integer value of Roman number is: " + obj.romToInt(s));
    }

    int num(char a) {
        if (a == 'I' || a == 'i')
            return 1;
        if (a == 'V' || a == 'v')
            return 5;
        if (a == 'X' || a == 'x')
            return 10;
        if (a == 'L' || a == 'l')
            return 50;
        if (a == 'C' || a == 'c')
            return 100;
        if (a == 'D' || a == 'd')
            return 500;
        if (a == 'M' || a == 'm')
            return 1000;
        return -1;
    }

    int romToInt(String s1) {
        int sum = 0;
        for (int i = 0; i < s1.length(); i++) {
            int s2 = num(s1.charAt(i));
            if (i + 1 < s1.length()) {
                int s3 = num(s1.charAt(i + 1));
                if (s2 >= s3) {
                    sum = sum + s2;
                } else {
                    sum = sum - s2;
                }
            } else {
                sum = sum + s2;
            }
        }
        return sum;
    }
}
