public class Main {
    public static void main(String [] args) {

        System.out.println("Exercício de Retorno dos métodos");

        double areaQuadrado = Quadrilatero.area(3);
        System.out.println("Área do quadrado é " + areaQuadrado);
        
        double areaRetangulo = Quadrilatero.area(3, 4);
        System.out.println("Área do retângulo é " + areaRetangulo);
    }
}
