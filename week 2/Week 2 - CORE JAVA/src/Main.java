public class Main {
    public static void main(String[] args) {
        TaxUtil taxUtil = new TaxUtil();
        double amount = 100.0;
        double rate = 0.15;
        double tax = taxUtil.calculateTax(amount, rate);

        System.out.println("The tax on " + amount + " at a rate of " + rate + " is " + tax);
    }
}
