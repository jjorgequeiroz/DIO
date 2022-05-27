import java.util.Scanner;

public class ex2_nota {
    
    public static void main (String[] args) {
        Scanner scan = new Scanner(System.in);

        int nota; 
        
        System.out.println("Digite o valor da nota: ");
        nota = scan.nextInt(); 
            
        while (nota < 0 || nota > 10) {
            System.out.println("Nota inválida. Favor digitar novamente...");
            nota = scan.nextInt();
        }
           
    }
        
  }


