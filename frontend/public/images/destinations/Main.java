public class Main {
    public static void main(String[] args) {
        int score = 89;
        if (score >= 80) {
            System.out.println("Excellent");
        } else if (score >= 60) {
            System.out.println("Good");
        } else if (score >= 50) {
            System.out.println("Pass");
        } else if (score >= 0) {
            System.out.println("Fail");
        } else {
            System.out.println("Invalid score");
        }
    }
}