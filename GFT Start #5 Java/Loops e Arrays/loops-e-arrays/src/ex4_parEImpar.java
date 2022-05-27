import java.util.Scanner;

public class ex4_parEImpar {
    public static void main(String [] args) {
        Scanner scan = new Scanner(System.in);

        int quantidadeNumeros;
        int numero;
        int quantidadePares = 0, quantidadeImpares = 0;

        System.out.println("A quantidade de números é: ");
        quantidadeNumeros = scan.nextInt();

        int count = 0;

        do {
            System.out.println("Digite número: ");
            numero = scan.nextInt();

            if (numero % 2 == 0) quantidadePares++;
            else quantidadeImpares++;

            count++;
        }while (count < quantidadeNumeros);

        System.out.println("Quantidade de número pares é: " + quantidadePares);
        System.out.println("Quantidade de número impares é: " + quantidadeImpares);

    }
}
