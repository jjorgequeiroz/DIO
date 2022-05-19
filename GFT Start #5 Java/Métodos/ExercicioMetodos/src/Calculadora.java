public class Calculadora {

    //função para cálculo de adição entre dois números
    public static void soma(double numero1, double numero2) {
        double resultado = numero1 + numero2;
        System.out.println("A soma de " + numero1 + " mais " + numero2 + " é: " + resultado);
    }

    //função para cálculo de subtração entre dois números
    public static void subtracao(double numero1, double numero2) {
        double resultado = numero1 - numero2;
        System.out.println("A subtração de " + numero1 + " menos " + numero2 + " é: " + resultado);
    }

    //função para cálculo de multiplicação entre dois números
    public static void multiplicacao(double numero1, double numero2) {
        double resultado = numero1 * numero2;
        System.out.println("A multiplicação entre "+ numero1 + " e " + numero2 + " é: " + resultado);
    }

    //função para cálculo da divisão entre dois números
    public static void divisao(double numero1, double numero2) {
        double resultado = numero1 / numero2;
        System.out.println("A divisão entre "+ numero1 + " e " + numero2 + " é: " + resultado);
    }


}
